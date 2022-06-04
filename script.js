'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// const p = document.querySelector('.p');
// p.textContent='My name is Jonas!';
// alert('Text set!');
// p.style.color='red';

// const p=document.querySelector('.p');
// setTimeout(function(){
//     p.textContent='My name is Jonas!';
// },5000);
// p.style.color='red';

// const img = document.querySelector('.dog');
// img.src= 'dog.jpg';
// img.addEventListener('load',function(){
//     img.classList.add('fadeIn');
// });
// package.style.width='300px';

const getCountryData= function(country){
const request = new XMLHttpRequest();
request.open('GET',`https://restcountries.com/v2/name/${country}`);
request.send()
request.addEventListener('load',function(){
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html=`
            <article class="country">
                <img class="country__img" src="${data.flags.svg}" />
                <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)} people</p>
                <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
                </div>
             </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend',html);
    countriesContainer.style.opacity=1;
});
}

getCountryData(`portugal`);
getCountryData('usa');
getCountryData('vietnam');