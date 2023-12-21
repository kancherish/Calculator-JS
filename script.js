
let screen = document.querySelector(".screen");

let ghostScreen = document.querySelector(".ghostScreen");

let numBtns = Array.from(document.querySelectorAll(".num"));

let oprBtn = Array.from(document.querySelectorAll(".opr"));

let clrBtn = document.querySelector(".clr");

let decBtn = document.querySelector(".decimal");

let eqlBtn = document.querySelector(".equal");

let firstN = null;
let secondN = null;
let operator = "";
let result = 0

function dot(){
	
		if(screen.textContent.includes(".")){
				return;
			}
		screen.textContent += ".";
	
	}
	
	
function operate(f,o,s){
		switch(o){
			case "+":
				return f+s;
			break;
			case "-":
				return f-s;
			break;
			case "*":
				return f*s;
			break;
			case "/":
				return f/s;
			break;
			
			}
	}

function clear(){
	screen.textContent = '';
	ghostScreen.textContent = '';
	firstN = null;
	second = null;
	result=0;
	}
	
function equal(){
	
	calc();
	ghostScreen.textContent = '';
	operator = "";
	screen.textContent = result;
	result = 0;
	firstN = null;
	secondN = null;
	
	}
	
function calc(){
	if(firstN===null){
			firstN=Number(screen.textContent);
			console.log(firstN)
			ghostScreen.textContent = firstN + operator;
			screen.textContent = "";
	}else{
		console.log(firstN)
		secondN = Number(screen.textContent);
		result = operate(firstN,operator,secondN);
		ghostScreen.textContent = result + operator;
		firstN = result
		screen.textContent = '';
		}
	
	}
	
function add(){
	
	
	if(operator!=="+"){
		calc();
	}
	
	operator="+"
	calc();
	}

function sub(){
	
	if(operator!=="-"){
		calc();
	}
	operator="-";
	calc();
	
	}
	

function multi(){
	
	if(operator!=="*"){
		calc();
	}
	operator="*";
	calc();
	
	}


function div(){
	
	if(operator!=="*"){
		calc();
	}
	operator="/";
	calc();
	
	}


clrBtn.addEventListener('click',(e)=>{
	clear();
	});
	
eqlBtn.addEventListener('click',(e)=>{
		equal();
	});

numBtns.forEach((btn)=>{
	
	btn.addEventListener('click',(e)=>{
		
		screen.textContent += e.target.textContent;
		
		});
	
	});

decBtn.addEventListener('click',(e)=>{
		dot();
	});
	
oprBtn.forEach(btn=>{
	
	btn.addEventListener('click',(e)=>{
		operation = e.target.textContent;
		switch(operation){
			
			case "+":
				add();
			break;
			case "-":
				sub();
			break;
			case "X":
				multi();
			break;
			case "/":
				div();
			break;
			
			}
	})
	
	});
