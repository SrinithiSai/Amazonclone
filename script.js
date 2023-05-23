
$(function() {
    $(document).scroll(function()
    {
        var $nav = $("#topnav");
        var $nav2 = $(".navbar");
        $nav2.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});