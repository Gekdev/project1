$(document).ready(function (){
    
    var img_hei = $('.character_sec ul li.char_gothel p').height();
    $('.character_sec ul li p').height(img_hei);
    
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        var scroll2 = $(window).width();
        console.log(scroll)
        
        //섹션별 애니메이션 1~4
        if(scroll2>1280){
            
            if(scroll>=300){
                $('.character_sec ul li:nth-of-type(1)').addClass('on');
            }
            if(scroll>=340){
                $('.character_sec ul li:nth-of-type(2)').addClass('on');
            }
            if(scroll>=380){
                $('.character_sec ul li:nth-of-type(3)').addClass('on');
            }
            if(scroll>=420){
                $('.character_sec ul li:nth-of-type(4)').addClass('on');
            }
            if(scroll>=460){
                $('.character_sec ul li:nth-of-type(5)').addClass('on');
            }

        }else if(scroll2<=1280 && scroll2>1024){
            
            if(scroll>=240){
                $('.character_sec ul li:nth-of-type(1)').addClass('on');
            }
            if(scroll>=280){
                $('.character_sec ul li:nth-of-type(2)').addClass('on');
            }
            if(scroll>=320){
                $('.character_sec ul li:nth-of-type(3)').addClass('on');
            }
            if(scroll>=360){
                $('.character_sec ul li:nth-of-type(4)').addClass('on');
            }
            if(scroll>=400){
                $('.character_sec ul li:nth-of-type(5)').addClass('on');
            }
            
        }else if(scroll2<=1024 && scroll2>768){
            
            if(scroll>=300){
                $('.character_sec ul li:nth-of-type(1)').addClass('on');
            }
            if(scroll>=340){
                $('.character_sec ul li:nth-of-type(2)').addClass('on');
            }
            if(scroll>=380){
                $('.character_sec ul li:nth-of-type(3)').addClass('on');
            }
            if(scroll>=900){
                $('.character_sec ul li:nth-of-type(4)').addClass('on');
            }
            if(scroll>=940){
                $('.character_sec ul li:nth-of-type(5)').addClass('on');
            }
            
        }else if(scroll2<=768 && scroll2>480){
            
            if(scroll>=200){
                $('.character_sec ul li:nth-of-type(1)').addClass('on');
            }
            if(scroll>=240){
                $('.character_sec ul li:nth-of-type(2)').addClass('on');
            }
            if(scroll>=900){
                $('.character_sec ul li:nth-of-type(3)').addClass('on');
            }
            if(scroll>=940){
                $('.character_sec ul li:nth-of-type(4)').addClass('on');
            }
            if(scroll>=1500){
                $('.character_sec ul li:nth-of-type(5)').addClass('on');
            }
            
        }else{
            
            if(scroll>=300){
                $('.character_sec ul li:nth-of-type(1)').addClass('on');
            }
            
            if(scroll>=900){
                $('.character_sec ul li:nth-of-type(2)').addClass('on');
            }
            
            if(scroll>=1600){
                $('.character_sec ul li:nth-of-type(3)').addClass('on');
            }
            if(scroll>=2300){
                $('.character_sec ul li:nth-of-type(4)').addClass('on');
            }
            if(scroll>=3000){
                $('.character_sec ul li:nth-of-type(5)').addClass('on');
            }
        }
     
    });
    
    
});