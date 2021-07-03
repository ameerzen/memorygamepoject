
const timeCount = document.querySelector('.timer');
let score = document.querySelector('.score');
const FlipCards = document.querySelector('.FlipCards');
const card = document.querySelectorAll('.card');
let count =0;
let scorecount = 0;
let cards = [card];
let frontImgs = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg','img/6.jpg']
let backImage = 'img/ball.png';
let ClickedCard = false;
let firstClick, secondClick;

card.forEach(card => {
    card.addEventListener('click', game);
}); 
 
 

function game() {
   
    let img = this.lastElementChild.lastElementChild;
    //console.log(img.src);
    img.src = frontImgs[this.id]

    if(!ClickedCard) {
        ClickedCard = true;
        firstClick= this;
    } else {
        ClickedCard = false;
        secondClick = this;
        console.log({firstClick, secondClick});
        //console.log(firstClick.id)
        if (firstClick.id == secondClick.id) {
        console.log('Its a match!') 
        count++;
        
            firstClick.removeEventListener('click', game);
            secondClick.removeEventListener('click', game);
            scorecount += 5;
            score.innerHTML = "Score:" + scorecount ;
            console.log(score)
        } 
        else { 
            score.innerHTML = "Score:"+(scorecount-=2);
            console.log("Not a match!")
            setTimeout(() => {
                let origImg = firstClick.lastElementChild.lastElementChild;
                let origImg2 = secondClick.lastElementChild.lastElementChild;
                origImg.src = backImage;
                origImg2.src = backImage;
              
            firstClick.classList.remove('click','visible')
            secondClick.classList.remove('click','visible')
            }, 1000);
        }
    }   
}
