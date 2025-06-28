let aish=document.createElement("p");
aish.textContent="I am chitti";
aish.style.color="blue";
aish.style.fontSize="20px";
document.getElementById("vasi").appendChild(aish);
let sana=document.getElementsByClassName("list")[3];
if(sana) {
    sana.remove();
}
setTimeout(() => {
   let re = document.getElementsByClassName("list")[4];
   if (re) {
    re.remove();
   } 
}, 2000);
setTimeout(() => {
let newHedding = document.createElement("h2");
newHeading.innerHTML = "This is a new heading in javascreipt";
newHeading.style.color = "purple";
newHeading.style.fontSize = "24px";
document.body.appendChild(newHeading);
},3000);
setTimeout(() => {
    let newText = document.createElement("p");
    newText.textContent = "This text is added after 3 Seconds!";
    newText.style.color= "green";
    document.body.appendChild(newText);
}, 3000);
let tagText = document.createElement("p");
tagText.textContent = "this text is appended in the tag:";
tagText.style.color="orange";
document.getElementById("vasi").appendChild(tagText);
let myList = document.createElement("ul");
for (let i = 1; i <= 3; i++) {
    let listitems = document.createElement("li");
    listitems.textContent = "Item " + i;
    listitems.textContent.style.color="blue";
    listitems.style.fontSize="30px";
    myList.appendChild(listitems);
}