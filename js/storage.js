
function getItems(){
return JSON.parse(localStorage.getItem('items')) || [];
}

function saveItems(items){
localStorage.setItem('items',JSON.stringify(items));
}
