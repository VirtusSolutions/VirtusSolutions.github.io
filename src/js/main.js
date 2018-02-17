$(document).ready(function(){
  $menuBtn = $('.menuBtn');
  $nav = $('nav');
  $fill = nthOfType('.fill', 4);
  $mask = $('.mask');
  $filler = nthOfType('.filler', 4);
  $masking = $('.masking');

  if (window.innerWidth > 800) {
    // startup($loader, $loaderTransition, $loadingText, $gridLeftItem);
  } else {
    // mobileStartup($gridLeftItem)
  }

  startup($fill, $mask)


  // TODO: Start this at scroll down
  seeGetStarted($filler, $masking)

  $menuBtn.on('click', function() {
    openNav($nav)
  });
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

function startup($fill, $mask) {
  for(var i = 0; i < $fill.length; i++){
    $fill[i].toggleClass('started')
  }
  $mask.toggleClass('started')
}

function seeGetStarted($filler, $masking) {
  for(var i = 0; i < $filler.length; i++){
    $filler[i].toggleClass('started')
  }
  $masking.toggleClass('started')
}
