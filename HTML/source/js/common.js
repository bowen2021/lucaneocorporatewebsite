;(function ($) {
	'use strict'

	$(window).on('load resize', function () {
		// map

		function contactsMap() {
			var map = $('.contacts-map')

			if (map.length > 0) {
				var apiKey = map.attr('data-api-key'),
					apiURL

				if (apiKey) {
					apiURL =
						'https://maps.google.com/maps/api/js?key=' +
						apiKey +
						'&sensor=false'
				} else {
					apiURL = 'https://maps.google.com/maps/api/js?sensor=false'
				}

				$.getScript(apiURL, function (data, textStatus, jqxhr) {
					map.each(function () {
						var current_map = $(this),
							latlng = new google.maps.LatLng(
								current_map.attr('data-longitude'),

								current_map.attr('data-latitude')
							),
							point = current_map.attr('data-marker'),
							center = {
								lat: 40.73061,
								lng: -73.935242,
							},
							myOptions = {
								zoom: 13,
								center: center,
								disableDefaultUI: true,
								mapTypeId: google.maps.MapTypeId.ROADMAP,
								mapTypeControl: false,
								scrollwheel: false,
								draggable: true,
								panControl: false,
								zoomControl: false,
								disableDefaultUI: true,
								styles: [
									{
										featureType: 'administrative',
										elementType: 'labels.text.fill',
										stylers: [
											{
												color: '#212326',
											},
										],
									},
									{
										featureType: 'administrative.locality',
										elementType: 'labels.text.fill',
										stylers: [
											{
												color: '#464646',
											},
										],
									},
									{
										featureType: 'landscape',
										elementType: 'all',
										stylers: [
											{
												color: '#F8F8F9',
											},
										],
									},
									{
										featureType: 'poi',
										elementType: 'all',
										stylers: [
											{
												visibility: 'off',
											},
										],
									},
									{
										featureType: 'road',
										elementType: 'all',
										stylers: [
											{
												saturation: -100,
											},
											{
												lightness: 45,
											},
										],
									},
									{
										featureType: 'road',
										elementType: 'labels',
										stylers: [
											{
												visibility: 'on',
											},
										],
									},
									{
										featureType: 'road',
										elementType: 'labels.icon',
										stylers: [
											{
												visibility: 'on',
											},
										],
									},
									{
										featureType: 'transit',
										elementType: 'all',
										stylers: [
											{
												visibility: 'on',
											},
										],
									},
									{
										featureType: 'road.highway',
										elementType: 'all',
										stylers: [
											{
												visibility: 'on',
											},
										],
									},
									{
										featureType: 'road.arterial',
										elementType: 'labels.icon',
										stylers: [
											{
												visibility: 'on',
											},
										],
									},
									{
										featureType: 'transit',
										elementType: 'all',
										stylers: [
											{
												visibility: 'on',
											},
										],
									},
									{
										featureType: 'water',
										elementType: 'all',
										stylers: [
											{
												color: '#E2E3E7',
											},
											{
												visibility: 'on',
											},
										],
									},
								],
							}

						var map = new google.maps.Map(current_map[0], myOptions)

						addMarker({
							lat: 40.73061,
							lng: -73.935242,
						})

						addMarker({
							lat: 40.73981,
							lng: -73.957242,
						})

						function addMarker(coords) {
							var marker = new google.maps.Marker({
								position: coords,
								map: map,
								icon: {
									url: point,
								},
							})
						}

						google.maps.event.addDomListener(window, 'resize', function () {
							var center = map.getCenter()
							google.maps.event.trigger(map, 'resize')
							map.setCenter(center)
						})
					})
				})
			}
		}

		contactsMap()

		// map

		function locationsMap() {
			var map = $('.locations-map')

			if (map.length > 0) {
				var apiKey = map.attr('data-api-key'),
					apiURL

				if (apiKey) {
					apiURL =
						'https://maps.google.com/maps/api/js?key=' +
						apiKey +
						'&sensor=false'
				} else {
					apiURL = 'https://maps.google.com/maps/api/js?sensor=false'
				}

				$.getScript(apiURL, function (data, textStatus, jqxhr) {
					map.each(function () {
						var current_map = $(this),
							latlng = new google.maps.LatLng(
								current_map.attr('data-longitude'),

								current_map.attr('data-latitude')
							),
							point = current_map.attr('data-marker'),
							center = {
								lat: 40.73061,
								lng: -73.935242,
							},
							myOptions = {
								zoom: 14,
								center: center,
								disableDefaultUI: true,
								mapTypeId: google.maps.MapTypeId.ROADMAP,
								mapTypeControl: false,
								scrollwheel: false,
								draggable: true,
								panControl: false,
								zoomControl: false,
								disableDefaultUI: true,
								styles: [
									{
										featureType: 'administrative',
										elementType: 'labels.text.fill',
										stylers: [
											{
												color: '#212326',
											},
										],
									},
									{
										featureType: 'administrative.locality',
										elementType: 'labels.text.fill',
										stylers: [
											{
												color: '#464646',
											},
										],
									},
									{
										featureType: 'landscape',
										elementType: 'all',
										stylers: [
											{
												color: '#F8F8F9',
											},
										],
									},
									{
										featureType: 'poi',
										elementType: 'all',
										stylers: [
											{
												visibility: 'off',
											},
										],
									},
									{
										featureType: 'road',
										elementType: 'all',
										stylers: [
											{
												saturation: -100,
											},
											{
												lightness: 45,
											},
										],
									},
									{
										featureType: 'road',
										elementType: 'labels',
										stylers: [
											{
												visibility: 'on',
											},
										],
									},
									{
										featureType: 'road',
										elementType: 'labels.icon',
										stylers: [
											{
												visibility: 'on',
											},
										],
									},
									{
										featureType: 'transit',
										elementType: 'all',
										stylers: [
											{
												visibility: 'on',
											},
										],
									},
									{
										featureType: 'road.highway',
										elementType: 'all',
										stylers: [
											{
												visibility: 'on',
											},
										],
									},
									{
										featureType: 'road.arterial',
										elementType: 'labels.icon',
										stylers: [
											{
												visibility: 'on',
											},
										],
									},
									{
										featureType: 'transit',
										elementType: 'all',
										stylers: [
											{
												visibility: 'on',
											},
										],
									},
									{
										featureType: 'water',
										elementType: 'all',
										stylers: [
											{
												color: '#E2E3E7',
											},
											{
												visibility: 'on',
											},
										],
									},
								],
							}

						var map = new google.maps.Map(current_map[0], myOptions)

						addMarker({
							lat: 40.73061,
							lng: -73.935242,
						})

						addMarker({
							lat: 40.73981,
							lng: -73.957242,
						})

						addMarker({
							lat: 40.73101,
							lng: -73.999242,
						})

						addMarker({
							lat: 40.72101,
							lng: -73.959242,
						})

						function addMarker(coords) {
							var marker = new google.maps.Marker({
								position: coords,
								map: map,
								icon: {
									url: point,
								},
							})
						}

						google.maps.event.addDomListener(window, 'resize', function () {
							var center = map.getCenter()
							google.maps.event.trigger(map, 'resize')
							map.setCenter(center)
						})
					})
				})
			}
		}

		locationsMap()
	})

	$(window).on('scroll', function () {
		function headerIntro() {
			var header = $('.intro-header')

			if (!header.length) return

			var scroll = $(window).scrollTop(),
				hamburger = $('.hamburger')

			if (scroll >= 1) {
				header.addClass('page-header--fixed')
				hamburger.removeClass('hamburger--white')
			} else {
				header.removeClass('page-header--fixed')
				hamburger.addClass('hamburger--white')
			}
		}

		headerIntro()

		function headerOne() {
			var header = $('.page-header')

			if (!header.length) return

			var scroll = $(window).scrollTop()

			if (scroll >= 1) {
				header.addClass('page-header--fixed')
			} else {
				header.removeClass('page-header--fixed')
			}
		}

		headerOne()

		function headerFrontTwo() {
			var header = $('.page-header_2')

			if (!header.length) return

			var scroll = $(window).scrollTop(),
				menu = $('.main-menu'),
				hamburger = $('.hamburger'),
				langSelect = $('.lang-select')

			if (scroll >= 1) {
				header.addClass('page-header--fixed')
				menu.removeClass('main-menu--white')
				hamburger.removeClass('hamburger--white')
				langSelect.removeClass('lang-select--white')
			} else {
				header.removeClass('page-header--fixed')
				menu.addClass('main-menu--white')
				hamburger.addClass('hamburger--white')
				langSelect.addClass('lang-select--white')
			}
		}

		headerFrontTwo()

		function headerFrontThree() {
			var header = $('.page-header_3')

			if (!header.length) return

			var scroll = $(window).scrollTop(),
				menu = $('.main-menu'),
				hamburger = $('.hamburger'),
				langSelect = $('.lang-select')

			if (scroll >= 1) {
				header.addClass('page-header--fixed')
				menu.removeClass('main-menu--white')
				hamburger.removeClass('hamburger--white')
				langSelect.removeClass('lang-select--white')
			} else {
				header.removeClass('page-header--fixed')
				menu.addClass('main-menu--white')
				hamburger.addClass('hamburger--white')
				langSelect.addClass('lang-select--white')
			}
		}

		headerFrontThree()

		function headerFour() {
			var header = $('.page-header_4')

			if (!header.length) return

			var scroll = $(window).scrollTop()

			if (scroll >= 1) {
				header.addClass('page-header--fixed')
			} else {
				header.removeClass('page-header--fixed')
			}
		}

		headerFour()

		function shopHeader() {
			var header = $('.shop-header')

			if (!header.length) return

			var scroll = $(window).scrollTop()

			if (scroll >= 1) {
				header.addClass('shop-header--fixed')
			} else {
				header.removeClass('shop-header--fixed')
			}
		}

		shopHeader()

		function headerSix() {
			var header = $('.page-header_6')

			if (!header.length) return

			var scroll = $(window).scrollTop()

			if (scroll >= 1) {
				header.addClass('page-header--fixed')
			} else {
				header.removeClass('page-header--fixed')
			}
		}

		headerSix()
	})

	$(document).ready(function () {
		// contact form

		function form() {
			var jsform = $('#ajax-form')

			if (!jsform.length) return

			$('#ajax-form').validate({
				rules: {
					name: {
						required: true,
						minlength: 2,
					},
					email: {
						required: true,
						email: true,
					},
					phone: {
						required: true,
					},
					message: {
						required: true,
					},
				},

				messages: {
					name: {
						required: 'Please enter your name',
						minlength: 'Your name must consist of at least 2 characters',
					},
					email: {
						required: 'Please enter your email',
					},
					phone: {
						required: 'Please enter your phone number',
					},
					message: {
						required: 'Please enter your message',
					},
				},

				submitHandler: function (form) {
					$(form).ajaxSubmit({
						type: 'POST',
						data: $(form).serialize(),
						url: 'form.php',

						success: function () {
							$('.alert--success').fadeIn()
							$('#ajax-form').each(function () {
								this.reset()
							})
						},

						error: function () {
							$('.alert--error').fadeIn()
						},
					})
				},
			})
		}

		form()

		// menu trigger

		function menuTrigger() {
			var trigger = $('.hamburger')

			if (!trigger.length) return

			var close = $('.menu-dropdown__close')
			var introScroll = $('.menu-dropdown--intro .screen__link')

			trigger.on('click', function () {
				$(this).toggleClass('hamburger--active')
				$('body').toggleClass('body--static')
				$('.menu-dropdown').toggleClass('menu-dropdown--active')
			})

			close.on('click', function () {
				trigger.removeClass('hamburger--active')
				$('body').removeClass('body--static')
				$('.menu-dropdown').removeClass('menu-dropdown--active')
			})

			introScroll.on('click', function () {
				trigger.removeClass('hamburger--active')
				$('body').removeClass('body--static')
				$('.menu-dropdown').removeClass('menu-dropdown--active')
			})
		}

		menuTrigger()

		// mobile menu

		function mobileMenu() {
			$('.screen--trigger').on('click', function () {
				var triggerValue = $(this).data('category')

				$('.screen--start').addClass('screen--inactive')

				$('.menu-dropdown__inner').each(function () {
					if ($(this).data('value') === triggerValue) {
						$(this).addClass('menu-dropdown__inner--active')
					}
				})
			})

			$('.screen__back').on('click', function () {
				$('.menu-dropdown__inner').removeClass('menu-dropdown__inner--active')
				$('.screen--start').removeClass('screen--inactive')
			})
		}

		mobileMenu()

		// accordion

		function accordion() {
			var accordion = $('.accordion')

			if (!accordion.length) return

			var trigger = $('.accordion__title-block')

			trigger.on('click', function () {
				$(this)
					.children('.accordion__close')
					.toggleClass('accordion__close--active')

				$(this)
					.parents()
					.children('.accordion__text-block')
					.stop()
					.slideToggle(300)
			})
		}

		accordion()

		// alert close

		$('.alert__close').on('click', function () {
			$(this).parent('.alert').fadeOut(300)
		})

		// counter

		function counter() {
			var counter = $('.js-counter')

			if (!counter.length) return

			counter.counterUp({
				delay: 10,
				time: 1000,
			})
		}

		counter()

		// tabs

		function tabs() {
			var tabs = $('.tabs')

			if (!tabs.length) return

			tabs.responsiveTabs({
				startCollapsed: 'false',
			})
		}

		tabs()

		// tracking input

		function trankingInput() {
			var input = $('.tracking-form__input')

			if (!input.length) return

			input.on('change', function () {
				var $this = $(this)

				if ($this.val() !== '') {
					$this.addClass('field--filled')
				} else {
					$this.removeClass('field--filled')
				}
			})
		}

		trankingInput()

		// nice select

		function select() {
			var select = $('.form__select')

			if (!select.length) return

			select.niceSelect()
		}

		select()

		// js video

		function videoTrigger() {
			var trigger = $('.js-video')

			if (!trigger.length) return

			trigger.fancybox()
		}

		videoTrigger()

		// promo slider

		function promoSlider() {
			var slider = $('.promo-slider')

			if (!slider.length) return

			var status = $('.promo-slider__count')

			slider.on('init afterChange', function (
				event,
				slick,
				currentSlide,
				nextSlide
			) {
				var i = (currentSlide ? currentSlide : 0) + 1
				status.html(i + '<b>/</b>' + slick.slideCount)
			})

			slider.slick({
				fade: true,
				adaptiveHeight: true,
				infinite: true,
				speed: 1200,
				arrows: false,
				dots: true,
				appendDots: $('.promo-slider__nav'),
			})
		}

		promoSlider()

		// promo dual slider

		function promoDual() {
			var mainSlider = $('.promo-mainslider')

			if (!mainSlider.length) return

			var navSlider = $('.promo-subslider')

			mainSlider.slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				fade: true,
				adaptiveHeight: true,
				infinite: true,
				speed: 1200,
				arrows: false,
				asNavFor: '.promo-subslider',
			})

			navSlider.slick({
				arrows: false,
				slidesToShow: 4,
				slidesToScroll: 1,
				asNavFor: '.promo-mainslider',
				focusOnSelect: true,
			})
		}

		promoDual()

		// testimonials

		function testimonials() {
			var slider = $('.testimonials-slider')

			if (!slider.length) return

			slider.slick({
				arrows: false,
				dots: true,
				adaptiveHeight: true,
				appendDots: $('.testimonials__nav'),
			})
		}

		testimonials()

		// articles slider

		function articlesSlider() {
			var slider = $('.articles-slider')

			if (!slider.length) return

			slider.slick({
				arrows: false,
				dots: true,
				slidesToShow: 3,
				appendDots: $('.articles-slider__nav'),

				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 2,
						},
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 1,
						},
					},
				],
			})
		}

		articlesSlider()

		// logos slider

		function logosSlider() {
			var slider = $('.logos-slider')

			if (!slider.length) return

			slider.slick({
				slidesToShow: 4,
				arrows: false,
				dots: true,

				responsive: [
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 3,
						},
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 2,
						},
					},
					{
						breakpoint: 576,
						settings: {
							slidesToShow: 1,
						},
					},
				],
			})
		}

		logosSlider()

		// images slider

		function imagesSlider() {
			var slider = $('.images-slider')

			if (!slider.length) return

			slider.slick({
				arrows: false,
				dots: true,
				slidesToShow: 2,
				appendDots: $('.images-slider__nav'),

				responsive: [
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 1,
						},
					},
				],
			})
		}

		imagesSlider()

		// range slider

		function rangeSlider() {
			var rangeSlider = $('.js-range')

			if (!rangeSlider.length) return

			var calculatorRange = $('.range--calculator')

			calculatorRange.ionRangeSlider({
				min: 0,
				max: 450,
				from: 234,
				skin: 'round',
				step: 1,
			})

			var shopRange = $('.range--shop')

			var min = $('.range-slider__min')
			var max = $('.range-slider__max')

			shopRange.ionRangeSlider({
				skin: 'round',
				type: 'double',
				step: 5,
				min: 0,
				max: 70,
				from: 5,
				to: 55,

				onChange: function (data) {
					min.val(data.from)
					max.val(data.to)
				},
			})
		}

		rangeSlider()

		// masonry gallery

		function masonryGallery() {
			var gallery = $('.js-gallery')

			if (!gallery.length) return

			gallery.isotope({
				itemSelector: '.js-gallery__item',
				percentPosition: true,
			})

			var filter = $('.filter-panel__item')

			filter.on('click', function () {
				var filterValue = $(this).attr('data-filter')

				gallery.isotope({
					filter: filterValue,
				})
			})

			filter.on('click', function () {
				filter.removeClass('filter-panel__item--active')
				$(this).addClass('filter-panel__item--active')
			})
		}

		masonryGallery()

		// history slider

		function historySlider() {
			var slider = $('.history--slider')

			if (!slider.length) return

			slider.slick({
				slidesToShow: 3,
				arrows: false,
				dots: true,
				appendDots: $('.steps-slider__nav'),

				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 2,
						},
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 1,
						},
					},
				],
			})
		}

		historySlider()

		// history slider

		function cooperationSlider() {
			var slider = $('.cooperation--slider')

			if (!slider.length) return

			slider.slick({
				slidesToShow: 4,
				arrows: false,

				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 3,
						},
					},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 2,
						},
					},
					{
						breakpoint: 576,
						settings: {
							slidesToShow: 1,
						},
					},
				],
			})
		}

		cooperationSlider()

		// cases slider

		function casesSlider() {
			var slider = $('.cases-slider')

			if (!slider.length) return

			var nav = $('.cases-slider__nav')

			slider.slick({
				speed: 600,
				centerMode: true,
				slidesToShow: 3,
				centerPadding: '0px',
				arrows: false,
				dots: true,
				appendDots: nav,

				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 2,
							centerMode: false,
						},
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 1,
						},
					},
				],
			})
		}

		casesSlider()

		// datepicker

		function datePicker() {
			var picker = $('[data-toggle="datepicker"]')

			picker.datepicker()
		}

		datePicker()

		// quantity

		function quantity() {
			var count = $('.cart-item__count')

			if (!count.length) return

			var minus = $('.cart-item__minus')
			var plus = $('.cart-item__plus')

			minus.on('click', function () {
				var $input = $(this).parent().find('input')
				var count = parseInt($input.val()) - 1
				count = count < 1 ? 1 : count
				$input.val(count)
				$input.change()
				return false
			})

			plus.on('click', function () {
				var $input = $(this).parent().find('input')
				$input.val(parseInt($input.val()) + 1)
				$input.change()
				return false
			})
		}

		quantity()

		// password view

		function passwordView() {
			var passwordTrigger = $('.password-trigger')

			if (!passwordTrigger.length) return

			passwordTrigger.on('click', function () {
				$(this).toggleClass('password-trigger--active')

				var input = $($(this).attr('toggle'))

				if (input.attr('type') == 'password') {
					input.attr('type', 'text')
				} else {
					input.attr('type', 'password')
				}
			})
		}

		passwordView()

		// bests slider

		function bestsSlider() {
			var slider = $('.bests-slider')

			if (!slider.length) return

			var nav = $('.bests-slider__nav')

			slider.slick({
				slidesToShow: 4,
				arrows: false,
				dots: true,
				appendDots: nav,

				responsive: [
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 3,
						},
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 2,
						},
					},
					{
						breakpoint: 576,
						settings: {
							slidesToShow: 1,
						},
					},
				],
			})
		}

		bestsSlider()

		// dual slider

		function dualSlider() {
			var slider = $('.main-slider')

			if (!slider.length) return

			slider.slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				asNavFor: '.nav-slider',
				fade: true,
			})

			var navSlider = $('.nav-slider')

			navSlider.slick({
				slidesToShow: 4,
				slidesToScroll: 1,
				asNavFor: '.main-slider',
				focusOnSelect: true,
				arrows: false,
				vertical: true,

				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 3,
						},
					},
					{
						breakpoint: 576,
						settings: {
							vertical: false,
							slidesToShow: 3,
						},
					},
				],
			})
		}

		dualSlider()

		// form quantity

		function formQuantity() {
			var count = $('.form__count')

			if (!count.length) return

			var minus = $('.form__minus')
			var plus = $('.form__plus')

			minus.on('click', function () {
				var $input = $(this).parent().find('input')
				var count = parseInt($input.val()) - 1
				count = count < 1 ? 1 : count
				$input.val(count)
				$input.change()
				return false
			})

			plus.on('click', function () {
				var $input = $(this).parent().find('input')
				$input.val(parseInt($input.val()) + 1)
				$input.change()
				return false
			})
		}

		formQuantity()

		// scroll to id

		function scrollToId() {
			var scroll = $('.js-scroll')

			if (!scroll.length) return

			scroll.mPageScroll2id({
				highlightClass: 'js-scroll--highlighted',
			})
		}

		scrollToId()

		// pages slider

		function pagesSlider() {
			var slider = $('.pages-slider')

			if (!slider.length) return

			var dots = $('.pages-slider__nav')

			slider.slick({
				slidesToShow: 3,
				slidesToScroll: 3,
				arrows: false,
				dots: true,
				appendDots: dots,

				responsive: [
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
						},
					},
					{
						breakpoint: 576,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						},
					},
				],
			})
		}

		pagesSlider()

		// aside trigger

		function asideTrigger() {
			var trigger = $('.shop__aside-trigger')

			if (!trigger.length) return

			trigger.on('click', function () {
				$('.aside-holder').addClass('aside-holder--visible')
				$('.shop__backdrop').addClass('shop__backdrop--visible')
				$('body').addClass('body--static')
			})

			var close = $('.shop__aside-close')

			close.on('click', function () {
				$('.aside-holder').removeClass('aside-holder--visible')
				$('.shop__backdrop').removeClass('shop__backdrop--visible')
				$('body').removeClass('body--static')
			})

			var backdrop = $('.shop__backdrop')

			backdrop.on('click', function () {
				$(this).removeClass('shop__backdrop--visible')
				$('.aside-holder').removeClass('aside-holder--visible')
				$('body').removeClass('body--static')
			})
		}

		asideTrigger()
	})
})(jQuery)
