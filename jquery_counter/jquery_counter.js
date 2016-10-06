$(function up() {
  $('') += 1
});
$(function down() {
  $('') -= 1
});
var $body = $('<body>');
$('<span>***buttonthing1***</span>').prependTo($body);
$('<span>***number***</span>').prependTo($body);
$('<span>***buttonthing2***</span>').prependTo($body);
$("***button1***").on('click', up());
$("***button2***").on('click', down())