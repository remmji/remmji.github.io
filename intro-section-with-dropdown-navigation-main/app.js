const featureBtn = document.getElementById('featureBtn');
const companyBtn = document.getElementById('companyBtn');
const dropdown = document.querySelector('.dropdown');
const dropdown2 = document.querySelector('.dropdown2');
const arrow = document.querySelectorAll('.arrow-img');
// hamburger
const hamburger = document.getElementById('hamburger');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');
const sidebar = document.getElementById('navbar');

featureBtn.addEventListener('click',()=>{
   if (arrow[0].src.includes('icon-arrow-down.svg')) {
    arrow[0].src = 'images/icon-arrow-up.svg';
  } else {
    arrow[0].src = 'images/icon-arrow-down.svg';
  }
    dropdown.classList.toggle('active');
    dropdown.classList.toggle('relative');
});
companyBtn.addEventListener('click',()=>{
     if (arrow[1].src.includes('icon-arrow-down.svg')) {
    arrow[1].src = 'images/icon-arrow-up.svg';
  } else {
    arrow[1].src = 'images/icon-arrow-down.svg';
  }
    dropdown2.classList.toggle('active');
    dropdown2.classList.toggle('relative');
});

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
      sidebarToggle(sidebar);
})