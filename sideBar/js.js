const toggle = document.querySelector(".sidebar-toggle");
const close = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggle.addEventListener("click", function(){

    sidebar.classList.add("show-sidebar");
    toggle.style.visibility="hidden";
});

close.addEventListener("click", function(){

    sidebar.classList.remove("show-sidebar");
    toggle.style.visibility="visible";


});