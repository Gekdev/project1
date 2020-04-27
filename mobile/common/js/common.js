$(document).ready(function(){

    //######################################//
    //             햄버거 메뉴
    //######################################//
   
    $(".btn").click(function(){
        var documentHeight =  $(document).height();
       
        $(".box").css('height',documentHeight);
        $("#nav").css('height',documentHeight);
        $("#nav").animate({
            left:0,
            opacity:1
        }, 'slow');
        $(".box").show();
    });
   
    $(".box, .mclose").click(function(){
        $("#nav").animate({
            left:'-100%',
            opacity:0
        }, 'fast');
        $(".box").hide();
    });
     
   
    //2depth 메뉴 교대로 열기 처리 
    var onoff=[false,false,false,false];
    var arrcount=onoff.length;
    $('#nav .depth1 h3>a').click(function(){
        var ind=$(this).parents('.depth1').index();
        if(onoff[ind]==false){
            $(this).parent('h3').next('ul').slideDown('slow');
            $(this).parents('.depth1').siblings('li').find('ul').slideUp('fast');
            for(var i=0; i<arrcount; i++) onoff[i]=false; 
            onoff[ind]=true;
       }else{
            $(this).parent('h3').next('ul').slideUp('fast');
            onoff[ind]=false;
       }
    });    

    //######################################//
    //                검색
    //######################################//

    $(".search").click(function(){
        var documentHeight =  $(document).height();
        $(".box").css('height',documentHeight);
        $(".searchbox").animate({
            top: 55,
            opacity: 1
        },'slow');
        $(".box").show();
        $(".box").css('opacity', .5);
    });

    $(".box").click(function(){
        $(".searchbox").animate({
            top:'-50px',
            opacity: 0
        }, 'fast');
        $(".box").hide();
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

    //######################################//
    //                푸터
    //######################################//

    //let work = true;
    var cnt=[0,0,0,0];
    $(".footer_sec1 li").click(function(){
        var ind=$(this).index(); //0~3
        cnt[ind]++;
        if(cnt[ind]%2==1){
             $(this).find('ul').slideDown('slow');
             $(this).find('i').css({'transform': 'rotate(180deg)'});
        }else{
             $(this).find('ul').slideUp('slow');
             $(this).find('i').css({'transform': 'rotate(0deg)'});
        }
    
        /*
        $(this).next('ul').each(function(){
            $(this).slideToggle(200)
        });
        */
        /*    
        $(this).children('i').each(function(){
            if(work){
                $(this).css({'transform': 'rotate(180deg)'})
                work = false;
            }else{
                $(this).css({'transform': 'rotate(0deg)'})
                work = true;
            }
        })
        */

    })

}); 