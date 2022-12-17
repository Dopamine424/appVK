var templateItem = document.getElementById("item");
var svg = document.getElementById("arrow");

templateItem.onclick = function() {
    svg.classList.add('rotate');
}