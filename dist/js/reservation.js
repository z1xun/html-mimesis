$(function () {
    $(".AccordionMenu .select").on("click", function () {
        var $li = $(this).parent("li");
        if ($li.hasClass("show") == true) {
            $li.toggleClass("show");
        } else {
            $li.toggleClass("show");
        }
    });
});
