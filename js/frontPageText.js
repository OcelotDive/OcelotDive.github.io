


// set up text to print, each item in array is new line

let t1 = 'Working as a front-end / full stack developer for Shout Digital with 10+ years commercial experience.';
t1 = t1.bold();
let t2 = 'With a love of problem solving and developing applications across a range of frameworks.';
t2 = t2.bold();
var bioText = new Array(
t1, t2, 'I currently specialize in remote development with Javascript and its many frameworks but have also code in other languages such as C# and SQL Server. Currently active in the open source community and a contributor and moderator for FreeCodeCamp.org.'
);
/*var bioText = new Array('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'); */


var iSpeed = 50; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = bioText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("bioParagraph");

 while ( iRow < iIndex ) {
    
      
  sContents += bioText[iRow++]  + '<br />';
     
 }
    
 destination.innerHTML = sContents + bioText[iIndex].substring(0, iTextPos) + '<span id="cursor">_</span>';
  var cursor = document.getElementById('cursor');
    setInterval(function() {
    $('#cursor').fadeOut(500);
    $('#cursor').fadeIn(500);
    },1500)
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != bioText.length ) {
   iArrLength = bioText[iIndex].length;
   setTimeout("typewriter()", 200);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
    


    
}

setTimeout(()=> {
typewriter();

}, 200)

