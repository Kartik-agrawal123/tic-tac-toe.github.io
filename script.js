console.log("Welcome to Tic-Tac-Toe");
let music = new Audio("game.mp3");
let audioTurn = new Audio("ding.wav");
let gameOver = new Audio("EndGame.wav");
let Turn = "X";
let Isgameover = false;
//Function to Change the turn
const changeTurn = () => {
    return Turn === "X" ? "0" : "X";
}

//Function to check for a win
const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !== '')){
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won!";
            Isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width ="200px";
        }
    })

}

//Game Logic
//music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = Turn;
            Turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!Isgameover){
            document.getElementsByClassName("info")[0].innerText = "Turn for " + Turn;
            }
        }
    })
})

//Add onclick listener to reset button
reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = "";
    });
    Turn = "X";
    Isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + Turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width ="0px";
        
})