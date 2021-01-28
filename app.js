const cardBoxes = document.querySelectorAll('.cardBox');
// const answers = document.querySelec

for(let cardBox of cardBoxes){
    cardBox.addEventListener('click', ()=>{
        cardBox.classList.toggle('active')
    })
}

