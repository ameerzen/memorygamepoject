
    function showResults()
	{
		document.getElementById("resultssection").innerHTML;
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
		}
		resultTable += "</table><br/><input type='button' name='PlayAgain' class='allCommonBtn' value='Play Again' onclick='location.reload()' /> ";
		document.getElementById("resultssection").innerHTML = resultTable;
	}
    let allPlayers = ["John Smith","David Roy","Mark Samson","Scott Miller"];
	let allEmail = ["johnsmith@gmail.com","davidroy@gmail.com","marksamson@gmail.com","scottmiller@gmail.com"];
	let allScores = [34,38,28,31];
	let allTimes = [30,34,24,25];