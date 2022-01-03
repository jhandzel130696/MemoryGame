const cardsColor=[
    "red","red",'green',"green","blue","blue","brown","brown","yellow","yellow","gray","gray","cadetblue","cadetblue","violet","violet","lightgreen","lightgreen"
];
let cards=document.querySelectorAll("div");
cards = [...cards];
const startTime=new Date().getTime();

let activeCard="";
const activeCards=[];

const gamePairs = cards.length/2;
let gameResult=0;

const clickCard = function(){

activeCard = this;
    if(activeCard===activeCards[0]) return
activeCard.classList.remove('hidden');
if(activeCards.length===0){
  activeCards[0] = activeCard;
    return
}else{
    cards.forEach((divElement)=>{
        divElement.removeEventListener('click',clickCard)
    })
    activeCards[1] = activeCard;
    setTimeout(()=>{
        if(activeCards[0].className===activeCards[1].className){

            activeCards.forEach((p)=>{
                p.classList.add('off');
            })
            gameResult++
            cards=cards.filter(card=>!card.classList.contains("off"))
            console.log(cards);
            if(gameResult===gamePairs){
                const endTime=new Date().getTime();
                const gameTime=(endTime-startTime)/1000
                alert(`Twoja gra trwała ${gameTime}`);
                location.reload();
            }
        }else{
            activeCards.forEach((p)=>{
                p.classList.add('hidden');
            })
        }
        activeCard="";
        activeCards.length=0;

        cards.forEach((p)=>{
            p.addEventListener('click',clickCard);
        })
    },1000)


}
}


const init= function(){
    cards.forEach((divElement)=>{
        const position=Math.floor(Math.random()*cardsColor.length);
        divElement.classList.add(cardsColor[position]);
        cardsColor.splice(position,1);
    })
    setTimeout(()=>{
        cards.forEach((div)=>{
            div.classList.add('hidden');
            div.addEventListener('click',clickCard);
        })
    },2000)
}

init();


