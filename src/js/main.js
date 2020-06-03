const App = {
    SetBackground: () => {
        $('[setBackground]').each(function() {
            var background = $(this).attr('setBackground')
            $(this).css({
                "background-image": "url(" + background + ")",
                "background-size": "cover",
                "background-position": "center center"
            })
        })
        $('[setBackgroundRepeat]').each(function() {
            var background = $(this).attr('setBackgroundRepeat')
            $(this).css({
                "background-image": "url(" + background + ")",
                "background-repeat": "repeat"
            })
        })
    },
    EqualHeightElement: el => {
        let height = 0;
        let thisHeight = 0;
        $(el).each(function() {
            thisHeight = $(this).height();
            if (thisHeight > height) {
                height = thisHeight;
            }
        });
        $(el).height(height)
    },
    InitLazyLoad: () => {
        return new LazyLoad({
            elements_selector: ".lazy"
        });
    },
    ScrollTo: y => {
        $('html, body').animate({
            scrollTop: y
        }, 1000)
    },
    Init: () => {
        App.SetBackground()
        App.InitLazyLoad()
        swiperBannerInit()
        togglenav()
        mappingInit()
        numberAutoRun()
    }
}

function InitSlider() {

}
$(document).ready(function() {
    App.Init()
})
//nav-mobile
function togglenav(){
    $('.button-toggle').on('click',function(){
        $(this).toggleClass('active')
        $('.nav-mobile').toggleClass('active')
        $('.back-drop').toggleClass('active')
    });
    $('.back-drop').on('click',function(){
        $(this).removeClass('active')
        $('.nav-mobile').removeClass('active')
        $('.button-toggle').removeClass('active')
    })
}
function mappingInit(){
    $('header .language').mapping({
        mobileWrapper: '.nav-mobile',
        mobileMethod: 'appendTo',
        desktopWrapper: 'header .header-top .button-toggle',
        desktopMethod: 'insertBefore',
        breakpoint: 1250
    })
    $('header .user').mapping({
        mobileWrapper: '.nav-mobile',
        mobileMethod: 'appendTo',
        desktopWrapper: 'header .header-top .language',
        desktopMethod: 'insertAfter',
        breakpoint: 1250
    })
    $('header .nav').mapping({
        mobileWrapper: '.nav-mobile',
        mobileMethod: 'appendTo',
        desktopWrapper: 'header .header-top .logo',
        desktopMethod: 'insertAfter',
        breakpoint: 1250
    })
    $('header .nav-bottom').mapping({
        mobileWrapper: '.nav-mobile',
        mobileMethod: 'appendTo',
        desktopWrapper: 'header .header-bottom .main-wrapper',
        desktopMethod: 'appendTo',
        breakpoint: 1250
    })
    $('header .searchbox').mapping({
        mobileWrapper: '.nav-mobile',
        mobileMethod: 'appendTo',
        desktopWrapper: 'header .header-bottom .nav-bottom',
        desktopMethod: 'insertAfter',
        breakpoint: 1250
    })
}
//swiper-banner
function swiperBannerInit(){
    let HomeBanner = new Swiper('.home-banner .swiper-container', {
        speed: 1000,
        slidesPerView: 1,
        loop: true,
        // autoplay: true,
        navigation: {
            clickable: true,
            nextEl: '.home-banner .swiper-next',
            prevEl: '.home-banner .swiper-prev'
        },
        pagination: {
            el: '.home-banner .swiper-pagination',
            clickable: true
        },
	})

}
//numberAutoRun
function numberAutoRun() {
    $('.home-about .about-wrapper .count-up').each(function () {
        var $this = $(this);
        $({
            Counter: 0
        }).animate({
            Counter: $this.text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function () {
                $this.text(Math.ceil(this.Counter).toLocaleString('de-DE'));
                // var numberAfterRun = $(this).attr('data-number')
                // $this.text(numberAfterRun)
            },
        });
    });
}