
$(document).ready(function(){
    $("#form").val();

});

$(document).ready(function(){

    $('.trigger').bind('touchstart', function(){
    $('ul#.social').addClass('thover');
    return false;
}).bind('touchend', function(){
    $(this).removeClass('thover');
});
    $('.searchtrigger').bind('touchstart', function(){
    $('ul#search').addClass('thover');
    return false;
}).bind('touchend', function(){
    $(this).removeClass('thover');
});
});

// DOM ready
$(document).ready(function(){

// Create the dropdown base
$("<select />").appendTo("#top_menu");

// Create default option "Go to..."
$("<option />", {
 "selected": "selected",
 "value"   : "",
 "text"    : "Menu Selection..."
}).appendTo("#top_menu select");

// Populate dropdown with menu items
$("#top_menu a").each(function() {
var el = $(this);
$("<option />", {
   "value"   : el.attr("href"),
   "text"    : el.text()
}).appendTo("#top_menu select");
});

// To make dropdown actually work
// To make more unobtrusive: http://css-tricks.com/4064-unobtrusive-page-changer/
$("#top_menu select").change(function() {
window.location = $(this).find("option:selected").val();
});

});