
const reviews = [

    {   id:1,
        name : "Sara Jones",
        img : "./img/person1.jpg",
        text : "The app is fine & well working but we need is more features like message sending / receiving animation , video profile pics , and a lot more smoother , add new themes , and can change app interface ... Divide groups and chats in different rows..  Changing of colors and all ... Hoping for the best update in the future .",
        "stars": 4 },

    {   id : 2,
        name : "Bill Anderson",
        img : "./img/person4.jpg",
        text : "Love this app, highly recomend it, it provides video chat to those who do not have not got iphone ( wich provides video chat ) it allows you to send photos and videos for free and you do not need credit to make calls .  So if you aremlooking for an app like this , dont think twice to download it !" ,
        "stars": 5},

    {   id : 3,
        name : "Anna Johnson",
        img : "./img/person2.jpg",
        text : "I would LOVE if I could pin unlimited chats , because that would help me organize my classgroups , important people and that stuff .  Only 3 is just NOT ENOUGH .  Also, the ability to send larger files (videos of more than 3 mins I guess) and maybe another way to set privacy to status." ,
        "stars": 4},

    {   id : 4,
        name : "Alex Russo",
        img : "./img/person5.jpg",
        text : "The app is wonderful , but it is hard to move WhatsApp with the same acc to another device with the backup .  After the SMS request about 5 times , I can to ask for the code only in 6 hours.  I feel that it is very time consuming.  WhatsApp , please make the waiting time shorter .  Thanks.",
        "stars": 4 },

    {   id : 5,
        name : "Susan Smith",
        img : "./img/person3.jpg",
        text : "Ahhgr!  It has got worse from the day i accept the new terms and condition , and also it constantly keeps freezing ....... And even thought i am online it does not send any messages and i don't get the others messages even  though my connection is proper ...... ",
        "stars": 2 },

    {   id : 6,
        name : "Diego Lopez",
        img : "./img/person6.jpg",
        text : "Best social app without a doubt .  Secure , easy to use and well I love it .  But , I have a suggestion would you guys add a little bit more of customization options like a color choice for chats other than the star .  You know make a little bit more lovable .  Thanks very much .",
        "stars": 5 }   ];


const img = document.getElementById("img-person");
const author = document.getElementById("author");
const info = document.getElementById("info");
const stars = document.getElementById("stars");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded' , function(){

    const item = reviews[currentItem];
    
    img.src= item.img;
    author.textContent = item.name;
    starsNb(item.stars);
    info.textContent = item.text;
});


function showPerson(person) {
    const item = reviews[person];

    img.src= item.img;
    author.textContent = item.name;
    starsNb(item.stars);
    info.textContent = item.text; }


function starsNb(nb){

    switch(nb){
        case 1 : { stars.innerHTML = '<span class="iconify-inline" data-icon="noto:star" data-width="30" data-height="30"></span><span class="iconify-inline" data-icon="dashicons:star-empty" style="color: yellow;" data-width="30" data-height="30"></span><span class="iconify-inline" data-icon="dashicons:star-empty" style="color: yellow;" data-width="30" data-height="30"></span><span class="iconify-inline" data-icon="dashicons:star-empty" style="color: yellow;" data-width="30" data-height="30"></span><span class="iconify-inline" data-icon="dashicons:star-empty" style="color: yellow;" data-width="30" data-height="30"></span>';
                    break;}

        case 2 : { stars.innerHTML = '<span class="iconify-inline" data-icon="noto:star" data-width="30" data-height="30"></span><span class="iconify-inline" data-icon="noto:star" data-width="30" data-height="30"></span><span class="iconify-inline" data-icon="dashicons:star-empty" style="color: yellow;" data-width="30" data-height="30"></span><span class="iconify-inline" data-icon="dashicons:star-empty" style="color: yellow;" data-width="30" data-height="30"></span><span class="iconify-inline" data-icon="dashicons:star-empty" style="color: yellow;" data-width="30" data-height="30"></span>';
                    break;}

        case 3 : {  stars.innerHTML = '<span class="iconify-inline" data-icon="noto:star" data-width="30" data-height="30"></span><span class="iconify-inline" data-icon="noto:star" data-width="30" data-height="30"></span><span class="iconify-inline" data-icon="noto:star" data-width="30" data-height="30"></span><span class="iconify-inline" data-icon="dashicons:star-empty" style="color: yellow;" data-width="30" data-height="30"></span><span class="iconify-inline" data-icon="dashicons:star-empty" style="color: yellow;" data-width="30" data-height="30"></span>';
                    break;}

        case 4 : {  stars.innerHTML = '<span class="iconify-inline" data-icon="noto:star" data-width="30" data-height="30"></span><span class="iconify-inline" data-icon="noto:star" data-width="30" data-height="30"></span><span class="iconify-inline" data-icon="noto:star" data-width="30" data-height="30"></span><span class="iconify-inline" data-icon="noto:star" data-width="30" data-height="30"></span><span class="iconify-inline" data-icon="dashicons:star-empty" style="color: yellow;" data-width="30" data-height="30"></span>';
                    break;}

        case 5 : {  stars.innerHTML = '<span class="iconify-inline" data-icon="noto:star" data-width="30" data-height="30"></span><span class="iconify-inline" data-icon="noto:star" data-width="30" data-height="30"></span><span class="iconify-inline" data-icon="noto:star" data-width="30" data-height="30"></span><span class="iconify-inline" data-icon="noto:star" data-width="30" data-height="30"></span><span class="iconify-inline" data-icon="noto:star" data-width="30" data-height="30"></span>';
                    break;} }

}

const prev = document.getElementById("prev");
const next = document.getElementById("next");

prev.addEventListener("mouseover", function(){
    prev.setAttribute("style", "color:green;");
});
prev.addEventListener("mouseout", function(){
    prev.setAttribute("style", "color:#7ef7bc;");
});


next.addEventListener("mouseover", function(){
    next.setAttribute("style", "color:green;");
});
next.addEventListener("mouseout", function(){
    next.setAttribute("style", "color:#7ef7bc;");
});












nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;}
  showPerson(currentItem);
});

prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });


