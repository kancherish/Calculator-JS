
let screen = document.querySelector(".screen");

let ghostScreen = document.querySelector(".ghostScreen");

let numBtns = Array.from(document.querySelectorAll(".num"));

let oprBtn = Array.from(document.querySelectorAll(".opr"));

let clrBtn = document.querySelector(".clr");

let decBtn = document.querySelector(".decimal");

let eqlBtn = document.querySelector(".equal");

let delBtn = document.querySelector(".del");

let firstN = null;
let secondN = null;
let operator = null;
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
	operator = null;
	screen.textContent = result;
	result = 0;
	firstN = null;
	secondN = null;
	
	}
	
function calc(){
	if(firstN===null){
			firstN=Number(screen.textContent);
			ghostScreen.textContent = String(firstN) + operator;
			console.log(ghostScreen.textContent)
			screen.textContent = "";
	}else{
		secondN = Number(screen.textContent);
		result = operate(firstN,operator,secondN);
		ghostScreen.textContent = result + operator;
		firstN = result
		screen.textContent = '';
		}
	
	}
	
function add(){
	
	
	if(operator!=="+" && operator !== null){
		calc();
		operator="+";
		ghostScreen.textContent=result+"+";
		return;
	}
	
	operator="+"
	calc();
	}

function sub(){
	
	if(operator!=="-" && operator !== null){
		calc();
		operator="-";
		ghostScreen.textContent=result+"-";
		return;
	}
	operator="-";
	calc();
	
	}
	

function multi(){
	
	if(operator!=="*" && operator !== null){
		calc();
		operator="*";
		ghostScreen.textContent=result+"*";
		return;
	}
	operator = "*";
	calc();
	
	}


function div(){
	
	if(operator!=="/" && operator !== null){
		calc();
		operator="/";
		ghostScreen.textContent=result+"/";
		return;
	}
	operator="/";
	calc();
	
	}


delBtn.addEventListener('click',(e)=>{
	
	screen.textContent = screen.textContent.substring(0,screen.textContent.length-1);
	
	});

clrBtn.addEventListener('click',(e)=>{
	clear();
	});
	
eqlBtn.addEventListener('click',(e)=>{
		equal();
	});

numBtns.forEach((btn)=>{
	
	btn.addEventListener('click',(e)=>{
		
		if(screen.textContent.length>12){
				return;
			}
		
		screen.textContent += e.target.textContent;
		
		});
	
	});

decBtn.addEventListener('click',(e)=>{
		dot();
	});
	
oprBtn.forEach(btn=>{
	
	btn.addEventListener('click',(e)=>{
		let operation = e.target.textContent;
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
	
document.body.addEventListener("keyup",(e)=>{
	
	let key = e.key;
	
	switch(key){
		case "1":
			screen.textContent+="1";
		break;
		case "2":
			screen.textContent+="2";
		break;
		case "3":
			screen.textContent+="3";
		break;
		case "4":
			screen.textContent+="4";
		break;
		case "5":
			screen.textContent+="5";
		break;
		case "6":
			screen.textContent+="6";
		break;
		case "7":
			screen.textContent+="7";
		break;
		case "8":
			screen.textContent+="8";
		break;
		case "9":
			screen.textContent+="9";
		break;
		case "0":
			screen.textContent+="0";
		break;
		case ".":
			dot();
		break;
		case "+":
			add();
		break;
		case "-":
			sub();
		break;
		case "*":
			multi();
		break;
		case "/":
			div();
		break;
		case "Enter":
			equal();
		break;
		case "Backspace":
			screen.textContent = screen.textContent.substring(0,screen.textContent.length-1);
		break;
		case "c":
		case"C":
			clear();
		break;
		
		
		
		}
	
	});
