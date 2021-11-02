const container = document.querySelector(".container-stage");
const seats = document.querySelectorAll(".seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const concertSelect = document.getElementById("concert");
const text = document.querySelector(".text");

let ticketPrice = parseInt(concertSelect.value);

  // concert select event
  concertSelect.addEventListener('change', e => {
    
    ticketPrice = +e.target.value;
    
    updateSelectedCount();
 });


// Seat click event
container.addEventListener('click', function(e){

    if ( e.target.classList.contains('seat') && !e.target.classList.contains('occupied')  ) {

         e.target.classList.toggle('selected');  
         text.style.visibility="visible";
         updateSelectedCount(); }
});


// Update total and count
function updateSelectedCount() {
    
    const selectedSeats = document.querySelectorAll('.seat.selected:not(.vip)');

    const selectedSeatsCount = selectedSeats.length;

    const totalPrice = selectedSeatsCount * ticketPrice;



    const selectedVipSeats = document.querySelectorAll('.seat.vip.selected');

    const selectedVipSeatsCount = selectedVipSeats.length;
        
    let vipTicketPrice = ticketPrice + 10;

    const totalVipPrice = selectedVipSeatsCount * vipTicketPrice; 


  
    count.textContent = selectedVipSeatsCount + selectedSeatsCount ;
    total.textContent = totalVipPrice + totalPrice;
  }






