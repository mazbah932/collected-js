 //sticky header
    $(window).on('scroll',function() {    
       var scroll = $(window).scrollTop();
       if (scroll <250) {
        $("#sticky-navbar").removeClass("sticky");
       }else{
        $("#sticky-navbar").addClass("sticky");
       }
    });
	//sticky header End!!