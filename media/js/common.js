$(document).ready(function(){
    //헤더 변경
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        if(scroll > 700){ 
            $('#headerArea').css('background','rgba(0,0,0,1)');
        }else{
            $('#headerArea').css('background','rgba(0,0,0,.8)');
        }    
    })
    
    //모바일 햄버거 버튼 
    var deg = 0;
    $(".btn").click(function(){
        deg += 90
        $(".btn").children().css({
            'transform' : 'rotate('+deg+'deg)',
            'transition': 'all 0.5s'
        })
    });
    
    $(".btn").toggle(function() {
        $("#gnb").slideDown('normal'); 
    }, function(){
        $("#gnb").slideUp('fast'); 
    });
    
    
    //######################################//
    //             탑 스크롤
    //######################################//

    $(' .topMove').hide();
        
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        
        var boxHeight = $('header').height();
        
        $('.text').text(scroll);
        if(scroll>500){
            $(' .topMove').fadeIn('slow');
        }else{
            $(' .topMove').fadeOut('fast');
        }
    }); 
        
    //화면을 이동하게 해주는것
    $(' .topMove').click(function(){
        //상단으로 스르륵 이동합니다.
        $("html,body").stop().animate({
            "scrollTop":0
        },1000); 
    });

    
});