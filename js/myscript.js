/*****************************************/
/* INITIALIZE THE SCROLLMAGIC CONTROLLER */
/*****************************************/
var controller;
$(document).ready(function($) {
  // init controller
  controller = new ScrollMagic({loglevel: 3});
});


/***************************************/
/* THIS FUNCTION BUILDS THE ZOOM EFFECT*/
/***************************************/
$(document).ready(function($) {
  // build tween
  var tween = TweenMax.to("#animate1", 0.5, {backgroundColor: "green", scale: 2.5});

  // build scene
  var scene = new ScrollScene({triggerElement: "#trigger1"})
          .setTween(tween)
          .addTo(controller);

  // show indicators (requires debug extension)
  scene.addIndicators();
});




/****************************************************/
/* THIS FUNCTION BUILDS color change/size transform */
/****************************************************/
/*
$(document).ready(function($) {
  // build tween
  var tween = TweenMax.fromTo("#animate2", 0.5, 
      {"border-top": "0px solid white"},
      {"border-top": "30px solid white", backgroundColor: "blue", scale: 0.7}
    );

  // build scene
  var scene = new ScrollScene({triggerElement: "#trigger2", duration: 300})
          .setTween(tween)
          .addTo(controller);

  // show indicators (requires debug extension)
  scene.addIndicators();
});
*/