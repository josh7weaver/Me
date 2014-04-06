$(document).ready(function($) {

	/*
		DOCUMENT WIDTH LISTNER
	*/
	$(window).resize(function(event) {
      // Show warning message if viewport is too small
      if($(window).width() < 800){
        $('#message').removeClass('hide')
      }else{
        $('#message').addClass('hide')
      }
    }).resize(); //last .resize is to trigger the event on page load once


	/*
		CLICK LISTENERS FOR FILTER
	*/
	$('#filterList').click(function(event){

		var element_class_to_show = $(event.target).data("class");

		if(element_class_to_show) //if they didn't click SHOW ALL
		{ 
			$('.experience, .year, .title').hide();
			$(element_class_to_show).show();
		}
		else	// clicked SHOW ALL, so show everything
		{ 
			$('.experience, .year, .title').show();
		}
	});

	$('#filterHeader').click(function(event) {
		
		// SHOW/HIDE the filters
		if($('#filterList').is(':visible'))	// its visible, so HIDE it
		{
			$('#filterList').fadeOut("fast");
			$('#filterHelperMessage').fadeOut("fast");
		}
		else	// it's hidden, SHOW IT
		{
			$('#filterList').fadeIn("slow");
			$('#filterHelperMessage').fadeIn("slow");
		}

		// Toggle up/down arrow
		$('#filterHeader span')
			.toggleClass('glyphicon-circle-arrow-up')
			.toggleClass('glyphicon-circle-arrow-down');
		
		// Animate in/out the content
		//console.log("hitting animate. Height is: " + $('#info').height())
		$('#info').animate({
			height: "toggle",
			opacity: "toggle"
		}, 800);
	});


	$("#filterList li, #filterHeader").hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(this).addClass("hover");
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(this).removeClass("hover");
	});
});