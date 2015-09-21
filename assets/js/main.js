$(document).ready(function() {
	$('a.smooth').click(function(){
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top 
		}, 1000);
		return false;
	});
	var owlMain = $('[data-item="slider-main"]');
	owlMain.on('initialized.owl.carousel', function(event) {
		var items = event.item.count;
		var item = event.item.index + 1;
		var total = $('[data-item="total"]');
		var carrent = $('[data-item="carrent"]');
		total.html(items);
		carrent.html(item);
	});

	owlMain.owlCarousel({
		loop:false,
		margin:0,
		nav:true,
		dots:true,
		items:1,
		autoplayHoverPause: true,
		autoplayTimeout: 5000,
		autoplay:true,
		navText: [
		  "<i class='my-arrow-left'></i>",
		  "<i class='my-arrow-right'></i>"
		],
		dots: true,
	});

	owlMain.on('changed.owl.carousel', function(event) {
		var items = event.item.count;
		var item = event.item.index + 1;
		var total = $('[data-item="total"]');
		var carrent = $('[data-item="carrent"]');
		total.html(items);
		carrent.html(item);
	});
	/*validation startn*/
	var form = $('[data-form="send"]');
	$(form).validator().on('submit', function (e) {
		if ($(this).hasClass('disabled')) {
			// handle the invalid form...
			e.preventDefault();
		} else {
			// everything looks good!
			send();
		}
	});
	/*validation end*/
	
	menuTop();
	$(window).scroll(function () {
		var scroll_r = $(this).scrollTop();
		menuTop();
	});

	  $(document).click(function(event) {
		if ($(event.target).closest('[data-item="offcanvas-menu"]').length) {
			$('body').addClass('active');
			$('.my-offcanvas-trigger').addClass('active');
			$('[data-item="offcanvas-menu"]').addClass('active');
		}
		else {
			$('body').removeClass('active');
			$('a.my-offcanvas-trigger').removeClass('active');
			$('[data-item="offcanvas-menu"]').removeClass('active');
		}
		event.stopPropagation();
	  });
	
	$('.my-offcanvas-trigger').click(function(event){
		$('[data-item="offcanvas-menu"]').toggleClass('active');
		$('body').toggleClass('active');
		$(this).toggleClass('active');
		event.stopPropagation();
	});

	var myMap;
	ymaps.ready(init);
	function init () {
		myMap = new ymaps.Map('map', {
			center: [55.9261257, 37.7689685],
			zoom: 16,
			controls: []
		}),
		myMap.behaviors
			.disable(['rightMouseButtonMagnifier' , 'scrollZoom'])
			myPlacemark = new ymaps.Placemark([55.9261257, 37.7689685], {
				hintContent: [
				''
			].join(''),
				balloonContentBody: [
				'1'
			].join('')
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'assets/img/pick-map.png',
				iconImageSize: [102, 91],
				iconImageOffset: [-38, -91]
			});
		myMap.geoObjects.add(myPlacemark);
	}
	var myMap2;
	ymaps.ready(init2);
	function init2 () {
		myMap2 = new ymaps.Map('map2', {
			center: [55.9261257, 37.7689685],
			zoom: 16,
			controls: []
		}),
		myMap2.behaviors
			.disable(['rightMouseButtonMagnifier' , 'scrollZoom'])
			myPlacemark = new ymaps.Placemark([55.9261257, 37.7689685], {
				hintContent: [
				''
			].join(''),
				balloonContentBody: [
				'1'
			].join('')
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'assets/img/pick-map.png',
				iconImageSize: [102, 91],
				iconImageOffset: [-38, -91]
			});
		myMap2.geoObjects.add(myPlacemark);
	}
	
});
function menuTop(){
	if ( $(this).scrollTop() > 10 && !$('.header').hasClass('open') ) {
		$('.header').addClass('fix-header');
		var loc = $('.header .logo img').attr("data-src");
		$('.header .logo img').attr("src",loc);
	} else if ( $(this).scrollTop() <= 10 ) {
		$('.header').removeClass('fix-header');
		var pick = $('.header .logo img').attr("data-src2");
		$('.header .logo img').attr("src",pick);
	}
}
