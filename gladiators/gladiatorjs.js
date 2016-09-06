var health_one = 100;
var health_two = 100;

function heal_one() {
  if (health_one >= 100) {
    alert("Can't do dat. " + health_one);
  } else if (health_one > 0) {
    health_one = health_one + 10;
    alert("You're good, m8. " + health_one);
  } else if (health_one <= 0) {
    alert("R.I.P. in Peace " + health_one);
  }
}

function attack_one() {
  if (health_two > 0) {
    health_two = health_two - 20;
    alert("hyahhhhh " + health_two);
  }
}

function heal_two() {
  if (health_two >= 100) {
    alert("Can't do dat. " + health_two);
  } else if (health_two > 0) {
    health_two = health_two + 10;
    alert("You're good, m8. " + health_two);
  } else if (health_two <= 0) {
    alert("R.I.P. in Peace " + health_two);
  }
}

function attack_two() {
  if (health_one > 0) {
    health_one = health_one - 20;
    alert("hyahhhhh " + health_one);
  }
}
