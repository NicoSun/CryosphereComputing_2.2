let temp_hemi = 'nh';

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
      // temp maps
      $('#surface_temp').attr("src",`https://nrt.cryospherecomputing.com/NOAA_Temp/NOAA_temp_${temp_hemi}.png`)
      $('#surface_temp_anom').attr("src",`https://nrt.cryospherecomputing.com/NOAA_Temp/NOAA_temp_${temp_hemi}_anom.png`)

      // fdd maps
      $('#surface_fdd').attr("src",`https://nrt.cryospherecomputing.com/NOAA_Temp/NOAA_fdd_${temp_hemi}.png`)
      $('#surface_fdd_anom').attr("src",`https://nrt.cryospherecomputing.com/NOAA_Temp/NOAA_fdd_${temp_hemi}_anom.png`)

    }

}