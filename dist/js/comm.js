$(function () {
    $(".con-txt2 > a").mouseover(function () {
        $(".con-img2").addClass("active");
    });
    $(".con-txt2").mouseout(function () {
        $(".con-img2").removeClass("active");
    });
    $(".con-txt3 > a").mouseover(function () {
        $(".con-img3").addClass("active");
    });
    $(".con-txt3").mouseout(function () {
        $(".con-img3").removeClass("active");
    });

    $(".slider-for").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        arrow: false,
        asNavFor: ".slider-nav",
    });
    $(".slider-nav").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: ".slider-for",
        dots: true,
        dotsClass: "custom_paging",

        centerMode: false,
        centerPadding: "20px",
        focusOnSelect: true,
        arrows: true,
    });

    var swiper = new Swiper(".swiper-container", {
        slidesPerView: 1,
        initialSlide: 1,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".mainswiper-button-next",
            prevEl: ".mainswiper-button-prev",
        },
    });
});
