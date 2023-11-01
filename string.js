function length(){
    var a=document.getElementsByClassName("string")[0].value;
    var b=document.getElementById("out");
    b.innerHTML=a.length;  
}

function replace(){
    var a=document.getElementsByClassName("string")[0].value;
    var b=document.getElementById("out");
    b.innerHTML=a.replace(a,"its replaced");
}

function upper(){
    var a=document.getElementsByClassName("string")[0].value;
    var b=document.getElementById("out");
    b.innerHTML=a.toUpperCase();
}

function lower(){
    var a=document.getElementsByClassName("string")[0].value;
    var b=document.getElementById("out");
    b.innerHTML=a.toLowerCase();
}