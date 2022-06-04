'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const p = document.querySelector('.p');
p.textContent='My name is Jonas!';
alert('Text set!');
p.style.color='red';

const p=document.querySelector('.p');
setTimeout(function(){
    p.textContent='My name is Jonas!';
},5000);
p.style.color='red';

const img = document.querySelector('.dog');
img.src= 'dog.jpg';
img.addEventListener('load',function(){
    img.classList.add('fadeIn');
});
package.style.width='300px';

