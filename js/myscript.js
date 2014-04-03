var controller;
$(document).ready(function($) {


  /*****************************************/
  /* INITIALIZE THE SCROLLMAGIC CONTROLLER */
  /*****************************************/
    // init controller
    controller = new ScrollMagic({loglevel: 3});


  /***************************************/
  /* THIS FUNCTION BUILDS THE ZOOM EFFECT*/
  /***************************************/

    // build tweens
    var tween1 = TweenMax.to("#animate1", 0.5, {backgroundColor: "green", scale: 2.5});
    var tween2 = TweenMax.to("#animate2", 0.5, {backgroundColor: "yellow", scale: 2.5});
    var tween3 = TweenMax.to("#animate3", 0.5, {backgroundColor: "red", scale: 2.5});
    var tween4 = TweenMax.to("#animate4", 0.5, {backgroundColor: "purple", scale: 2.5});
    var tween5 = TweenMax.to("#animate5", 1, {className: "+=fish"});
    var tween6 = new TimelineMax ()
      .add([
        TweenMax.fromTo("#parallaxText .layer1", 1, {scale: 3, autoAlpha: 0.1, top: 300}, {top: -350, ease: Linear.easeNone}),
        TweenMax.fromTo("#parallaxText .layer2", 1, {scale: 2, autoAlpha: 0.3, top: 150}, {top: -175, ease: Linear.easeNone})
      ]);

    
    // build SCENES
    var scene1 = new ScrollScene({triggerElement: "#trigger1", duration: 300})
        .setPin("#animate1")
        .addTo(controller);
    
    var scene1a = new ScrollScene({triggerElement: "#trigger1"})
        .setTween(tween1)
        .addTo(controller);

    var scene2 = new ScrollScene({triggerElement: "#trigger2"})
        .setTween(tween2)
        .addTo(controller);
    
    var scene3 = new ScrollScene({triggerElement: "#trigger3"})
        .setTween(tween3)
        .addTo(controller);
    
    var scene4 = new ScrollScene({triggerElement: "#trigger4"})
        .setTween(tween4)
        .addTo(controller);

    var scene5 = new ScrollScene({triggerElement: "#trigger5", duration: 200, offset: -50})
        .setTween(tween5)
        .addTo(controller);
/*
    var scene6 = new ScrollScene({triggerElement: "#trigger6", duration: 400})
        .setTween(tween6)
        .addTo(controller);
*/


    // parallax
    new ScrollScene({
      triggerElement: "section#parallax",
      duration: $(window).height() + 300,
      offset: -150
    })
      .addTo(controller)
      .triggerHook("onCenter")
      .setTween(
        new TimelineMax().add([
          TweenMax.fromTo("#parallax #big", 1, {scale: 2, alpha: 0.1, top: "100%"}, {top: "0%", ease: Linear.easeNone}),
          TweenMax.to("#parallax #parallaxbg", 1, {backgroundPosition: "0 -260%", ease: Linear.easeNone})
        ])
      )
      .addIndicators();




    // show indicators (requires debug extension)
    scene1.addIndicators();
    scene2.addIndicators();
    scene3.addIndicators();
    scene4.addIndicators();
    scene5.addIndicators();
    scene6.addIndicators();

  
  /************************/
  /*    OTHER FUNCTIONS   */
  /************************/
    $(window).resize(function(event) {
      // Show warning message if viewport is too small
      if($(window).width() < 800){
        $('#message').removeClass('hide')
      }else{
        $('#message').addClass('hide')
      }
    }).resize(); //last .resize is to trigger the event on page load once


}); // end .ready()



// build tween from original state to final state
var tween = TweenMax.fromTo("#animate2", 0.5, 
    {"border-top": "0px solid white"},
    {"border-top": "30px solid white", backgroundColor: "blue", scale: 0.7}
  );


