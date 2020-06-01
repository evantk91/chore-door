const doorImage1 = document.querySelector("#door1");
const doorImage2 = document.querySelector("#door2");
const doorImage3 = document.querySelector("#door3");

const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
const closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg"

let numClosedDoors = 3;
let openDoor1, openDoor2, openDoor3;
let currentlyPlaying = true;

function isBot(door) {
  return (door.src === botDoorPath) ? true : false
}

function isClicked(door) {
  return (door.src === closedDoorPath) ? false : true
}

function playDoor(door) {
  numClosedDoors--;
  if(numClosedDoors === 0) {
    gameOver('win')
  } else if(isBot(door)) {
    gameOver()
  }
}

function randomChoreDoorGenerator() {
  const choreDoor = Math.floor(Math.random() * numClosedDoors);
  if(choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if(choreDoor === 1){
    openDoor1 = beachDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = spaceDoorPath;
  } else {
    openDoor1 = spaceDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = botDoorPath;
  }
}


  doorImage1.onclick = function() {
    if(currentlyPlaying && !isClicked(door1)) {
      doorImage1.src = openDoor1;
      playDoor(doorImage1);
    }
  }

  doorImage2.onclick = function() {
    if(currentlyPlaying && !isClicked(door2)) {
      doorImage2.src = openDoor2;
      playDoor(doorImage2);
    }
  }

  doorImage3.onclick = function() {
    if(currentlyPlaying && !isClicked(door3)) {
      doorImage3.src = openDoor3;
      playDoor(doorImage3);
    }
  }


const startButton = document.querySelector('#start');

if(!currentlyPlaying) {
  startButton.onclick = function() {
    startRound()
  }
}

function startRound() {
  doorImage1.src = closedDoorPath
  doorImage2.src = closedDoorPath
  doorImage3.src = closedDoorPath
  numClosedDoors = 3
  startButton.innerHTML = 'Good Luck!'
  currentlyPlaying = true
  randomChoreDoorGenerator()
}

function gameOver(status) {
  if(status === 'win') {
    startButton.innerHTML = 'You win! Play again?'
  } else {
    startButton.innerHTML = 'Game over! Play again?'
  }
  currentlyPlaying = false;
}

startRound()