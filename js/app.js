'use strict';

let score = 0;

let siteGuest = prompt('So, what is your name?');
alert(`Hello, ${siteGuest}! Ready to play a game?`);
alert('I hope that was a yes, because there is no no.');
alert('I like to call this game, How Well Do You Know Me?');

let questionOne = prompt('Do I have cats?').toLowerCase();

if (questionOne === 'y' || questionOne === 'yes') {
  alert('You are correct.  Cats are the best.');
  score++;
} else if (questionOne === 'n' || questionOne === 'no') {
  alert('Nope! I\'m over 40 and single. I have cats.');
} else {
  alert('Please answer Yes or No.');
}

let questionTwo = prompt('Is Catan the best game in the world?').toLowerCase();

if (questionTwo === 'y' || questionTwo === 'yes') {
  alert('You are correct.  Catan rules!');
  score++;
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
  score++;
} else {
  alert('Please answer Yes or No.');
}

let questionFour = prompt('Do I love fajitas?').toLowerCase();

if (questionFour === 'y' || questionFour === 'yes') {
  alert(`Yep, yep, yep, ${siteGuest}!`);
  score++;
} else if (questionFour === 'n' || questionFour === 'no') {
  alert(`You don't know me at all, ${siteGuest}!`);
} else {
  alert('Please answer Yes or No.');
}


function five() {
  let favNum = 27;
  let guessCorrect = false;
  for (let i = 0; i < 4; i++) {
    let guestGuess = +prompt('What\'s my favorite number? First and last hint, it\'s between 1-50.');
    if (guestGuess === favNum) {
      alert(`Wow, ${siteGuest}, that was a great guess!`);
      score++;
      guessCorrect = true;
      break;
    } else if (guestGuess > favNum) {
      alert('A little lower...');
    } else if (guestGuess < favNum) {
      alert('A little higher...');
    }
  }
  if (!guessCorrect) {
    alert(`You were so close, ${siteGuest}. My favorite number is ${favNum}`);
  }
}

five();

function six() {
  let favMovies = ['the long kiss goodnight', 'gone with the wind', 'the substitute', 'under siege', 'the hunt', 'a bronx tale'];
let guessCorrect = false;
  for (let i = 0; i < 6; i++) {
    let movGuess = prompt('Can you guess one of my favorite movies?').toLowerCase();
    for (let j = 0; j < favMovies.length; j++) {
      if (movGuess === favMovies[j]) {
        alert(`Wow! That's amazing ${siteGuest}! You have excellent taste.`);
        guessCorrect = true;
        score++;
        i = 6;
        break;
      }
    } 
    if (!guessCorrect) {
      alert(`Sorry, that is not one of my favorites.  You have ${6-(i+1)} guesses left.`)
    }
  }
  if (!guessCorrect) {
    alert(`Sorry, ${siteGuest}, you didn't guess any of them. These are my favorite movies.  ${favMovies}`)
  }

  alert(`Great job, ${siteGuest}! You scored ${score} out of 6!`);

}

six();
