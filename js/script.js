$(function () {
    $(window).load(function () {
    	$("body").removeClass("preload");
        setTimeout(function () {
            $(".header-share a").removeClass("rollin-transition");
            $(".header-info").removeClass("rollin-transition-out")
        }, 2E3)
    });
    $(document).ready(function () {
        $("#providerTable").dataTable({
            "bPaginate": false,
            "bFilter": false,
            "bInfo": false
        });
        $(window).scroll(function () {
            if ($(this).scrollTop() > 400) $(".arrow-up").fadeIn();
            else $(".arrow-up").fadeOut()
        });
        $(".arrow-up").click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 800);
            return false
        });
        $(".arrow-down").click(function () {
            $("html, body").animate({
                    scrollTop: 800
                },
                800);
            return false
        });
        $(".header-info").click(function () {
            $("html, body").animate({
                scrollTop: $(document).height()
            }, 800);
            return false
        })
    })
}());
