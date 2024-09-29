const choices = ["Lapis", "Papyrus", "Scalpellus"];

const playerObject = {
  name: "Player",
  choice: 0, // index of choices
};

const computerObject = {
  name: "Computer",
  choice: 0, // index of choices
};

let intervalCountDown = {};

function computerChoice() {
//   generates a random choice for the computer
  computerObject.choice = Math.floor(Math.random() * 3);
};

function compareChoices() {
//   compares choices and displays game outcome
  const d = document.querySelector('#display');
  let outcome = '';
  if (playerObject.choice === computerObject.choice) {
    outcome = 'TIE!';
  } else if (playerObject.choice === 1 && computerObject.choice === 0) {
    outcome = 'PLAYER WINS!';
  } else if (playerObject.choice === 2 && computerObject.choice === 1) {
    outcome = 'PLAYER WINS!';
  } else if (playerObject.choice === 0 && computerObject.choice === 2) {
    outcome = 'PLAYER WINS!';
  } else {
    outcome = 'COMPUTER WINS!';
  }
  d.innerText = `${outcome}\n\n${choices[playerObject.choice]} vs ${choices[computerObject.choice]}`;
};

function gameTest() {
//   runs test after user input
  const d = document.querySelector('#display');
  d.innerText = '3';
  let num = 3;
  clearInterval(intervalCountDown);
  intervalCountDown = setInterval(() => {
    num -= 1;
    if (num === 0) {
      clearInterval(intervalCountDown);
      computerChoice();
      compareChoices();
    } else {
      d.innerText = `${num}`;
    }
  }, 500);
};

document.querySelector('#b1').addEventListener('click', () => {
  playerObject.choice = 0;
  gameTest();
});

document.querySelector('#b2').addEventListener('click', () => {
  playerObject.choice = 1;
  gameTest();
});

document.querySelector('#b3').addEventListener('click', () => {
  playerObject.choice = 2;
  gameTest();
});
