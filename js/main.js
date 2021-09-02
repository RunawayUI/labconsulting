


$ (function () {
	var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(800).fadeOut('fast');

    if($('#slider').length) {
    	$('.slider').slick({
	    	dots: true,
	    	prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></button>',
	    	nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></button>'
	    });
	    $('.slider').slick('slickGoTo', 1);
    }

    $(".trust__btn").click(function() { // ID откуда кливаем
	    $('html, body').animate({
	        scrollTop: $("#info").offset().top  // класс объекта к которому приезжаем
	    }, 800); // Скорость прокрутки
	});
    
    $('.hamburger').click(function() {
    	$('.menu-collapse').toggleClass('d-none order');
    	$('.menu__list').toggleClass('menu-opened');
    });
    $('.btn').click(function(e) {
    	e.preventDefault();
    	$('#exampleModal').arcticmodal();
    });
    $('.mission__btn').click(function(e) {
        e.preventDefault();
        $('#exampleModal').arcticmodal();
    });
});