// Initial Setup


console.log("ready to go");

var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;



// Variables
var mouse = {
	x: innerWidth / 2,
	y: innerHeight / 2 
};
/*
var colors = [
	'#2185C5',
	'#7ECEFD',
	'#FFF6E5',
	'#FF7F66'
];
*/
var colors = [
	'#6BCAE2',
	'#51A5BA',
	'#41924B',
	'#AFEAAA',
	'#87E293',
	'#FE8402'
]

// Event Listeners
addEventListener("mousemove", function(event) {
	mouse.x = event.clientX;
	mouse.y = event.clientY;
});

addEventListener("resize", function() {
	canvas.width = innerWidth;	
	canvas.height = innerHeight;

	init();
});


// Utility Functions
function randomIntFromRange(min,max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
	return colors[Math.floor(Math.random() * colors.length)];
}

var gravity = 0.5;
var friction = .99;
// Objects
function planet(x, y, dy, dx, radius, color) {
	this.x = x;
	this.y = y;
	this.dy =dy;
	this.dx = dx
	this.radius = radius;
	this.color = color;


	this.update = function() {
		/*
		if(this.y + this.radius + this.dy > canvas.height){
			this.dy = -this.dy * friction;


		}else{
			this.dy += gravity;
		}

		if(this.x + this.radius + this.dx > canvas.width
			|| this.x - this.radius <= 0){
			this.dx = -this.dx;
		}

		this.y += this.dy;
		this.x += this.dx
		*/
		this.draw();
	};

	this.update2 = function(){
		right = false 


		if(!right){
			this.x += 1;
		}
		this.draw()
	}
	//Draw planet
	this.draw = function() {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);	
		c.fillStyle = this.color;
		c.fill();
		c.stroke();
		c.closePath();
	};
}


// Implementation
var planet ;
var planetArr ;

function init() {
	planetArr = [];
	for(var i=0;i < 1; i++){
		
		var radius = randomIntFromRange(20,40);
		var x = randomIntFromRange(radius, canvas.width - radius);
		var y = randomIntFromRange(0, canvas.height - radius);
		var dx = randomIntFromRange(-2,2);
		var dy = randomIntFromRange(-2,2);
		var color = randomColor(colors);

		planetArr.push(new planet(200,200,0,0,radius,color));

		planetArr.push(new planet(800,200,0,0,radius,"Yellow"));
		
	}
}

// Animation Loop
function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, canvas.width, canvas.height);
	planetArr[0].update2()
	planetArr[1].update()
	
}

init();
animate();