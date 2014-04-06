var controller;
var ID = "";
$(document).ready(function($) {

    /*
      INIT CONTROLLER & vars
    */
    controller = new ScrollMagic();//{loglevel: 3});
    var sceneLength = $(window).height()/1.75;

    /*
      DO PINS
    */
    // build array for Experience box IDs (the triggers)
    var IDs = [];

    for ( var i = 1; i <= 11; i++)
    { 
      IDs[i] = "#box" + i;
    }
    
    console.log(IDs);

    // Build scenes for EACH experience box
    $.each( IDs, function( key, ID ) {
        
        if(key != 0)
        {
          var scene1 = new ScrollScene({
            triggerElement: ID,
            duration: sceneLength,
            offset: ( $(ID).height()/2 ) + 25
          })
            .setPin(ID)
            .addTo( controller )
            .addIndicators();

        console.log("current id is: " + ID);
        }
    });
    
}); // end .ready()
