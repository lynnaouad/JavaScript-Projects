document.addEventListener('DOMContentLoaded', () => {


    // card options - 30
    const cardArray = [
    
        {name: 'logo1',
         img: './img/RoadSigns/Road-Signs-Traffic-Signs-3 (1).png'},
    
        {name: 'logo1',
         img: './img/RoadSigns/Road-Signs-Traffic-Signs-3 (1).png'},

         {name: 'logo2',
         img: './img/RoadSigns/Road-Signs-Traffic-Signs-3 (2).png'},
    
        {name: 'logo2',
         img: './img/RoadSigns/Road-Signs-Traffic-Signs-3 (2).png'},

         {name: 'logo3',
         img: './img/RoadSigns/Road-Signs-Traffic-Signs-3 (3).png'},
    
        {name: 'logo3',
         img: './img/RoadSigns/Road-Signs-Traffic-Signs-3 (3).png'},

         {name: 'logo4',
         img: './img/RoadSigns/Road-Signs-Traffic-Signs-3 (4).png'},
    
        {name: 'logo4',
         img: './img/RoadSigns/Road-Signs-Traffic-Signs-3 (4).png'},

         {name: 'logo5',
         img: './img/RoadSigns/Road-Signs-Traffic-Signs-3 (5).png'},
    
        {name: 'logo5',
         img: './img/RoadSigns/Road-Signs-Traffic-Signs-3 (5).png'},

         {name: 'logo6',
         img: './img/RoadSigns/Road-Signs-Traffic-Signs-3 (6).png'},
    
        {name: 'logo6',
         img: './img/RoadSigns/Road-Signs-Traffic-Signs-3 (6).png'},

         {name: 'logo7',
         img: './img/RoadSigns/Road-Signs-Traffic-Signs-3 (7).png'},
    
        {name: 'logo7',
         img: './img/RoadSigns/Road-Signs-Traffic-Signs-3 (7).png'},

         {name: 'logo8',
         img: './img/RoadSigns/Road-Signs-Traffic-Signs-3 (8).png'},
    
        {name: 'logo8',
         img: './img/RoadSigns/Road-Signs-Traffic-Signs-3 (8).png'},

         {name: 'logo9',
         img: './img/RoadSigns/Road-Signs-Traffic-Signs-3 (9).png'},
    
        {name: 'logo9',
         img: './img/RoadSigns/Road-Signs-Traffic-Signs-3 (9).png'},

         {name: 'logo10',
         img: './img/RoadSigns/Road-Signs-Traffic-Signs-3 (10).png'},
    
        {name: 'logo10',
         img: './img/RoadSigns/Road-Signs-Traffic-Signs-3 (10).png'},

         {name: 'logo11',
         img: './img/RoadSigns/Road-Signs-Traffic-Signs-3 (11).png'},
    
        {name: 'logo11',
         img: './img/RoadSigns/Road-Signs-Traffic-Signs-3 (11).png'},

         {name: 'logo12',
         img: './img/RoadSigns/Road-Signs-Traffic-Signs-3 (12).png'},
    
        {name: 'logo12',
         img: './img/RoadSigns/Road-Signs-Traffic-Signs-3 (12).png'},

         {name: 'logo13',
         img: './img/RoadSigns/Road-Signs-Traffic-Signs-3 (13).png'},
    
        {name: 'logo13',
         img: './img/RoadSigns/Road-Signs-Traffic-Signs-3 (13).png'},

         {name: 'logo14',
         img: './img/RoadSigns/Road-Signs-Traffic-Signs-3 (14).png'},
    
        {name: 'logo14',
         img: './img/RoadSigns/Road-Signs-Traffic-Signs-3 (14).png'},

         {name: 'logo15',
         img: './img/RoadSigns/Road-Signs-Traffic-Signs-3 (15).png'},
    
        {name: 'logo15',
         img: './img/RoadSigns/Road-Signs-Traffic-Signs-3 (15).png'},]
    
    cardArray.sort( () => 0.5 - Math.random())
    
    
    // Create Board
    const grid = document.querySelector('.grid')
    
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []
    
    function createBoard(){
    
        for(let i=0 ; i < cardArray.length; i++){
    
            // create 12 img elements with # id
            var card = document.createElement('img')
    
            card.setAttribute('src','./img/background.jpg')
            card.setAttribute('data-id', i)
    
            card.addEventListener('click',flipcard)
    
            grid.appendChild(card) } }
    
    
    // Check for Matches
    function checkForMatch(){
        var cards = document.querySelectorAll('img')
    
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        const nextLevel = document.getElementById("nextLevel")
    
        if(cardsChosen[0] === cardsChosen[1])
            { cards[optionOneId].style.opacity="0.5"
              cards[optionTwoId].style.opacity="0.5"
        
              cards[optionOneId].removeEventListener('click', flipcard)
              cards[optionTwoId].removeEventListener('click', flipcard)
              
             cardsWon.push(cardsChosen)}
    
        else {
            cards[optionOneId].setAttribute('src', './img/background.jpg')
            cards[optionTwoId].setAttribute('src', './img/background.jpg')}
    
        cardsChosen = []
        cardsChosenId = []
    
        // Results 
    
        if( cardsWon.length === cardArray.length/2){
            clearInterval(timerId);
            countdown.style.display="none"
            result.textContent = ' Congratulations! You found them all!'
    
            
            nextLevel.style.display="block"
            
             } }
    
    
    // Flip your card
    function flipcard(){
    
        var cardId = this.getAttribute('data-id')
    
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
    
    
        // we can't click on the same picture more than once
        if(cardsChosenId[0] === cardsChosenId[1]){
            cardsChosen.pop()
            cardsChosenId.pop()}
    
        this.setAttribute('src', cardArray[cardId].img) 
    
        if(cardsChosen.length === 2)
            setTimeout(checkForMatch, 500) }  // Buffer Time
    
    createBoard()  })
    
    
    
    function nextLevel(url){
        win=window.open(level2.html,'_self');
        win.focus();}
    
    
    
    function beginTimer(){
    
        const startingMinutes = 1
        const startingSeconds = 30
    
        let time = startingMinutes * 60 + startingSeconds
       // let time = startingSeconds
    
        const countdownEl = document.getElementById('countdown')
    
        // call the function every second
        timerId = setInterval(updateCountdown, 1000) 
    
        function updateCountdown(){
    
            let minutes = Math.floor(time/60)
            let seconds = time % 60
            
    
            if(seconds<0){
                clearInterval(timerId);
                lost() }
    
            seconds = seconds < 10 ? '0'+seconds : seconds
        
            countdownEl.innerHTML = `0${minutes}:${seconds}`
    
            time-- } }
    
    
    // function to run once only
     var timer = ( function() { var executed = false;
                                     return function(){
    
                                         if(!executed)
                                            { executed = true;
                                              beginTimer() } };
                                } )();
    
     function lost(){
        var finish = document.querySelectorAll('img')
    
        countdown.style.display="none"
        result.textContent = ' You Lost! Try Again!'
    
        for(let j=0; j< 20; j++)
            finish[j].style.opacity="0.5"; 
    
        setTimeout(() => {location.reload(true)} , 900) }
    
    
