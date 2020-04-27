$(document).ready(function (){
    
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        var scroll2 = $(window).width();
        console.log(scroll)
        
        //섹션별 애니메이션 1~4
        
        if(scroll2>1280){
            
            if(scroll>=311){
                $('.plot_sec ul li:nth-of-type(1)').addClass('on');
            }else{}

            if(scroll>=811){
                $('.plot_sec ul li:nth-of-type(2)').addClass('on');
            }else{}
        
            if(scroll>=1311){
                $('.plot_sec ul li:nth-of-type(3)').addClass('on');
            }else{}

            if(scroll>=1811){
                $('.plot_sec ul li:nth-of-type(4)').addClass('on');
            }else{}
        
            if(scroll>=2211){
                $('.plot_sec ul li:nth-of-type(5)').addClass('on');
            }else{}

            if(scroll>=2811){
                $('.plot_sec ul li:nth-of-type(6)').addClass('on');
            }else{}
            
        }else if(scroll2<=1280 && scroll2>1024){
            
            if(scroll>=200){
                $('.plot_sec ul li:nth-of-type(1)').addClass('on');
            }else{}

            if(scroll>=650){
                $('.plot_sec ul li:nth-of-type(2)').addClass('on');
            }else{}
        
            if(scroll>=1100){
                $('.plot_sec ul li:nth-of-type(3)').addClass('on');
            }else{}

            if(scroll>=1500){
                $('.plot_sec ul li:nth-of-type(4)').addClass('on');
            }else{}
        
            if(scroll>=2000){
                $('.plot_sec ul li:nth-of-type(5)').addClass('on');
            }else{}

            if(scroll>=2450){
                $('.plot_sec ul li:nth-of-type(6)').addClass('on');
            }else{}
            
        }else if(scroll2<=1024 && scroll2>768){
            
            if(scroll>=300){
                $('.plot_sec ul li:nth-of-type(1)').addClass('on');
            }else{}

            if(scroll>=900){
                $('.plot_sec ul li:nth-of-type(2)').addClass('on');
            }else{}
        
            if(scroll>=1600){
                $('.plot_sec ul li:nth-of-type(3)').addClass('on');
            }else{}

            if(scroll>=2200){
                $('.plot_sec ul li:nth-of-type(4)').addClass('on');
            }else{}
        
            if(scroll>=2800){
                $('.plot_sec ul li:nth-of-type(5)').addClass('on');
            }else{}

            if(scroll>=3500){
                $('.plot_sec ul li:nth-of-type(6)').addClass('on');
            }else{}
            
        }else if(scroll2<=768 && scroll2>480){
            
            if(scroll>=200){
                $('.plot_sec ul li:nth-of-type(1)').addClass('on');
            }else{}

            if(scroll>=800){
                $('.plot_sec ul li:nth-of-type(2)').addClass('on');
            }else{}
        
            if(scroll>=1350){
                $('.plot_sec ul li:nth-of-type(3)').addClass('on');
            }else{}

            if(scroll>=1900){
                $('.plot_sec ul li:nth-of-type(4)').addClass('on');
            }else{}
        
            if(scroll>=2500){
                $('.plot_sec ul li:nth-of-type(5)').addClass('on');
            }else{}

            if(scroll>=3100){
                $('.plot_sec ul li:nth-of-type(6)').addClass('on');
            }else{}
            
        }else{
            
            if(scroll>=200){
                $('.plot_sec ul li:nth-of-type(1)').addClass('on');
            }else{}

            if(scroll>=700){
                $('.plot_sec ul li:nth-of-type(2)').addClass('on');
            }else{}
        
            if(scroll>=1100){
                $('.plot_sec ul li:nth-of-type(3)').addClass('on');
            }else{}

            if(scroll>=1500){
                $('.plot_sec ul li:nth-of-type(4)').addClass('on');
            }else{}
        
            if(scroll>=2000){
                $('.plot_sec ul li:nth-of-type(5)').addClass('on');
            }else{}

            if(scroll>=2500){
                $('.plot_sec ul li:nth-of-type(6)').addClass('on');
            }else{}
        }

    });
    
});