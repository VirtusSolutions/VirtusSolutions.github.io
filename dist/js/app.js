$(document).ready(function(){$menuBtn=$(".menuBtn");$nav=$("nav");if(window.innerWidth>800){}else{}$menuBtn.on("click",function(){openNav($nav)})});function openNav(n){n.toggleClass("selected")}