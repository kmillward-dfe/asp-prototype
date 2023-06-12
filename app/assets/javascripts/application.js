/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

$(window).resize(function() {
  // This will fire each time the window is resized:
  if($(window).width() <= 753) {
    //move search to the end of the mobile menu
    //$(".govuk-header__navigation-list").insertAfter($(".govuk-header "));
    $("#app-navigation").appendTo($(".govuk-header__navigation-list"));
  } else {
    // move to end of website top wrapper div
    $("#app-navigation").insertAfter($(".govuk-header "));
  }
}).resize(); 


$('.govuk-header__container').append("<div class='header-links'><ul><li><a href='#' class='header-sign-out'>Sign out</a></li></ul>");

$('.govuk-cookie-banner').insertBefore('.govuk-header');
$('.app-navigation').insertAfter('.govuk-header ');
$('.govuk-phase-banner').insertAfter('.app-navigation');
$(".app-section").insertAfter(".govuk-phase-banner");