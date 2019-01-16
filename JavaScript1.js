$('.logo_1 li').eq(1).mouseenter(function () {
    $('.logo_3').css('display', 'block') 
})

$('.logo_3>ul').mouseleave(function () {
    $('.logo_3').css('display', 'none')
})

$('.anniu_1 span').eq(0).click(function () {
    $('.nav').css({
        'background-image': 'url(images/banner_thumb_1.jpg)',
        'background-position': 'center', 
    })   
    $('.anniu_1 span').eq(0).css({
       'background-position-x':-813,
        'opacity': 1,
    })
    $('.anniu_1 span').eq(1).css({
        'background-position-x': -513,
        'opacity': 0.35,
    })
    $('.anniu_1 span').eq(2).css({
        'background-position-x': -513,
        'opacity': 0.35,
    })
    //$('.logo_zi').show(1000, 'linear')
    //$('.logo_zi').hide(1000, 'linear')
    $('.logo_zi').fadeIn(1000, 'linear')
    $('.logo_zi').css('opacity',0)
    $('.logo_zi').animate({
        backgroundPositionY: 0,
        opacity: 1,
    }, 500, 'linear')
    $('.logo_zi_1').css('opacity', 0)
    $('.logo_zi_1').animate({
        width: 220,
        backgroundPositionX: -142,
        backgroundPositionY: -297,
        opacity: 1,
        marginLeft: 569,
    }, 500,'linear')
})
$('.anniu_1 span').eq(0).mouseenter(function () {
    $('.anniu_1 span').eq(0).css({
        'cursor': ' pointer',
        'opacity':1,
    })
})
$('.anniu_1 span').eq(0).mouseleave(function () {
    var zhi = $('.anniu_1 span').eq(0).css('background-position-x')
    if (zhi == '-513px') {
    $('.anniu_1 span').eq(0).css({
        'opacity':0.35,
    })
    }
   
})

$('.anniu_1 span').eq(1).click(function () {
    $('.nav').css({
        'background-image': 'url(images/banner_thumb_2.jpg)',
        'background-position': 'center',
      
    })
    $('.anniu_1 span').eq(0).css({
        'background-position-x': -513,
        'opacity': 0.35,
    })
    $('.anniu_1 span').eq(1).css({
        'background-position-x': -813,
        'opacity': 1,
    })
    $('.anniu_1 span').eq(2).css({
        'background-position-x': -513,
        'opacity': 0.35,
    })
    $('.logo_zi').css('opacity', 0)
    $('.logo_zi').animate({
        backgroundPositionY: -97,
        opacity:1,
    }, 1000, 'linear')
    $('.logo_zi_1').css('opacity', 0)
    $('.logo_zi_1').animate({
        width:400,
        backgroundPositionY: -327,
        backgroundPositionX: -48,
        marginLeft: 476,
        opacity: 1
    }, 1000, 'linear')
})
$('.anniu_1 span').eq(1).mouseenter(function () {
    $('.anniu_1 span').eq(1).css({
        'cursor': ' pointer',
        'opacity': 1,
    })
})
$('.anniu_1 span').eq(1).mouseleave(function () {
    var zhi = $('.anniu_1 span').eq(1).css('background-position-x')
    if (zhi == '-513px') {
        $('.anniu_1 span').eq(1).css({
            'opacity': 0.35,
        })
    }
})

$('.anniu_1 span').eq(2).click(function () {
    console.log($('.nav'))
    $('.nav').css({
        'background-image': 'url(images/banner_thumb_3.jpg)',
        'background-position': 'center',
    })
    $('.anniu_1 span').eq(0).css({
        'background-position-x': -513,
        'opacity': 0.35,
    })
    $('.anniu_1 span').eq(1).css({
        'background-position-x': -513,
        'opacity': 0.35,
    })
    $('.anniu_1 span').eq(2).css({
        'background-position-x': -813,
        'opacity': 1,
    })
    $('.logo_zi').css('opacity', 0)
    $('.logo_zi').animate({
        backgroundPositionY: -197,
        opacity:1
    }, 1000, 'linear')
    $('.logo_zi_1').css('opacity', 0)
    $('.logo_zi_1').animate({
        width: 400,
        backgroundPositionY: -356,
        backgroundPositionX: -48,
        marginLeft: 476,
        opacity:1
    }, 1000, 'linear')
})
$('.anniu_1 span').eq(2).mouseenter(function () {
    $('.anniu_1 span').eq(2).css({
        'cursor': ' pointer',
        'opacity': 1,
    })
})
$('.anniu_1 span').eq(2).mouseleave(function () {
    var zhi = $('.anniu_1 span').eq(2).css('background-position-x')
    if (zhi == '-513px') {
        $('.anniu_1 span').eq(2).css({
            'opacity': 0.35,
        })
    }
})

$('.cebianlan>ul>li').eq(0).mouseenter(function () {
    $('.cebianlan>ul>li').eq(0).css('cursor', 'pointer')
    $('.cebianlan>.erwei').css('transform','rotateX(0deg)')
        $('.cebianlan>.erwei').stop()
        $('.cebianlan>.erwei').animate({
            opacity: 1,

        }, 2000)

    })
    $('.cebianlan>ul>li').eq(0).mouseleave(function () {
        $('.cebianlan>.erwei').stop()
        $('.cebianlan>.erwei').animate({
            opacity: 0,

        }, 1000)

        //$('.cebianlan>.erwei').css('transform', 'rotateX(90deg)')
    })

    $('.cebianlan>ul>li').eq(1).mouseenter(function () {
        $('.cebianlan>ul>li').eq(1).css('cursor', 'pointer')
        $('.cebianlan>.erweima').css('transform', 'rotateX(0deg)')
        $('.cebianlan>.erweima').stop()
        $('.cebianlan>.erweima').animate({
            opacity: 1,

        }, 2000)

    })
    $('.cebianlan>ul>li').eq(1).mouseleave(function () {
        $('.cebianlan>.erweima').stop()
        $('.cebianlan>.erweima').animate({
            opacity: 0,

        }, 1000)
    })

    $('.cebianlan>ul>li').eq(2).mouseenter(function () {
        $('.xingqu').css('display', 'block')
    })
    $('.cebianlan>ul>li').eq(2).mouseleave(function () {
        $('.xingqu').css('display', 'none')
    })

    $('.cebianlan>ul>li').eq(3).mouseenter(function () {
        $('.duihuan').css('display', 'block')
    })
    $('.cebianlan>ul>li').eq(3).mouseleave(function () {
        $('.duihuan').css('display', 'none')
    })

    $('.cebianlan>ul>li').eq(4).mouseenter(function () {
        $('.kefu').css('display', 'block')
    })
    $('.cebianlan>ul>li').eq(4).mouseleave(function () {
        $('.kefu').css('display', 'none')
    })

$(window).scroll(function () {
    var v = $(this).scrollTop();
    console.log(v)
    if (v > 800) {
       
        $('.biejing ').fadeIn(3000,'linear')
    }
    if (v > 1200) {
        $('.biejing_1 ').fadeIn(1500, 'linear')
        $('.bujiang').fadeIn(500, 'linear')
        $('.zhuiqiu').fadeIn(2000, 'linear')
        $('.tubiao ').fadeIn(4000, 'linear')
    }
    if (v > 2250) {
        $('.lanse').fadeIn(1500, 'linear')
        $('.lvse').fadeIn(500, 'linear')
        $('.hongse').fadeIn(3000, 'linear')
    }
    if (v > 2500) {
        $('.zaiyiqi').animate({ width: 435, }, 2000)
        $('.dingzhi ').animate({ height: 70, }, 4000)
        $('.gexing ').fadeIn(5000, 'linear')
    }
    if (v > 2800) {
       
            $('.jing').fadeIn(800, 'linear')
    }
    if (v > 3300) {
        $('.yanse').fadeIn(1800, 'linear')
        $('.shuang').fadeIn(2800, 'linear')
    }
    if (v > 3600) {
        $('.wo ').fadeIn(4000,'linear')
    }
})