$(document).ready(function() {
    var idx = 1;
    var slider = $("#container");
    function slide_next() {
      if (idx < 2) {
        slider.animate({ left: "-=100%" }, 1000);
        idx++;
      } else {
        slider.animate({ left: "0px" }, 1500);
        idx = 1;
      }
    }
    setInterval(slide_next, 5000);
});
  