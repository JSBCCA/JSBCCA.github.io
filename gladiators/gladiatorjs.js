// make turns, make "game over", make critical hits, make movement, make SEAL!!!
// fix seal position, (Rage mode?), (special effects?), can't play after game over

var health_one = 100;
var health_two = 100;
var rage_one = 0;
var rage_two = 0;

function heal_one() {
  if (health_one > 0 && health_two < 100 && rage_one >= 10)  {
    health_one = health_one + 12;
    rage_one = rage_one - 10;
    var health_bar = document.getElementsByClassName('progress-bar-success')[0];
    health_bar.style.width = health_one + "%";
    var rage_bar = document.getElementsByClassName('progress-bar-danger')[0];
    rage_bar.style.width = rage_one + "%";
  } else if (health_one == 0) {
    alert("R.I.P. in Peace.");
  } else {alert("Can't do dat.")}
}

function attack_one() {
  if (health_two > 0) {
    health_two = Math.max(health_two - 20, 0);
    rage_one = Math.min(rage_one + 15, 100);
  }
  // get the relevant element(s)
  // update it(them)
    var health_bar = document.getElementsByClassName('progress-bar-success')[1];
    health_bar.style.width = health_two + "%";
    var rage_bar = document.getElementsByClassName('progress-bar-danger')[0];
    rage_bar.style.width = rage_one + "%";
}

function heal_two() {
  if (health_two > 0 && health_two < 100 && rage_two >= 10) {
    health_two = health_two + 12;
    rage_two = rage_two - 10;
    var health_bar = document.getElementsByClassName('progress-bar-success')[1];
    health_bar.style.width = health_two + "%";
    var rage_bar = document.getElementsByClassName('progress-bar-danger')[1];
    rage_bar.style.width = rage_two + "%";
  } else if (health_two == 0) {
    alert("R.I.P. in Peace.");
  } else {alert("Can't do dat.")}
}

function attack_two() {
  if (health_one > 0) {
    health_one = Math.max(health_one - 20, 0);
    rage_two = Math.min(rage_two + 15, 100);
  }
  // get the relevant element(s)
  // update it(them)
    var health_bar = document.getElementsByClassName('progress-bar-success')[0];
    health_bar.style.width = health_one + "%";
    var rage_bar = document.getElementsByClassName('progress-bar-danger')[1];
    rage_bar.style.width = rage_two + "%";
}
