function getItems(){
    return JSON.parse(localStorage.getItem("items")) || [];
    }
    
    function save(items){
    localStorage.setItem("items", JSON.stringify(items));
    }
    
    const list = document.getElementById("list");
    const doneList = document.getElementById("doneList");
    const search = document.getElementById("search");
    
    let sortType = "name";
    
    function setSort(type){
    sortType = type;
    render();
    }
    
    function render(){
    
    let items = getItems();
    
    if(search){
    items = items.filter(item =>
    item.name.toLowerCase().includes(search.value.toLowerCase())
    );
    }
    
    /* СОРТИРОВКА */
    
    if(sortType === "name"){
    items.sort((a,b)=>a.name.localeCompare(b.name));
    }
    
    if(sortType === "quantity"){
    items.sort((a,b)=>Number(a.quantity) - Number(b.quantity));
    }
    
    list.innerHTML="";
    doneList.innerHTML="";
    
    items.forEach(item=>{
    
    const div=document.createElement("div");
    div.className="card";
    
    div.innerHTML=`
    
    <div>
    
    <h3>${item.name}</h3>
    
    <span class="category cat-${item.category}">
    ${item.category}
    </span>
    
    <p>${item.quantity}</p>
    
    ${item.note ? `<div class="note">${item.note}</div>` : ""}
    
    </div>
    
    <div>
    
    <input type="checkbox"
    ${item.done ? "checked" : ""}
    onchange="toggle(${item.id})">
    
    <button class="trash"
    onclick="removeItem(${item.id})">
    🗑
    </button>
    
    </div>
    
    `;
    
    if(item.done){
    doneList.appendChild(div);
    }else{
    list.appendChild(div);
    }
    
    });
    
    }
    
    function toggle(id){
    
    let items=getItems().map(item=>{
    
    if(item.id===id){
    item.done=!item.done;
    }
    
    return item;
    
    });
    
    save(items);
    render();
    
    }
    
    function removeItem(id){
    
    if(confirm("Удалить?")){
    
    save(getItems().filter(item=>item.id!==id));
    
    render();
    
    }
    
    }
    
    if(search){
    search.addEventListener("input",render);
    }
    
    render();