var health_one = 100;
var health_two = 100;

function heal_one() {
  if (health_one >= 100) {
    alert("Can't do dat. " + health_one);
  } else if (health_one > 0) {
    health_one = health_one + 10;
    alert("You: " + health_one);
    var health_bar = document.getElementsByClassName('progress-bar-success')[0];
    health_bar.style.width = health_one + "%";
  } else if (health_one <= 0) {
    alert("R.I.P. in Peace. " + health_one);
  }
}

function attack_one() {
  if (health_two > 0) {
    health_two = Math.max(health_two - 20, 0);
    alert("Other guy: " + health_two);
  }
  // get the relevant element(s)
  // update it(them)
    var health_bar = document.getElementsByClassName('progress-bar-success')[1];
    health_bar.style.width = health_two + "%";
}

function heal_two() {
  if (health_two >= 100) {
    alert("Can't do dat. " + health_two);
  } else if (health_two > 0) {
    health_two = health_two + 10;
    alert("You: " + health_two);
    var health_bar = document.getElementsByClassName('progress-bar-success')[1];
    health_bar.style.width = health_two + "%";
  } else if (health_two <= 0) {
    alert("R.I.P. in Peace. " + health_two);
  }
}

function attack_two() {
  if (health_one > 0) {
    health_one = Math.max(health_one - 20, 0);
    alert("Other guy: " + health_one);
  }
    var health_bar = document.getElementsByClassName('progress-bar-success')[0];
    health_bar.style.width = health_one + "%";
}
