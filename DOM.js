
document.title ="DOM in JS";
document.body.style.backgroundColor = "silver";
document.getElementById("header").innerHTML = "Hello there!";
document.getElementById("header").style.color = "red";
document.getElementById("para").style.color = "black";
document.getElementById("para").style.fontSize = "30px";
document.getElementsByClassName("ds")[0].style.color = "blue";
document.getElementsByClassName("ds")[1].style.color = "silver";
document.getElementsByClassName("ds")[2].style.color = "yellow";
document.getElementsByClassName("ds")[3].style.color = "green";
document.getElementsByClassName("ds")[4].style.color = "white";
document.getElementsByClassName("ds")[0].style.fontSize ="30px";
document.getElementsByClassName("ds")[1].style.fontSize ="30px";
document.getElementsByClassName("ds")[2].style.fontSize ="30px";
document.getElementsByClassName("ds")[3].style.fontSize ="30px";
document.getElementsByClassName("ds")[4].style.fontSize ="30px";


let Abhi = document.getElementsByClassName("ds")
Abhi[0].style.color = "red";
Abhi[1].style.color = "green";
Abhi[2].style.color = "blue";
Abhi[3].style.color = "pink"; 
Abhi[4].style.color = "yellow"; 

document.getElementById("head").style.color = "green";
document.getElementById("head").style.fontSize = "40px";

let elements = document.querySelectorAll(".EB");
elements[0].style.color = "red";
elements[1].style.color = "green";
elements[2].style.color = "blue";
elements[3].style.color = "Orange";
elements[4].style.color = "pink";
elements[0].style.fontSize = "40px";
elements[1].style.fontSize = "30px";
elements[2].style.fontSize = "50px";
elements[3].style.fontSize = "60px";
elements[4].style.fontSize = "70px";




function changeBackground(){
  if(  document.body.style.backgroundColor === "blue")
  {  document.body.style.backgroundColor = "red"}
  else{  document.body.style.backgroundColor = "blue";}
  }


function changetext(){
  if( document.getElementById("clg").innerHTML === "HELLO")
    {document.getElementById("clg").innerHTML = "Manoahar Naik"}
  else{document.getElementById("clg").innerHTML = "HELLO";}
  document.getElementById("clg").style.backgroundColor ="coral";
}
