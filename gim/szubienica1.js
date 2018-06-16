
var hasla = new Array(8);
hasla[0] = "THE STATUE OF LIBERTY";
hasla[1] = "TRAFALGAR SQUARE";
hasla[2] = "BUCKINGHAM PALACE";
hasla[3] = "THE WHITE HOUSE";
hasla[4] = "SYDNEY OPERA HOUSE";
hasla[5] = "CAPITOL";
hasla[6] = "HYDE PARK";
hasla[7] = "CENTRAL PARK";
var x = Math.floor((Math.random() * 8));
var haslo = hasla[x];

function wypisz_haslo()
{
    document.getElementById('plansza').innerHTML = haslo1;
}
window.onload = wypisz_haslo;
//var chosenCategory;
var dlugosc = haslo.length;
var ile_skuch = 0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

var haslo1 = "";

for (i=0; i<dlugosc; i++)
	

{
	if (haslo.charAt(i)==" ") haslo1 = haslo1 + " ";
	else haslo1 = haslo1 + "-";
}

function wypisz_haslo()
{
	document.getElementById("plansza").innerHTML = haslo1;
}

window.onload = start;

var litery = new Array(26);

litery[0] = "A";
litery[1] = "B";
litery[2] = "C";
litery[3] = "D";
litery[4] = "E";
litery[5] = "F";
litery[6] = "G";
litery[7] = "H";
litery[8] = "I";
litery[9] = "J";
litery[10] = "K";
litery[11] = "L";
litery[12] = "M";
litery[13] = "N";
litery[14] = "O";
litery[15] = "P";
litery[16] = "Q";
litery[17] = "R";
litery[18] = "S";
litery[19] = "T";
litery[20] = "U";
litery[21] = "W";
litery[22] = "X";
litery[23] = "Y";
litery[24] = "Z";
litery[25] = "_";




function start()
{
	
	var tresc_diva ="";
	
	for (i=0; i<=25; i++)
	{
		var element = "lit" + i;
		tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+litery[i]+'</div>';
		if ((i+1) % 7 ==0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>';
	}
	
	document.getElementById("alfabet").innerHTML = tresc_diva;
	
	
	wypisz_haslo();
}

String.prototype.ustawZnak = function(miejsce, znak)
{
	if (miejsce > this.length - 1) return this.toString();
	else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
}


function sprawdz(nr)
{
	
	var trafiona = false;
	
	for(i=0; i<dlugosc; i++)
	{
		if (haslo.charAt(i) == litery[nr]) 
		{
			haslo1 = haslo1.ustawZnak(i,litery[nr]);
			trafiona = true;
		}
	}
	
	if(trafiona == true)
	{
		yes.play();
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#003300";
		document.getElementById(element).style.color = "#00C000";
		document.getElementById(element).style.border = "3px solid #00C000";
		document.getElementById(element).style.cursor = "default";
		
		wypisz_haslo();
	}
	else
	{
		no.play();
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#330000";
		document.getElementById(element).style.color = "#C00000";
		document.getElementById(element).style.border = "3px solid #C00000";
		document.getElementById(element).style.cursor = "default";	
		document.getElementById(element).setAttribute("onclick",";");		
		
		//skucha
		ile_skuch++;
		var obraz = "img/s"+ ile_skuch + ".jpg";
		document.getElementById("szubienica").innerHTML = '<img src="'+obraz+'" alt="" />';
	}
	
	//wygrana
	if (haslo == haslo1)
	document.getElementById("alfabet").innerHTML  = "You're right! The correct answer is: "+haslo+'<br /><br /><span class="reset" onclick="location.reload()">Next</span>';
    	//przegrana
	if (ile_skuch>=9)
	document.getElementById("alfabet").innerHTML  = "You lose! The correct answer should be: "+haslo+'<br /><br /><span class="reset" onclick="location.reload()">Next</span>';
     //pokaż zdjecie
	 if(haslo == hasla[0])
		 document.getElementById("zdjecie").innerHTML = '<img src= "img/nys.jpg" alt=""/>';
	 if(haslo == hasla[1])
		 document.getElementById("zdjecie").innerHTML = '<img src= "img/ts.jpg" alt=""/>';
	 if(haslo == hasla[2])
		 document.getElementById("zdjecie").innerHTML = '<img src= "img/bp.jpg" alt=""/>';
	 if(haslo == hasla[3])
		 document.getElementById("zdjecie").innerHTML = '<img src= "img/wh.jpg" alt=""/>';
	 if(haslo == hasla[4])
		 document.getElementById("zdjecie").innerHTML = '<img src= "img/sop.jpg" alt=""/>';
	 if(haslo == hasla[5])
		 document.getElementById("zdjecie").innerHTML = '<img src= "img/c.jpg" alt=""/>';
	 if(haslo == hasla[6])
		 document.getElementById("zdjecie").innerHTML = '<img src= "img/hp.jpg" alt=""/>';
	 if(haslo == hasla[7])
		 document.getElementById("zdjecie").innerHTML = '<img src= "img/cp.jpg" alt=""/>';
	 
	 		
  document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);
    play();
  }
}
	 
	 


