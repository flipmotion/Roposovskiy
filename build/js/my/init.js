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
			myPlacemark2 = new ymaps.Placemark([55.926855, 37.778221], {
				hintContent: [
				''
			].join('')
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'assets/img/pin1.png',
				iconImageSize: [291, 171],
				iconImageOffset: [-200, -10]
			});
			myPlacemark3 = new ymaps.Placemark([55.924749, 37.762947], {
				hintContent: [
				''
			].join('')
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'assets/img/pin2.png',
				iconImageSize: [228, 177],
				iconImageOffset: [-38, 0]
			});
			myPlacemark4 = new ymaps.Placemark([55.92521582, 37.76805826], {
				hintContent: [
				''
			].join('')
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'assets/img/pin3.png',
				iconImageSize: [296, 177],
				iconImageOffset: [-20, 10]
			});
			myPlacemark5 = new ymaps.Placemark([55.92291129, 37.75971263], {
				hintContent: [
				''
			].join('')
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'assets/img/pin4.png',
				iconImageSize: [257, 177],
				iconImageOffset: [-200,-160]
			});
			myPlacemark6 = new ymaps.Placemark([55.92728459, 37.75454133], {
				hintContent: [
				''
			].join('')
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'assets/img/pin5.png',
				iconImageSize: [332, 171],
				iconImageOffset: [0, -66]
			});
			myPlacemark7 = new ymaps.Placemark([55.929489,37.778092], {
				hintContent: [
				''
			].join('')
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'assets/img/pin6.png',
				iconImageSize: [249, 201],
				iconImageOffset: [-138, -0]
			});
		myMap.geoObjects.add(myPlacemark);
		myMap.geoObjects.add(myPlacemark2);
		myMap.geoObjects.add(myPlacemark3);
		myMap.geoObjects.add(myPlacemark4);
		myMap.geoObjects.add(myPlacemark5);
		myMap.geoObjects.add(myPlacemark6);
		myMap.geoObjects.add(myPlacemark7);
	}
	var myMap2;
	ymaps.ready(init2);


	function init2 () {
		myMap2 = new ymaps.Map('map2', {
			center: [55.9261257, 37.7689685],
			zoom: 15,
			controls: []
		}),
		// router = new ymaps.Router(
  //               [new ymaps.GeoPoint(37.61934642, 55.75089601), new ymaps.GeoPoint(37.45729808, 55.63920392)], [],
  //               {viewAutoApply: true}
  //       ),
        // Добавляем на карту полный маршрут
		myMap2.behaviors
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
		myMap2.geoObjects.add(myPlacemark);
		//myMap2.addOverlay(router);


		// var router = new YMaps.Router(
  //               [new YMaps.GeoPoint(37.61934642, 55.75089601), new YMaps.GeoPoint(37.45729808, 55.63920392)], [],
  //               {viewAutoApply: true}
  //       );
  //       myMap2.addOverlay(router); // Добавляем на карту полный маршрут

  //       var router2 = new ymaps.Router(
  //               [new ymaps.GeoPoint(37.61934642, 55.75089601), new ymaps.GeoPoint(37.37215404, 55.79115054)], [],
  //               {viewAutoApply: true}
  //       );
  //       style = new ymaps.Style();//переменная для класс стилей
  //       style.lineStyle = new ymaps.LineStyle(); // Задаем стиль линии
  //       style.lineStyle.strokeWidth = 5; // Ширина линии
  //       style.lineStyle.strokeColor = '30405080' //цвет линии
  //       router2.setStyle(style);//рименяем стиль к конкретному маршруту
  //       myMap2.addOverlay(router2);

  //        var router3 = new YMaps.Router(
  //               [new YMaps.GeoPoint(37.61934642, 55.75089601), new YMaps.GeoPoint(37.81984691, 55.68422956)], [],
  //               {viewAutoApply: true}
  //       );
  //       map.addOverlay(router3);
	}



	 // YMaps.jQuery(function () {
  //       var map = new YMaps.Map(YMaps.jQuery("#map2")[0]);
  //       map.setCenter(new YMaps.GeoPoint(37.71, 55.74), 10);



  //       // первая тчока
  //       var router = new YMaps.Router(
  //               [new YMaps.GeoPoint(37.61934642, 55.75089601), new YMaps.GeoPoint(37.45729808, 55.63920392)], [],
  //               {viewAutoApply: true}
  //       );
  //       map.addOverlay(router); // Добавляем на карту полный маршрут

  //       // вторая тчока
  //       var router2 = new YMaps.Router(
  //               [new YMaps.GeoPoint(37.61934642, 55.75089601), new YMaps.GeoPoint(37.37215404, 55.79115054)], [],
  //               {viewAutoApply: true}
  //       );
  //       style = new YMaps.Style();//переменная для класс стилей
  //       style.lineStyle = new YMaps.LineStyle(); // Задаем стиль линии
  //       style.lineStyle.strokeWidth = 5; // Ширина линии
  //       style.lineStyle.strokeColor = '30405080' //цвет линии
  //       router2.setStyle(style);//рименяем стиль к конкретному маршруту
  //       map.addOverlay(router2);

  //       // третья тчока
  //       var router3 = new YMaps.Router(
  //               [new YMaps.GeoPoint(37.61934642, 55.75089601), new YMaps.GeoPoint(37.81984691, 55.68422956)], [],
  //               {viewAutoApply: true}
  //       );
  //       map.addOverlay(router3);


  //   });
});
function send(){
	var form = $('[data-form="send"]');
	form.ajaxForm(function() {
		window.location.href = "thx.html";
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
