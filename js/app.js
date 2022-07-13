'use strict';


let siteGuest = prompt('So, what is your name?');
alert(`Hello, ${siteGuest}! Ready to play a game?`);
alert('I hope that was a yes, because there is no no.');
alert('I like to call this game, How Well Do You Know Me? Rules are simple - Answer Yes or No.')

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
  alert(`You don\'t know me at all, ${siteGuest}!`);
} else {
  alert('Please answer Yes or No.');
}