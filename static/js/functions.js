// Toggle dark mode
function darkmode() {
   var element = document.body;
   element.classList.toggle("light-mode");
   switchKey1();
}

function switchKey1() {
  const key1 = localStorage.getItem("apperance");
 if (key1 == "light"){
  localStorage.setItem("apperance", "dark");
 } else {
  localStorage.setItem("apperance", "light");
 }
}

function checkAppearance() {
  const key1 = localStorage.getItem("apperance");
  if (key1){
    if (key1 == "light"){
      document.body.classList.add("light-mode");
     }
    return;
  } else {
    localStorage.setItem("apperance", "dark");
  }

}

function item_show (id) {
  $(id).show();
}
function item_hide (id) {
  $(id).hide();
}
  
// Used to toggle Info
function more_info(id) {
  let info = document.getElementById(id);
  if (info.style.display === "none") {
    item_show(info);
  } else {
    item_hide(info);
  }
}

//used to change images with sliders
function setImageSRC (imageID,imageSRC){
  document.getElementById(imageID).src = imageSRC;
  }
