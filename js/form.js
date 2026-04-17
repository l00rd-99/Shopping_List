const form = document.getElementById("form");

form.addEventListener("submit", function(e){

e.preventDefault();

const name = document.getElementById("name").value;
const quantity = document.getElementById("quantity").value;
const category = document.getElementById("category").value;
const note = document.getElementById("note").value;

if(!name){
alert("Введите название");
return;
}

const item = {

id: Date.now(),

name: name,

quantity: quantity,

category: category,

note: note,

done: false

};

let items = JSON.parse(localStorage.getItem("items")) || [];

items.push(item);

localStorage.setItem("items", JSON.stringify(items));

window.location.href = "index.html";

});