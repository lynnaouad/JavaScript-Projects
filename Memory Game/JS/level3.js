document.addEventListener('DOMContentLoaded', () => {


    // card options - 20
    const cardArray = [
    
        {name: 'kiss1',
         img: './img/emojies/kiss1.jpg'},
    
        {name: 'kiss1',
         img: './img/emojies/kiss1.jpg'},
    
        {name: 'kiss2',
         img: './img/emojies/kiss2.jpg'},
    
        {name: 'kiss2',
         img: './img/emojies/kiss2.jpg'},

        {name: 'love1',
         img: './img/emojies/love1.jpg'},
    
        {name: 'love1',
         img: './img/emojies/love1.jpg'},

         {name: 'love2',
         img: './img/emojies/love2.jpg'},
    
        {name: 'love2',
         img: './img/emojies/love2.jpg'},

         {name: 'smile1',
         img: './img/emojies/smile1.jpg'},
    
        {name: 'smile1',
         img: './img/emojies/smile1.jpg'},

         {name: 'smile2',
         img: './img/emojies/smile2.jpg'},
    
        {name: 'smile2',
         img: './img/emojies/smile2.jpg'},

         {name: 'smile3',
         img: './img/emojies/smile3.jpg'},
    
        {name: 'smile3',
         img: './img/emojies/smile3.jpg'},

         {name: 'smile4',
         img: './img/emojies/smile4.jpg'},
    
        {name: 'smile4',
         img: './img/emojies/smile4.jpg'},

         {name: 'sunglasses1',
         img: './img/emojies/sunglasses1.jpg'},
    
        {name: 'sunglasses1',
         img: './img/emojies/sunglasses1.jpg'},

         {name: 'sunglasses2',
         img: './img/emojies/sunglasses2.jpg'},
    
        {name: 'sunglasses2',
         img: './img/emojies/sunglasses2.jpg'}]
    
    
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
    
