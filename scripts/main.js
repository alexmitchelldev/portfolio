

function hamburgerMenu() {
  var x = document.getElementById("mainNavBar");
  if (x.className === "navBar") {
    x.className += " responsive";
  } else {
    x.className = "navBar";
  }
}

// let myNav = document.getElementById('mainNavBar');
// window.onscroll = function () { 
//     "use strict";
//     if (document.body.scrollTop >= 1000 ) {
//         myNav.classList.remove("navBar-background-transparent");
//         myNav.classList.remove("navBar-color-scrolled");
//         myNav.classList.add("navBar-background");
//         myNav.classList.add("navBar-color");
//     } 
//     else {
//         myNav.classList.add("navBar-background-transparent");
//         myNav.classList.add("navBar-color-scrolled");
//         myNav.classList.remove("navBar-background");
//         myNav.classList.remove("navBar-color");
//     }
// };