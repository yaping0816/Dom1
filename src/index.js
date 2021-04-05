// USING THE DOM TO EDIT ELEMENTS ON THE PAGE (AND ADD NEW ONES)

// - making a clone of the div.card ad appending it to the dic.card-group
// with the querySelectot, you got an element or null (or the first match if several elements match the css select)

const data = [
    {heading: 'Cat 1'},
    {heading: 'Cat 2'}
]
const newFirstCard = document.querySelector('.card');
// console.log(newFirstCard);
// const newFirstCard = document.querySelector('.cardfssef'); //we got null
// const newFirstCard = document.querySelector('div'); //got the first match
// console.log(newFirstCard);

const copyOfFirstCard = newFirstCard.cloneNode(true); //creat a clone
// console.log(copyOfFirstCard);

const cardContainer = document.querySelector('.card-group'); // use querySelector the parent element of the cards
// console.log(cardContainer);

// const parent = newFirstCard.parentElement; //another shortcut to select the parent element
// console.log(parent)

cardContainer.appendChild(copyOfFirstCard); //we cannot have the same DOM elements in 2 palces o fthe DOM, that's why we created a clone, once we have the clone , we append it wherever we want to append it 
// cardContainer.appendChild(copyOfFirstCard) //can't work b/c the same node can not be used more than once, we have to creat another clone and append that new clone

const cards = document.querySelectorAll('.card');
console.log(cards);
// const secondCard = cards[1];
cards.forEach((card, index) => {
    const h2 = card.querySelector('h2');
    const h3 = card.querySelector('h3');
    h2.textContent = data[index].heading;
    h3.textContent = 'DOM surgery is fun';
})
// make a real array of cards
const realArrayOfCards = Array.from(cards);
console.log(realArrayOfCards);




// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll (always use the newer way)
//  Select the following single elements from the div.card

// A- finding across the entire DOM
const header = document.querySelector('header');
const logoTitle = document.querySelector('#logoTitle'); //need to inspect the webpage in order to find the logo title id name
const firstCard = document.querySelector('.card');
const secondCard = document.querySelectorAll('.card')[1];
// const imageFirstCard = document. querySelector('img'); // if there is an <img> on the header or whatever above card, this will point to there, so this is not right
const imageFirstCard = firstCard.querySelector('img');

// B- finding element in second card
const imageSecondCard = secondCard.querySelector('img');
const titleSecondCard = secondCard.querySelector('.card-title');
const subtitleSecondCard = secondCard.querySelector('.card-subtitle');
const textSecondCard = secondCard.querySelector('.card-text');
const cardLink1 = secondCard.querySelector('a');
const cardLink2 = secondCard.querySelector('a:nth-of-type(2)');
// C- traversing with dot notation
// const link1FirstCard = document.querySelector('a'); //this will point to the first link on the page which is the first tag in header <nav>
const link1FirstCard = firstCard.querySelector('a');
const link2FirstCard = firstCard.querySelectorAll('a')[1];


// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
// B- Loop over the links and console.log their text content
// C- Turn the collection of links into a real array
// D- Use .filter to find the anchor tag with the textContent of "Home"


// 👉 3- Changing an element's text content
//  A- Change all of the text in the second card

titleSecondCard.textContent = 'Dog 2';
subtitleSecondCard.textContent = 'I\'m tired';
textSecondCard.textContent = 'Meow';
cardLink1.textContent = 'new mlink 1';
cardLink2.textContent = 'new mlink 2';

//  B- Change all of the links in the first card

link1FirstCard.textContent = 'link 1';
link2FirstCard.textContent = 'link 2';

//  C- Have the students research online the difference between textContent and innerText



// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes

imageSecondCard.src = 'https://th.bing.com/th/id/OIP.TmKRCBFPjmOycunjmnIp5AHaE7?w=285&h=190&c=7&o=5&dpr=3&pid=1.7';

//  B- Using .setAttribute to change a few attributes

imageSecondCard.setAttribute('src', 'https://th.bing.com/th/id/OIP.sonbuZCGYfJEaLUNkCugzwHaFj?w=253&h=190&c=7&o=5&dpr=3&pid=1.7')




// 👉 5- Changing the styling of an element(the 'sky' classname should turn bg color to blue)
//  A- By changing the class names on the element with the classList API

// imageSecondCard.setAttribute('class', 'card sky') //change calss name to 'card sky' on second card image element, but this isn't the better way

// best way is to use classList, never break
secondCard.classList.add('sky'); // add the 'sky' to the current class name of the second card which is 'card' ,now becomes 'card sky'
header.classList.add('sky'); // add the 'sky' to the current header class name which didn't exist, now with the new class name 'sky'
header.classList.remove('sky'); // remove the 'sky' class name


// if you want to toggle between adding and remocing a class name from an element 
// setInterval(() => {
//     header.classList.toggle('sky')
// }, 1000)



//  B- By manipulating inline styles on the element
// always win the strugle of the cascade
// use classList over inline style, because there maybe several rules to determine which rules win the struggle, the inline style is always win
secondCard.style.backgroundColor = 'royalblue';



// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
const newLink = document.createElement('a');
newLink.textContent = 'Blog';
newLink.href = '#';
document.querySelector('#mainNav').appendChild(newLink); //use inspect to find the parent element of whereever you want to attach your element, here we'd like to attach it to the <nav>. The parent element of <nav> is #mainNav

// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times


// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]


// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
