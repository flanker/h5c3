/* app.js */

$(function () {

  var $panorama = $('.panorama');

  var left = $panorama.offset().left;
  var width = $panorama.width();

  $('.panorama').mousemove(function (e) {
    var offset = e.pageX - left;
    var percentage = offset / width * 100;

    $panorama.css('background-position-x', percentage + '%');

  });

});