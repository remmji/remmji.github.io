const imgDesktop = "assets/images/image-web-3-desktop.jpg";
const imgMobile = 'assets/images/image-web-3-mobile.jpg';
const image = document.getElementById('img')
const mediaQuery = window.matchMedia("(max-width:376px)");
const hamburger = document.getElementById('hamburger');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');
const sidebar = document.getElementsByClassName('sidebar')
console.log(sidebar[0]);



function updateImage(){
    if (mediaQuery.matches){
        image.src = imgMobile;
    }
    else {
        image.src = imgDesktop;
    }
}
updateImage();
window.addEventListener("resize", updateImage);

function hamburgerTransformator(element) {
  element.classList.toggle("change");
}
function sidebarToggle(element){
    element.classList.toggle('show')
}

hamburger.addEventListener('click',()=>{
    hamburgerTransformator(bar1);
     hamburgerTransformator(bar2);
      hamburgerTransformator(bar3);
      sidebarToggle(sidebar[0]);
})

