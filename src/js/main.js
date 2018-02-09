$(document).ready(function(){
  $menuBtn = $('.menuBtn');
  $nav = $('nav');

  if (window.innerWidth > 800) {
    // startup($loader, $loaderTransition, $loadingText, $gridLeftItem);
  } else {
    // mobileStartup($gridLeftItem)
  }

  $menuBtn.on('click', function() {
    openNav($nav)
  });
});

function openNav($nav) {
  $nav.toggleClass('selected')
}
