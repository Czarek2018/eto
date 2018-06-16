var cards = [
	{
		current: "statue.jpg", 
		twin: 7 
	},
	{
		current: "TRT.JPG",
		twin: 4
	},
	{
		current: "trafalgar.JPG",
		twin: 5
	},
	{
		current: "ayers.jpg",
		twin: 6
	},
	{
		current: "TT.JPG",
		twin: 1
	},
	{
		current: "ts.JPG",
		twin: 2
	},
	{
		current: "rock.jpg",
		twin: 3
	},
	{
		current: "sol.jpg",
		twin: 0
	},
	{
		current: "sydney.jpg",
		twin: 9
	},
	{
		current: "SOH.jpg",
		twin: 8
	},
	{
		current: "towerbridge.jpg",
		twin: 11
	},
	{
		current: "tb.jpg",
		twin: 10
	},
	{
		current: "bb.jpg",
		twin: 13
	},
	{
		current: "brb.jpg",
		twin: 12
	},
	{
		current: "palace.jpg",
		twin: 16
	},
	{
		current: "eye.jpg",
		twin: 17
	},
	{
		current: "buckingham.jpg",
		twin: 14
	},
	{
		current: "london.jpg",
		twin: 15
	}];
 var prevID = false; 

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

var c12 = document.getElementById('c12');
var c13 = document.getElementById('c13');
var c14 = document.getElementById('c14');
var c15 = document.getElementById('c15');
var c16 = document.getElementById('c16');
var c17 = document.getElementById('c17');


c0.addEventListener("click", function () { revealCard(0); });
c1.addEventListener("click", function () { revealCard(1); });
c2.addEventListener("click", function () { revealCard(2); });
c3.addEventListener("click", function () { revealCard(3); });
c4.addEventListener("click", function () { revealCard(4); });
c5.addEventListener("click", function () { revealCard(5); });
c6.addEventListener("click", function () { revealCard(6); });
c7.addEventListener("click", function () { revealCard(7); });
c8.addEventListener("click", function () { revealCard(8); });
c9.addEventListener("click", function () { revealCard(9); });
c10.addEventListener("click", function () { revealCard(10); });
c11.addEventListener("click", function () { revealCard(11); });
c12.addEventListener("click", function () { revealCard(12); });
c13.addEventListener("click", function () { revealCard(13); });
c14.addEventListener("click", function () { revealCard(14); });
c15.addEventListener("click", function () { revealCard(15); });
c16.addEventListener("click", function () { revealCard(16); });
c17.addEventListener("click", function () { revealCard(17); });

var oneVisible = false;
var turnCounter = 0;
var visible_nr;
var lock = false;
var pairsLeft = 9;



function revealCard(nr) {
	var opacityValue = $('#c' + nr).css('opacity');

	//alert('Opacity: '+opacityValue);

	if (opacityValue != 0 && lock == false) {
		lock = true;

		//alert(nr);

		var obraz = "url(cards/" + cards[nr].current + ")";
		$('#c' + nr).css('background-image', obraz);
		$('#c' + nr).addClass('cardA');
		$('#c' + nr).removeClass('card');
		if (oneVisible == false) {
			//first card

			oneVisible = true;
			visible_nr = nr;
			lock = false;
		}
		else {
			//second card

			if (nr == cards[prevID].twin) {
				//alert("para");

				setTimeout(function () { hide2Cards(nr, visible_nr) }, 750);

			}
			else {
				//alert("pudło");

				setTimeout(function () { restore2Cards(nr, visible_nr) }, 1000);
			}

			turnCounter++;
			$('.score').html('Turn counter: ' + turnCounter);
			oneVisible = false;
		}

		if (prevID === false) {
			prevID = nr;
		} else { 
			if (nr == cards[prevID].twin) {
				
			}
			prevID = false;
		}

	}

}
	
	{
	if (card.charAt(i)==" ") haslo1 = haslo1 + " ";
	else haslo1 = haslo1 + "-";
}
		
function hide2Cards(nr1, nr2) {
	$('#c' + nr1).css('opacity', '0');
	$('#c' + nr2).css('opacity', '0');

	pairsLeft--;

	if (pairsLeft == 0) {
		$('.plansza').html('<h1>You win!<br>Done in ' + turnCounter + ' turns</h1>');
	}

	lock = false;
}

function restore2Cards(nr1, nr2) {
	$('#c' + nr1).css('background-image', 'url(cards/UJ.jpg)');
	$('#c' + nr1).addClass('card');
	$('#c' + nr1).removeClass('cardA');

	$('#c' + nr2).css('background-image', 'url(cards/UJ.jpg)');
	$('#c' + nr2).addClass('card');
	$('#c' + nr2).removeClass('cardA');

	lock = false;
}
