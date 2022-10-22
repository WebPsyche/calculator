//import {MDCRipple} from '@material/ripple';
//const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));
//const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));


let num = document.getElementById("question");
let answer = document.getElementById("answer");
let operations = document.getElementById("operation");
let plus = document.getElementById("add");
let minus = document.getElementById("subtract");
let times = document.getElementById("multiply");
let division= document.getElementById("divide");
let solve = document.getElementById("equal");
let screen = document.querySelector('#calculator-screen')
let trackSign = ""
let firstValue = num.textContent;
let equalKeyTracker = false;
let addKeyTracker = false;
let background={plus,minus,times,divide};
let text

function number(one){
    if((num.textContent==="0"||addKeyTracker===true) && one !== '.'){
        num.textContent = one;
        addKeyTracker = false;
    }else{ 
       // var sera = 
        if(one === '.' && num.textContent.includes(one)){
           
        }else{
            num.textContent += one
        }
        
        //console.log(parseFloat(num.textContent).toLocaleString())
        console.log()
    }
    add_ripple(event)
}
function operation(operator){
    operations.style.visibility = "visible"
    if(operator===1){
        //console.log("addition key");
        if(num.textContent==="0"){
            trackSign = "+"
       
        }else{
        firstValue = num.textContent;
        //console.log(firstValue);
        trackSign = "+";
        addKeyTracker = true;
        operations.textContent = "+"
        console.log(trackSign);
        }    
    }else if(operator===2){
        //console.log("division key")
        if(num.textContent==="0"){
            trackSign = "/"
        }else{
        firstValue = num.textContent;
       // console.log(firstValue);
        trackSign = "/";
        addKeyTracker = true;
        operations.textContent = "/"
       // console.log(trackSign);
        }    
    }else if(operator===3){
       // console.log("subtraction key")
        if(num.textContent==="0"){
            trackSign = "-"
        }else{
        firstValue = num.textContent;
        //console.log(firstValue);
        trackSign = "-";
        addKeyTracker = true;
        operations.textContent = "-"
       // console.log(trackSign);
        }
    }else if(operator===4){
       // console.log("multiplication key")
        if(num.textContent==="0"){
            trackSign = "*";
        }else{
        firstValue = num.textContent;
       // console.log(firstValue);
        trackSign = "*";
        addKeyTracker = true;
        operations.textContent = "*"
      //  console.log(trackSign);
        }
      } if(num.textContent==="0"){
          
      }
          
}
function equal(){
    let result;
    if(num.textContent==="0" && answer.textContent==="0"){

    }else if(answer.textContent!="0"){
        if(trackSign==="+"){
        result = parseFloat(answer.textContent)+parseFloat(num.textContent);
        answer.textContent = result;
        console.log(result);
        equalKeyTracker = true;
        addKeyTracker = true;
        trackSign = "+"
        }else if(trackSign==="-"){
            result = parseFloat(answer.textContent)-parseFloat(num.textContent);
            answer.textContent = result;
            console.log(result);
            equalKeyTracker = true;
            addKeyTracker = true;
            trackSign = "-"
        }else if(trackSign==="/"){
            result = parseFloat(answer.textContent)/parseFloat(num.textContent);
            answer.textContent = result;
            console.log(result);
            equalKeyTracker = true;
            addKeyTracker = true;
            trackSign = "/"
        }else if(trackSign==="*"){
            result = parseFloat(answer.textContent)*parseFloat(num.textContent);
            answer.textContent = result;
            console.log(result);
            equalKeyTracker = true;
            addKeyTracker = true;
            trackSign = "*"
        }
    }else{
        if(trackSign==="+"){
            result = parseFloat(firstValue)+parseFloat(num.textContent);
            console.log(result) 
            answer.textContent = result;
            equalKeyTracker = true;
            addKeyTracker = true;
            trackSign = "+"
        }else if(trackSign==="/"){
            result = parseFloat(firstValue)/parseFloat(num.textContent);
            console.log(result) 
            answer.textContent = result;
            equalKeyTracker = true;
            addKeyTracker = true;  
            trackSign = "/"          
        }else if(trackSign==="-"){
            result = parseFloat(firstValue)-parseFloat(num.textContent);
            console.log(result) 
            answer.textContent = result;
            equalKeyTracker = true;
            addKeyTracker = true; 
            trackSign = "-"
        }else if(trackSign==="*"){
            result = parseFloat(firstValue)*parseFloat(num.textContent);
            console.log(result) 
            answer.textContent = result;
            equalKeyTracker = true;
            addKeyTracker = true; 
            trackSign = "*";
        }
    }
    if(answer.textContent === "NAN" || answer.textContent === 'undefined'){
        answer.textContent = 'error'
    }
    
}
function deletescreen(){
    var dub = num.textContent.slice(0, num.textContent.length - 1)
    console.log(dub)
    if(num.textContent.length == 1){
        num.textContent = '0'
    }else{
        num.textContent = dub
    }
   firstValue = num.textContent
   add_ripple(event)
}
function clearscreen(){
    if(num.textContent !==0){
    activate_screenwipe()
    setTimeout(() => {
        num.textContent="0";
        answer.textContent="0";
    }, 1000);
   
    equalKeyTracker = false;
    addKeyTracker = false;
    trackSign = ""
    operations.style.visibility = "hidden"
    var screenwipe = document.querySelector('.screenwipe')
    }
    
}
console.log(trackSign);
let playerEl = document.getElementById("playerEl");


function add_ripple(event){
    const btn = event.currentTarget
    const circle = document.createElement('span')
    circle.classList.add('ripple')
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
  // console.log(btn.clientWidth, btn.offsetWidth)
    const radius = diameter / 2;
    const ripple = document.querySelector('.ripple');
    // styles
   circle.style.width = circle.style.height = `${radius}px`
   //circle.style.left = `${event.clientX - (btn.offsetleft - radius)}px`
   //circle.style.top = `${event.clientY - (btn.offsetTop - radius)}px`
    // check for existing ripple
    if(ripple){
        ripple.remove()
    }
    btn.append(circle);
    setTimeout(()=>{
        btn.removeChild(circle)
    },800)
   
}
function activate_screenwipe(){
    const circle = document.createElement('div')
    circle.classList.add('screenSwipe')
    //const diameter = Math.max(screen.clientWidth, screen.clientHeight);
    //const radius = diameter / 2;
    const screenripple = document.querySelector('.screenSwipe');
    //circle.style.width = circle.style.height = `${diameter}px`
   // circle.style.marginLeft = `${screen.offsetleft - radius}px`
   // circle.style.marginTop = `${screen.offsetTop - radius}px`
    if(screenripple){
        screenripple.remove()
    }
    screen.append(circle);
    setTimeout(()=>{
        screen.removeChild(circle)
    },1000)
}


//const topAppBarElement = document.querySelector('.mdc-top-app-bar');
//const topAppBar = new MDCTopAppBar(topAppBarElement);

//let calculatorKeys = document.querySelectorAll('#calculator-keys button')
//for(let i = 0; i < calculatorKeys.length; i++){
//    console.log(i)
//    //mdc.ripple.MDCRipple.attachTo(calculatorKeys[i]);
//}
const x = 2123323456778
const fort = x.toLocaleString()
//console.warn(fort)