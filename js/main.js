'use strict';

const cardButton = document.querySelector('#card-button');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close');
const cancel = document.querySelector('#cancel');

function toggleModal() {
  modal.classList.toggle('is-open');
}


cardButton.addEventListener('click', toggleModal);
closeModal.addEventListener('click', toggleModal);
cancel.addEventListener('click', toggleModal);

new WOW().init(); //jshint ignore:line
