function choose(items) {
  return items[Math.floor(Math.random()*items.length)];
}

function count() {
  var counter = document.getElementById("counter");
  counter.innerText = Number(counter.innerText) + 1;

  var colors = ['red', 'purple', 'blue', 'green', 'yellow', 'orange'];
  var color = choose(colors);
  counter.style.color = color;}