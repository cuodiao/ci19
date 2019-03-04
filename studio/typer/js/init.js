
    var audios = document.getElementsByTagName('audio');
    var index = 0;

    // Notenumbers between 0-4
    var rhythm1 =[0, 1, 6 ,3, 4];
    var rhythm2 =[1, 3, 1, 2 ,4];
    var rhythm3 =[2, 4, 1, 2 ,3];
    var rhythm4 =[0, 4, 2 ,1, 4];
    var rhythm5 =[3, 2, 4, 2 ,6];
    var rhythm6 =[2, 4, 1, 5 ,3];
    var rhythm7 =[0, 3, 2 ,1, 4];
    var rhythm8 =[0, 2, 1, 3 ,4];
    var rhythm9 =[0, 4, 1, 2 ,3];
    var rhythm10 =[0, 4, 2 ,1, 3];
    var rhythm11 =[3, 1, 4, 0 ,2];
    var rhythm12 =[2, 4, 3, 0 ,1];
    var rhythm13 =[2, 5, 0 ,4, 2];
    var rhythm14 =[3, 2, 1, 4 ,0];
    var rhythm15 =[2, 6, 1, 0 ,2];
    var rhythm16 =[0, 3, 1 ,0, 4];
    var rhythm17 =[1, 6, 4, 0 ,4];
    var rhythm18 =[1, 3, 1, 0 ,3];
    var rhythm19 =[0, 3, 2 ,0, 4];
    var rhythm20 =[4, 2, 1, 0 ,7];
    var rhythm21 =[2, 4, 1, 2 ,3];
    var rhythm22 =[0, 1, 2 ,1, 4];
    var rhythm23 =[1, 4, 1, 0 ,4];
    var rhythm24 =[1, 7, 0, 2 ,3];
    var rhythm25 =[2, 1, 0 ,3, 4];
    var rhythm26 =[4, 2, 3, 0 ,4];
    var rhythm27 =[4, 2, 1, 3 ,0];
    var rhythm28 =[0, 2, 3 ,1, 0];
    var rhythm35 =[0, 1, 5, 3, 4];
    var rhythm36 =[0, 1, 6 ,3, 4];
    var rhythm37 =[0, 3, 6 ,3, 4];
    var rhythm38 =[0, 2, 7 ,3, 4];
    var currentRhythm = rhythm1;
    var interval = 1000;

    console.log(audios);
    
    window.addEventListener('keypress', function(e){

      console.log(e.charCode);

      if (e.key == 'a') {
        currentRhythm = rhythm1
      } else if(e.key == 'b') {
        currentRhythm = rhythm2;
      }
      else if(e.key == 'c') {
        currentRhythm = rhythm3;
      }
      else if(e.key == 'd') {
        currentRhythm = rhythm4;
      }
      else if(e.key == 'e') {
        currentRhythm = rhythm5;
      }
      else if(e.key == 'f') {
        currentRhythm = rhythm6;
      }
      else if(e.key == 'g') {
        currentRhythm = rhythm7;
      }
      else if(e.key == 'h') {
        currentRhythm = rhythm8;
      }
      else if(e.key == 'i') {
        currentRhythm = rhythm9;
      }
      else if(e.key == 'j') {
        currentRhythm = rhythm10;
      }
      else if(e.key == 'k') {
        currentRhythm = rhythm11;
      }
      else if(e.key == 'l') {
        currentRhythm = rhythm12;
      }
      else if(e.key == 'm') {
        currentRhythm = rhythm13;
      }
      else if(e.key == 'n') {
        currentRhythm = rhythm14;
      }
      else if(e.key == 'o') {
        currentRhythm = rhythm15;
      }
      else if(e.key == 'p') {
        currentRhythm = rhythm16;
      }
      else if(e.key == 'q') {
        currentRhythm = rhythm17;
      }
      else if(e.key == 'r') {
        currentRhythm = rhythm18;
      }
      else if(e.key == 's') {
        currentRhythm = rhythm19;
      }
      else if(e.key == 't') {
        currentRhythm = rhythm20;
      }
      else if(e.key == 'u') {
        currentRhythm = rhythm21;
      }
      else if(e.key == 'v') {
        currentRhythm = rhythm22;
      }
      else if(e.key == 'w') {
        currentRhythm = rhythm23;
      }
      else if(e.key == 'x') {
        currentRhythm = rhythm24;
      }
      else if(e.key == 'y') {
        currentRhythm = rhythm25;
      }
      else if(e.key == 'z') {
        currentRhythm = rhythm26;
      }
      else if(e.key == ' ') {
        currentRhythm = rhythm35;
      }
      else if(e.key == '!') {
        currentRhythm = rhythm36;
      }
      else if(e.key == '.') {
        currentRhythm = rhythm37;
      }
      else if(e.key == '?') {
        currentRhythm = rhythm38;
      }

    });


//Set Interval, looping through and playing the song
setInterval(function(){ 
    
      audios[index].play();
      playSong(currentRhythm);
      console.log(interval);
      console.log(currentRhythm);
   }, interval);


   function playSong(i) {
    index == i[Math.floor(Math.random()*5)];

      if(index == i[0]) {
        index = i[1];

      } else if (index == i[1]) {
        index = i[2];

      } else if(index == i[2]) {
        index = i[3];
      }
      else if(index == i[3]) {
        index = i[4];
      }
      else if(index == i[4]) {
        index = i[0];
      }
      
   }
// above everything is working for the sound effect
$(document).ready(function() {

var entryCount = 0;
var displayCount = 0;

  //our code goes here
  $(document).ready(function() {

  //capture key presses
  $(document).on("keypress", function(e) {

e.preventDefault();
    entryCount ++;
     displayCount ++;
    //translate unicode to characters        
    var char = String.fromCharCode(e.which);
      console.log("entry #" + entryCount + " : " + e.which + " | " + char + ". Showing " + displayCount);
  
    createElement(char);

  });

$(document).on("keydown", function(e) {
    //if pressed key is a backspace
    if (e.which == 8){
      e.preventDefault();
      entryCount ++;

 displayCount --;
      if (displayCount < 0) {
        displayCount = 0;
      }
      console.log("entry #" + entryCount + " : " + e.which + " | BKSP. Showing " + displayCount);
      deleteElement();
    }
  });

});

function createElement(k) {

 
  var elem = $('#cursor');
  if (k == "a" || k == "A") { elem.before('<span class="inner">A</span>'); }
  if (k == "b" || k == "B") { elem.before('<span class="inner">B</span>'); }
  if (k == "c" || k == "C") { elem.before('<span class="inner">C</span>'); }
  if (k == "d" || k == "D") { elem.before('<span class="inner">D</span>'); }
  if (k == "e" || k == "E") { elem.before('<span class="inner">E</span>'); }
  if (k == "f" || k == "F") { elem.before('<span class="inner">F</span>'); }
  if (k == "g" || k == "G") { elem.before('<span class="inner">G</span>'); }
  if (k == "h" || k == "H") { elem.before('<span class="inner">H</span>'); }
  if (k == "i" || k == "I") { elem.before('<span class="inner">I</span>'); }
  if (k == "j" || k == "J") { elem.before('<span class="inner">J</span>'); }
  if (k == "k" || k == "K") { elem.before('<span class="inner">K</span>'); }
  if (k == "l" || k == "L") { elem.before('<span class="inner">L</span>'); }
  if (k == "m" || k == "M") { elem.before('<span class="inner">M</span>'); }
  if (k == "n" || k == "N") { elem.before('<span class="inner">N</span>'); }
  if (k == "o" || k == "O") { elem.before('<span class="inner">O</span>'); }
  if (k == "p" || k == "P") { elem.before('<span class="inner">P</span>'); }
  if (k == "q" || k == "Q") { elem.before('<span class="inner">Q</span>'); }
  if (k == "r" || k == "R") { elem.before('<span class="inner">R</span>'); }
  if (k == "s" || k == "S") { elem.before('<span class="inner">S</span>'); }
  if (k == "t" || k == "T") { elem.before('<span class="inner">T</span>'); }
  if (k == "u" || k == "U") { elem.before('<span class="inner">U</span>'); }
  if (k == "v" || k == "V") { elem.before('<span class="inner">V</span>'); }
  if (k == "w" || k == "W") { elem.before('<span class="inner">W</span>'); }
  if (k == "x" || k == "X") { elem.before('<span class="inner">X</span>'); }
  if (k == "y" || k == "Y") { elem.before('<span class="inner">Y</span>'); }
  if (k == "z" || k == "Z") { elem.before('<span class="inner">Z</span>'); }
  if (k == "!" || k == "!") { elem.before('<span class="inner">!</span>'); }
  if (k == "." || k == ".") { elem.before('<span class="inner">.</span>'); }
  if (k == "?" || k == "?") { elem.before('<span class="inner">?</span>'); }
  if (k == " ") { elem.before('<span class="inner">&nbsp;</span>'); }

 
  //i do something here
}

function deleteElement() {
  $(".inner").last().remove();
}
});

