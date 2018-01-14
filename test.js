//test jquery, how many pixel..
 $('.nav-item a').click(function(){
   var hash = this.hash;
   var position = $(hash).offset().top;
   alert(position);
 })
//test scrolpage-end