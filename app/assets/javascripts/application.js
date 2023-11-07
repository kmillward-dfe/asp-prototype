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

$('.govuk-phase-banner').insertAfter('#app-navigation');
$(".app-section").insertAfter(".govuk-phase-banner");

$("#ks1-reading-exp-std-table-link").click(function(){
  $("#ks1-reading-exp-std-table").slideToggle("fast");
});

$("#ks1-reading-hi-std-table-link").click(function(){
  $("#ks1-reading-hi-std-table").slideToggle("fast");
});

$("#ks1-writing-exp-std-table-link").click(function(){
  $("#ks1-writing-exp-std-table").slideToggle("fast");
});

$("#ks1-writing-hi-std-table-link").click(function(){
  $("#ks1-writing-hi-std-table").slideToggle("fast");
});

$("#ks1-maths-exp-std-table-link").click(function(){
  $("#ks1-maths-exp-std-table").slideToggle("fast");
});

$("#ks1-maths-hi-std-table-link").click(function(){
  $("#ks1-maths-hi-std-table").slideToggle("fast");
});
$("#phonics-attainment-clusters-table-link").click(function(){
  $("#phonics-attainment-clusters-table").slideToggle("fast");
});
$("#phonics-attainment-percentage-table-link").click(function(){
  $("#phonics-attainment-percentage-table").slideToggle("fast");
});


// $('.govuk-header__container').append("<div class='header-links'><p>Joe Bloggs</p><ul><li><a href='#' class='header-sign-out'>Sign out</a></li></ul>");
// $('.govuk-cookie-banner').insertBefore('.govuk-header');
// $('#app-navigation').insertAfter('.govuk-header');
//add active classes to urls
// $(document).ready(function () {
//   if (window.location.href.indexOf("index") != -1){ 
//     $('#app-navigation li:nth-child(1)').addClass('active');
//   }
//   if (window.location.href.indexOf("search") != -1){ 
//     $('#app-navigation li:nth-child(2)').addClass('active');
//   }
//   if (window.location.href.indexOf("my-school") != -1){ 
//     $('#app-navigation li:nth-child(3)').addClass('active');
//   }
//   if (window.location.href.indexOf("key-stage-1") != -1){ 
//     $('#app-navigation li:nth-child(3)').addClass('active');
//   }
//   if (window.location.href.indexOf("key-stage-2") != -1){ 
//     $('#app-navigation li:nth-child(3)').addClass('active');
//   }
//   if (window.location.href.indexOf("key-stage-4") != -1){ 
//     $('#app-navigation li:nth-child(3)').addClass('active');
//   }
//   if (window.location.href.indexOf("phonics") != -1){ 
//     $('#app-navigation li:nth-child(3)').addClass('active');
//   }
//   if (window.location.href.indexOf("mtc") != -1){ 
//     $('#app-navigation li:nth-child(3)').addClass('active');
//   }
//   if (window.location.href.indexOf("qla") != -1){ 
//     $('#app-navigation li:nth-child(3)').addClass('active');
//   }
//   if (window.location.href.indexOf("other-reports") != -1){ 
//     $('#app-navigation li:nth-child(3)').addClass('active');
//   }
//   if (window.location.href.indexOf("useful-links") != -1){ 
//     $('#app-navigation li:nth-child(3)').addClass('active');
//   }
//   if (window.location.href.indexOf("release-timetable") != -1){ 
//     $('#app-navigation li:nth-child(6)').addClass('active');
//   }
//   if (window.location.href.indexOf("guidance") != -1){ 
//     $('#app-navigation li:nth-child(7)').addClass('active');
//   }
// })