 var cards = document.querySelectorAll('.card');
 var flippedCard = false;
 var lock = false;
 var firstCard;
 var secondCard;

 //loop 3la el cards whene i click
 cards.forEach(function(card) {
     card.addEventListener("click", flipCard)
 })

 //fun->add class with click

 function flipCard() {
     //  console.log(this); //card kolo(2 img)
     if (lock) return;
     if (this === firstCard) return;
     this.classList.add("flip");
     if (!flippedCard) {
         //first click
         flippedCard = true;
         firstCard = this;
         // console.log({ flippedCard, firstCard });
         return;
     } else {
         //second click

         secondCard = this;
         //console.log(firstCard.children);
         //check if 2 are same
         checkMatching()
     }
     console.log("flip");
 }

 function checkMatching() {
     //check if two cards match or not

     //  console.log(firstCard.dataset.name);
     //  console.log(secondCard.dataset.name);
     console.log("ckeck");
     if (firstCard.dataset.name === secondCard.dataset.name) {

         hideCards()
         console.log("true match");
     }
     //not match
     else {
         wait()
         console.log("false match");
     }
 }

 function hideCards() {
     console.log("hide");

     firstCard.removeEventListener("click", flipCard, true);
     secondCard.removeEventListener("click", flipCard, true);
     reset()
 }

 //function waiting 1sc to flip again whene not matched
 function wait() {
     lock = true;
     setTimeout(() => {
         firstCard.classList.remove("flip");
         secondCard.classList.remove("flip");
         reset();
         console.log("wait");
     }, 1000);

 }

 function reset() {
     [flippedCard, lock] = [false, false]
     [firstCard, secondCard] = [null, null]

 }
 // random order
 function random() {
     cards.forEach(function(card) {
         var randOrder = Math.floor(Math.random() * 12);
         card.style.order = randOrder
     })
 }
 random()