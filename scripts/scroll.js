 // Start Skrollr
window.onload = function() {
  var s = skrollr.init(
  {
    forceHeight: false,
    smoothScrolling:true,
    render: function(data) {              
      //Debugging - Log the current scroll position.
      //console.log(data.curTop);
    },
    mobileCheck: function() {
      return false;
    }
  });

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
}