$(document).ready(function(){
    // 웹용 토글메뉴
    $(".main_tog_btn,.tog_btn").click(function(){
        $(".main_toggle").addClass("on");
    });
        $(".main_toggle .main_tog_close").click(function(){
        $(".main_toggle").removeClass("on");
    });
    // 메인슬라이드
    var wd = $("#vs").width();
    var sl = $(".img_box");
    var btn1 = $("#btn_box");
    var len = $(".img_box li").length;
    function nextSlideAni(){
        sl.not(":animated").animate({"margin-left":-wd+"px"}, 1500, function(){
        sl.find("li").eq(0).appendTo(sl);
        sl.css("margin-left", "0px");
        });
    }
    function prevSlideAni(){
        sl.find("li").eq(len-1).prependTo(sl);
        sl.css("margin-left", -wd+"px");
        sl.not(":animated").animate({"margin-left":"0px"}, 1500, function(){
        });
    }
    var intv1 = setInterval(function(){ 
        nextSlideAni();
    }, 5000);
    $("#btn_box li.left").click(function(){
        clearInterval(intv1);
        prevSlideAni();
        intv1 = setInterval(function(){ nextSlideAni(); }, 5000);
    });
    $("#btn_box li.right").click(function(){
        clearInterval(intv1);
        nextSlideAni();
        intv1 = setInterval(function(){ nextSlideAni(); }, 5000);
    });
        $(".pop .search_close").click(function(){
        $(".pop").removeClass("on");
    });
    
       $(".tog_close").click(function(){
        $("#tog_gnb").toggleClass("on");
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
    $(".mtog_btn").click(
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
 $(".menu>a,.sub_menu>a").click(function(){
    var submenu = $(this).next("ul");
    // submenu 가 화면상에 보일때는 위로 보드랍게 접고 아니면 아래로 보드랍게 펼치기
    if( submenu.is(":visible") ){
        submenu.slideUp();
    }else{
        submenu.slideDown();
    }
});

    bxsliderResizing();
    
});

        
 // menu 클래스 바로 하위에 있는 a 태그를 클릭했을때
//  $(".menu>a,.sub_menu>a").click(function(){
//     var submenu = $(this).next("ul");
//     // submenu 가 화면상에 보일때는 위로 보드랍게 접고 아니면 아래로 보드랍게 펼치기
//     if( submenu.is(":visible") ){
//         submenu.slideUp();
//     }else{
//         submenu.slideDown();
//     }
// });
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
    // 퀵메뉴 bx-slider
    $(function(){
    var mySlider = $("#quick_menu").bxSlider({
            mode:"horizontal",    // 가로 수평으로 슬라이드된다.
            speed:500,        // 이동 속도를 설정한다.
            pager:false,    // 현재 위치 페이지 표시 여부를 설정한다.
            moveSlides:1,    // 슬라이드 이동 시 개수를 설정한다.
            slideWidth:200,    // 슬라이드 너비를 설정한다.
            minSlides:5,    // 최소 노출 개수를 설정한다.
            maxSlides:5,    // 최대 노출 개수를 설정한다.
            slideMargin:0, // 슬라이드 간의 간격을 설정한다.
            auto:true,         // 자동으로 흐를지 여부를 설정한다.
            autoHover:true, // 마우스오버 시 정지할지를 설정한다.
            controls:false,    // 이전 버튼, 다음 버튼 노출 여부를 설정한다.
            touchEnabled : (navigator.maxTouchPoints > 0)
        });
        
        // 이전 버튼을 클릭하면 이전 슬라이드로 전환된다.
        $("#prevBtn").on("click", function(){
            // 이전 슬라이드 배너로 이동된다.
            mySlider.goToPrevSlide();
            // <a>의 링크를 차단한다.
            return false;
        });
        
        // 다음 버튼을 클릭하면 다음 슬라이드로 전환한다.
        $("#nextBtn").on("click", function(){
            // 다음 슬라이드 배너로 이동된다.
            mySlider.goToNextSlide();
            // <a>의 링크를 차단한다.
            return false;
        });
    });
        // 이용후기 bx-slider
        $(function(){
            var mySlider = $(".review").bxSlider({
            mode:"horizontal",    // 가로 수평으로 슬라이드된다.
            speed:500,        // 이동 속도를 설정한다.
            pager:false,    // 현재 위치 페이지 표시 여부를 설정한다.
            moveSlides:1,    // 슬라이드 이동 시 개수를 설정한다.
            slideWidth:280,    // 슬라이드 너비를 설정한다.
            minSlides:2,    // 최소 노출 개수를 설정한다.
            maxSlides:5,    // 최대 노출 개수를 설정한다.
            slideMargin:0, // 슬라이드 간의 간격을 설정한다.
            auto:true,         // 자동으로 흐를지 여부를 설정한다.
            autoHover:true, // 마우스오버 시 정지할지를 설정한다.
            controls:false    // 이전 버튼, 다음 버튼 노출 여부를 설정한다.
        });
        
        // 이전 버튼을 클릭하면 이전 슬라이드로 전환된다.
        $("#review_prev").on("click", function(){
            // 이전 슬라이드 배너로 이동된다.
            mySlider.goToPrevSlide();
            // <a>의 링크를 차단한다.
            return false;
        });
        
        // 다음 버튼을 클릭하면 다음 슬라이드로 전환한다.
        $("#review_next").on("click", function(){
            // 다음 슬라이드 배너로 이동된다.
            mySlider.goToNextSlide();
            // <a>의 링크를 차단한다.
            return false;
        });
    });
     $(".review > .lineFrame").click(function(){
            $("#rv_pop").addClass("on");
        });
            $("#rv_pop .rv_close").click(function(){
            $("#rv_pop").removeClass("on");
        });


$(window).resize(bxsliderResizing());

function bxsliderResizing(){
    if($(window).width()<=1200) 
    { // 퀵메뉴 bx-slider
        var mySlider = $("#quick_menu").bxSlider({
                mode:"horizontal",    // 가로 수평으로 슬라이드된다.
                speed:500,        // 이동 속도를 설정한다.
                pager:false,    // 현재 위치 페이지 표시 여부를 설정한다.
                moveSlides:1,    // 슬라이드 이동 시 개수를 설정한다.
                slideWidth:200,    // 슬라이드 너비를 설정한다.
                minSlides:5,    // 최소 노출 개수를 설정한다.
                maxSlides:5,    // 최대 노출 개수를 설정한다.
                slideMargin:0, // 슬라이드 간의 간격을 설정한다.
                auto:true,         // 자동으로 흐를지 여부를 설정한다.
                autoHover:true, // 마우스오버 시 정지할지를 설정한다.
                controls:false,    // 이전 버튼, 다음 버튼 노출 여부를 설정한다.
                touchEnabled : (navigator.maxTouchPoints > 0)
            });
            $("#prevBtn").on("click", function(){
                // 이전 슬라이드 배너로 이동된다.
                mySlider.goToPrevSlide();
                // <a>의 링크를 차단한다.
                return false;
            });
            
            // 다음 버튼을 클릭하면 다음 슬라이드로 전환한다.
            $("#nextBtn").on("click", function(){
                // 다음 슬라이드 배너로 이동된다.
                mySlider.goToNextSlide();
                // <a>의 링크를 차단한다.
                return false;
            });
    } 
}

function bxsliderResizing(){
    if($(window).width()<=1024) 
    { // 이용후기 bx-slider
        $(function(){
            var mySlider = $(".review").bxSlider({
            mode:"horizontal",    // 가로 수평으로 슬라이드된다.
            speed:500,        // 이동 속도를 설정한다.
            pager:false,    // 현재 위치 페이지 표시 여부를 설정한다.
            moveSlides:1,    // 슬라이드 이동 시 개수를 설정한다.
            slideWidth:280,    // 슬라이드 너비를 설정한다.
            minSlides:2,    // 최소 노출 개수를 설정한다.
            maxSlides:2,    // 최대 노출 개수를 설정한다.
            slideMargin:0, // 슬라이드 간의 간격을 설정한다.
            auto:true,         // 자동으로 흐를지 여부를 설정한다.
            autoHover:true, // 마우스오버 시 정지할지를 설정한다.
            controls:false    // 이전 버튼, 다음 버튼 노출 여부를 설정한다.
        });
        
        // 이전 버튼을 클릭하면 이전 슬라이드로 전환된다.
        $("#review_prev").on("click", function(){
            // 이전 슬라이드 배너로 이동된다.
            mySlider.goToPrevSlide();
            // <a>의 링크를 차단한다.
            return false;
        });
        
        // 다음 버튼을 클릭하면 다음 슬라이드로 전환한다.
        $("#review_next").on("click", function(){
            // 다음 슬라이드 배너로 이동된다.
            mySlider.goToNextSlide();
            // <a>의 링크를 차단한다.
            return false;
        });
    });
    }
}


