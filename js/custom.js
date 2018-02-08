$(document).ready(function () {

    // for navbar background color when scrolling
    $(window).scroll(function () {
        var $scrolling = $(this).scrollTop();
        var stickytop = $(".sticky-top");
        if ($scrolling >= 100) {
            stickytop.addClass('navcss');
        } else {
            stickytop.removeClass('navcss');
        }
    });

    // Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Add smooth scrolling to all links
  $("nav a").on('click', function(event) {
        if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
            window.location.hash = hash;
          });
        } 
      });
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.btn_back_top').fadeIn();
        } else {
            $('.btn_back_top').fadeOut();
        }
    });

    $('.btn_back_top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

});