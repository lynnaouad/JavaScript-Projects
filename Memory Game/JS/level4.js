document.addEventListener('DOMContentLoaded', () => {


    // card options - 20
    const cardArray = [
    
        {name: 'logo1',
         img: './img/logo/logo1.jpg'},
    
        {name: 'logo1',
         img: './img/logo/logo1.jpg'},

         {name: 'logo2',
         img: './img/logo/logo2.jpg'},
    
        {name: 'logo2',
         img: './img/logo/logo2.jpg'},

         {name: 'logo3',
         img: './img/logo/logo3.jpg'},
    
        {name: 'logo3',
         img: './img/logo/logo3.jpg'},

         {name: 'logo4',
         img: './img/logo/logo4.jpg'},
    
        {name: 'logo4',
         img: './img/logo/logo4.jpg'},

         {name: 'logo5',
         img: './img/logo/logo5.jpg'},
    
        {name: 'logo5',
         img: './img/logo/logo5.jpg'},

         {name: 'logo6',
         img: './img/logo/logo6.jpg'},
    
        {name: 'logo6',
         img: './img/logo/logo6.jpg'},

         {name: 'logo7',
         img: './img/logo/logo7.jpg'},
    
        {name: 'logo7',
         img: './img/logo/logo7.jpg'},

         {name: 'logo8',
         img: './img/logo/logo8.jpg'},

         {name: 'logo8',
         img: './img/logo/logo8.jpg'},
    
        {name: 'logo9',
         img: './img/logo/logo9.jpg'},

         {name: 'logo9',
         img: './img/logo/logo9.jpg'},

         {name: 'logo10',
         img: './img/logo/logo10.jpg'},
    
        {name: 'logo10',
         img: './img/logo/logo10.jpg'} ]
    
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
    
        const startingMinutes = 00
        const startingSeconds = 40
    
       // let time = startingMinutes * 60  
        let time = startingSeconds
    
        const countdownEl = document.getElementById('countdown')
    
        // call the function every second
        timerId = setInterval(updateCountdown, 1000) 
    
        function updateCountdown(){
    
            //let minutes = Math.floor(time/60)
            let seconds = time % 60
            
    
            if(seconds<0){
                clearInterval(timerId);
                lost() }
    
            seconds = seconds < 10 ? '0'+seconds : seconds
        
            countdownEl.innerHTML = `00:${seconds}`
    
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
    
    
