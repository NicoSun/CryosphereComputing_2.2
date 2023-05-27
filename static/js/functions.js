// Toggle dark mode
darkmode()
function darkmode() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}


// Used to toggle the menu on small screens when clicking on the menu button
function menuExpand() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else {
      x.className = x.className.replace(" w3-show", "");
    }
  }


// Used to toggle Info
function more_info() {
  var x = document.getElementById("more_info");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}