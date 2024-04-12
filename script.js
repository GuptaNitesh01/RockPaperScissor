let userscore = 0;
let devicescore =  0;

const choice = document.querySelectorAll(".choice1");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#userscore");
const devicescorepara = document.querySelector("#devicescore");



const gencompchoice = () => {
    const options = ["stone","paper","scissor"];
    const randindex = Math.floor(Math.random()*3);
    return options[randindex];
}

const showWinner = (userWin,userchoice,compchoice) =>{
    if(userWin){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You Win!  your ${userchoice} beat ${compchoice}`;
        msg.style.backgroundColor = "Green";
    }else{
        devicescore++;
        devicescorepara.innerText = devicescore;
        msg.innerText = `You lost !  ${compchoice} beat your ${userchoice}`;
        msg.style.backgroundColor = "Red";
    }

}

const drawGame = () => {
    msg.innerText = "Game is Draw !!! Pay Again ";
    msg.style.backgroundColor = "Orange";
}   

const PlayGame = (userchoice) =>{
    const compchoice = gencompchoice();

    if(userchoice === compchoice){
        drawGame();
    }
    else{
        let userWin = true;
        if( userchoice === "stone"){
            userWin = compchoice === "paper" ? false : true;
        }else if(userchoice === "paper"){
            userWin = compchoice === "scissor" ? false : true;
        }else {
            userWin = compchoice === "stone" ? false:true;
        }
        showWinner(userWin,userchoice,compchoice);
    }

}

choice .forEach((choice1) => {
    choice1.addEventListener("click" , () => {
        const userchoice = choice1.getAttribute("id");
        PlayGame(userchoice);
    });
});