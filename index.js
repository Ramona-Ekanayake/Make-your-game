import "./Background/scrollBackground.js";
import {  stateManager, initState, runGame } from './stateManager.js';
import { initSounds } from './sound.js';

import { initMenu, initPauseMenu } from "./menu.js";

import { initScoreBoard } from './scoreBoard.js';
import { initPlatforms } from './platform.js';
import { initCoins } from './coin.js';
import { initEnemies } from './enemy.js';
import { initPlayer, player } from './player.js';
import { initPlayerMovement } from './playerMovement.js';

const platformsDiv = document.getElementById('platformsDiv')
const coinsDiv = document.getElementById('coinsDiv')
const enemiesDiv = document.getElementById('enemiesDiv')

export const init = () => {
    runGame()
    // platformsDiv.style.transform = `translate(0px, 0px)`;
    // coinsDiv.style.transform = `translate(0px, 0px)`;
    // enemiesDiv.style.transform = `translate(0px, 0px)`;
    
    initSounds()
    initScoreBoard()
    initPlatforms()
    initCoins()
    initEnemies()
    initPlayer()
    initPlayerMovement()
    // initPlayerMovement()
    // import('./scoreBoard.js').then(scoreBoardModule => {
    //     scoreBoardModule.initScoreBoard();
    // });
    // import('./platform.js').then(platformModule => {
    //     platformModule.initPlatforms();
    // });
    // import('./enemy.js').then(enemyModule => {
    //     enemyModule.initEnemies();
    // });
    // import('./player.js').then(playerModule => {
    //     playerModule.initEnemies();
    //     playerMovementModule.initPlayerMovement();
    // });
}

// init() 
initState()
initMenu()
initPauseMenu()
  
// function pad(val) {
//     var valString = val + "";
//     if (valString.length < 2) {
//       return "0" + valString;
//     } else {
//       return valString;
//     }
// }