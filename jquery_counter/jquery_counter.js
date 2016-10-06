var Counter = {
  generate_counter: function() {
    //
    var add_button = $("<button>add</button>");
    var sub_button = $("<button>sub</button>");
    var count = $("<span>0</span>");

    add_button.css('margin', '.5em');

    add_button.on('click', function() {
      var count_num = Number(count.text())
      count.text(count_num + 1);

      count.css('font-size', (count_num + 14) + 'px')
    })

    sub_button.css('margin', '.5em');

    sub_button.on('click', function() {
      count.text(Number(count.text()) - 1);
    })

    var counter = $("<div></div>");
    counter.append(sub_button);
    counter.append(count);
    counter.append(add_button);

    $("body").append(counter);
  }
}

Counter.generate_counter()
Counter.generate_counter()
Counter.generate_counter()


// $(function up() {
//   $('span.num') += 1
// });
// $(function down() {
//   $('span.num') -= 1
// });
// var $body = $('<body>');
// $('<span><button class="plus">+</button></span>').prependTo($body);
// $('<span class="num">0</span>').prependTo($body);
// $('<span><button class="minus">-</button></span>').prependTo($body);
// $("button.plus").on('click', up());
// $("button.minus").on('click', down())