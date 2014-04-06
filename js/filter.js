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
			$('.experience, .year').hide();
			$(element_class_to_show).show();
		}
		else	// clicked SHOW ALL, so show everything
		{ 
			$('.experience, .year').show();
		}
	});

	$('#filterHeader').click(function(event) {
		$('#filterList').toggleClass('hide');
		$('#filterHelperMessage').toggleClass('hide');
		$('#filterHeader span')
			.toggleClass('glyphicon-circle-arrow-up')
			.toggleClass('glyphicon-circle-arrow-down');
	});

});