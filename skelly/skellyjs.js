var click_num = 0;
var words = document.getElementById("words");

function unclick_time() {
    if (click_num >= 0 && click_num < 10) {
        words.innerText = "Click the button to catch him!";
        return 3000;
    } else if (click_num >= 10 && click_num < 25) {
        words.innerText = "Yeah, click that button!";
        return 2500;
    } else if (click_num >= 25 && click_num < 36) {
        words.innerText = "10/10 skeltons recommend clicking the button.";
        return 2000;
    } else if (click_num >= 36 && click_num < 50) {
        words.innerText = "*Button clicking intensifies*";
        return 1500;
    } else if (click_num >= 50 && click_num < 68) {
        words.innerText = "You're good at this!";
        return 1000;
    } else if (click_num >= 68 && click_num < 75) {
        words.innerText = "Where is he walking to, anyway?";
        return 500;
    } else if (click_num >= 75 && click_num < 82) {
        words.innerText = "Almost there!";
        return 245;
    } else if (click_num >= 82 && click_num < 90) {
        words.innerText = "Spoopy Skelton is impressed.";
        return 100;
    } else if (click_num >= 90 && click_num < 95) {
        words.innerText = "You are a master clicker!";
        return 50;
    } else if (click_num >= 95 && click_num < 99) {
        words.innerText = "Woah, slow down partner.";
        return 25;
    } else {
        words.innerText = "Mr. Spoops won't allow that.";
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
