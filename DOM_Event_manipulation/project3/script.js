"use strict";

let scorePlayer1=0;
let scorePlayer2=0;
let currentScorePlayer1=0;
let currentScorePlayer2=0;
let turn=1;
const switchTurn=()=>{
    if(turn===1){
        currentScorePlayer1=0;
        document.querySelector('#current--0').textContent=currentScorePlayer1;
        turn=2;
        document.querySelector('.player--0').classList.remove('player--active');
        document.querySelector('.player--1').classList.add('player--active');
    }else{
        currentScorePlayer2=0;
        document.querySelector('#current--1').textContent=currentScorePlayer2;
        turn=1;
        document.querySelector('.player--1').classList.remove('player--active');
        document.querySelector('.player--0').classList.add('player--active');
    }
}
const addCurrentScore=(dice)=>{
    if(turn===1){
        currentScorePlayer1+=dice;
        document.querySelector('#current--0').textContent=currentScorePlayer1;
    }else{
        currentScorePlayer2+=dice;
        document.querySelector('#current--1').textContent=currentScorePlayer2;
    }
}

const holdScore=()=>{
    if(turn===1){
        scorePlayer1+=currentScorePlayer1;
        document.querySelector('#score--0').textContent=scorePlayer1;
        currentScorePlayer1=0;
        switchTurn();
    }else{
        scorePlayer2+=currentScorePlayer2;
        document.querySelector('#score--1').textContent=scorePlayer2;
        currentScorePlayer2=0;
        switchTurn();
    } 
    gameWin();
}
const gameWin=()=>{
    if(scorePlayer1>=20){
        document.querySelector('.player--0').classList.add('player--winner');
        document.querySelector('.player--0').classList.remove('player--active');
        document.querySelector('.player--1').classList.remove('player--active');
        document.querySelector('.btn--roll').disabled=true;
        document.querySelector('.btn--hold').disabled=true;
    }else if(scorePlayer2>=20){
        document.querySelector('.player--1').classList.add('player--winner');
        document.querySelector('.player--1').classList.remove('player--active');
        document.querySelector('.player--0').classList.remove('player--active');
        document.querySelector('.btn--roll').disabled=true;
        document.querySelector('.btn--hold').disabled=true;
    }
}
document.querySelector('.btn--hold').addEventListener('click', holdScore);
document.querySelector('.btn--roll').addEventListener('click', function(){
    const dice=Math.trunc(Math.random()*6)+1;
    const diceDOM=document.querySelector('.dice');
    addCurrentScore(dice);
    switch(dice){
        case 1:
            diceDOM.src='dice-1.png';
            switchTurn();
            break;
        case 2:
            diceDOM.src='dice-2.png';
            break;
        case 3:
            diceDOM.src='dice-3.png';
            break;
        case 4:
            diceDOM.src='dice-4.png';
            break;
        case 5:
            diceDOM.src='dice-5.png';
            break;
        case 6:
            diceDOM.src='dice-6.png';
            break;
    }
})
document.querySelector('.btn--new').addEventListener('click', function(){
    scorePlayer1=0;
    scorePlayer2=0;
    currentScorePlayer1=0;
    currentScorePlayer2=0;
    turn=1;
    document.querySelector('#current--0').textContent=currentScorePlayer1;
    document.querySelector('#current--1').textContent=currentScorePlayer2;
    document.querySelector('#score--0').textContent=scorePlayer1;
    document.querySelector('#score--1').textContent=scorePlayer2;
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.btn--roll').disabled=false;
    document.querySelector('.btn--hold').disabled=false;
})

