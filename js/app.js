'use strict';


let siteGuest = prompt('So, what is your name?');
alert(`Hello, ${siteGuest}! Ready to play a game?`);
alert('I hope that was a yes, because there is no no.');
alert('I like to call this game, How Well Do You Know Me?');

let questionOne = prompt('Do I have cats?').toLowerCase();

if (questionOne === 'y' || questionOne === 'yes') {
  alert('You are correct.  Cats are the best.');
} else if (questionOne === 'n' || questionOne === 'no') {
  alert('Nope! I\'m over 40 and single. I have cats.');
} else {
  alert('Please answer Yes or No.');
}

let questionTwo = prompt('Is Catan the best game in the world?').toLowerCase();

if (questionTwo === 'y' || questionTwo === 'yes') {
  alert('You are correct.  Catan rules!');
} else if (questionTwo === 'n' || questionTwo === 'no') {
  alert('Nope! You are so wrong!  Catan is the best game in the world.');
} else {
  alert('Please answer Yes or No.');
}

let questionThree = prompt('Is a Lamborghini my favorite car?').toLowerCase();

if (questionThree === 'y' || questionThree === 'yes') {
  alert('Heck no!  My favorite will always be a Lincoln Town Car.');
} else if (questionThree === 'n' || questionThree === 'no') {
  alert('Right! A Lincoln Town Car is way better.');
} else {
  alert('Please answer Yes or No.');
}

let questionFour = prompt('Do I love fajitas?').toLowerCase();

if (questionFour === 'y' || questionFour === 'yes') {
  alert(`Damn right, ${siteGuest}!`);
} else if (questionFour === 'n' || questionFour === 'no') {
  alert(`You don't know me at all, ${siteGuest}!`);
} else {
  alert('Please answer Yes or No.');
} 


let chance = 4;
let random = Math.floor(Math.random() * 100 + 1);
console.log(random);
let num;
do {

  num = prompt('What\'s my favorite number?  Hint, it\'s between 1 and 100.') * 1;
  chance--;
  if (isNaN(num) || num > 100 || num < 1) {

    chance !== 0 ? alert(` Please enter the correct number , And then there were ${chance} Time `) : alert(' Game over ');
  } else if (num > random) {

    chance !== 0 ? alert(`Too big! You have ${chance} chances left!`) : alert(' Game over ');
  } else if (num < random) {

    chance !== 0 ? alert(`Too small! You have ${chance} chances left!`) : alert(' Game over ');
  } else {

    alert('Woot! Woot!  You Got It!');
    break;
  }
} while (random !== num && chance > 0);


let questionSix = prompt('What\'s my favorite color?').toLowerCase();

if (questionSix === ) {
  alert(`You really get me, ${siteGuest}!`);
} else if (questionSix === ) {
  alert(`That's a nice color, but not my favorite, ${siteGuest} .  Try again.`);
} else {
  alert('Yeah, I don\'t know about that color.');
}
