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
	$(".foliawater-overlay").click(function(){
        window.location.href="work-foliawater.html";
    });

    $(".pdp-overlay").click(function(){
        window.location.href="work-pdp.html";
    });

    $(".twitchgives-overlay").click(function(){
        window.location.href="work-twitchgives.html";
    });

    $(".commdesign-overlay").click(function(){
        window.location.href="work-commdesign.html";
    });

    $(".ra-ca-overlay").click(function(){
        window.location.href="work-ra.html";
    });

    $(".sustain-overlay").click(function(){
        window.location.href="work-sustain.html";
    });

    $(".ddd-ditf-overlay").click(function(){
        window.location.href="work-ddd-ditf.html";
    });

    $(".behrmann-overlay").click(function(){
        window.location.href="work-behrmann.html";
    });

    $(".bakewiz-overlay").click(function(){
        window.location.href="work-bakewiz.html";
    });
});