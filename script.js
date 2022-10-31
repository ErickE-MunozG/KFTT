var list; 
const node = document.getElementsByClassName("txtInput")[0];//

if(localStorage.getItem("list") != null){
    list = JSON.parse(localStorage.getItem("list"));
    for(var i=0;i<list.length;i++){
        let element = document.createElement("label");
        element.innerHTML = node.innerHTML += list[i];
        element.addEventListener("click", function(e) { deleteItem(e); }, false);
        document.getElementsByTagName("body")[0].appendChild(element);
    }
}else{
    list=[];
}

function deleteItem(e){
    console.log("Item to be deleted -> ",e);
    let index = list.indexOf(e.target.innerHTML);
    list.splice(index,1);
    localStorage.setItem("list",JSON.stringify(list));
    e.target.remove();
}


node.addEventListener("keyup", function(event) {
    if (event.key === "Enter" && node.value !== "") {
        let element = document.createElement("label");
        
        console.log("Enter pressed -> " + node.value);
        element.innerHTML = node.value;
        list.push(node.value);
        localStorage.setItem("list", JSON.stringify(list));
        document.getElementsByTagName("body")[0].appendChild(element);
        element.addEventListener("click", function(e) { deleteItem(e); }, false);
        node.value = "";
        console.log("list -> ", list);
    }
});