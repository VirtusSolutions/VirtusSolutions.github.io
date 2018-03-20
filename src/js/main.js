$(document).ready(function(){
  $window = $(window);
  $body = $('body')
  $menuBtn = $('.menuBtn');
  $nav = $('nav');
  $fill = nthOfType('.fill', 4);
  $mask = $('.mask');
  $filler = nthOfType('.filler', 4);
  $masking = $('.masking');
  $link = $('.link a');
  $start = $('#start');
  $loader = $('#loader');
  $path = nthOfType('path', 4);


  if (window.innerWidth > 800) {
    // startup($loader, $loaderTransition, $loadingText, $gridLeftItem);
  } else {
    // mobileStartup($gridLeftItem)
  }

  startup($fill, $mask, $loader)

  $menuBtn.on('click', function() {
    openNav($nav)
  });

  $link.on('click', function() {
    openNav($nav)
  });

  // For seeGetStarted
  var element_position = $start.offset().top;
  var screen_height = $window.height();
  var activation_offset = 0.65;//determines how far up the the page the element needs to be before triggering the function
  var activation_point = element_position - (screen_height * activation_offset);
  var max_scroll_height = $body.height() - screen_height - 5;//-5 for a little bit of buffer
  $(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;

    var element_in_view = y_scroll_pos > activation_point;
    var has_reached_bottom_of_page = max_scroll_height <= y_scroll_pos && !element_in_view;

    if(element_in_view || has_reached_bottom_of_page) {
        seeGetStarted($filler, $masking)
    }
  })

});

function openNav($nav) {
  $nav.toggleClass('selected')
}

function nthOfType(type, num) {
  var typeArray = []
  for(var i = 1; i <= num; i++) {
    typeArray.push($(type + ':nth-of-type(' + i + ')'));
  }
  return typeArray
}

function startup($fill, $mask, $loader) {
  setTimeout(function() {
    $loader.toggleClass('started');
    for(var i = 0; i < $fill.length; i++){
      $fill[i].toggleClass('started')
    }
    $mask.toggleClass('started')
  }, 1000)
  setTimeout(function() {
    $loader.toggleClass('finishedStarting');
  }, 2000)
}

function seeGetStarted($filler, $masking) {
  for(var i = 0; i < $filler.length; i++){
    $filler[i].addClass('started')
  }
  $masking.addClass('started')
}
