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
});
