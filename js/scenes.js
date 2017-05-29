$(function () {
  'use strict'

    function scrollEvent () {
        var currentScene = 1;

        $( window ).scroll(function() {
            var viewportHeight = $(window).height();
            var container = $('body');
            var scrollTo = $('#part'+currentScene);
            container.animate({
                scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop()
            });
            currentScene++;
        });
    };
    
    window.addEventListener("scroll", scrollEvent);
    scrollEvent();

});



