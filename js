//HTTP request function
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

//Provide the id of the monster you'd like to look up from the Open5e API
monsterName = prompt("Please enter the monster you would like to look up.", "adult-bronze-dragon")


//Send an HTTP GET request to retrieve the raw monster data
var rawMonsterStats = httpGet("https://api-beta.open5e.com/monsters/" + monsterName);

//Parse the monster JSON data and load it into the parsedMonsterStats array
var parsedMonsterStats = JSON.parse(rawMonsterStats);

//Iterate over all available items in the parsedDragonStats
for(var i=0;i<parsedMonsterStats.actions.length;i++){
	console.log(parsedMonsterStats.actions[i].name);
	console.log(parsedMonsterStats.actions[i].desc);
}
