
let number;
let diceOutcome;
let currentvalue = 0;
let totalscore=0 ;
let turns=3;

function generateDiceOutcome(){
    number=Math.random()*10;
    diceOutcome=Math.trunc(number)
}
document.querySelector('.won').classList.add('hidden')
document.querySelector('.loss').classList.add('hidden')
document.querySelector('.dice-image').classList.add('hidden')
document.querySelector(".btn-roll").addEventListener("click", function(){
    document.querySelector('.dice-image').classList.remove('hidden')
    do{
        generateDiceOutcome()
    }while(diceOutcome < 1 || diceOutcome > 6)
        // document.querySelector('.dice-outcome').textContent=`Dice Outcome : ${diceOutcome}`
        document.querySelector('.dice-image').setAttribute('src', `Assets/dice-${diceOutcome}.png`)

    if(diceOutcome!==1){
    currentvalue+=diceOutcome;
    document.querySelector('.current-number').textContent=`${currentvalue}`
    }
    else{
    currentvalue=0;
    document.querySelector('.current-number').textContent=`${currentvalue}`
    }
});

document.querySelector('.btn-hold').addEventListener("click",function(){
    totalscore+=currentvalue;
    document.querySelector('.score-number').textContent=`${totalscore}`
    currentvalue=0;
    document.querySelector('.current-number').textContent=`${currentvalue}`
    turns=turns-1;
    document.querySelector('.hold').textContent=`turns:${turns}`
    if(turns==0){
        document.querySelector('.btn-hold').classList.add('hidden')
    }
    if(totalscore>=100){
        document.querySelector('.won').classList.remove('hidden')
    }
    else if(turns==0){ 
        document.querySelector('.loss').classList.remove('hidden')
    }
});

document.querySelector('.btn-new').addEventListener("click",function(){
    turns=3;
    diceOutcome=6;
    totalscore=0;
    document.querySelector('.dice-image').setAttribute('src', `../ASSETS/dice-${diceOutcome}.png`)
    document.querySelector('.btn-hold').classList.remove('hidden')
    document.querySelector('.hold').textContent='turns:3';
    document.querySelector('.score-number').textContent=0;
    document.querySelector('.current-number').textContent=0;
    document.querySelector('.dice-image').classList.add('hidden')
    document.querySelector('.won').classList.add('hidden')
    document.querySelector('.loss').classList.add('hidden')
});
