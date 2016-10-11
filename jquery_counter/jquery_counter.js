var Counter = {
  generate_counter: function() {

    var add_button = $("<button>add</button>");
    var sub_button = $("<button>sub</button>");
    var count = $("<span>0</span>");

    add_button.css('margin', '.5em');

    add_button.on('click', function() {
      var count_num = Number(count.text());
      count.text(count_num + 1);
      if (count_num < 10) {
        count.css('color', 'black')
      }
      else if (count_num > 10) {
        count.css('color', 'green')
      }
      count.css('font-size', (count_num + 14) + 'px')
    })

    sub_button.css('margin', '.5em');

    sub_button.on('click', function() {
      var count_num = Number(count.text());
      count.text(count_num - 1);
      if (count_num < 10) {
        count.css('color', 'black');
      }
      else if (count_num > 10) {
        count.css('color', 'green');
      }
      count.css('font-size', (count_num + 14) + 'px')
    })

    var counter = $("<div></div>");
    counter.append(sub_button);
    counter.append(count);
    counter.append(add_button);

    $("body").append(counter);


  },

  counter_generator: function() {
    var new_counter = $("<button>new</button>");
    new_counter.css('margin', '.5em');
    new_counter.on('click', this.generate_counter);
    $("body").append(new_counter);

  }
}

Counter.counter_generator();