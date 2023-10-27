let data_source = 'nsidc';
const nsidc_nh = $("#NSIDC_nh");
const amsr2_nh = $("#AMSR2_nh");
const nsidc_sh = $("#NSIDC_sh");
const amsr2_sh = $("#AMSR2_sh");

amsr2_nh.hide();
amsr2_sh.hide();

const nh_image = $("#amsr_nh_img");
const nh_image_anom = $("#amsr_nh_img_anom");

const sh_image = $("#amsr_sh_img");
const sh_image_anom = $("#amsr_sh_img_anom");

const src_sh = "https://drive.google.com/uc?id=174TwoIX72UHx60TfRxiAKQYvkNCoUX8l&export=download";
const src_sh_anom = "https://drive.google.com/uc?id=1-gpTigVKMYUSzg_Me83BlOnzRYhBM0ki&export=download";

const src_nh = 'https://drive.google.com/uc?id=1aDWSQaIwTRcAUP63XaExQ6zD_NJawwvi&export=download';
const src_nh_anom ="https://drive.google.com/uc?id=1sl3SWwBBRh3_5WlB8UifrbNLWjGh4Yyq&export=download";

const data_switcher = (value) => {
    if (value === data_source){
        return;
    } else {
        data_source = value;
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
            nh_image.attr("src",src_nh);
            nh_image_anom.attr("src",src_nh_anom);
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

const dmi_data = () => {
  const temp = "https://drive.google.com/uc?id=1tpbVfUL5D8TDSUn6kV7-833u64qcHvNY&export=download";
  const fdd = "https://drive.google.com/uc?id=0B1HTR0ONiUmEaU1oX21WcFBxc00&export=download";
  const fdd_anom = "https://drive.google.com/uc?id=0B1HTR0ONiUmEMFZiLWwxUW15QUk&export=download";
  const fdd_season = "https://drive.google.com/uc?id=0B1HTR0ONiUmEbVU3SmZsOHd0dE0&export=download";
  const fdd_season_anom = "https://drive.google.com/uc?id=0B1HTR0ONiUmEMGowLTFRZUtCYnc&export=download";

  $("#temp").attr("src",temp);
  $("#fdd").attr("src",fdd);
  $("#fdd_anom").attr("src",fdd_anom);
  $("#fdd_season").attr("src",fdd_season);
  $("#fdd_season_anom").attr("src",fdd_season_anom);
}


more_info('cryoIntro');

// Dispalys Slider value
var slider = document.getElementById("myRange");
var output = document.getElementById("Dayselect");
output.innerHTML = slider.value; // Display the default slider value

// Update for day slider
slider.oninput = function() {
output.innerHTML = this.value;
	//update image
	var imageSRC_SIC = "https://nrt.cryospherecomputing.com/NSIDC_Area/Arctic-" + this.value + ".png";
	var imagSRC_Anom = "https://nrt.cryospherecomputing.com/NSIDC_Area/Arctic_anom-" + this.value + ".png";
  setImageSRC("Arcticmap",imageSRC_SIC);
  setImageSRC("Arcticmap_anom",imagSRC_Anom);
	
}

//-------------------------------------------

var slider_south = document.getElementById("myRange_south");
var output_south = document.getElementById("Dayselect_south");
output_south.innerHTML = slider_south.value; // Display the default slider value

slider_south.oninput = function() {
output_south.innerHTML = this.value;

	//update image
	var imageSRC_SIC = "https://nrt.cryospherecomputing.com/NSIDC_Area/Antarctic-" + this.value + ".png";
	var imagSRC_Anom = "https://nrt.cryospherecomputing.com/NSIDC_Area/Antarctic_anom-" + this.value + ".png";
  setImageSRC("Antarcticmap",imageSRC_SIC);
  setImageSRC("Antarcticmap_anom",imagSRC_Anom);
}
