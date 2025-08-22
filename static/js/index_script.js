let ice_data = 'nsidc';
let temp_hemi = 'nh';
const nsidc_nh = $("#NSIDC_nh");
const amsr2_nh = $("#AMSR2_nh");
const nsidc_sh = $("#NSIDC_sh");
const amsr2_sh = $("#AMSR2_sh");

// amsr2_nh.hide();
// amsr2_sh.hide();

const nh_chart = $("#amsr_nh_chart");
const nh_image = $("#amsr_nh_img");
const nh_image_anom = $("#amsr_nh_img_anom");

const sh_chart = $("#amsr_sh_chart");
const sh_image = $("#amsr_sh_img");
const sh_image_anom = $("#amsr_sh_img_anom");

//AMSR2 images
const src_nh_chart = "https://nrt.cryospherecomputing.com/AMSR/charts/nh_Area_Graph.png";
let src_nh = "https://nrt.cryospherecomputing.com/AMSR/AMSR2_nh-1.png";
let src_nh_anom ="https://nrt.cryospherecomputing.com/AMSR/AMSR2_nh_anom-1.png";

const src_sh_chart = "https://nrt.cryospherecomputing.com/AMSR/charts/sh_Area_Graph.png";
let src_sh = "https://nrt.cryospherecomputing.com/AMSR/AMSR2_sh-1.png";
let src_sh_anom = "https://nrt.cryospherecomputing.com/AMSR/AMSR2_sh_anom-1.png";

//NSIDC images
let nsidc_nh_map = "https://nrt.cryospherecomputing.com/NSIDC_Area/Arctic-1.png";
let nsidc_nh_anom_map = "https://nrt.cryospherecomputing.com/NSIDC_Area/Arctic_anom-1.png";
let nsidc_sh_map = "https://nrt.cryospherecomputing.com/NSIDC_Area/Antarctic-1.png";
let nsidc_sh_anom_map = "https://nrt.cryospherecomputing.com/NSIDC_Area/Antarctic_anom-1.png";

const ice_data_switcher = (value) => {
    if (value === ice_data){
        return;
    } else {
        ice_data = value;
        button_switcher(value);
        if(value === 'nsidc'){
            nsidc_nh.show();
            nsidc_sh.show();    
            amsr2_nh.hide();
            amsr2_sh.hide();
        } else if (value === 'amsr2') {
            nsidc_nh.hide();
            nsidc_sh.hide();    
            amsr2_nh.show();
            amsr2_sh.show();
            nh_chart.attr("src",src_nh_chart);
            nh_image.attr("src",src_nh);
            nh_image_anom.attr("src",src_nh_anom);
            sh_chart.attr("src",src_sh_chart);
            sh_image.attr("src",src_sh);
            sh_image_anom.attr("src",src_sh_anom);
            }
        }
}

const button_switcher = (value) => {
  if (value === 'amsr2') {
      $("#amsr_button").addClass("active");
      $("#nsidc_button").removeClass("active");
  } else if (value === 'nsidc') {
      $("#nsidc_button").addClass("active");
      $("#amsr_button").removeClass("active");
  }
}

const button_switcher2 = (value) => {
  if (value === 'nh') {
      $("#temp_arctic").addClass("active");
      $("#temp_antarctic").removeClass("active");
  } else if (value === 'sh') {
      $("#temp_antarctic").addClass("active");
      $("#temp_arctic").removeClass("active");
  }
}

const temp_hemi_switcher = (value) => {
  if (value === temp_hemi){
        return;
    } else {
      temp_hemi = value;
      button_switcher2(value);
      $('#surface_temp').attr("src",`https://nrt.cryospherecomputing.com/NOAA_Temp/NOAA_temp_${temp_hemi}.png`)
      $('#surface_temp_anom').attr("src",`https://nrt.cryospherecomputing.com/NOAA_Temp/NOAA_temp_${temp_hemi}_anom.png`)

    }

}

const dmi_data = () => {
  const temp = "https://nrt.cryospherecomputing.com/DMI/DMI_Temp_graph.png";
  const fdd = "https://nrt.cryospherecomputing.com/DMI/DMI_FDD_Year.png";
  const fdd_anom = "https://nrt.cryospherecomputing.com/DMI/DMI_FDD_Year_Anom.png";
  const fdd_season = "";
  const fdd_season_anom = "";

  $("#temp").attr("src",temp);
  $("#fdd").attr("src",fdd);
  $("#fdd_anom").attr("src",fdd_anom);
  $("#fdd_season").attr("src",fdd_season);
  $("#fdd_season_anom").attr("src",fdd_season_anom);
}

ice_data_switcher('amsr2');
more_info('cryoIntro');

// Dispalys Slider value
var slider = document.getElementById("day_slider");
var output = document.getElementById("Dayselect");
output.innerHTML = slider.value; // Display the default slider value

// Update for day slider
slider.oninput = function() {
output.innerHTML = this.value;
	//update image
	nsidc_nh_map = "https://nrt.cryospherecomputing.com/NSIDC_Area/Arctic-" + this.value + ".png";
	nsidc_nh_anom_map = "https://nrt.cryospherecomputing.com/NSIDC_Area/Arctic_anom-" + this.value + ".png";
  src_nh = "https://nrt.cryospherecomputing.com/AMSR/AMSR2_nh-" + this.value + ".png";
  src_nh_anom ="https://nrt.cryospherecomputing.com/AMSR/AMSR2_nh_anom-" + this.value + ".png";
  setImageSRC("Arcticmap",nsidc_nh_map);
  setImageSRC("Arcticmap_anom",nsidc_nh_anom_map);
  setImageSRC("amsr_nh_img",src_nh);
  setImageSRC("amsr_nh_img_anom",src_nh_anom);
  
	
}

//-------------------------------------------

var slider_south = document.getElementById("day_slider_south");
var output_south = document.getElementById("Dayselect_south");
output_south.innerHTML = slider_south.value; // Display the default slider value

slider_south.oninput = function() {
output_south.innerHTML = this.value;

	//update image
	nsidc_sh_map = "https://nrt.cryospherecomputing.com/NSIDC_Area/Antarctic-" + this.value + ".png";
	nsidc_sh_anom_map = "https://nrt.cryospherecomputing.com/NSIDC_Area/Antarctic_anom-" + this.value + ".png";
  src_sh = "https://nrt.cryospherecomputing.com/AMSR/AMSR2_sh-" + this.value + ".png";
  src_sh_anom = "https://nrt.cryospherecomputing.com/AMSR/AMSR2_sh_anom-" + this.value + ".png";
  setImageSRC("Antarcticmap",nsidc_sh_map);
  setImageSRC("Antarcticmap_anom",nsidc_sh_anom_map);
  setImageSRC("amsr_sh_img",src_sh);
  setImageSRC("amsr_sh_img_anom",src_sh_anom);
}
