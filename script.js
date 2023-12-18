
let screen = document.querySelector(".screen");

let numBtns = Array.from(document.querySelectorAll(".num"));

let oprBtns = Array.from(document.querySelectorAll(".opr"));

let delBtn = document.querySelector(".del");

let clrBtn = document.querySelector(".clr");

let eqlBtn = document.querySelector(".equal");

let decBtn = document.querySelector(".decimal");

let firstN = 'unintialized';

let secondN = 'unintialized';

let operator = "";

let result = 0;

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


function calc(){
	
	if(firstN==='unintialized'){
			firstN = Number(screen.textContent);
			screen.textContent = '';
	}else if(secondN==='unintialized'){
			secondN = Number(screen.textContent);
			screen.textContent = '';
			screen.textContent = operate(firstN,operator,secondN);
	}else{
			firstN = Number(screen.textContent);
			screen.textContent = '';
			secondN = "unintialized";
			
		}
	
	}

function dot(){
	
	if(screen.textContent.includes(".")){
		return;
	}else{
		screen.textContent+="."
	}
	
	
	}

function del(){
	
	screenTxt = screen.textContent
		
	screen.textContent = screen.textContent.substr(0,screen.textContent.length-1)
		
	
	}
	
	
function equal(){
	
	secondN = Number(screen.textContent);
	screen.textContent = '';
	result = operate(firstN,operator,secondN);
	screen.textContent = String(result);
	operator = "";
	
	}

function clear(){
	screen.innerHTML = '';
	result=0;
	
	firstN = "unintialized";
	secondN = "unitialized";
	
	operator="";
	
	}


delBtn.addEventListener('click',e=>{	
		del();
	});
	
	
clrBtn.addEventListener('click',e=>{

		clear();
	
	});


eqlBtn.addEventListener('click',e=>{
	
	equal();
	
	});
	
decBtn.addEventListener('click',e=>{
	
	dot();
	
	})


oprBtns.forEach((item)=>{
		item.addEventListener('click',(e)=>{
			
			op = e.target.textContent;
			
			switch(op){
			
					case "+":
						if(operator!==""){
								equal();
							}
						operator="+";
						calc();
						break;
				    case "-":
						if(operator!==""){
								equal();
							}
					    operator="-";
					    calc();
						break;
		            case "X":
						if(operator!==""){
								equal();
							}
					    operator="*";
					    calc();
						break;
					case "/":
						if(operator!==""){
								equal();
							}
					    operator="/";
					    calc();
						break;
					
				
			}
			
			})
	
	})


numBtns.forEach((item)=>{
		item.addEventListener('click',(e)=>{
			 screen.textContent += e.target.textContent;
			})
	})
	

document.body.addEventListener('keyup',(e)=>{
	
	key = e.key
	
	switch(key){
		case "1":
			screen.textContent +="1";
			break;
		case "2":
			screen.textContent +="2";
			break;
		case "3":
			screen.textContent +="3";
			break;
		case "4":
			screen.textContent +="4";
			break;
		case "5":
			screen.textContent +="5";
			break;
		case "6":
			screen.textContent +="6";
			break;
		case "7":
			screen.textContent +="7";
			break;
		case "8":
			screen.textContent +="8";
			break;
		case "9":
			screen.textContent +="9";
			break;
		case "0":
			screen.textContent +="0";
			break;
		case "+":
			    operator="+";
			    calc();
			break;
		case "-":
			    operator="-";
			    calc();
			break;
		case "*":
			    operator="*";
			    calc();
			break;
		case "/":
			    operator="/";
			    calc();
			break;
		case "C":
		case "c":
			clear();
			break;
		case "Backspace":
			del();
			break;
		case "Delete":
			del();
			break;
		case "Enter":
			equal();
			break;
		case ".":
			dot();
			break;
		}
	
	})
