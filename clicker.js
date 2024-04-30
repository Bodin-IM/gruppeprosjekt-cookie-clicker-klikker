let score = 0;
let upgradeCost = 10;
let clickValue = 1;
let timeElapsed = 0;

const scoreDisplay = document.getElementById('score');
const upgradeCostDisplay = document.getElementById('upgradeCost');
const timeElapsedDisplay = document.getElementById('timeElapsed');

const clickButton = document.getElementById('clickButton');
clickButton.addEventListener('click', handleClick);

const upgradeButton = document.getElementById('upgradeButton');
upgradeButton.addEventListener('click', handleUpgrade);

function handleClick() {
  score += clickValue;
  updateScore();
}

function handleUpgrade() {
  if (score >= upgradeCost) {
    score -= upgradeCost;
    clickValue *= 2;
    upgradeCost *= 2;
    updateScore();
    updateUpgradeCost();
  } else {
    alert('Not enough points to upgrade your mouse!');
  }
}

function updateScore() {
  scoreDisplay.textContent = score;
}

function updateUpgradeCost() {
  upgradeCostDisplay.textContent = upgradeCost;
}

function updateTime() {
  timeElapsed++;
  timeElapsedDisplay.textContent = timeElapsed;
}

setInterval(updateTime, 1000); 