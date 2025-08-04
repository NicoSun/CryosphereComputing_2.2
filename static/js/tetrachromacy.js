let interval;
let isImage1 = true;

let tri_color = "";
let red_color = '';

function changeImag (number) {
    tri_color = `other_data/tetrachromacy/image${number}_tri.png`;
    red_color = `other_data/tetrachromacy/image${number}_red.png`;
    still_image = `other_data/tetrachromacy/image${number}.png`;
    document.getElementById('flashingImage').src = tri_color;
    document.getElementById('stillImage').src = still_image;
}


function startFlashing() {
    const frequency = document.getElementById('mySlider').value;
    const delay = 1000 / frequency; // Convert frequency to milliseconds

    if (interval) {
        clearInterval(interval); // Clear any existing interval
    }

    interval = setInterval(() => {
        document.getElementById('flashingImage').src = isImage1 ? tri_color : red_color ;
        isImage1 = !isImage1; // Toggle the image
    }, delay);
}

function stopFlashing() {
    clearInterval(interval); // Stop the flashing
    interval = null; // Reset the interval variable
}

const slider = document.getElementById("mySlider");
    const output = document.getElementById("sliderValue");
    
    // Display the default slider value
    output.innerHTML = slider.value;

    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {
        output.innerHTML = this.value;
        startFlashing()
    }

