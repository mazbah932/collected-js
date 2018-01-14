//animation progress-bar
$( window ).scroll(function() {   
   if($( window ).scrollTop() > 2610 ){ 
  $(".progress-bar").each(function(){
    each_bar_width = $(this).attr('aria-valuenow');
    $(this).width(each_bar_width + '%');
  });
       
  }  
});
//animation progress-bar end