$(document).ready(function(){
    $(".tog_close").click(function(){
        $("#tog_gnb").toggleClass("on");
    });
    $(".tog_close").click(function(){
        $("#tog_gnb").removeClass("on");
    });
        // 태블릿,모바일 토글메뉴 효과
        var ht=parseInt($(window).height())-600;
        $(window).scroll(function(){
        var sc=parseInt($(window).scrollTop());
        if(sc>=ht){
            $("#tog_gnb").css("right","-110%");
        }
    });
    var sw1=true;
    $(".tog_btn").click(
        function(){
            if(sw1){
                $("#tog_gnb").stop().animate({"right":"0px"},300);
            }
            sw1=!sw1;
        });
        $(".tog_close").click(function(){
            $("#tog_gnb").stop().animate({"right":"-110%"},600);
        });
        
 // menu 클래스 바로 하위에 있는 a 태그를 클릭했을때
 $(".menu>a").click(function(){
    var submenu = $(this).next("ul");
    // submenu 가 화면상에 보일때는 위로 보드랍게 접고 아니면 아래로 보드랍게 펼치기
    if( submenu.is(":visible") ){
        submenu.slideUp();
    }else{
        submenu.slideDown();
    }
});
var width = $(window).width();
$(window).scroll(function(){
        var sc_top = $(window).scrollTop();
        if(sc_top>=500 && sc_top<5000){
            $(".hd,.logo_box").addClass("on");
            $(".hd,.logo_box").removeClass("off");
        } else if(sc_top>=5000) {
            $(".hd,.logo_box").removeClass("on");
            $(".hd,.logo_box").addClass("off");
        } else {
            $(".hd,.logo_box").removeClass("on");
            $(".hd,.logo_box").removeClass("off");
        }
    });
    // 1) 한 페이지 높이를 계산
    if(width>=1280){
    var wh = $(window).height();
    var wd = $(window).width();
    // 2) 페이지 마다의 top(꼭대기)로 부터의 해당 페이지 위치를 계산해서 지정 var secPos = parseInt($(this).attr("data-val"));
    $(".page").each(function(index){
        // each 반복해라 attr 태그의 속성을 추가할때
        $(this).attr("data-val",index*wh);
    });
    // 3)해당 페이지에서 마우스 휠을 굴릴 때 위로 스크롤 할 때와 아래로 스크롤 할 때를 나누어 처리
    $(".page").on("mousewheel DOMMouseScroll", function(e){
        // 현재 페이지의 위치값을 불러오기 (secPos:현재페이지)
        // mousewheel(크롬) DOMMouseScroll(나머지브라우저)
        var secPos = parseInt($(this).attr("data-val"));
        // wheelDelta 마우스 휠의 동작 값을 저장
        if(e.originalEvent.wheelDelta >= 0){ // 위로 스크롤
            $("html, body").stop().animate({scrollTop:secPos - wh}, 700);
            return false;
        } else if(e.originalEvent.wheelDelta < 0){// 아래로 스크롤
            $("html, body").stop().animate({scrollTop:secPos + wh}, 700);
            return false;
        }
   });
}
});