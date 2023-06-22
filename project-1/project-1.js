// Variableslet

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes =[{getQuote: "Try not. Do or do not. There is no try.", getPerson: "Yoda"},
{getQuote: "Your eyes can deceive you; dont trust them.", getPerson: "Obi-Wan Kenobi"},
{getQuote: "Your focus determines your reality.", getPerson: "Qui-Gon Jinn"},
{getQuote: "Sometimes we must let go of our pride and do what is requested of us.", getPerson: "Anakin Skywalker"},
{getQuote: "Well always be with you. No ones ever really gone. A thousand generations live in you now.", getPerson: "Luke Skywalker"},
{getQuote: "Difficult to see; always in motion is the future.", getPerson: "Yoda"},
{getQuote: "Hello There", getPerson: "Obi-Wan Kenobi"},
{getQuote: "Sorry lady. I dont understand frog.", getPerson: "Djarin, The Mandalorian"},
{getQuote: "Do It.", getPerson: "Palpatine"},
{getQuote: "The fear of loss is a path to the dark side.", getPerson: "Yoda"}
];

function changeQuote(){
    let random = Math.floor(Math.random()* quotes.length);

    quote.innerText = quotes[random].getQuote;
    person.innerText = quotes[random].getPerson;
}


btn.addEventListener('click', changeQuote);