// import Swiper from 'swiper';
// $('.top-real-estate-projects').each(function () {
// 	let dynamicBullets = true;
// 	if ($(this).hasClass('no-dynamic-bullets')) {
// 		dynamicBullets = false
// 	}
// 	var mySwiper = new Swiper($(this), {
// 		// Optional parameters
// 		direction: 'horizontal',
		

// 		slidesPerView: 7,
// 		spaceBetween: 20,
// 		centeredSlides: false,
// 		lazy: {
// 			loadPrevNext: true,
// 			loadPrevNextAmount:3
// 		},
// 		preloadImages: false,
// 		pagination: {
// 			el: $(this).parent(".top-projects").find('.swiper-pagination'),
// 			clickable: true,
// 			dynamicBullets: dynamicBullets,
// 			dynamicMainBullets: 5,
// 		},
// 		breakpoints: {
// 			200: {
// 				slidesPerView: 2,
// 				slidesPerGroup: 2,

// 				spaceBetween: 20,

// 			},
// 			// when window width is >= 480px
// 			767: {
// 				slidesPerView: 4,
// 				slidesPerGroup: 4,

// 				spaceBetween: 2,

// 			},
// 			992: {
// 				slidesPerView: 5,
// 				slidesPerGroup: 5,

// 				spaceBetween: 20
// 			},
// 			1200: {
// 				slidesPerGroup: 6,
// 				slidesPerGroup: 2,
// 				spaceBetween: 20
// 			},
// 			1400: {
// 				slidesPerView: 8,

// 				spaceBetween: 20
// 			}
// 		},
// 		// Navigation arrows
// 		navigation: {
// 			nextEl: $(this).parent(".top-projects").find('.swiper-button-next'),
// 			prevEl: $(this).parent(".top-projects").find('.swiper-button-prev'),
// 		},


// 	});
// })


// $('.grouped-swiper').each(function () {
// 	let dynamicBullets = true;
// 	if ($(this).hasClass('no-dynamic-bullets')) {
// 		dynamicBullets = false
// 	}
// 	var mySwiper = new Swiper($(this), {
// 		// Optional parameters
// 		direction: 'horizontal',

// 		spaceBetween: 20,

// 		slidesPerColumnFill: 'row',
// 		pagination: {
// 			clickable: true,
// 		},
// 		slidesPerView: 1,

// 		slidesPerColumn: 3,
// 		lazy: {
// 			loadPrevNext: true,
// 			loadPrevNextAmount:3
// 		},
// 		preloadImages: false,

// 		pagination: {
// 			el: $(this).parent().find('.swiper-pagination'),
// 			clickable: true,
// 			dynamicBullets: dynamicBullets,
// 			dynamicMainBullets: 5,
// 		},
// 		breakpoints: {
// 			580: {
// 				slidesPerView: 1,

// 				slidesPerColumn: 3,
// 				spaceBetween: 15,

// 			},

// 		},



// 	});
// })

// window.initoneSlideSlider = function (element) {
// 	console.log('ele', $(element))


// 	$(element).each(function () {
// 		let dynamicBullets = true;
// 		if ($(this).hasClass('no-dynamic-bullets')) {
// 			dynamicBullets = false
// 		}
// 		var mySwiper = new Swiper($(this), {
// 			// Optional parameters
// 			direction: 'horizontal',
// 			lazy: {
// 				loadPrevNext: true,
// 				loadPrevNextAmount:3
// 			},
// 			preloadImages: false,
// 			spaceBetween: 0,
// 			// autoplay: {
// 			// 	delay: 6000,
// 			// },
// 			// speed: 1000,
// 			pagination: {
// 				clickable: true,
// 			},
// 			slidesPerView: 1,

			
// 			pagination: {
// 				el: $(this).parent().find('.swiper-pagination'),
// 				clickable: true,
// 				dynamicBullets: dynamicBullets,
// 				dynamicMainBullets: 5,
// 			},
// 			breakpoints: {
// 				576: {
				
// 					speed: 400,
	
	
// 				},
	
	
// 			},

// 			navigation: {
// 				nextEl: $(this).parent().find('.swiper-button-next'),
// 				prevEl: $(this).parent().find('.swiper-button-prev'),
// 			},


// 		});
// 	})

// }

// window.initoneSlideSlider('.one-slide');
// $('.slider-w-fade').each(function () {
// 	let dynamicBullets = true;
// 	if ($(this).hasClass('no-dynamic-bullets')) {
// 		dynamicBullets = false
// 	}
// 	var mySwiper = new Swiper($(this), {
// 		// Optional parameters
// 		direction: 'horizontal',
// 		spaceBetween: 20,
// 		effect: "fade",
// 		autoplay: {
// 			delay: 3000,
// 		},
// 		speed: 1500,
// 		pagination: {
// 			clickable: true,
// 		},
// 		slidesPerView: 1,
// 		preloadImages: false,
// 		// Enable lazy loading
// 		lazy: {
// 			loadPrevNext: true,
// 			loadPrevNextAmount:3
// 		},
// 		preloadImages: false,
// 		pagination: {
// 			el: $(this).parent().find('.swiper-pagination'),
// 			clickable: true,
// 			dynamicBullets: dynamicBullets,
// 			dynamicMainBullets: 5,
// 		},


// 		navigation: {
// 			nextEl: $(this).parent().find('.swiper-button-next'),
// 			prevEl: $(this).parent().find('.swiper-button-prev'),
// 		},


// 	});


// ///


// let backGallery=$(this).parent().find('.backGallery');
// if(backGallery){
// 	var bluredswiper = new Swiper(backGallery, {
// 		pagination: '.swiper-pagination',
// 		effect: "fade",
// 		slidesPerView: 1,
// 	});
// 	mySwiper.params.control = bluredswiper;
// 	bluredswiper.params.control = mySwiper;
// }




// 	///
// })




// // $('.sliderOneSlide').each(function () {
// // 	let dynamicBullets = true;
// // 	if ($(this).hasClass('no-dynamic-bullets')) {
// // 		dynamicBullets = false
// // 	}


// // 	var mySwiper = new Swiper($(this), {
// // 		direction: 'horizontal',

// // 		spaceBetween: 1,

// // 		pagination: {
// // 			clickable: true,
// // 		},
// // 		slidesPerView: 1,

// // 		lazy: {
// // 			loadPrevNext: true,
// // 		},
// // 		autoplay: {
// // 			delay: 3000,
// // 		},
// // 		loop: true,
// // 		speed: 800,
// // 		preloadImages: false,
// // 		// autoplay: {
// // 		// 	delay: 1000,
// // 		// },
// // 		// speed: 700,
// // 		pagination: {
// // 			el: $(this).parent().find('.swiper-pagination'),
// // 			clickable: true,
// // 			dynamicBullets: dynamicBullets,
// // 			dynamicMainBullets: 5,
// // 		},
		
// // 		navigation: {
// // 			nextEl: $(this).parent().find('.swiper-button-next'),
// // 			prevEl: $(this).parent().find('.swiper-button-prev'),
// // 		},



// // 	});
// // })




// $('.logos-slider .swiper-container').each(function () {
// 	let dynamicBullets = true;
// 	if ($(this).hasClass('no-dynamic-bullets')) {
// 		dynamicBullets = false
// 	}
// 	var mySwiper = new Swiper($(this), {
// 		// Optional parameters
// 		direction: 'horizontal',
		
// 		slidesPerView: 7,
// 		spaceBetween: 10,
// 		centeredSlides: false,
// 		// 		loop: true,

// 		autoplay: {
// 			delay: 2000,
// 		},
// 		speed: 1000,
// 		lazy: {
// 			loadPrevNext: true,
// 			loadPrevNextAmount:3
// 		},
// 		preloadImages: false,
// 		pagination: {
// 			el: $(this).parent(".logos-slider").find('.swiper-pagination'),
// 			clickable: true,
// 			dynamicBullets: dynamicBullets,
// 			dynamicMainBullets: 5,
// 		},
// 		breakpoints: {
// 			200: {
// 				slidesPerView: 3,
// 				slidesPerGroup: 3,

// 				spaceBetween: 20,

// 			},
// 			// when window width is >= 480px
// 			767: {
// 				slidesPerView: 4,
// 				slidesPerGroup: 4,

// 				spaceBetween: 2,

// 			},
// 			992: {
// 				slidesPerView: 5,
// 				slidesPerGroup: 5,

// 				spaceBetween: 20
// 			},
// 			1200: {
// 				slidesPerGroup: 6,
// 				slidesPerGroup: 2,
// 				spaceBetween: 20
// 			},
// 			1500: {
// 				slidesPerView: 9,

// 				spaceBetween: 10
// 			}
// 		},
// 		// Navigation arrows
// 		navigation: {
// 			nextEl: $(this).parent(".logos-slider").find('.swiper-button-next'),
// 			prevEl: $(this).parent(".logos-slider").find('.swiper-button-prev'),
// 		},


// 	});
// })


// $('.multi-grouped-logos-swiper').each(function () {
// 	let dynamicBullets = true;
// 	if ($(this).hasClass('no-dynamic-bullets')) {
// 		dynamicBullets = false
// 	}


// 	var mySwiper = new Swiper($(this), {
// 		direction: 'horizontal',

// 		spaceBetween: 20,

// 		pagination: {
// 			clickable: true,
// 		},
// 		slidesPerView: 3,

// 		lazy: {
// 			loadPrevNext: true,
// 			loadPrevNextAmount:3
// 		},
// 		preloadImages: false,
// 		autoplay: {
// 			delay: 1000,
// 		},
// 		speed: 700,
// 		pagination: {
// 			el: $(this).parent().find('.swiper-pagination'),
// 			clickable: true,
// 			dynamicBullets: dynamicBullets,
// 			dynamicMainBullets: 5,
// 		},
// 		breakpoints: {
// 			580: {
// 				slidesPerView: 3,

// 				spaceBetween: 15,

// 			},

// 		},
// 		navigation: {
// 			nextEl: $(this).parent().find('.swiper-button-next'),
// 			prevEl: $(this).parent().find('.swiper-button-prev'),
// 		},



// 	});
// })

// $('.s-Slider').each(function () {
// 	let dynamicBullets = true;
// 	if ($(this).hasClass('no-dynamic-bullets')) {
// 		dynamicBullets = false
// 	}


// 	var mySwiper = new Swiper($(this), {
// 		direction: 'horizontal',

// 		spaceBetween: 5,

// 		pagination: {
// 			clickable: true,
// 		},
// 		slidesPerView: 3,

// 		lazy: {
// 			loadPrevNext: true,
// 			loadPrevNextAmount:3
// 		},
// 		preloadImages: false,
// 		// autoplay: {
// 		// 	delay: 1000,
// 		// },
// 		// speed: 700,
// 		pagination: {
// 			el: $(this).parent().find('.swiper-pagination'),
// 			clickable: true,
// 			dynamicBullets: dynamicBullets,
// 			dynamicMainBullets: 5,
// 		},
// 		breakpoints: {
// 			767: {
// 				slidesPerView: 2,
// 				spaceBetween: 0,


// 			},
// 			576: {
// 				slidesPerView: 'auto',
// 				spaceBetween:0,
				

// 			},
// 		},
// 		navigation: {
// 			nextEl: $(this).parent().find('.swiper-button-next'),
// 			prevEl: $(this).parent().find('.swiper-button-prev'),
// 		},



// 	});
// })



// $('.featuredProjects').each(function () {
// 	let dynamicBullets = false;
// 	if ($(this).hasClass('no-dynamic-bullets')) {
// 		//dynamicBullets = false
// 	}
// 	let effect="fade";

// 	if ($(this).hasClass('smView')) {
// 		effect="slide";
// 	}
// 	var mySwiper = new Swiper($(this), {
// 		direction: 'horizontal',

// 		spaceBetween: 5,

// 		pagination: {
// 			clickable: true,
// 		},
// 		slidesPerView: 1,

// 		lazy: {
// 			loadPrevNext: true,
// 			loadPrevNextAmount:3
// 		},
// 		preloadImages: false,
// 		// autoplay: {
// 		// 	delay: 1000,
// 		// },
// 		speed: 900,
// 		effect: effect,


// 		centeredSlides: false,
// 				slidesPerView: 1,


// 		pagination: {
// 			el: $(this).find('.swiper-pagination'),
// 			clickable: true,
// 			dynamicBullets: dynamicBullets,
// 			dynamicMainBullets: 5,
// 		},
// 		breakpoints: {
// 			576: {
// 				slidesPerView: 'auto',
// 				spaceBetween:0,
// 				speed:350,


// 			},

// 			// },
// 			// 420: {
// 			// 	slidesPerView: 1,
// 			// 	spaceBetween: 0,


// 			// },

// 		},
// 		navigation: {
// 			nextEl: $(this).parent().find('.swiper-button-next'),
// 			prevEl: $(this).parent().find('.swiper-button-prev'),
// 		},



// 	});
// })


// let sliderIndex=0;
// window.InitSwiper = function (element) {
	

// 	$(element).each(function () {
  
// 		sliderIndex++;
// 		$(this).addClass('runningslider'+sliderIndex);

// 		let dynamicBullets = true;
// 		if ($(this).hasClass('no-dynamic-bullets')) {
// 			dynamicBullets = false
// 		}
		

// 		$('.runningslider'+sliderIndex).find('.swiper-pagination').addClass('ooooo')
// 		var mySwiper = new Swiper($(this), {
// 			// Optional parameters
// 			// 		direction: 'horizontal',

// 			spaceBetween: 0,

// 			pagination: {
// 				clickable: true,
// 			},
// 			slidesPerView: 1,

// 			lazy: {
// 				loadPrevNext: true,
// 				loadPrevNextAmount:3
// 			},
// 			preloadImages: false,
// 			autoplay: {
// 				delay: 3000,
// 			},
// 			// autoplay: {
// 			// 	delay: 0,
// 			// },
// 			//autoplay:true,
// 			loop: true,
// 			// loop: false,
// 			speed: 800,
// 			preloadImages: false,
// 			// autoplay: {
// 			// 	delay: 1000,
// 			// },
// 			// speed: 700,

// 			pagination: {
// 				el:$('.runningslider'+sliderIndex).find('.swiper-pagination'),
// 				clickable: true,
// 				dynamicBullets: dynamicBullets,
// 				dynamicMainBullets: 5,
// 			},


// 			navigation: {
// 				nextEl: $('.runningslider'+sliderIndex).find('.swiper-button-next'),
// 				prevEl: $('.runningslider'+sliderIndex).find('.swiper-button-prev'),
// 			},


// 		});
// 		if (!$(this).hasClass('autoPlay')) {
// 			mySwiper.autoplay.stop();
// 		}
		
// 	})
// }
// window.InitSwiper('.sliderOneSlide');
// //phasesSlider
// $('.ProjectPhases .swiper-container').each(function () {
// 	let dynamicBullets = true;
// 	if ($(this).hasClass('no-dynamic-bullets')) {
// 		dynamicBullets = false
// 	}
// 	var mySwiper = new Swiper($(this), {
// 		// Optional parameters
// 		direction: 'horizontal',
// 		lazy: {
// 			loadPrevNext: true,
// 			loadPrevNextAmount:3
// 		},
// 		preloadImages: false,

// 		slidesPerView: 8,
// 		spaceBetween: 0,
// 		// freeMode: true,
// 		centeredSlides: false,
// 		// 		loop: true,

// 		// autoplay: {
// 		// 	delay: 2000,
// 		// },
// 		// speed: 1000,
// 		preloadImages: false,
// 		breakpoints: {
// 			1500: {
// 				slidesPerView: 7,


// 			},
// 			580: {
// 				slidesPerView: 2,


// 			},

// 		},
// 		// Enable lazy loading
// 		lazy: {
// 			loadPrevNext: true,
// 			loadPrevNextAmount:3
// 		},
// 		preloadImages: false,
// 		pagination: {
// 			el:$(this).parent().find('.swiper-pagination'),
// 			clickable: true,
// 			dynamicBullets: dynamicBullets,
// 			dynamicMainBullets: 5,
// 		},

// 		// Navigation arrows
// 		navigation: {
// 			nextEl: $(this).parent().find('.swiper-button-next'),
// 			prevEl: $(this).parent().find('.swiper-button-prev'),
// 		},


// 	});

// 	if ($(this).find('.swiper-slide.active').length > 0) {
// 		var active_index = $(this).find('.swiper-slide.active').closest('.swiper-slide').index();
 
// 		mySwiper.slideTo(active_index);
// 	}
	
// })

// //for auctions Page 

// $("body").delegate(".getpagedata", "click", function () {
// 	$('.lds-dual-ring').show();
// 	$('html, body').animate({
// 		scrollTop: $(".loadDataHere").offset().top
// 	}, 500);
// 	var new_page = $(this).attr("data-href");
// 	$('.loadDataHere').load(new_page + ' .loadDataHere', function () {
// 		setTimeout(function () {
// 			history.pushState({}, null, new_page);
// 			$('.lds-dual-ring').hide();
// 			if ($('.loadDataHere .one-slide').length > 0) {
// 				window.initoneSlideSlider($('.loadDataHere .one-slide'))
// 			}

// 		}, 0);
// 	})
// })

// //developersLogos


// $('.multi-logos-swiper .swiper-container').each(function () {
// 	if ($(window).width() > 768) {
// 		let dynamicBullets = true;
// 		if ($(this).hasClass('no-dynamic-bullets')) {
// 			dynamicBullets = false
// 		}

// 		var mySwiper = new Swiper($(this), {
// 			direction: 'horizontal',

// 			spaceBetween: 20,
// 			// autoplay: {
// 			// 	delay: 6000,
// 			// },
// 			// speed: 1000,
// 			pagination: {
// 				clickable: true,
// 			},
// 			slidesPerView: 6,
// 			slidesPerGroup: 3,

// 			lazy: {
// 				loadPrevNext: true,
// 				loadPrevNextAmount:3
// 			},
// 			preloadImages: false,

// 			speed: 700,
// 			pagination: {
// 				el: $(this).parent().find('.swiper-pagination'),
// 				clickable: true,
// 				dynamicBullets: dynamicBullets,
// 				dynamicMainBullets: 5,
// 			},
// 			breakpoints: {
// 				1400: {
// 					slidesPerView: 7,
// 					slidesPerGroup: 3,

// 				},
// 				580: {
// 					slidesPerView: 3,
// 					slidesPerGroup: 3,

// 				},

// 			},
// 			navigation: {
// 				nextEl: $(this).parent().find('.swiper-button-next'),
// 				prevEl: $(this).parent().find('.swiper-button-prev'),
// 			},



// 		});


// 	} else {
// 		$(this).find('.swiper-wrapper').addClass('d-flex flex-wrap row border-box');
// 		$(this).find('.swiper-wrapper .swiper-slide').addClass('col-md-2 col-4 my-3')
// 	}
// })
// //arealider

// $('.areas_slider .swiper-container').each(function () {

// 	let dynamicBullets = true;
// 	if ($(this).hasClass('no-dynamic-bullets')) {
// 		dynamicBullets = false
// 	}

// 	var mySwiper = new Swiper($(this), {
// 		direction: 'horizontal',

// 		spaceBetween: 20,
// 		// autoplay: {
// 		// 	delay: 6000,
// 		// },
// 		// speed: 1000,
// 		pagination: {
// 			clickable: true,
// 		},
// 		slidesPerView: 5,
// 		slidesPerGroup: 3,

// 		lazy: {
// 			loadPrevNext: true,
// 			loadPrevNextAmount:3
// 		},
// 		preloadImages: false,

// 		speed: 700,
// 		pagination: {
// 			el: $(this).parent().find('.swiper-pagination'),
// 			clickable: true,
// 			dynamicBullets: dynamicBullets,
// 			dynamicMainBullets: 5,
// 		},

// 		navigation: {
// 			nextEl: $(this).parent().find('.swiper-button-next'),
// 			prevEl: $(this).parent().find('.swiper-button-prev'),
// 		},



// 	});

// 	if ($(this).find('.swiper-slide.active').length > 0) {
// 		var active_index = $(this).find('.swiper-slide.active').closest('.swiper-slide').index();

// 		mySwiper.slideTo(active_index);
// 	}
// })




// if($('.tabs-by-gallery').length>0){
// 	let dynamicBullets = true;
// 	if ($(this).hasClass('no-dynamic-bullets')) {
// 		dynamicBullets = false
// 	}
// 	var swiper = new Swiper('.tabs-by-gallery .swiper-container', {
// 		slidesPerView: 11,
// 		spaceBetween: 0,
// 		paginationClickable: true,


// 		pagination: {
// 			el: ('.tabs-by-gallery .swiper-pagination'),
// 			clickable: true,
// 			dynamicBullets: dynamicBullets,
// 			dynamicMainBullets: 5,
// 		},

// 		navigation: {
// 			nextEl: ('.tabs-by-gallery .swiper-button-next'),
// 			prevEl: ('.tabs-by-gallery .swiper-button-prev'),
// 		},



// 		breakpoints: {
// 			445: {
// 				slidesPerView: 3,
// 			},
// 			480: {
// 				slidesPerView: 3,
// 			},
// 			640: {
// 				slidesPerView: 4,
// 			},
// 			1400: {
// 				slidesPerView: 9,
// 			},
// 			1200: {
// 				slidesPerView: 6,
// 			},
// 		}
// 	});

// 	function initactivespan() {
// 		var wdth = $('.advantage-service  .nav-link ').width() + 'px';
// 		var height = $('.advantage-service  .nav-link').height() + 40 + 'px';
// 		$('.active-span').css('width', wdth);
// 		$('.active-span').css('height', height);
// 		var currTrans = $('.tabs-by-gallery .swiper-wrapper').css('-webkit-transform').split(/[()]/)[1];
// 		var posx = 0;
// 		if (currTrans) {
// 			posx = parseFloat(currTrans.split(',')[4]);
// 		} else
// 			posx = parseFloat(0);
// 		var lft = $('.advantage-service  .nav-link.active').parent().position().left + ($('.advantage-service  .nav-link.active').width() / 2) - $('.advantage-service  .nav-link.active').width() / 2 + 1 + posx + 'px';
// 		$('.active-span').css('left', lft)
// 	}
// 	// swiper.on('slideChange', function () {
// 	// 	initactivespan();
// 	// });
// 	swiper.on('slideChangeTransitionEnd', function () {
// 		console.log('kokoko')
// 		initactivespan();
// 	});
// 	$(window).resize(function () {
// 		initactivespan();
// 	});
// 	$('.advantage-service  .nav-link').click(function () {
// 		$('.advantage-service  .nav-link').removeClass('active');
// 		$(this).addClass('active');
// 		$('.advantage-service').find('.tab-pane.show').removeClass('active show');
// 		$('.advantage-service').find($(this).attr('href')).addClass('active show');
// 		initactivespan();
// 	})
// 	$('.advantage-service  .nav-link.active').click();
// 	initactivespan();
// 	setTimeout(function(){
// 		initactivespan();
// 	},500)
// }