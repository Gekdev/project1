<?
	session_start();
    @extract($_GET); 
    @extract($_POST); 
    @extract($_SESSION);  
?>

<header>
    <div id="wrapper">
        <h1><a href="index.html">NIKON</a></h1>
        <div class="login">
                <? if(!$userid){ ?>
                        <a href="login/login_form.php">로그인</a> | <a href="member/member_check.html">회원가입</a>
                <?	}else{ ?>
                        <?=$usernick?> (level:<?=$userlevel?>) | 
                        <a href="login/logout.php">로그아웃</a> | <a href="login/member_form_modify.php">정보수정</a>
                <?	} ?>
        </div>
        <nav>
            <ul>
                <li>
                    <h3><a href="#">NIKON</a></h3>
                    <ul class="dropdown">
                        <li><a href="#">니콘소개</a></li>
                        <li><a href="#">경영이념</a></li>
                        <li><a href="#">공지사항</a></li>
                    </ul>
                </li>
                <li>
                    <h3><a href="#">제품정보</a></h3>
                    <ul class="dropdown">
                        <li><a href="#">SLR 카메라</a></li>
                        <li><a href="#">미러리스 카메라</a></li>
                        <li><a href="#">콤펙트 카메라</a></li>
                        <li><a href="#">렌즈</a></li>
                    </ul>
                </li>
                <li>
                    <h3><a href="#">이벤트</a></h3>
                    <ul class="dropdown">
                        <li><a href="#">진행중인 이벤트</a></li>
                        <li><a href="#">종료 이벤트</a></li>
                    </ul>
                </li>
                <li>
                    <h3><a href="#">고객지원</a></h3>
                    <ul class="dropdown">
                        <li><a href="#">고객지원</a></li>
                        <li><a href="#">정품등록</a></li>
                    </ul>
                </li>
                <li>
                    <h3><a href="#">니콘 스쿨</a></h3>
                </li>
            </ul>
        </nav>
    </div>
</header>
