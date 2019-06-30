// cards array contains name of all characters
var cards  = ["ciri.png", "geralt.png", "jaskier.png", "jaskier.png", "iorweth.png", "triss.png", "geralt.png", "yen.png", "ciri.png", "triss.png", "yen.png", "iorweth.png"];
// console.log(cards);


//catch every card by Id
var c0 = document.getElementById('c0');
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');

var c4 = document.getElementById('c4');
var c5 = document.getElementById('c5');
var c6 = document.getElementById('c6');
var c7 = document.getElementById('c7');

var c8 = document.getElementById('c8');
var c9 = document.getElementById('c9');
var c10 = document.getElementById('c10');
var c11 = document.getElementById('c11');

//add eventlisener for each card

c0.addEventListener("click", function() { revealCard(0); });
c1.addEventListener("click", function() { revealCard(1); });
c2.addEventListener("click", function() { revealCard(2); });
c3.addEventListener("click", function() { revealCard(3); });

c4.addEventListener("click", function() { revealCard(4); });
c5.addEventListener("click", function() { revealCard(5); });
c6.addEventListener("click", function() { revealCard(6); });
c7.addEventListener("click", function() { revealCard(7); });

c8.addEventListener("click", function() { revealCard(8); });
c9.addEventListener("click", function() { revealCard(9); });
c10.addEventListener("click", function() { revealCard(10); });
c11.addEventListener("click", function() { revealCard(11); });


var oneVisible = false;
var turnCounter = 0;
var visibleNumber;
var lock = false;
// This funcion lets me reveal each card 

function revealCard(num) {

    var opacityValue = $('#c' +num).css('opacity');
    
    // below condition solving a problem when clickig in place where card with opacity = 0 (turnCounter  doesn't count this)

    if(opacityValue !=0 && lock == false) {
    lock = true;
        
    //alert(num)
    var picture = "url(img/" + cards[num] + ")";
    $('#c' + num).css('background-image', picture);
    $('#c' + num).addClass('cardActive');
    $('#c' + num).removeClass('card');

    if(oneVisible == false){
        // first card
        oneVisible = true;
        visibleNumber = num;
        lock = false;
    }
    else {
        // second card

        //  below condition checks that we have found card with the same characters
        if(cards[visibleNumber] == cards[num]) {
            // alert('pair');
            setTimeout(function() {hide2Cards(num, visibleNumber)}, 750);
            
        }
        else {
            // alert('miss');
            setTimeout(function() {restore2Cards(num, visibleNumber)}, 1000);
        }


        turnCounter++;
        $('.score').html('Turn counter: ' +turnCounter);
        oneVisible = false;
    }
    }
}


    
        // if two cards match, they will be hidden
     function hide2Cards(nr1, nr2) {
        $("#c" + nr1).css('opacity', '0');
        $("#c" + nr2).css('opacity', '0');

        lock = false;
    }
    
    // function restore cards if they don't match

function restore2Cards(nr1, nr2){
    $('#c' + nr1).css('background-image', 'url(img/card.png)');
    $('#c' + nr1).addClass('card');
    $('#c' + nr1).removeClass('cardActive');

    $('#c' + nr2).css('background-image', 'url(img/card.png)');
    $('#c' + nr2).addClass('card');
    $('#c' + nr2).removeClass('cardActive');

    lock = false;
}
