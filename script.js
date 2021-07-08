
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
        secondClick = this;
        ClickedCard = false;
        console.log({firstClick, secondClick});
        //console.log(firstClick.id)
        if (firstClick.id == secondClick.id) {
        console.log('Its a match!') 
        count++;
        win();
            firstClick.removeEventListener('click', game);
            secondClick.removeEventListener('click', game);
            scorecount += 5;
            score.innerHTML = "Score:" + scorecount ;
    
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
function win() {
    if (count == 6){
    clearInterval(timer);
    
        }

    
}


let timer = setInterval(countTimer, 1000);
let totalSeconds = 0;
function countTimer() {
           ++totalSeconds;
           
           let hour = Math.floor(totalSeconds /3600);
           let minute = Math.floor((totalSeconds - hour*3600)/60);
           let seconds = totalSeconds - (hour*3600 + minute*60);
           if(hour < 10)
             hour = "0"+hour;
           if(minute < 10)
             minute = "0"+minute;
           if(seconds < 10)
             seconds = "0"+seconds;

           document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
         
        }
    
function pause(){
    card.forEach(card => {
      card.removeEventListener('click', game);
        clearInterval(timer);
       
    }); }
 function play(){
     timer=setInterval(countTimer, 1000);
     card.forEach(card => {
        card.addEventListener('click', game);
    });}

       
    let allPlayers = ["John Smith","David Roy","Mark Samson","Scott Miller"]; 
	

	let allEmail = ["johnsmith@gmail.com","davidroy@gmail.com","marksamson@gmail.com","scottmiller@gmail.com"];
	let allScores = [34,38,28,31];
	let allTimes = [30,34,24,25];
    function showResults()
	{
        
		let resultTable = "<h1>Sort By Score</h1><table border='1'><tr><td>Player Name</td><td>Email Address</td><td>Score</td><td>Time</td></tr>";
		let list = [];
		for (let j = 0; j < allScores.length; j++) 
			list.push({'player':allPlayers[j],'email':allEmail[j],'score':allScores[j],'time':allTimes[j]});
		list.sort(function(a, b) {
			return ((a.score < b.score) ? -1 : ((a.score == b.score) ? 0 : 1));
		});
		for (let k = 0; k < list.length; k++) {
			allPlayers[k] = list[k].player;
			allEmail[k] = list[k].email;
			allScores[k] = list[k].score;
			allTimes[k] = list[k].time;
		}
		for(let t = allTimes.length-1; t >= 0; t--)
		{
			resultTable += "<tr>";
			resultTable += "<td>"+allPlayers[t]+"</td>";
			resultTable += "<td>"+allEmail[t]+"</td>";
			resultTable += "<td>"+allScores[t]+"</td>";
			resultTable += "<td>"+allTimes[t]+"</td>";
			resultTable += "</tr>";
		}
		resultTable += "</table>";
		
		resultTable += "<h1>Sort By Time</h1><table border='1'><tr><td>Player Name</td><td>Email Address</td><td>Score</td><td>Time</td></tr>";
		list = [];
		for (let j = 0; j < allScores.length; j++) 
			list.push({'player':allPlayers[j],'email':allEmail[j],'score':allScores[j],'time':allTimes[j]});
		list.sort(function(a, b) {
			return ((a.time < b.time) ? -1 : ((a.time == b.time) ? 0 : 1));
		});
		for (let k = 0; k < list.length; k++) {
			allPlayers[k] = list[k].player;
			allEmail[k] = list[k].email;
			allScores[k] = list[k].score;
			allTimes[k] = list[k].time;
		}
		for(let t = 0; t < allTimes.length; t++)
		{
			resultTable += "<tr>";
			resultTable += "<td>"+allPlayers[t]+"</td>";
			resultTable += "<td>"+allEmail[t]+"</td>";
			resultTable += "<td>"+allScores[t]+"</td>";
			resultTable += "<td>"+allTimes[t]+"</td>";
			resultTable += "</tr>";
            win();
		}
		document.getElementById("resultssection").innerHTML = resultTable;
    }
	showResults();
