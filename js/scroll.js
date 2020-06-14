$(document).ready(function(){

    $(window).scroll(function(){

    if($(window).scrollTop()>100)
    $(".navbar").css({"background-color" : "rgba(0,0,0,.5)"});

    else
    $(".navbar").css({"background-color" : "rgba(0,0,0,1)"});


    });

});