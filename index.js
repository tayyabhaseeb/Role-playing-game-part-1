// import 1
import {
  randomNumberGenerator,
  generateHtmlForRandomNumbers,
} from "./utilities.js";

// import 2
import { data } from "./data.js";

// rendering

function render(character) {
  const { elementId, name, avatar, health, diceCount } = character;
  const renderDice = generateHtmlForRandomNumbers(diceCount);
  document.getElementById(elementId).innerHTML = `
   
         <div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}"/>
            <p class="health">health: <b> ${health} </b></p>
            <div class="dice-container">${renderDice}</div>
         </div>   
   `;
}

render(data.hero);
render(data.monster);
