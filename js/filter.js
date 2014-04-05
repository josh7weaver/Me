$(document).ready(function($) {

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