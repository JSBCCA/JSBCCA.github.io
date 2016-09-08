var click_num = 0;

function unclick_time() {
    if (click_num >= 0 && click_num < 10) {
        return 3000;
    } else if (click_num >= 10 && click_num < 25) {
        return 2500;
    } else if (click_num >= 25 && click_num < 36) {
        return 2000;
    } else if (click_num >= 36 && click_num < 50) {
        return 1500;
    } else if (click_num >= 50 && click_num < 68) {
        return 1000;
    } else if (click_num >= 68 && click_num < 75) {
        return 500;
    } else if (click_num >= 75 && click_num < 82) {
        return 250;
    } else if (click_num >= 82 && click_num < 90) {
        return 100;
    } else if (click_num >= 90 && click_num < 95) {
        return 50;
    } else if (click_num >= 95 && click_num < 99) {
        return 25;
    } else {
        return 1;
    }
}
var bar = document.getElementById("bar");
var button = document.getElementById("button");

// make clicker go up as you click
function click() {
  click_num = Math.min(100, click_num + 1);
  bar.style.width = click_num + "%";
}

// make clicker go down with time
function unclick() {
  click_num = Math.max(click_num - 1, 0);
  bar.style.width = click_num + "%";
  setTimeout(unclick, unclick_time());
}

// call click and unclick
unclick()
button.addEventListener('click', click)
