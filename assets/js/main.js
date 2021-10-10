let win = navigator.userAgent.indexOf("Win") != -1;
let mac = navigator.userAgent.indexOf("Mac") != -1;
let android = navigator.userAgent.indexOf("Android") != -1;
let ios = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.userAgent);

if ( win ) {
	$('body').addClass('device-window');
	$('.scrollbar-customize').scrollbar();
}

$('.hamburger').on('click', function(){
	$(this).toggleClass('active');
	$(this).siblings('nav').slideToggle();
});

$(function () {
	let width = $(window).width();
	let height = $(window).height();
	let headerHeight = $('header').outerHeight();
	$('a.smooth-scroll[href*="#"]:not([href="#"])').on("click", function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			let target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - headerHeight + 1)
				}, 1000);
				return false;
			}
		}
	});

	function mapMainResize(height) {
		let mainHeight = height - headerHeight - $('footer').outerHeight();
		$('.contact-page main, .contact-page main .map').css({
			'min-height': mainHeight
		})
	}
	mapMainResize(height);

	$(window).on('scroll', function () {
		let scroll = $(this).scrollTop();
		let openingHeight = $(".opening").outerHeight();
		// if (scroll >= openingHeight / 2) {
		// 	$(".fixed-function").fadeIn();
		// } else {
		// 	$(".fixed-function").fadeOut(100);
		// }
	});
	$(window).on('resize', _.throttle(function() {
		let height = $(window).height();
		mapMainResize(height);
	}, 300));
});
