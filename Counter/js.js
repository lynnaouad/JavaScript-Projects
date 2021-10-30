var decrease = document.getElementById("btn1");
var clear = document.getElementById("btn2");
var increase = document.getElementById("btn3");

const value = document.querySelector('.value');

let count = 0;

decrease.addEventListener("click", function(){

     count--;
     colortext(count);
     value.textContent=count;
});

clear.addEventListener("click", function(){

    count=0;
    colortext(count);
    value.textContent=count;
});

increase.addEventListener("click", function(){

    count++;
    colortext(count);
    value.textContent=count;
});

function colortext(count){
    if(count < 0)
        value.style.color="red";

    else if( count==0)
                 value.style.color="black";

          else 
                 value.style.color="green"; }

