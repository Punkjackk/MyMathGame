var getscore = document.getElementById('score');
var getpoint = document.getElementById('point');

getscore.innerHTML = score;
getpoint.innerHTML = point;


function bold(obj){
    obj.style.background = "rgb(243, 201, 201)";
}
function unbold(obj){
    obj.style.background = "white";
}

function restart(){
    alert("ต้องการเริ่มเกมใหม่ใช่หรือไม่?(ล้างคะแนนสะสมทั้งหมด)");
    random();
    point = 0;
    score = 0;
    getpoint.innerHTML = point;
    getscore.innerHTML = score;
    getanswer.value = '';
}
function random(){
    getpoint.innerHTML = point;
    num1 = Math.floor(Math.random() *11);
    num2 = Math.floor(Math.random() *11);
    total = num1+num2;
    getnum1.innerHTML = num1
    getnum2.innerHTML = num2
}

var getnum1 = document.getElementById('num1');
var getnum2 = document.getElementById('num2');
var getanswer = document.getElementById('answer');
var getresult = document.getElementById('result');
var score = 0;
var point = 0;
var num1 = 0;
var num2 = 0;
var total = 0;

function ans(){
    point += 1;
    checkmark();
    if (total == getanswer.value){
        getresult.innerHTML = 'ถูกต้อง';
        score += 1;
        getscore.innerHTML = score;
        getanswer.value = '';
        random();
    }
    else{
        getresult.innerHTML = 'ผิด';
        getanswer.value = '';
        random();
    }
}

var getplus = document.getElementById('plus');
var getminus = document.getElementById('minus');
var gettime = document.getElementById('time');
var getdivi = document.getElementById('divi');
getplus.checkmark = true;
getmark.innerHTML = "+";

function checkmark() {
    if(showmark.innerHTML == "+") {
        total = num1 + num2;
    }
    else if(showmark.innerHTML == "-"){
        total = num1 - num2;
    }
    else if(showmark.innerHTML == "*"){
        total = num1 * num2;
    }
    else if(showmark.innerHTML == "/"){
        total = num1 / num2;
    }
    else{
        alert("กรุณาเลือกเครื่องหมายก่อนกดปุ่มตอบ");
    }
} 

function radiomark(value) {
    showmark.innerHTML = value;
}
random()
