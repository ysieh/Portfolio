/*
 * Yingli Sieh, Portfolio
 * script.js
 * -----------------------------------------------
 * Organizes the overlay behavior on the Work page and content fade in on every page
 */

/*** Document Load ***/
$(document).ready(function() {
   
    // Fade in all material besides the header/nav area
    $(".row").fadeIn(1000);

    // Create panels that toggle out when the overlays are clicked
    // Needed unique overlays and panels, otherwise all panels would appear when only overlay was clicked
    // Uses sliding toggle on the panel
	$(".overlay-1").click(function(){
        $("#panel-1").slideToggle("slow");
        console.log("clicked");
    });

    $(".overlay-2").click(function(){
        $("#panel-2").slideToggle("slow");
        console.log("clicked");
    });

    $(".overlay-3").click(function(){
        $("#panel-3").slideToggle("slow");
        console.log("clicked");
    });

    $(".overlay-4").click(function(){
        $("#panel-4").slideToggle("slow");
        console.log("clicked");
    });

    $(".overlay-5").click(function(){
        $("#panel-5").slideToggle("slow");
        console.log("clicked");
    });

    $(".overlay-6").click(function(){
        $("#panel-6").slideToggle("slow");
        console.log("clicked");
    });
});