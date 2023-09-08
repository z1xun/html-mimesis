$(function () {
    $(".AccordionMenu .select").on("click", function () {
        var $li = $(this).parent("li");
        if ($li.hasClass("show") == true) {
            $li.toggleClass("show");
        } else {
            $li.toggleClass("show");
        }
    });

    flatpickr("#datepicker", {
        dateFormat: "Y-m-d", // 날짜 형식 설정
        inline: true, // 달력을 인라인 모드로 표시합니다.
        minDate: "today", // 오늘 이전의 날짜를 선택할 수 없도록 설정
    });
});
