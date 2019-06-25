$(document).ready(function () {

var open = document.querySelector("#mobMenu");
var link = document.querySelector(".top-menu");
var close = document.querySelector(".mobail-menu-close");
var mobclose = document.querySelectorAll(".top-menu ul > li");


open.addEventListener("click", function () { 
    link.classList.add("responsive"); 
    close.classList.add("mobmenu-close-block");
    open.classList.add("mobail-menuopen");
  });

close.addEventListener("click", function () {
  link.classList.remove("responsive");
  close.classList.remove("mobmenu-close-block");
  open.classList.remove("mobail-menuopen");
});


 for (var i = 0; i < mobclose.length; i++) {

mobclose[i].addEventListener("click", function () { 
  link.classList.remove("responsive");
  close.classList.remove("mobmenu-close-block");
  open.classList.remove("mobail-menuopen");
});
};
});
 
$(document).ready(function(){

var url=document.location.href; $.each($(".top-menu a"),function(){
  if(this.href==url){$(this).addClass('active');};
  });
});
 

$('.top-menu a').on('click touchend', function(e) {
    e.preventDefault();
    var el = $(this);
    var link = el.attr('href');
    window.location = link;
});

