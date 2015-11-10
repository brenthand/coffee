var REPLAYCOUNT = 0;
var TOTALEVENTS = 0;
var EVENTS = []
var STEP = 0;

function doThis(event) {
	var event = {
			//type: this.type,
			elId: this.id,
			step: STEP + 1,
	};
	STEP = STEP + 1;
	EVENTS.push(event);
	console.log(event);
}

document.getElementById("btn1").addEventListener("click", doThis);
document.getElementById("alink").addEventListener("click", doThis);
document.getElementById("inpt").addEventListener("focus", doThis);
document.getElementById("jsn").addEventListener("focus", showJSON);

//window.onunload = function() {
function showJSON () {
	var j = JSON.stringify(EVENTS);
	document.getElementById("ta").innerHTML = j;
	
}	

//var j ="[{"type":"submit","elId":"btn1","step":1},{"type":"","elId":"alink","step":2},{"type":"submit","elId":"btn1","step":3},{"type":"text","elId":"inpt","step":4},{"type":"","elId":"alink","step":5},{"type":"submit","elId":"btn1","step":6},{"type":"","elId":"alink","step":7},{"type":"submit","elId":"btn1","step":8},{"type":"text","elId":"inpt","step":9}]"


function showClicks(j) {
	TOTALEVENTS = EVENTS.length;
	if(TOTALEVENTS > 0) nxtClick();
	//for(var i = 0; i <= EVENTS.length; i++) {
	//	console.log(EVENTS[i].elId)
	//	var x = document.getElementById(EVENTS[i].elId);
	//	x.style.border = "5px solid red";
	//	//sleep(2);
	//	x.style.border = "none";
	//	
	//}
}

function nxtClick() {
	if(REPLAYCOUNT > 0) {
		document.getElementById(EVENTS[REPLAYCOUNT-1].elId).style.border = "1px solid black";
	}
	console.log(EVENTS[REPLAYCOUNT].elId)
	var x = document.getElementById(EVENTS[REPLAYCOUNT].elId);
	x.style.border = "5px solid red";
	REPLAYCOUNT++;
}
document.getElementById("strt").addEventListener("click", showClicks);
document.getElementById("nxt").addEventListener("click", nxtClick);