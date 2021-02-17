$(document).ready(function(){/*3depth 메뉴*/
    $(function () {
        $('#gnb>ul>li>a').on('mouseover focusin', function () {
            $(this).next().show();
            $(this).parent().addClass('on');
            $(this).parent().siblings().removeClass('on');
            $(this).parent().siblings().find('>.gnb-sub').hide();
            $('.back').show();
        });
    
        $('.sub-frame ul li a').on('focusin', function () {
            $(this).parent().addClass('on');
            $('.back').show();
        });
    
        $('.sub-frame ul li a').on('focusout', function () {
            $(this).parent().removeClass('on');
            $('.back').hide();
        });
    
        $('#gnb').on('mouseleave', function () {
            $(this).find('.gnb-sub').hide();
            $('#gnb>ul>li').removeClass('on');
            $('.back').hide();
        });
    
        $('#gnb>ul>li:last-child').find('.ad-area > a').on('focusout', function () {
            $('.gnb-sub').hide();
            $('#gnb>ul>li').removeClass('on');
            $('.back').hide();
        });
         // 퀵메뉴
            var currentPosition = parseInt($("#slidemenu").css("top"));
            $(window).scroll(function() {
                var position = $(window).scrollTop(); // 현재 스크롤바의 위치값을 반환합니다.
                $("#slidemenu").stop().animate({"top":position+currentPosition+"px"},1000);
            });
            // 태블릿, 모바일 토글메뉴효과
            function slideMenu() {
                var activeState = $("#m_header .allMenu").hasClass("active");
                $("#m_header .allMenu").animate({left: activeState ? "0%" : "-100%"}, 400);
            }
            $("#hamburger_wrapper").click(function(event) {
                event.stopPropagation();
                $("#hamburger_menu").toggleClass("open");
                $("#m_header .allMenu").toggleClass("active");
                slideMenu();
            
                $("body").toggleClass("overflow-hidden");
            });
            
            $(".allMenu").find(".accordion-toggle").click(function() {
                $(this).next().toggleClass("open").slideToggle("fast");
                $(this).toggleClass("active-tab").find(".menu-link").toggleClass("active");
            
                $(".allMenu .accordion-content").not($(this).next()).slideUp("fast").removeClass("open");
                $(".allMenu .accordion-toggle").not(jQuery(this)).removeClass("active-tab").find(".menu-link").removeClass("active");
            });
            $("ul li:has(ul)").addClass("has-sub");
            $('.sideNav').find('li.has-sub>a').on('click', function(e){
                    // $(this).removeAttr('href');
                    //e.preventDefault();
                    var navlist = $(this).parent('li');
                    if (navlist.hasClass('open')) {
                        navlist.removeClass('open');
                        navlist.find('li').removeClass('open');
                        navlist.find('ul').slideUp(200);
                    }
                    else {
                        navlist.addClass('open');
                        navlist.children('ul').slideDown(200);
                        navlist.siblings('li').children('ul').slideUp(200);
                        navlist.siblings('li').removeClass('open');
                        navlist.siblings('li').find('li').removeClass('open');
                        navlist.siblings('li').find('ul').slideUp(200);
                    }
                });
            
            $('.sideNav>ul>li.has-sub>a').append('<i class="fa fa-chevron-down right--icon"></i>');
            $('.sideNav>ul>li>ul>li.has-sub>a').append('<i class="fa fa-chevron-down right--icon-sub"></i>');
            $('.sideNav>ul>li>ul>li>ul>li.has-sub>a').prepend('<span class="plus-minus"></span>');
            // $('.sideNav>ul>li>ul>li>ul>li.has-sub>a').prepend('<i class="fa fa-plus left--icon"></i><i class="fa fa-minus left--icon"></i>'); // 아이콘 사용시
            });
        // lnb
        (function($){
        
            var lnbUI = {
            click : function (target, speed) {
                var _self = this,
                    $target = $(target);
                _self.speed = speed || 300;
                
                $target.each(function(){
                if(findChildren($(this))) {
                    return;
                }
                $(this).addClass('noDepth');
                });
                
                function findChildren(obj) {
                return obj.find('> ul').length > 0;
                }
                
                $target.on('click','a', function(e){
                    e.stopPropagation();
                    var $this = $(this),
                        $depthTarget = $this.next(),
                        $siblings = $this.parent().siblings();
                
                $this.parent('li').find('ul li').removeClass('on');
                $siblings.removeClass('on');
                $siblings.find('ul').slideUp(250);
                
                if($depthTarget.css('display') == 'none') {
                    _self.activeOn($this);
                    $depthTarget.slideDown(_self.speed);
                } else {
                    $depthTarget.slideUp(_self.speed);
                    _self.activeOff($this);
                }
                
                })
                
            },
            activeOff : function($target) {
                $target.parent().removeClass('on');
            },
            activeOn : function($target) {
                $target.parent().addClass('on');
            }
            };
            
            
            // Call lnbUI
            $(function(){
            lnbUI.click('#lnb li', 300)
            });
            
            
        }(jQuery));
        // 1-5 오시는길
        $('.s_btn_1').click(function(){
            $('.popup-1,.popup-bg-1').css('display','block');
            $('html').addClass('no-scroll');
        });
        
        $('.popup-1 > .head > .btn-close').click(function(){
            $('.popup-1,.popup-bg-1').css('display','none');
            $('html').removeClass('no-scroll');
        });
        
        $('.tab_box .head div').click(function(){
            var $current = $('.tab_box .head div');
            var $next = $(this);
            $current.removeClass('active1');
            $next.addClass('active1');
            
            var index = $(this).index();
            var $tab_box = $(this).closest('.tab_box');
            $tab_box.find(' > .tab_cont_box > .tab_cont.active1').removeClass('active1');
            $tab_box.find(' > .tab_cont_box > .tab_cont').eq(index).addClass('active1');
        })
         // menu 클래스 바로 하위에 있는 a 태그를 클릭했을때
    $(".mypage1-1-1-1 ul.mypage_nav_ul li").click(function(){
        var submenu = $(this).next(".mypage_nav_ul ul");

        // submenu 가 화면상에 보일때는 위로 보드랍게 접고 아니면 아래로 보드랍게 펼치기
        if( submenu.is(":visible") ){
            submenu.slideUp();
        }else{
            submenu.slideDown();
        }
    });
      //sub2-2-1 영재성모의평가 검사결과
    $('.sub2-2-1_btn').click(function () {
        $('.sub2-2-1_popup.test,.popup-bg').css('display', 'block');
        $('html').addClass('no-scroll');
    });
    $('.btn-close').click(function () {
        $('.sub2-2-1_popup,.popup-bg').css('display', 'none');
        $('html').removeClass('no-scroll');
    });
    $('.sub2-2-1_table1_ok').click(function () {
        $('.sub2-2-1_popup.genius,.popup-bg').css('display', 'block');
        $('html').addClass('no-scroll');
    });
     //sub2-2-2 관찰 진단검사 샘플보기
    $('.s_btn_2').click(function () {
        $('.sub2-2-2_popup.one,.popup-bg').css('display', 'block');
        $('html').addClass('no-scroll');
    });
    $('.sub2-2-2_popup.one .btn-close,.sample_btn.sub2-2-2 .sample_close1').click(function () {
        $('.sub2-2-2_popup.one,.popup-bg').css('display', 'none');
        $('html').removeClass('no-scroll');
    });
     //sub2-2-2 관찰 진단검사 결과지샘플보기
    $('.s_btn_1').click(function () {
        $('.sub2-2-1_popup.two,.popup-bg').css('display', 'block');
        $('html').addClass('no-scroll');
    });
    $('.sub2-2-2_popup.two .btn-close').click(function () {
        $('.sub2-2-2_popup.two,.popup-bg').css('display', 'none');
        $('html').removeClass('no-scroll');
    });
    
    //sub2-2-4 전문가 상담검사 신청 팝업
   $('.s_btn_3').click(function () {
    $('.sub2-2-4_popup,.popup-bg').css('display', 'block');
    $('html').addClass('no-scroll');
});

$('.sub2-2-4_popup .btn-close').click(function () {
    $('.sub2-2-4_popup,.popup-bg').css('display', 'none');
    $('html').removeClass('no-scroll');
});

      //sub4-2 영재성모의평가
      //sub4-2_popup
    $('.sub4-2 .bottom_btn button').click(function () {
        $('.sub4-2_popup,.sub4-2_popup-bg').css('display', 'block');
        
    });

    $('.sub4-2_popup > .close_btn').click(function () {
        $('.sub4-2_popup,.sub4-2_popup-bg').css('display', 'none');
       
    });
      $('.side-btn .prev_btn').click(function() {
        var $this = $(this);
        var $slider = $this.closest('.sub4-2_popup');
        
        var $current = $slider.find('> .popup-content > .pop-img.on');
        var $post = $current.prev();
            
       
        if ( $post.length == 0 ) {
            $post = $slider.find('> .popup-content > .pop-img:last-child');
        }
        
        $post.click();
        $current.removeClass('on');
        $post.addClass('on');
    });
        $('.side-btn .next_btn,.test_btn,.text_next_btn').click(function() {
        var $this = $(this);
        var $slider = $this.closest('.sub4-2_popup');
        
        var $current = $slider.find('> .popup-content > .pop-img.on');
        var $post = $current.next();
            
       
        if ( $post.length == 0 ) {
            $post = $slider.find('> .popup-content > .pop-img:first-child');
        }
        
        $post.click();
        $current.removeClass('on');
        $post.addClass('on');
    });
    $('.omr_ok,.sub4-2-1_ok').click(function () {
        $('.sub2-2-1_popup.sub4-2-1,.popup-bg').css('display', 'block');
        $('html').addClass('no-scroll');
    });

    $('.sub2-2-1_popup .btn-close,.omr_ok.submit').click(function () {
        $('.sub2-2-1_popup.sub4-2-1,.popup-bg').css('display', 'none');
        $('html').removeClass('no-scroll');
    });
      
});