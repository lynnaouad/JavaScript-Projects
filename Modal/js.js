const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-btn");


setTimeout(function(){
    modal.style.visibility="visible";
    overlay.style.visibility="visible";
   
} , 2000);

closeBtn.addEventListener("click", function(){
    modal.style.visibility="hidden";
    overlay.style.visibility="hidden";
})
