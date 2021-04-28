var btn = document.getElementsByTagName("button")[0];
btn.addEventListener("click",function() {
    var list = document.getElementsByTagName("ul")[0];
    var newList = document.createElement("li")
    var div = document.createElement("div")
    var icon = document.createElement("i")
    var query = document.getElementsByTagName("input")[0];
    div.appendChild(document.createTextNode(query.value));
    icon.className = "fas fa-trash-alt";
    newList.appendChild(div);
    newList.appendChild(icon)
    if(query.value != "") {
        list.appendChild(newList)
    } else {
        alert("Enter a valid item")
    }
    query.value = "";
})