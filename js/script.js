$(document).ready(function(){
    $(".header-menu > .wrap > ul > li").mouseover(function(){
        // console.log(this);
        $(this).find(".submenu").stop().slideDown(200);
    }).mouseout(function(){
        $(this).find(".submenu").stop().slideUp(200);
    });
});