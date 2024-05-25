/*global $*/

$(function () {
    
    'use strict';
    
    var navbar = $(".navbar");
    
    $(window).scroll(function () {
        
        if ($(window).scrollTop() >= navbar.height()) {
        
            navbar.addClass("scrolled");
        
        } else {

            navbar.removeClass("scrolled");

        }
        
    });
    // click the button
    
    $(".tabs .tabs-switcher li").click(function () {
        
        $(this).addClass("selected").siblings().removeClass("selected");
        
        $($(this).data('class')).show().siblings().hide();
        
    });

});