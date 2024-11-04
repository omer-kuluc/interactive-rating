const ratioBtns = document.querySelectorAll('.ratio-button');

btnSubmit.addEventListener('click',handleNewScreen);

for(const btn of ratioBtns) {
  btn.addEventListener('click',handleSubmitBtn);
}

function handleSubmitBtn() {
  pointTxt.innerText = this.innerText;
 
}

const cardPart = document.querySelector('.card');
const resultPart = document.querySelector('.result-part');

resultPart.classList.add('d-none');

function handleNewScreen() {

  cardPart.classList.add('d-none');
  resultPart.classList.remove('d-none');
  resultPart.classList.add('d-block');

}