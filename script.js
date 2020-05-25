function openSlideMenu(){
  document.getElementById('side-menu').style.width = '250px';
  document.getElementById('main').style.marginLeft = '250px';
}

function closeSlideMenu(){
  document.getElementById('side-menu').style.width = '0';
  document.getElementById('main').style.marginLeft = '0';
}

function myFunction(x) {
  if (x.matches) { // If media query matches
    var sectionIt1_div = document.getElementById("section-it-1");
    var sectionIt2_div = document.getElementById("section-it-2");
    var sectionIt3_div = document.getElementById("section-it-3");
    var sectionEng1_div = document.getElementById("section-eng-1");
    var sectionMath1_div = document.getElementById("section-math-1");
    var footer_div = document.getElementById("footer");
  
    sectionIt1_div.classList.add("container-grid");
    sectionIt2_div.classList.add("container-grid");
    sectionIt3_div.classList.add("container-grid");
    sectionEng1_div.classList.add("container-grid");
    sectionMath1_div.classList.add("container-grid");
    footer_div.classList.add("footer");
  }
}
  
var a = window.matchMedia("(min-width: 568px)");
myFunction(a);// Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes