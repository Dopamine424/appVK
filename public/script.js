var templateItem = document.getElementById("item");
var svg = document.getElementById("arrow");
x = 0;
templateItem.onclick = function() {
    x+=180;
    svg.style.transform = 'rotate(' + x + 'deg)';
}

var templateItem2 = document.getElementById("item2");
var svg2 = document.getElementById("arrow2");
let x2 = 0;
templateItem2.onclick = function() {
    x2+=180;
    svg2.style.transform = 'rotate(' + x2 + 'deg)';
}


var templateItem3 = document.getElementById("item3");
var svg3 = document.getElementById("arrow3");
let x3 = 0;
templateItem3.onclick = function() {
    x3+=180;
    svg3.style.transform = 'rotate(' + x3 + 'deg)';
}
