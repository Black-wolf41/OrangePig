document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="img/pig.png" id="pig", alt="pig">');
var pig = document.getElementById('pig');
pig.style.position='fixed';
var mouseListener = function(event) {
	mouseMoveFunc(event);
}

document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<div id="scoreObj"></div>');
var scoreObj = document.getElementById("scoreObj");
scoreObj.style.textAling="center";
scoreObj.style.fontSize=72+"pt";
var score=0;

function mouseMoveFunc(event) {
	pig.style.left=event.clientX - 64 + 'px';
	pig.style.top=event.clientY - 64 + 'px';
	checkCollision();
}

function checkCollision() {
	console.log();
	if (Math.sqrt(Math.pow(pig.offsetLeft - orange.offsetLeft,2)+ Math.pow(pig.offsetTop - orange.offsetTop,2)) <128) 
	{
		spawnOrange();
		score++;
		setScore(score)
	}
}

document.addEventListener("mousemove",mouseListener);

document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="img/orange.png" id="orange", alt="orange">');
var orange = document.getElementById('orange');
orange.style.position='fixed';

function spawnOrange() {
	orange.style.left=Math.random()* (window.innerWidth-128) + 'px';
	orange.style.top=Math.random()* (window.innerHeight-128) + 'px';
}

function setScore(scoreToSet)
{
	document.getElementById("scoreObj").innerHTML="Очки: "+score;
	console.log(scoreToSet);
}
