import * as PIXI from 'pixi.js';
import { gameOver } from './gameOver';


export let initTimer = app => {
  let timerTxt = null;
  let currentTimer = 60;


  let timerId = setInterval(updateTimer, 1000);


  function updateTimer(){
    if(currentTimer < 0){
      gameOver('YOU LOSE', app);
      clearInterval(timerId);
      return null;
    }

    app.stage.removeChild(timerTxt);

    timerTxt = new PIXI.Text(currentTimer, {
      fontSize: 30,
      fill : 0xff005b,
      fontFamily: 'Odibee Sans',
    });

    timerTxt.x = app.renderer.width - 50;

    app.stage.addChild(timerTxt);

    currentTimer--;
  }
};
