var click_num = 0;

var unclick_time = 1000;
var bar = document.getElementById("bar");
var button = document.getElementById("button");

// make clicker go up as you click
function click() {
  click_num = Math.min(100, click_num + 1);
  bar.style.width = click_num + "%";
  console.log("click");
}

// make clicker go down with time
function unclick() {
  click_num = Math.max(click_num - 1, 0);
  bar.style.width = click_num + "%";
  setTimeout(unclick, unclick_time);
}

// call click and unclick
unclick()
button.addEventListener('click', click)
