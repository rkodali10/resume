$(document).ready(function() {
    $("#about").hide();
    
   $('div').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });
   $('div').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       }); 
   });
   $('div').click(function() {
       //$('div').fadeIn(1000);
       $('div').fadeTo('fast',1);
       $(this).fadeTo('fast',0.25);
       //$(this).toggle(1000);
   }); 
    
    $('.link').click(function() {
        $('.vanish').fadeOut('slow');
    });
});