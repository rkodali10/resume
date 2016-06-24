$(document).ready(function() {
    
	/*
   $('.item').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });
   $('.item').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       }); 
   });
   */
   
   $('.item').click(function(event) {
       //$('div').fadeIn(1000);
	   //$(this).toggle(1000);
       $('.item').fadeTo('fast',1);
       $(this).fadeTo('fast',0.25);
	   
	   $('section').hide();
	   link = event.target.id;
	   console.log(link);
	   section = "#" + link.substr(0,link.length-5);
	   console.log(section);
	   $('#contact').show();
	   $(section).show();
   }); 
    
	$('section').hide();
	$('#contact').show();
	$('#career_objectives').show();
	$('#career_objectives_link').fadeTo('fast',0.25);

	writeEmail();
});

function writeEmail() {
	var m = 'paul';  
	m += '.';			
	m += 'robotham';  
	m += '@';
	m += 'gmail';  
	m += '.com';
	document.getElementById('emailHref').href = "mailto:" + m;
	document.getElementById('emailText').innerHTML = m;
}