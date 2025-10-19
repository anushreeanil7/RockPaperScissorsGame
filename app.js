//const { use } = require("react");

//const { use } = require("react");

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".hand");

const msg = document.querySelector("#msg");

const uScore = document.querySelector("#user-score");
const cScore =  document.querySelector("#comp-score");


const genCompChoice = () => {
    //rock, paper, scissors
    let opts = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return opts[randIdx];
};

const drawGame = () =>{
    console.log("Game was draw");
    msg.innerText = "It's a draw :|";
    msg.style.backgroundColor = "#09122C";
};


const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin)
    {
        console.log("you win!!");
        msg.innerText = `You win :) ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        uScore.innerText = userScore;
    }
    else
    {
        console.log("you lose :(");
        msg.innerText = `You Lose :( ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        cScore.innerText=compScore;
    }
};

const playGame = (userChoice) =>{
    console.log("user choice = ", userChoice);
    //generate comp choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice)
    {
        drawGame();
    }
    else
    {
        let userWin = true;
        if(userChoice === "rock")
        {
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper")
        {
            userWin = compChoice === "scissor" ? false : true;
        }
        else
        {
            userWin =  compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice)=> {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        //console.log("choice was clicked", userChoice);
        playGame(userChoice)
    });
});