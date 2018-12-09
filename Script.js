
document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<div id="HelloText">Нажмите Enter Чтобы начать игру</div>');
var HelloText = document.getElementById("HelloText");
HelloText.style.textAlign="center";
HelloText.style.fontSize=72+"pt";
HelloText.style.display = 'block';

document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<div id="NewText">Нажмите Enter Чтобы начать новую игру</div>');
var NewText = document.getElementById("NewText");
NewText.style.textAlign="center";
NewText.style.fontSize=72+"pt";
NewText.style.display = 'none';

document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="img/pig.png" id="pig", alt="pig">');
var pig = document.getElementById('pig');
pig.style.position='fixed';
pig.style.display = 'none';
var mouseListener = function(event) {
	mouseMoveFunc(event);
}
var Nplay = function(event) {
	console.log(event.keyCode);
	NowPlay(event);}
	document.addEventListener("keydown",Nplay);


function NowPlay(event) {
	if (event.keyCode==13) {

		document.addEventListener("mousemove",mouseListener);
		document.removeEventListener("keydown",Nplay);

		time=15;
		HelloText.style.display = 'none';
		NewText.style.display = 'none';
		pig.style.display = 'block';
		scoreObj.style.display = 'block';
		timeObj.style.display = 'block';
		orange.style.display = 'block';
		spawnOrange();
		Stimer();
	}
}

document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<div id="scoreObj"></div>');
var scoreObj = document.getElementById("scoreObj");
scoreObj.style.textAlign="center";
scoreObj.style.fontSize=72+"pt";
scoreObj.style.display = 'none';
var score=0;

document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<div id="timeObj"></div>');
var timeObj = document.getElementById("timeObj");
timeObj.style.textAlign="center";
timeObj.style.fontSize=72+"pt";
timeObj.style.display = 'none';
var time=15;

function mouseMoveFunc(event) {
	pig.style.left=event.clientX - 64 + 'px';
	pig.style.top=event.clientY - 64 + 'px';
	checkCollision();
	setTime();
}

function checkCollision() {
	console.log();
	if (Math.sqrt(Math.pow(pig.offsetLeft - orange.offsetLeft,2)+ Math.pow(pig.offsetTop - orange.offsetTop,2)) <128) 
	{
		spawnOrange();
		score=score+5;
		setScore(score)
		time=time+5;
		setTime(time);
	}
}



document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="img/orange.png" id="orange", alt="orange">');
var orange = document.getElementById('orange');
orange.style.position='fixed';
orange.style.display = 'none';

function spawnOrange() {
	orange.style.left=Math.random()* (window.innerWidth-128) + 'px';
	orange.style.top=Math.random()* (window.innerHeight-128) + 'px';
}

function setScore(scoreToSet)
{
	document.getElementById("scoreObj").innerHTML="Очки: "+score;
	console.log(scoreToSet);
}

function Stimer() {
	var timerId = setInterval(function() {
    time=time-1;
    setTime();
    setScore(score)}, 500);
    if (time==0) {
    	clearInterval(timerId);
    }
}



function setTime(TimeToSet)
{
	document.getElementById("timeObj").innerHTML="Время: "+time;
	if (time==0) {
		document.removeEventListener("mousemove",mouseListener);


		HelloText.style.display = 'block';
		NewText.style.display = 'block';
		pig.style.display = 'none';
		scoreObj.style.display = 'none';
		timeObj.style.display = 'none';
		orange.style.display = 'none';

		document.getElementById("HelloText").innerHTML="Время вышло ваши Очки: "+score;
		document.addEventListener("keydown",Nplay);
	} 
}
