console.log("Hello World");
document.getElementById("heaDing").textContent = `CALCULATOR`;

let x=0;
let y=0;
let te;
let z;
let sign;

document.getElementById("valueD").textContent=``;

document.getElementById("reset").onclick = function(){
    x=0;
    y=0;
    document.getElementById("valueD").textContent=``;
    document.getElementById("ansval").textContent=``;
    te=eval(document.getElementById("ansval").textContent);
    document.getElementById("valueD").textContent=te;
}

document.getElementById("0").onclick = function(){
    document.getElementById("valueD").textContent+=0;
    document.getElementById("ansval").textContent+=0;
    x=Number(document.getElementById("valueD").textContent); 
    te=eval(document.getElementById("ansval").textContent);
    document.getElementById("valueD").textContent=te;  
}

document.getElementById("1").onclick = function(){
    document.getElementById("valueD").textContent+=1;
    document.getElementById("ansval").textContent+=1;
    x=Number(document.getElementById("valueD").textContent); 
    te=eval(document.getElementById("ansval").textContent);
    document.getElementById("valueD").textContent=te;  
}

document.getElementById("2").onclick = function(){
    document.getElementById("valueD").textContent+=2;
    document.getElementById("ansval").textContent+=2;
    x=Number(document.getElementById("valueD").textContent); 
    te=eval(document.getElementById("ansval").textContent);
    document.getElementById("valueD").textContent=te;  
}

document.getElementById("3").onclick = function(){
    document.getElementById("valueD").textContent+=3;
    document.getElementById("ansval").textContent+=3;
    x=Number(document.getElementById("valueD").textContent);
    te=eval(document.getElementById("ansval").textContent);
    document.getElementById("valueD").textContent=te;   
}

document.getElementById("4").onclick = function(){
    document.getElementById("valueD").textContent+=4;
    document.getElementById("ansval").textContent+=4;
    x=Number(document.getElementById("valueD").textContent);
    te=eval(document.getElementById("ansval").textContent);
    document.getElementById("valueD").textContent=te;   
}

document.getElementById("5").onclick = function(){
    document.getElementById("valueD").textContent+=5;
    document.getElementById("ansval").textContent+=5;
    x=Number(document.getElementById("valueD").textContent);  
    te=eval(document.getElementById("ansval").textContent);
    document.getElementById("valueD").textContent=te; 
}

document.getElementById("6").onclick = function(){
    document.getElementById("valueD").textContent+=6;
    document.getElementById("ansval").textContent+=6;
    x=Number(document.getElementById("valueD").textContent); 
    te=eval(document.getElementById("ansval").textContent);
    document.getElementById("valueD").textContent=te;  
}

document.getElementById("7").onclick = function(){
    document.getElementById("valueD").textContent+=7;
    document.getElementById("ansval").textContent+=7;
    x=Number(document.getElementById("valueD").textContent);
    te=eval(document.getElementById("ansval").textContent);
    document.getElementById("valueD").textContent=te;  
}

document.getElementById("8").onclick = function(){
    document.getElementById("valueD").textContent+=8;
    document.getElementById("ansval").textContent+=8;
    x=Number(document.getElementById("valueD").textContent);  
    te=eval(document.getElementById("ansval").textContent);
    document.getElementById("valueD").textContent=te; 
}

document.getElementById("9").onclick = function(){
    document.getElementById("valueD").textContent+=9;
    document.getElementById("ansval").textContent+=9;
    x=Number(document.getElementById("valueD").textContent); 
    te=eval(document.getElementById("ansval").textContent);
    document.getElementById("valueD").textContent=te;  
}

document.getElementById("+").onclick = function(){
    document.getElementById("ansval").textContent+='+';
    //document.getElementById("valueD").textContent=``;    
}

document.getElementById("-").onclick = function(){
    document.getElementById("ansval").textContent+='-';
    //document.getElementById("valueD").textContent=``;    
}

document.getElementById("*").onclick = function(){
    document.getElementById("ansval").textContent+='*';
    //document.getElementById("valueD").textContent=``; 
}

document.getElementById("/").onclick = function(){
    document.getElementById("ansval").textContent+='/';
    //document.getElementById("valueD").textContent=``; 
}

document.getElementById("=").onclick=function(){
    te=eval(document.getElementById("ansval").textContent);
    document.getElementById("ansval").textContent=``;
    document.getElementById("valueD").textContent=te;
}
