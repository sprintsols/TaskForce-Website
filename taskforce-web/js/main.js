(function ($) {
    'use strict';
    $('[data-countdown]').each(function () {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            $this.html(event.strftime('<div class="cdown"><span class="days"><strong>%-D</strong><p>Days</p></span></div><div class="cdown"><span class="hour"><strong> %-H</strong><p>Hours</p></span></div> <div class="cdown"><span class="minutes"><strong>%M</strong> <p>MINUTES</p></span></div><div class="cdown"><span class="second"><strong> %S</strong><p>SECONDS</p></span></div>'));
        });
    });
    var venoBox = $('.venobox')
    venoBox.venobox();
    $(window).on("load", function () {
        $('.preloader-wrapper').fadeOut();
    });
    new WOW().init();
    var counterJs = $('.counter')
    counterJs.counterUp({
        delay: 10,
        time: 1500
    });
    var userWrapper = $('.user-wrapper')
    userWrapper.slick({
        dots: true,
        infinite: true,
        speed: 1200,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: false
    });
    $.stellar({
        horizontalScrolling: false,
        verticalOffset: 0
    });
    var mainMenuNav = $('.main-menu')
    mainMenuNav.onePageNav();
    var mobileMenu = $('.mobile-menu')
    mobileMenu.meanmenu();
    var headromeActive = $("#headroom-active")
    headromeActive.headroom({
        tolerance: 5
    });
    $(window).on('scroll', function () {
        var wSize = $(window).width();
        if (wSize > 1 && $(this).scrollTop() > 1) {
            $('#sticky-header').addClass('sticky');
        } else {
            $('#sticky-header').removeClass('sticky');
        }
    });
    var sliderWrapper = $(".slider-wrapper")
    sliderWrapper.owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        autoplay: true,
        loop: true,
        navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
        mouseDrag: false,
        touchDrag: false,
        animateOut: 'fadeOut'
    });
    $('.hamburger').on('click', function () {
        $(this).toggleClass('is-active');
        $(this).next().toggleClass('nav-show')
    });
    $('.menu-button a').on('click', function () {
        $('.overlay').fadeToggle(300);
        $(this).toggleClass('btn-open').toggleClass('btn-close');
    });
    $('.overlay').on('click', function () {
        $('.menu-button').fadeToggle(300);
        $('.button a').toggleClass('btn-open').toggleClass('btn-close');
        open = false;
    });
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 50,
        auto: 3000,
        continuous: true,
        centerSlide: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            1170: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            }
        }
    });
    var actionEffact = $('.action-effact');
    actionEffact.ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04,
    });
})(jQuery);
