let userScore = 0;
let botScore = 0;

const choices = document.querySelectorAll(".choice");
const msg =document.querySelector(".msg");
const userScorePara = document.querySelector("#myscore");
const botScorePara = document.querySelector("#botscore");

const playGame =(userChoice)=>{
    console.log("User Choice =",userChoice);
    const comChoice = botChoice(); 
    console.log("Bot Choice =",comChoice);

    if (userChoice===comChoice) {
        console.log("Game was Draw Play Again");
        msg.innerText="Game was Draw Play Again";
        msg.style.backgroundColor="#081b31"
    } else {
        let userWin =  true;
        if (userChoice == "Rock"){
            userWin = comChoice ==="Paper"?false:true;
        } else if (userChoice==="Paper"){
            userWin = comChoice === "Scissors"?false:true;
        } else{
            userWin = comChoice==="Rock"?false:true;
        
        }
        shoWinner(userWin,userChoice,comChoice);
    }
}

const shoWinner =(userWin,userChoice,comChoice)=>{
    if (userWin) {
        console.log("You Win");
        userScore++
        userScorePara.innerText = userScore;
        msg.innerText = `You Win : Your ${userChoice} Beats Bot's ${comChoice}`;
        msg.style.backgroundColor="Green";
    } else {
        console.log("You Lose");
        botScore++
        botScorePara.innerText = botScore;
        msg.innerText = `You Lose : Bot's ${comChoice} Beats Your ${userChoice}`;
        msg.style.backgroundColor="Red";
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
    })
})

const botChoice =()=>{
    const options =["Rock","Paper","Scissors"]
   const ramIdx = Math.floor(Math.random()*3 );
   return options[ramIdx];
}

