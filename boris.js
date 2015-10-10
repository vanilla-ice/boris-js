$(document).ready(function() {
  $.fn.boris = function() {
    var fadefunc, outfunc;
    $('<div class="boris" style="z-index: 999; top: 0; transform: translateX(-100%); position:fixed;"><img src="images/boris.jpg"><br><span class="txt" style="color: red; font-size:27px;">Работаешь, петух?))</span></div>').appendTo('body');
    outfunc = function() {
      return $('.boris').css({
        'transform': 'translateX(-100%)',
        'transition': 'all 0.6s ease'
      });
    };
    fadefunc = function() {
      var percent;
      percent = 1;
      $('.boris').css({
        'margin-top': Math.floor(Math.random() * (30 - 0 + 1)) + 0 + "%",
        'transform': 'translateX(0%)',
        'transition': 'transform 0.6s ease'
      });
      return setTimeout(outfunc, 2500);
    };
    return setInterval(fadefunc, 5000);
  };
  return $('body').boris();
});