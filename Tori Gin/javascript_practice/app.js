var box = document.getElementById("box");
var colors=["lavender","aqua","lime","#7fe6e8","#99ebec","#b2f0f1","#ccf5f5","#e5fafa"]

var colorIndex = 0;
var currentCount=0;

var counter = document.getElementById("counter");

counter.innerHTML = currentCount



box.addEventListener("click", function() {
box.style.backgroundColor = colors[colorIndex];
if (colorIndex === colors.length -1) {
    colorIndex = 0;
    } else {
    colorIndex++
    }

    currentCount++;
    counter.innerHTML = currentCount;
});
