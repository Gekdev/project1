$(document).ready(function (){
     
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        var scroll2 = $(window).width();
        
        if(scroll2>1280){

            //섹션별 애니메이션 1~4
            if(scroll>=400){
                $('.sec1_con').addClass('on');
            }else{}

            if(scroll>=1500){
                $('.sec2_con').addClass('on');
            }else{}

            if(scroll>=2600){
                $('.sec3_con').addClass('on');
            }else{}

            if(scroll>=3900){
                $('.sec4_con').addClass('on');
            }else{}

            //섹션1 좌우에서 나타나기
            if(scroll>=600){
                $('.sec1_bgimg').addClass('lefting');
            }
            
            $('.grid1_2').addClass('grid1');
            $('.grid1_2').removeClass('grid1_third');
            $('.sec1_third_img').attr("src", 'images/main/sec1_img3.jpg');
            
            //카멜레온, 머리 드롭
            if(scroll>=4250){
                $('.sec4_bgimg').css({
                    background: 'url(images/main/sec4_bg1.png) left top no-repeat, url(images/main/sec4_bg2_2.png) left bottom no-repeat, url(images/main/sec4_bg3.png) right center no-repeat'
                });
            }else{}

            if(scroll>=4600){
                $('.sec4_bgimg').css({
                    background: 'url(images/main/sec4_bg1.png) left top no-repeat, url(images/main/sec4_bg2_3.png) left bottom no-repeat, url(images/main/sec4_bg3.png) right center no-repeat'
                });
            }else{}

            //떨어지는 라푼젤
            if(scroll>=4800){
                $('.bg4_dropbg').addClass('on');
                $('.bg4_dropbg').css({
                    background: 'url(images/main/bg4_2.png) center top no-repeat',
                });
            }else{}

        }else if(scroll2<=1280 && scroll2>1024){

            //섹션별 애니메이션 1~4
            if(scroll>=350){
                $('.sec1_con').addClass('on');
            }else{}

            if(scroll>=1700){
                $('.sec2_con').addClass('on');
            }else{}

            if(scroll>=2900){
                $('.sec3_con').addClass('on');
            }else{}

            if(scroll>=4200){
                $('.sec4_con').addClass('on');
            }else{}

            //섹션1 좌우에서 나타나기
            if(scroll>=500){
                $('.sec1_bgimg').addClass('lefting');
            }
            
            //섹션1 이미지3 경로, css 바꾸기
            $('.grid1_2').addClass('grid1_third');
            $('.grid1_2').removeClass('grid1');
            $('.sec1_third_img').attr("src", 'images/main/sec1_img3_2.jpg');
            $('.grid_third figure.effect-oscar figcaption').css('width','620px');
            
            //카멜레온, 머리 드롭
            if(scroll>=4500){
                $('.sec4_bgimg').css({
                    background: 'url(images/main/sec4_bg1.png) left top no-repeat, url(images/main/sec4_bg2_2.png) left bottom no-repeat'
                });
            }else{}

            if(scroll>=4700){
                $('.sec4_bgimg').css({
                    background: 'url(images/main/sec4_bg1.png) left top no-repeat, url(images/main/sec4_bg2_3.png) left bottom no-repeat'
                });
            }else{}

            //떨어지는 라푼젤
            if(scroll>=5000){
                $('.bg4_dropbg').addClass('on');
                $('.bg4_dropbg').css({
                    background: 'url(images/main/bg4_2_1280.png) center top no-repeat',
                });
                
            }else{}
            
        }else if(scroll2<=1024 && scroll2>768){

            //섹션별 애니메이션 1~4
            if(scroll>=300){
                $('.sec1_con').addClass('on');
            }else{}

            if(scroll>=1700){
                $('.sec2_con').addClass('on');
            }else{}

            if(scroll>=2800){
                $('.sec3_con').addClass('on');
            }else{}

            if(scroll>=3900){
                $('.sec4_con').addClass('on');
            }else{}

            //섹션1 좌우에서 나타나기
            if(scroll>=550){
                $('.sec1_bgimg').addClass('lefting');
            }
            
            //섹션1 이미지3 경로, css 바꾸기
            $('.grid1_2').addClass('grid1_third');
            $('.grid1_2').removeClass('grid1');
            $('.sec1_third_img').attr("src", 'images/main/sec1_img3_2.jpg');
            $('.grid_third figure.effect-oscar figcaption').css('width','620px');
            
            //머리 드롭
            if(scroll>=3900){
                $('.sec4_bgimg').css({
                    background: 'url(images/main/sec4_bg1.png) left top no-repeat'
                });
            }else{}
            
            //떨어지는 라푼젤
            if(scroll>=4800){
                $('.bg4_dropbg').addClass('on');
                $('.bg4_dropbg').css({
                    background: 'url(images/main/bg4_2_1280.png) center top no-repeat',
                });
                
            }else{}
            
        }else if(scroll2<=768 && scroll2>640){
            
            //섹션별 애니메이션 1~4
            if(scroll>=300){
                $('.sec1_con').addClass('on');
            }else{}

            if(scroll>=1400){
                $('.sec2_con').addClass('on');
            }else{}

            if(scroll>=2450){
                $('.sec3_con').addClass('on');
            }else{}

            if(scroll>=3550){
                $('.sec4_con').addClass('on');
            }else{}
            
            //섹션1 이미지3 없애기
            $('.grid1_2').css({
                display: 'none'
            })
            
            //머리 드롭
            if(scroll>=3600){
                $('.sec4_bgimg').css({
                    background: 'url(images/main/sec4_bg1.png) left top no-repeat'
                });
            }else{}
            
            //떨어지는 라푼젤
            if(scroll>=4700){
                $('.bg4_dropbg').addClass('on');
                $('.bg4_dropbg').css({
                    background: 'url(images/main/bg4_2_768.png) center top no-repeat',
                });
            }else{}
            
        }else if(scroll2<=640 && scroll2>480){
            
            //섹션1 이미지3 없애기
            $('.grid1_2').css({
                display: 'none'
            })
            
            //섹션별 애니메이션 1~4
            if(scroll>=200){
                $('.sec1_con').addClass('on');
            }else{}

            if(scroll>=1100){
                $('.sec2_con').addClass('on');
            }else{}

            if(scroll>=2000){
                $('.sec3_con').addClass('on');
            }else{}
            
             //섹션4 이미지1 없애기
            $('.sec4_bgimg').css({background: 'none'});
            $('.sec4_thirdimg').css({display: 'none'});

            if(scroll>=2850){
                $('.sec4_con').addClass('on');
            }else{}
            
        }else{
            //섹션1 이미지3 없애기
            $('.grid1_2').css({
                display: 'none'
            })
            
            //섹션별 애니메이션 1~4
            if(scroll>=200){
                $('.sec1_con').addClass('on');
            }else{}

            if(scroll>=1100){
                $('.sec2_con').addClass('on');
            }else{}

            if(scroll>=2000){
                $('.sec3_con').addClass('on');
            }else{}
            
             //섹션4 이미지1 없애기
            $('.sec4_bgimg').css({background: 'none'});
            $('.sec4_thirdimg').css({display: 'none'});

            if(scroll>=2850){
                $('.sec4_con').addClass('on');
            }else{}
        }
        
        //var vHeight=$('#videoBG').height();
        $('.text').text(scroll);
        $(window).resize(function(){
//            var scroll = $(window).scrollTop();
//            var scroll2 = $(window).width();    
//            
//            //섹션1 이미지 변경
//            if(scroll2<=1280){
//                $('.grid1_2').addClass('grid1_third');
//                $('.grid1_2').removeClass('grid1');
//                $('.sec1_third_img').attr("src", 'images/main/sec1_img3_2.jpg');
//                $('.sec4_bgimg').css({
//                    background: 'url(images/main/sec4_bg1.png) left top no-repeat,                    url(images/main/sec4_bg2_2.png) left bottom no-repeat'
//                });
//                
//                if(scroll>=4600){
//                    $('.sec4_bgimg').css({
//                    background: 'url(images/main/sec4_bg1.png) left top no-repeat,                    url(images/main/sec4_bg2_3.png) left bottom no-repeat'
//                    });
//                }
//                
//            }else{
//                $('.grid1_2').addClass('grid1');
//                $('.grid1_2').removeClass('grid1_third');
//                $('.sec1_third_img').attr("src", 'images/main/sec1_img3.jpg');
//                $('.sec4_bgimg').css({
//                    background: 'url(images/main/sec4_bg1.png) left top no-repeat,                    url(images/main/sec4_bg2_3.png) left bottom no-repeat'
//                });
//            }
            
        });
        
    });
});