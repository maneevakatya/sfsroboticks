"use strict";

	window.tcis = {};

	if (window.NodeList && !NodeList.prototype.forEach) {
		NodeList.prototype.forEach = Array.prototype.forEach;
	}

	function fadeIn(elem, ms, cb, d) {
		if (!d) d = 'block';
		if (!elem) return;

		elem.style.opacity = 0;
		elem.style.display = d;

		if (ms) {
			var opacity = 0;
			var timer = setInterval(function () {
				opacity += 50 / ms;
				if (opacity >= 1) {
					clearInterval(timer);
					opacity = 1;
					if (cb) cb();
				}
				elem.style.opacity = opacity;
			}, 50);
		} else {
			elem.style.opacity = 1;
			if (cb) cb();
		}
	};

	function fadeOut(elem, ms, cb) {
		if (!elem) return;

		elem.style.opacity = 1;

		if (ms) {
			var opacity = 1;
			var timer = setInterval(function () {
				opacity -= 50 / ms;
				if (opacity <= 0) {
					clearInterval(timer);
					opacity = 0;
					elem.style.display = 'none';
					if (cb) cb();
				}
				elem.style.opacity = opacity;
			}, 50);
		} else {
			elem.style.opacity = 0;
			elem.style.display = 'none';
			if (cb) cb();
		}
	};

	function toggleClass(selector, newclass) {
		if (selector.classList) {
			selector.classList.toggle(newclass);
		} else {
			var classes = selector.className.split(' ');
			var existingIndex = classes.indexOf(newclass);

			if (existingIndex >= 0)
				classes.splice(existingIndex, 1);
			else
				classes.push(newclass);

			selector.className = classes.join(' ');
		}
	};

	
	window.tcis.asideSwiper = ({
		init: function(){
			var asideSwiper = document.querySelectorAll('.js-aside-swiper');
			if(asideSwiper){
				var swiper = new Swiper(asideSwiper, {
					slidesPerView: 1,
					speed: 800,
					spaceBetween: 30,
					autoplay: {
						delay: 4000,
					},
					effect: 'fade',
					fadeEffect: {
						crossFade: true
					 },
				})
			}
		}	
	}).init();

	window.tcis.bannersSwiper = ({
		init: function(){
			var bannersSwiper = document.querySelectorAll('.js-banners-swiper');
			if(bannersSwiper){
				var swiper = new Swiper(bannersSwiper, {
					slidesPerView: 3,
					slidesPerGroup: 3,
					speed: 2000,
					spaceBetween: 30,
				})
			}
		}	
	}).init();

	window.tcis.search = ({
		init: function(){
			var input = document.querySelector(".js-search-input");
			
			if(input){
				var target = input.getAttribute('data-target');
				var popup = document.querySelector(target);
				var overlay = document.querySelector('.overlay');

				input.addEventListener('keyup', function(){
					if(overlay){
						overlay.classList.add('active')
					}
					if(popup){
						popup.classList.add('active')
					}
				})
			}
		}
	}).init()

	window.tcis.overlay = ({
		init: function(){
			var overlay = document.querySelectorAll('.overlay');
			if(overlay){
				overlay.forEach(function(item){
					item.addEventListener('click', function (e) {
						if(e.target !== e.currentTarget) return;
						else{
							document.querySelectorAll('.popup').forEach((elem) => {
								elem.classList.remove('active')
						  })
						  item.classList.remove('active');
						}
					});
				})
			}
		}
	}).init();

	window.tcis.popups = ({
		init: function(){
			var btns = document.querySelectorAll('.js-show-popup');
			if(btns){
				btns.forEach(function(item){
					item.addEventListener('click', function(){
						var overlay = document.querySelector('.header__basket .overlay');
						if(overlay){
							if(!overlay.classList.contains('active')){
								overlay.classList.add('active')
							}
						}
						var target = item.getAttribute('data-target');
						var popup = document.querySelector(target);
						if(popup){
							popup.classList.add('active')
						}
					})
				})
			}
		}
	}).init();

	
	window.tcis.certsLightgallery = ({
		init: function(){
			var lightgallery = document.querySelectorAll('.js-lightgallery');
			if (lightgallery) {
				lightgallery.forEach(function (item) {
					lightGallery(item);
				});
			}
		}
	}).init();


