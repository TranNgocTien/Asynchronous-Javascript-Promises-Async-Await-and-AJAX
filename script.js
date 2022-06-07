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
const renderCountry = function(data, className=''){
    const html=`
    <article class="country ${className}">
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
}

// const getCountryAndNeighbour= function(country){
// const request = new XMLHttpRequest();
// request.open('GET',`https://restcountries.com/v2/name/${country}`);
// request.send();
// request.addEventListener('load',function(){
//     //AJAX call country 1
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
    
//     //Render country 1
//     renderCountry(data);

//     //Get neighbour country (2)
//     const [neighbour] = data.borders;
//     if(!neighbour) return;
    

//     //AJAX call country 2

//     const request2 = new XMLHttpRequest();
//     request2.open('GET',`https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function(){
//         const data2 =JSON.parse(this.responseText);
//         renderCountry(data2, 'neighbour');
//     });
// });
// };

// getCountryAndNeighbour(`portugal`);


// setTimeout(()=>{
//     console.log('1 second passed');
//     setTimeout(()=>{
//         console.log('2 second passed');
//         setTimeout(()=>{
//             console.log('3 second passed');
//         })
//     },1000)
// },1000)


// const request = new XMLHttpRequest();
// request.open('GET',`https://restcountries.com/v2/name/${country}`);
// request.send();

const request=fetch('https://restcountries.com/v2/name/portugal');

const getCountryData = function(country){
    //country 1
    fetch(`https://restcountries.com/v2/name/${country}`)
    .then((response)=> response.json())
    .then((data)=>{
        
        renderCountry(data[0]);
        const neighbour = data[0].borders?.[0];
        
        if(!neighbour) return;
        //country 2
        return fetch(`https://restcountries.com/v2/alpha/${neighbour}`)
    })
    .then(response => response.json())
    .then(data=>renderCountry(data, "neighbour"));
}
getCountryData('portugal');