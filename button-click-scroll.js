//when click button scroll down 
//Learn more button
 $(function(){
     $('a.target-about').click(function(){
        $('html, body').animate({scrollTop:
        $('#about-me').offset().top }, 'slow');
         return false;
     });
 });
//when click button scroll down End