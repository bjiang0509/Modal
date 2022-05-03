'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
//returns a node list containing all elements with class 'show-modal'
const btnsOpenModal = document.querySelectorAll('.show-modal');

const showModal = e => {
  let activeModal = e.target;
  modal.classList.remove('hidden');
  console.log(e.target.className);
};
const hideModal = e => {
  modal.classList.add('hidden');
};

for (let btnOpenModal of btnsOpenModal) {
  btnOpenModal.addEventListener('click', showModal);
}
btnCloseModal.addEventListener('click', hideModal);
