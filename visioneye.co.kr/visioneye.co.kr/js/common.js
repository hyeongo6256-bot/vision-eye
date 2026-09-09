// menu btn : open & close : toggle
$(document).on('click', '.menu-toggle', function() {
    /*
    if($('#gnb').hasClass('on')) {
        $('body').removeClass('menu-opened');
        $('html,body').scrollTop(scrollHeight);

        $('#gnb').removeClass('on');
    } else {
        scrollHeight = $(window).scrollTop();

        $('body').addClass('menu-opened');
        $('#gnb').addClass('on');
    }
	*/
    if ($(this).hasClass('on')) {
        $('#allmenu-wrap').slideUp();
    } else {
        $('#allmenu-wrap').slideDown();
        //$('#pageTop').trigger('click');
    }
    $(this).toggleClass('on');
    return false;
});
$(function() {
    $('#allmenu-close').on('click', function() {
        $('#header .menu-toggle').trigger('click');
    });
});


// 2depth menu Mouseover
$(document).on("mouseenter focusin", '#gnb .menu > li', function() {
    if (!$(this).hasClass('on')) {
        $('#gnb .menu > li').not(this).removeClass('on');
        $('#gnb .menu > li').not(this).find('.sub-drop-wrap').slideUp(200);

        $(this).addClass('on');
        $('#header').addClass('on');
        $('#header .submenu-dim').addClass('on');
        $(this).find('.sub-drop-wrap:not(:animated)').slideDown(200);
    }
});

// 2depth menu Close
$(document).on("focusin", '.language-select button', function() {
    $('#header .submenu-dim').removeClass('on');
    $('#gnb .menu > li').removeClass('on');
    $('#gnb .menu > li').find('.sub-drop-wrap').slideUp(200);
});
$(document).on("mouseleave", '#header', function() {
    if ($(this).hasClass('on') && ($(document).scrollTop() < 20)) {
        $('#gnb .menu > li').removeClass('on');
        $('#gnb .menu > li').find('.sub-drop-wrap').slideUp(200);
        $(this).removeClass('on');
    }
});
$(document).on("mouseenter focusin", '#container, #container *', function() {
    $('#gnb .menu > li').removeClass('on');
    $('#gnb .menu > li').find('.sub-drop-wrap').slideUp(200);
    $('#header .submenu-dim').removeClass('on');
});

// header fixed
function headerTop() {
    var scrlTop = $(window).scrollTop();

    if (scrlTop > 59) {
        $('#wrapper').addClass('scrolled-header');
    } else {
        $('#wrapper').removeClass('scrolled-header');
    }
}

// language : toggle event
$(document).on('click', '.language-select > button', function() {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).siblings('ul').slideUp(200);
    } else {
        $(this).addClass('active');
        $(this).siblings('ul').slideDown(200);
    }
});

// fadeIn+top Parallax
function fadeInTopParallax() {
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    $('.fadeInTop').each(function() {
        var object_bottom = $(this).offset().top - 250 + $(this).height() * 0.2;
        if (bottom_of_window > object_bottom) {
            if (!$(this).hasClass('fadeInTop-complete')) {
                $(this).animate({
                    opacity: 1,
                    top: 0
                }, 200).addClass('fadeInTop-complete');
            }
        }
    });
    $('.fadeInTopItem').not('.fadeInTop-complete').each(function() {
        $(this).addClass('fadeInTop-active');
        var item_bottom = $(this).offset().top + $(this).height() * 0.3;

        if (bottom_of_window > item_bottom) {
            var animating_object = $('.fadeInTop-active');
            if (animating_object.length) {
                var delay_index = $(this).parents('.fadeInTopGroup').find('.fadeInTopItem').index(this);
                var ani_sec = 200 * (1 + delay_index / 10);
                var del_sec = delay_index + '00';

                $(this).animate({
                    top: 0
                }, ani_sec);
                $(this).delay(del_sec).animate({
                    opacity: 1
                }, 10).addClass('fadeInTop-complete').removeClass('fadeInTop-active');
            }
        }
    });
}


// accordion
$(document).on('click', '.accordion-list .question-btn', function() {
    var thisList = $(this).parent('li');
    if (thisList.hasClass('active')) {
        thisList.removeClass('active');
        $(this).siblings('.answer-box').slideUp(300);
    } else {
        thisList.siblings('li').removeClass('active');
        thisList.siblings('li').find('.answer-box').slideUp(300);

        thisList.addClass('active');
        $(this).siblings('.answer-box').slideDown(300);
    }
});

// right menu : scroll
function rightQuick() {
    var wingTop = 264;

    var scrlTop = $(window).scrollTop();
    var wingPosition = (scrlTop + wingTop) + "px";

    $('#right_quick').stop().animate({
        top: wingPosition
    }, 500);
}

// go top : event
$(document).on('click', '#go_top', function() {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
    return false;
});

/*
$(window).on({
    "load" : function() {
        headerTop();
        fadeInTopParallax();
        rightQuick();
    },
    "scroll" : function() {
        headerTop();
        fadeInTopParallax();
        rightQuick();
    },
    "resize" : function() {
        headerTop();
        fadeInTopParallax();
        rightQuick();
    }
});
*/


$(function() {
    try {
        AOS.init({
            offset: 200,
            duration: 2000,
            //easing: 'ease-out-back',
        });
    } catch (e) {}
});







// 숫자만 해당 input에 onkeydown='return onlyNumber(event)' onkeyup='removeChar(event)' 적용
function onlyNumber(event) {
    event = event || window.event;
    var keyID = (event.which) ? event.which : event.keyCode;
    if ((keyID >= 48 && keyID <= 57) || (keyID >= 96 && keyID <= 105) || keyID == 8 || keyID == 9 || keyID == 46 || keyID == 37 || keyID == 39 || keyID == 39)
        return;
    else
        return false;
}

function removeChar(event) {
    event = event || window.event;
    var keyID = (event.which) ? event.which : event.keyCode;
    if (keyID == 8 || keyID == 9 || keyID == 46 || keyID == 37 || keyID == 39)
        return;
    else
        event.target.value = event.target.value.replace(/[^0-9]/g, "");
}
// 숫자만 




function GetAJAX(sURL, sParams, sTarget) {
    (typeof sTarget == 'undefined') ? sTarget = "": sTarget; // 자바스크립트에서 디폴트 값 넣기 위해 사용
    var sRet = "";

    sParams = encodeURI(sParams);

    // AJAX 동기식으로 변경 (없으면 정상적인 결과 안나옴)
    $.ajaxSetup({
        async: false
    });
    $.ajaxSetup({
        cache: false
    });

    var jqxhr = $.get(sURL,
            sParams,
            function(data) {
                sRet = data;
            })
        .done(function(data) {
            sRet = data;
        })
        .fail(function() {
            sRet = "ERROR";
        })
        .always(function(data) {;
        });

    // AJAX 원래대로 비동기식으로 변경
    $.ajaxSetup({
        async: true
    });

    if (sRet == "" || sRet == "ERROR") {
        alert("ERROR - GetAJAX()");
        return "ERROR";
    }

    if (sTarget != "") {
        //익스플로어8에서는 SelectBox에서 innerHTML이 적용이 안됨 제이쿼리 html로 바꿔놓음
        $('#' + sTarget).html(sRet);
        /*
        var objDIV = document.getElementById( sTarget);
        objDIV.innerHTML = sRet;
        */
    } else {
        return sRet;
    }
}