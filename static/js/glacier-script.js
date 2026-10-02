class ImageCompare {
  constructor(selector) {
    this.container = document.querySelector(selector);
    if (!this.container) return;

    // Cache elements relative to THIS container only
    this.wrapper = this.container.querySelector('.compare-wrapper');
    this.overlay = this.container.querySelector('.image-overlay');
    this.handle = this.container.querySelector('.slider-handle');
    this.opacitySlider = this.container.querySelector('[type="range"]');
    this.opacityValue = this.container.querySelector('[id^="opacity-value-"]');
    this.topImage = this.overlay.querySelector('.image-top');

    // Instance state (isolated per container)
    this.scale = 1;
    this.pointX = 0;
    this.pointY = 0;
    this.isPanning = false;
    this.startX = 0;
    this.startY = 0;
    this.sliderPos = 50;
    this.isSliding = false;

    // Bind methods to preserve `this` context in event listeners
    this.handleWheel = this.handleWheel.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleSliderDragStart = this.handleSliderDragStart.bind(this);
    this.handleOpacityInput = this.handleOpacityInput.bind(this);

    // Initialize
    this.init();
  }

  init() {
    // Attach listeners scoped to this instance's container & window
    this.container.addEventListener('wheel', this.handleWheel, { passive: false });
    this.container.addEventListener('mousedown', this.handleMouseDown);
    
    // Window-level listeners only need to be attached once per instance
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);

    if (this.handle) {
      this.handle.addEventListener('mousedown', this.handleSliderDragStart);
    }

    if (this.opacitySlider && this.topImage) {
      this.opacitySlider.addEventListener('input', this.handleOpacityInput);
      
      // Set initial state
      const initVal = this.opacitySlider.value || 33;
      this.topImage.style.opacity = '0.33';
      if(this.opacityValue) this.opacityValue.textContent = initVal;
    }

    this.updateTransform();
    this.updateSlider();
  }

  // 1. Handle Zooming (Mouse Wheel) with cursor focus
  handleWheel(e) {
    e.preventDefault();
    
    const rect = this.container.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xs = (mouseX - this.pointX) / this.scale;
    const ys = (mouseY - this.pointY) / this.scale;

    const zoomFactor = 1.15;
    if (e.deltaY < 0) {
      this.scale *= zoomFactor;
    } else {
      this.scale /= zoomFactor;
    }

    // Restrict zoom limits (1x to 8x)
    this.scale = Math.max(1, Math.min(this.scale, 10));

    if (this.scale === 1) {
      this.pointX = 0;
      this.pointY = 0;
    } else {
      this.pointX = mouseX - xs * this.scale;
      this.pointY = mouseY - ys * this.scale;
      this.clampPan();
    }

    this.updateTransform();
  }

  // 2. Handle Panning (Click & Drag)
  handleMouseDown(e) {
    if (e.target === this.handle || this.handle.contains(e.target)) return;
    this.isPanning = true;
    this.startX = e.clientX - this.pointX;
    this.startY = e.clientY - this.pointY;
  }

  handleMouseMove(e) {
    if (!this.isPanning && !this.isSliding) return;

    if (this.isPanning) {
      this.pointX = e.clientX - this.startX;
      this.pointY = e.clientY - this.startY;
      this.clampPan();
      this.updateTransform();
    }

    if (this.isSliding) {
      const wrapperRect = this.wrapper.getBoundingClientRect();
      let relativeX = e.clientX - wrapperRect.left;
      let percentage = (relativeX / wrapperRect.width) * 100;

      this.sliderPos = Math.max(0, Math.min(percentage, 100));
      this.updateSlider();
    }
  }

  handleMouseUp() {
    this.isPanning = false;
    this.isSliding = false;
  }

  // 3. Handle Slider Dragging
  handleSliderDragStart(e) {
    this.isSliding = true;
    e.stopPropagation();
  }

  // Clamp function to prevent panning the image entirely off-screen
  clampPan() {
    const containerRect = this.container.getBoundingClientRect();
    const maxX = 0;
    const minX = containerRect.width - (containerRect.width * this.scale);
    const maxY = 0;
    const minY = containerRect.height - (containerRect.height * this.scale);

    this.pointX = Math.max(minX, Math.min(maxX, this.pointX));
    this.pointY = Math.max(minY, Math.min(maxY, this.pointY));
  }

  updateTransform() {
    if (!this.wrapper) return;
    this.wrapper.style.transform = `translate(${this.pointX}px, ${this.pointY}px) scale(${this.scale})`;
  }

  updateSlider() {
    if (!this.handle || !this.overlay) return;
    this.handle.style.left = `${this.sliderPos}%`;
    this.overlay.style.clipPath = `polygon(0 0, ${this.sliderPos}% 0, ${this.sliderPos}% 100%, 0 100%)`;
  }

  handleOpacityInput(e) {
    const val = e.target.value;
    if(this.opacityValue) this.opacityValue.textContent = val;
    if(this.topImage) this.topImage.style.opacity = val / 100;
  }
}

// Initialize all instances on the page automatically
document.addEventListener('DOMContentLoaded', () => {
  const containers = document.querySelectorAll('.image-compare');
  const comparers = []; // Keep references to prevent garbage collection if needed
  
  containers.forEach((container, index) => {
    // Find a unique selector for each instance (e.g., by data-instance or nth-child)
    const id = container.getAttribute('data-instance') || `instance-${index}`;
    comparers.push(new ImageCompare(`.image-compare[data-instance="${id}"]`));
  });

  // Fallback: if no data-instance attributes exist, initialize all .image-compare blocks generically
  if (containers.length > comparers.length) {
    containers.forEach((container, index) => {
      comparers.push(new ImageCompare(`.image-compare:nth-of-type(${index + 1})`));
    });
  }
});
