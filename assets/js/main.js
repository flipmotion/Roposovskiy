$(document).ready(function() {
	$('a.smooth').click(function(){
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top -50
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
	form.ajaxForm(function() {
		
		$('#call').modal('hide');
		$('#call2').modal('hide');
		$('#call3').modal('hide');
		$('#call4').modal('hide');
		$('#call5').modal('hide');
		$('#call6').modal('hide');
		$('#thx').modal('show');
		$(form).resetForm();
	});
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
			center: [55.925949, 37.767771],
			zoom: 16,
			controls: []
		}),
		myMap.behaviors
			.disable(['rightMouseButtonMagnifier' , 'scrollZoom'])
			myPlacemark = new ymaps.Placemark([55.925949, 37.767771], {
				hintContent: [
				''
			].join('')
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'assets/img/main-pin.png',
				iconImageSize: [97, 101],
				iconImageOffset: [-38, -101]
			});
			// myPlacemark2 = new ymaps.Placemark([55.926855, 37.778221], {
			// 	hintContent: [
			// 	''
			// ].join('')
			// }, {
			// 	iconLayout: 'default#image',
			// 	iconImageHref: 'assets/img/pin1.png',
			// 	iconImageSize: [291, 171],
			// 	iconImageOffset: [-38, -91]
			// });
			// myPlacemark3 = new ymaps.Placemark([55.924749, 37.762947], {
			// 	hintContent: [
			// 	''
			// ].join('')
			// }, {
			// 	iconLayout: 'default#image',
			// 	iconImageHref: 'assets/img/pin2.png',
			// 	iconImageSize: [228, 177],
			// 	iconImageOffset: [-38, -91]
			// });
			// myPlacemark4 = new ymaps.Placemark([55.9261257, 37.7689685], {
			// 	hintContent: [
			// 	''
			// ].join('')
			// }, {
			// 	iconLayout: 'default#image',
			// 	iconImageHref: 'assets/img/pin3.png',
			// 	iconImageSize: [291, 171],
			// 	iconImageOffset: [-38, -91]
			// });
			// myPlacemark5 = new ymaps.Placemark([55.9261257, 37.7689685], {
			// 	hintContent: [
			// 	''
			// ].join('')
			// }, {
			// 	iconLayout: 'default#image',
			// 	iconImageHref: 'assets/img/pin4.png',
			// 	iconImageSize: [291, 171],
			// 	iconImageOffset: [-38, -91]
			// });
			// myPlacemark6 = new ymaps.Placemark([55.9261257, 37.7689685], {
			// 	hintContent: [
			// 	''
			// ].join('')
			// }, {
			// 	iconLayout: 'default#image',
			// 	iconImageHref: 'assets/img/pin5.png',
			// 	iconImageSize: [291, 171],
			// 	iconImageOffset: [-38, -91]
			// });
			// myPlacemark7 = new ymaps.Placemark([55.929489,37.778092], {
			// 	hintContent: [
			// 	''
			// ].join('')
			// }, {
			// 	iconLayout: 'default#image',
			// 	iconImageHref: 'assets/img/pin6.png',
			// 	iconImageSize: [249, 201],
			// 	iconImageOffset: [-38, -91]
			// });
		myMap.geoObjects.add(myPlacemark);
		// myMap.geoObjects.add(myPlacemark2);
		// myMap.geoObjects.add(myPlacemark3);
		// myMap.geoObjects.add(myPlacemark4);
		// myMap.geoObjects.add(myPlacemark5);
		// myMap.geoObjects.add(myPlacemark6);
		// myMap.geoObjects.add(myPlacemark7);
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
function send(){
	var form = $('[data-form="send"]');
	form.ajaxForm(function() {
		
		$('#call').modal('hide');
		$('#call2').modal('hide');
		$('#call3').modal('hide');
		$('#call4').modal('hide');
		$('#call5').modal('hide');
		$('#call6').modal('hide');
		$('#thx').modal('show');
		$(form).resetForm();
	});
}
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
