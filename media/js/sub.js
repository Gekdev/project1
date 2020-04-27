$(document).ready(function(){
  
    var screenSize = $(window).width();
	var screenHeight = $(window).height();
    var current=false;
  	
	$(".clip").css('margin-top',screenHeight);
	$(".container").css('margin-top',screenHeight);
	$(".plot_sec").css('margin-top',screenHeight);
	$(".character_sec").css('margin-top',screenHeight);
    
     //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
    $(window).resize(function(){    
      
        screenSize = $(window).width(); 
        screenHeight = $(window).height();
		  
        $(".clip").css('margin-top',screenHeight);
		$(".container").css('margin-top',screenHeight);
		$(".plot_sec").css('margin-top',screenHeight);
	    $(".character_sec").css('margin-top',screenHeight);
        
    });
    
    //다운 버튼 클릭시 한페이지 전체 넘어가게
		$('.down').click(function(){
			  screenHeight = $(window).height();
			  $('html,body').animate({'scrollTop':screenHeight}, 1000);
		});
		
});