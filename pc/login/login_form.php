<?
	session_start();
    @extract($_GET); 
    @extract($_POST); 
    @extract($_SESSION);  
?>

<!DOCTYPE html>
<html>
<head> 
<meta charset="utf-8">
<link href="../common/css/common.css" rel="stylesheet">
<link href="../css/member.css" rel="stylesheet">
</head>

<body>
    <!--SKIP NAVIGATION START-->
    <div id="skipNav">
        <a href="#content">본문 바로가기</a>
        <a href="#gnb">글로벌 네비게이션 바로가기</a>
    </div>
    <!--SKIP NAVIGATION END-->    
    
    <!--FULL CONTENTS START-->
        <!--HEADER START-->
            <? include "../common/header2.php"; ?>
        <!--HEADER END-->
        
    <div id="content">

	<div id="col2">
        <form  name="member_form" method="post" action="login.php"> 
		<div id="title">
			<img src="../img/title_login.gif">
		</div>
       
		<div id="login_form">
		     <img id="login_msg" src="../img/login_msg.gif">
			 <div class="clear"></div>

			 <div id="login1">
				<img src="../img/login_key.gif">
			 </div>
			 <div id="login2">
				<div id="id_input_button">
					<div id="id_pw_title">
						<ul>
						<li><img src="../img/id_title.gif"></li>
						<li><img src="../img/pw_title.gif"></li>
						</ul>
					</div>
					<div id="id_pw_input">
						<ul>
						<li><input type="text" name="id" class="login_input"></li>
						<li><input type="password" name="pass" class="login_input"></li>
						</ul>						
					</div>
					<div id="login_button">
						<input type="image" src="../img/login_button.gif">
					</div>
				</div>
				<div class="clear"></div>

				<div id="login_line"></div>
				<div id="join_button"><img src="../img/no_join.gif">&nbsp;&nbsp;&nbsp;&nbsp;<a href="../member/member_form.php"><img src="../img/join_button.gif"></a></div>
			 </div>			 
		</div> <!-- end of form_login -->

	    </form>
	</div> <!-- end of col2 -->
  </div> <!-- end of content -->
  
	<!--FOOTER START-->    
            <? include "../common/footer.html"?>
    <!--FOOTER END-->
<!--FULL CONTENTS END-->   
</body>
</html>