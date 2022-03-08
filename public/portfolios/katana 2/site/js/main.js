$(function() {
    const hum = $('#hamburger, .close')
    const nav = $('.sp-nav')
    hum.on('click', function() {
        nav.toggleClass('toggle');
    });
});



//フェードイン用のコードです
$(function() {
    $(window).on('load scroll', function() {
        $(".show").each(function() {
            var winScroll = $(window).scrollTop();
            var winHeight = $(window).height();
            var scrollPos = winScroll + (winHeight * 0.9);
            if ($(this).offset().top < scrollPos) {
                $(this).css({
                    opacity: 1,
                    transform: 'translate(0, 0)'
                });
            }
        });
    });
});
//フェードイン用のコードはここまでです

//ヘッダーの高さと背景色の変更
$(function() {
    const header = $('#header');
    $(window).on('load scroll', function() {
        var headerHeight = header.innerHeight();

        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 100) {
                header.addClass('min-header');
            } else {
                header.removeClass('min-header');
            }
        });
    });
});