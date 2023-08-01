$(document).ready(function(){
    $(window).on("scroll",function(){
        var sc = $(window).scrollTop();
        if(sc>500){
            $(".up").show();}
            else{
                $(".up").hide();}
            });
            $('.up i').click(function(){
            $("html , body").animate({scrollTop:0},
                "slow");
            });
        });