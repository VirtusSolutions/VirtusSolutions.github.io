$(document).ready(function(){
  $menuBtn = $('.menuBtn');

  if (window.innerWidth > 800) {
    // startup($loader, $loaderTransition, $loadingText, $gridLeftItem);
  } else {
    // mobileStartup($gridLeftItem)
  }

  $menuBtn.on('click', function() {
    alert('hi')
  });
});
