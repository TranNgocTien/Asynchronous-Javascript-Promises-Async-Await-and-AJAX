'use strict';

const modals= document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const showModal=document.querySelectorAll('.show-modal');
const closeModalBtn= document.querySelector('.close-modal');

const openModal=function(){
    modals.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal=function(){
    modals.classList.add('hidden');
    overlay.classList.add('hidden');
}
showModal.forEach(function(modal){
    modal.addEventListener('click',openModal);
})

closeModalBtn.addEventListener('click',closeModal);

overlay.addEventListener('click',closeModal);
window.addEventListener('keydown',function(e){
    if(e.keyCode===27){
        closeModal();
    }
})