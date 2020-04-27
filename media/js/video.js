$(document).ready(function(){
  
    var screenSize = $(window).width();
	var screenHeight = $(window).height();
    var current=false;
  	
	$("#content").css('margin-top',screenHeight);

  	if( screenSize > 768){
      $("#videoBG").show();
      $("#imgBG").hide();
    }

    if(screenSize <= 768){
      $("#videoBG").hide();
      $("#videoBG").attr('src','');
      $("#imgBG").show();
     }
    
     //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
    $(window).resize(function(){    
      
      screenSize = $(window).width(); 
      screenHeight = $(window).height();
		  
		  $("#content").css('margin-top',screenHeight);
		 
      if( screenSize > 768 && current==false){	
        $("#videoBG").show();
        $("#videoBG").attr('src','images/video/video.mp4');
        $("#imgBG").hide();
        current=true;
      }

      if(screenSize <= 768){
        $("#videoBG").hide();
        $("#videoBG").attr('src','');
        $("#imgBG").show();
        current=false;
      }
    });
    
    //다운 버튼 클릭시 한페이지 전체 넘어가게
		$('.down').click(function(){
			  screenHeight = $(window).height()-140;
			  $('html,body').animate({'scrollTop':screenHeight}, 1000);
		});
		
});