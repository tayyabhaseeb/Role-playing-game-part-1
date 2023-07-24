// Random number array generator

function randomNumberGenerator(diceCount) {
  return new Array(diceCount).fill(0).map(function () {
    return Math.floor(Math.random() * 6) + 1;
  });
}

// Generate html box for random number of arrays

function generateHtmlForRandomNumbers(diceCount) {
  return randomNumberGenerator(diceCount)
    .map(function (num) {
      return `<div class = "dice">${num}</div>`;
    })
    .join("");
}

export { randomNumberGenerator, generateHtmlForRandomNumbers };
