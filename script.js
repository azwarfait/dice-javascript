
var title = document.querySelector(".container h1");
var diceOneImg = document.querySelector(".img1");
var diceTwoImg = document.querySelector(".img2");

function roll(){
    title.setAttribute("onclick", " ");
    title.style.cursor="default";
    var diceOne = Math.floor(Math.random()*6+1);
    var diceTwo = Math.floor(Math.random()*6+1);

    diceOneImg.setAttribute("src", "./images/dice"+diceOne+".png");
    diceTwoImg.setAttribute("src", "./images/dice"+diceTwo+".png");


    if(diceOne>diceTwo){
        title.textContent = "🚩 Player 1 Win";
    }else if(diceOne<diceTwo){
        title.textContent = "Player 2 Win 🚩";
    }else{
        title.textContent = "Draw";
    }

    setTimeout(function(){
        title.innerHTML = "<span class='blink' >Click Me</span>";
        title.style.cursor="pointer";
        title.setAttribute("onclick", "roll()");
    }, 4000)

}