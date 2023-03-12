const cardHolderName = document.getElementById('cardholder');
const cardName =document.querySelector('.cardholder-name-card');
const cardHolderNumber = document.getElementById('card-number');
const cardNumber = document.querySelector('.cardholder-number-card');
const expDateMM = document.querySelector('#exp-mm');
const expDateYY = document.querySelector('#exp-yy');
const cvc = document.querySelector('#cvc');
const cvcCard = document.querySelector('.cvc-backcard');
const expDateMMCard = document.querySelector('.expiration-card-mm');
const expDateYYCard = document.querySelector('.expiration-card-yy');
const btnConfirm = document.querySelector('#submit');
const spans = document.getElementsByTagName('span');
const home = document.getElementById('home');
const modal = document.getElementById('modal');
const continueBtn = document.querySelector('.continue');
const imgMain = document.querySelector('#imgMain');
const imgMobile = 'images/bg-main-mobile.png';
const imgDesktop = 'images/bg-main-desktop.png';
const mediaQuery = window.matchMedia("(max-width:1376px)");
const mediaQueryDesktop = window.matchMedia("(min-width:1377px)");

function updateImage(){
    if (mediaQuery.matches){
        imgMain.src = imgMobile;
    }
    if(mediaQueryDesktop.matches){
        imgMain.src = imgDesktop;
    }
}
updateImage();
window.addEventListener("resize", updateImage);


btnConfirm.addEventListener('click', (e) => {
  e.preventDefault();
  const cardNumberValue = cardHolderNumber.value.replace(/\s/g, '');//remove spaces
  if (cardHolderName.value.trim() === ''){
     cardHolderName.classList.add('error');
  }
  else{
    cardHolderName.classList.remove('error');
  }
  if (!/^\d{16}$/.test(cardNumberValue)) {
    spans[0].classList.add('span-error');
    cardHolderNumber.classList.add('error');

  } else {
    spans[0].classList.remove('span-error');
    cardHolderNumber.classList.remove('error');
  }
  if (expDateMM.value.trim() === '' || expDateYY.value.trim() === '') {
    spans[2].classList.add('span-error');
    expDateMM.classList.add('error');
    expDateYY.classList.add('error');
  } else {
    spans[2].classList.remove('span-error');
    expDateMM.classList.remove('error');
    expDateYY.classList.remove('error');
  }
   if (cvc.value.trim() === '') {
    spans[1].classList.add('span-error');
    cvc.classList.add('error');
  } else {
    spans[1].classList.remove('span-error');
    cvc.classList.remove('error');
  }
  //if all is allright check
  const allFieldsFilled = cardHolderName.value.trim() !== '' &&
                          cardNumberValue.trim() !== '' &&
                          expDateMM.value.trim() !== '' &&
                          expDateYY.value.trim() !== '' &&
                          cvc.value.trim() !== '';
  const noErrors = !spans[0].classList.contains('span-error') &&
                   !spans[1].classList.contains('span-error') &&
                   !spans[2].classList.contains('span-error');
  if (allFieldsFilled && noErrors) {
   home.classList.add('invisible')
   modal.classList.add('visible')
  }
});

continueBtn.addEventListener('click',()=>{
    home.classList.remove('invisible')
    modal.classList.remove('visible')
    cardHolderName.value = '';
    expDateMM.value ='';
    expDateYY.value ='';
    cvc.value = '';
    cardHolderNumber.value= '';
    cardNumber.innerText='';
    cardName.innerText='';
    expDateMMCard.innerText='';
    expDateYYCard.innerText='';
    cvcCard.innerText='';
})

///listeners
cardHolderName.addEventListener('input', () => {
    cardHolderName.value = cardHolderName.value.replace(/[^A-Za-z\s]/g, '').substr(0, 35);
  cardName.innerText = cardHolderName.value;
});

cardHolderNumber.addEventListener('input', () => {
  const input = cardHolderNumber.value.replace(/\s/g, ''); // Remove any existing spaces
  const formattedInput = input.replace(/(\d{4})(?=\d)/g, '$1 '); // Add space after every 4 digits
  cardHolderNumber.value = formattedInput.substr(0, 19); // Limit to 19 characters (16 digits and 3 spaces)
  cardNumber.innerText = cardHolderNumber.value;
});

expDateMM.addEventListener('input',()=>{
    expDateMM.value = expDateMM.value.replace(/\D/g, '').substr(0, 2);
    expDateMMCard.innerText = expDateMM.value
});
expDateYY.addEventListener('input',()=>{
    expDateYY.value = expDateYY.value.replace(/\D/g, '').substr(0, 2);
    expDateYYCard.innerText = expDateYY.value
});
cvc.addEventListener('input',()=>{
    cvc.value = cvc.value.replace(/\D/g, '').substr(0, 3);
    cvcCard.innerText = cvc.value
});
