const grandparent = document.getElementById("grandparent-id")
const parents = Array.from(document.getElementsByClassName("parent"))

parents.foreach(changeColor())

function changeColor(element) { 
    element.style.backgroundColor = "silver"
}
