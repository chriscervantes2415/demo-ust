/*=== Javascript function indexing hear===========

01.swiperActivation();

==================================================*/


(function ($) {
    'use strict';
    let device_width = window.innerWidth;

    var rtsJs = {
        m: function (e) {
            rtsJs.d();
            rtsJs.methods();
        },
        d: function (e) {
              this._window = $(window),
              this._document = $(document),
              this._body = $('body'),
              this._html = $('html')
        },
        methods: function (e) {
            rtsJs.swiperActivation();
            rtsJs.counterUp();
            rtsJs.searchOption();
            rtsJs.niceSelect();
            rtsJs.backToTopInit();
            rtsJs.vedioActivation();
            rtsJs.stickyHeader();
            rtsJs.progressAvtivation();
            rtsJs.wowActive();
            rtsJs.stickySidebar();
            rtsJs.datePicker();
            rtsJs.magnificPopup();
            rtsJs.countDownTimer();
            rtsJs.sideMenu();

        },
        swiperActivation: function () {

            $(document).ready(function () {
                var swiper = new Swiper(".mySwiper-category-1", {
                    slidesPerView: 6,
                    spaceBetween: 24,
                    loop: true,
                    navigation: {
                        nextEl: ".rt-next",
                        prevEl: ".rt-prev",
                        clickable: true
                    },
                    pagination: {
                        el: ".rts-swiper-dots",
                        clickable: true
                    },
                    breakpoints: {
                        1700: {
                          slidesPerView: 6,
                        },
                        1500: {
                          slidesPerView: 3,
                        },
                        1024: {
                          slidesPerView: 3,
                        },
                        768: {
                          slidesPerView: 2,
                        },
                        640: {
                          slidesPerView: 1,
                        },
                        320: {
                          slidesPerView: 1,
                        }
                    }
                });
            });
            $(document).ready(function () {
              var swiper = new Swiper(".testmonial-v2", {
                  slidesPerView: 1,
                  loop: true,
                  pagination: {
                      el: '.swiper-pagination',
                      clickable: true
                  }
              });
            });

            $(document).ready(function () {
              var swiper = new Swiper(".single-testimonial-active", {
                  slidesPerView: 2,
                  loop: true,
                  spaceBetween: 30,
                  pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                  breakpoints: {
                    1700: {
                      slidesPerView: 2,
                    },
                    1500: {
                      slidesPerView: 2,
                    },
                    1024: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    640: {
                      slidesPerView: 1,
                    },
                    320: {
                      slidesPerView: 1,
                    }
                }
              });
            });
            $(document).ready(function () {
                var swiper = new Swiper(".mySwiper-testimonials-1", {
                    slidesPerView: 1,
                    spaceBetween: 24,
                    loop: true,
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                        clickable: true
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true
                    },
                });
            });

            $(document).ready(function(){
              let defaults = {
                spaceBetween: 30,
                slidesPerView: 2
              };
              // call init function
              initSwipers(defaults);
              function initSwipers(defaults = {}, selector = ".swiper-data") {
                let swipers = document.querySelectorAll(selector);
                swipers.forEach((swiper) => {
                  // get options
                  let optionsData = swiper.dataset.swiper
                    ? JSON.parse(swiper.dataset.swiper)
                    : {};
                  // combine defaults and custom options
                  let options = {
                    ...defaults,
                    ...optionsData
                  };
              
                  //console.log(options);
                  // init
                  new Swiper(swiper, options);
                });
              }
              
            })

        },
        counterUp: function () {
          $('.counter').counterUp({
              delay: 10,
              time: 2000
          });
          $('.counter').addClass('animated fadeInDownBig');
        },
        // search popup
        searchOption: function () {
            $(document).on('click', '#search-btn', function () {
                $(".search-input-area").addClass("show");
                $("#anywhere-home").addClass("bgshow");
            });
            $(document).on('click', '#close', function () {
                $(".search-input-area").removeClass("show");
                $("#anywhere-home").removeClass("bgshow");
            });
            $(document).on('click', '#anywhere-home', function () {
                $(".search-input-area").removeClass("show");
                $("#anywhere-home").removeClass("bgshow");
            });
            
            $(document).ready(function() {
              $(document).on('click', '.translate__lang a', function(e) {
                  e.preventDefault(); 
                  var selectedLanguage = $(this).text();
                  $(".selected__lang").text(selectedLanguage);
              });
              $(document).on('click', '#langSwitcher', function () {
                  $(".translate__lang").toggleClass("show");
              });
              $(document).on('click', function (e) {
                  if (!$(e.target).closest('#langSwitcher').length) {
                      $(".translate__lang").removeClass("show");
                  }
              });
          });
        },
       
      

        niceSelect: function(){
            $('.select').each(function() {
                var select = $(this),
                    name = select.attr('name');
                
                select.hide();
                
                select.wrap('<div class="nice-select-wrap"></div>');
                
                var parent = select.parent('.nice-select-wrap');
                
                parent.append('<ul id=' + name + ' style="display:none"></ul>');
                
                select.find('option').each(function() {
              
                  var option = $(this),
                      value = option.attr('value'),
                      label = option.text();
                  
                  if (option.is(":first-child")) {
                    
                    $('<a href="#" class="drop">' + label + '</a>').insertBefore(parent.find('ul'));
                    
                  } else {
                    
                    parent.find('ul').append('<li><a href="#" id="' + value + '">' + label + '</a></li>');
                    
                  }
                  
                });
                
                parent.find('a').on('click', function(e) {
                  
                  parent.toggleClass('down').find('ul').slideToggle(300);
                  
                  e.preventDefault();
                
                });
                
                parent.find('ul a').on('click', function(e) {
                  
                  var niceOption = $(this),
                          value = niceOption.attr('id'),
                      text = niceOption.text();
                  
                  select.val(value);
                  
                  parent.find('.drop').text(text);
                  
                  e.preventDefault();
                
                });
                
            });
        },

        backToTopInit: function () {
          $(document).ready(function(){
          "use strict";
      
          var progressPath = document.querySelector('.progress-wrap path');
          var pathLength = progressPath.getTotalLength();
          progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
          progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
          progressPath.style.strokeDashoffset = pathLength;
          progressPath.getBoundingClientRect();
          progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
          var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
          }
          updateProgress();
          $(window).scroll(updateProgress);	
          var offset = 50;
          var duration = 550;
          jQuery(window).on('scroll', function() {
            if (jQuery(this).scrollTop() > offset) {
              jQuery('.progress-wrap').addClass('active-progress');
            } else {
              jQuery('.progress-wrap').removeClass('active-progress');
            }
          });				
          jQuery('.progress-wrap').on('click', function(event) {
            event.preventDefault();
            jQuery('html, body').animate({scrollTop: 0}, duration);
            return false;
          })
          
          
        });
  
        },
        vedioActivation: function () {
          $(document).ready(function(){
            $('.popup-youtube, .popup-video').magnificPopup({
              type: 'iframe',
              mainClass: 'mfp-fade',
              removalDelay: 160,
              preloader: false,
              fixedContentPos: false
            });
          });
        },
        // sticky header activation
        stickyHeader: function (e) {
			function sticky_header() {
				const headerSticky = $('header.header__sticky');
				const scroll = $(window).scrollTop();
				const isScrollingDown = scroll > lastScroll;
				const header_height = headerSticky.innerHeight();
				if (scroll > header_height && scroll > lastScroll) {
				  headerSticky.addClass('back-hide-header');
				} else if (scroll < lastScroll) {
				  headerSticky.removeClass('back-hide-header');
				}
				headerSticky.toggleClass('fixed', scroll > 300);
				$('.header-top-one-wrapper').toggle(scroll <= 100);
				headerSticky.toggleClass('active', scroll === 100);
				lastScroll = scroll;
			  }
			  let lastScroll = 0;
			  $(document).ready(sticky_header);
			  $(window).on('load scroll resize', sticky_header);	
		  },
        progressAvtivation: function () {
          $(window).scroll(function () {
              if ($(this).scrollTop() > 250) {
                  var bars = document.querySelectorAll('.meter > span');
                  console.clear();
                  setInterval(function () {
                      bars.forEach(function (bar) {
                          var getWidth = parseFloat(bar.dataset.progress);
                          for (var i = 0; i < getWidth; i++) {
                              bar.style.width = i + '%';
                          }
                      });
                  }, 100);
              }
          })
        },
        wowActive: function () {
          new WOW().init();
        },
        stickySidebar: function () {
          if (typeof $.fn.theiaStickySidebar !== "undefined") {
            $(".sticky-coloum-wrap .sticky-coloum-item").theiaStickySidebar({
              additionalMarginTop: 100,
            });
          }
        },
        datePicker: function (){
          $(document).ready(function () {
            $('#datepicker').datepicker({
                format: 'dd-mm-yyyy',
                startDate: '+1d'
            });
          });
        },
        countDownTimer: function(){
          function makeTimer() {

            // var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
              var endTime = new Date("29 April 2025 9:56:00 GMT+01:00");			
                endTime = (Date.parse(endTime) / 1000);
          
                var now = new Date();
                now = (Date.parse(now) / 1000);
          
                var timeLeft = endTime - now;
          
                var days = Math.floor(timeLeft / 86400); 
                var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
                var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
                var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
            
                if (hours < "10") { hours = "0" + hours; }
                if (minutes < "10") { minutes = "0" + minutes; }
                if (seconds < "10") { seconds = "0" + seconds; }
          
                $("#day").html(days );
                $("#hour").html(hours );
                $("#minute").html(minutes );
                $("#second").html(seconds );		
          
            }
          
            setInterval(function() { makeTimer(); }, 1000);
        },
        magnificPopup: function (){
          $('.gallery-area').magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery:{
              enabled:true
            }
          });

        },
        sideMenu:function(){
          $('#mobile-menu-active').metisMenu();
          $(document).on('click', '#menu-btn', function () {
            $("#side-bar").addClass("show");
            $("#anywhere-home").addClass("bgshow");
          });
          $(document).on('click', '.close-icon-menu', function () {
            $("#side-bar").removeClass("show");
            $("#anywhere-home").removeClass("bgshow");
          });
          $(document).on('click', '#anywhere-home', function () {
            $("#side-bar").removeClass("show");
            $("#anywhere-home").removeClass("bgshow");
          });
          $(document).on('click', '.onepage .mainmenu li a', function () {
            $("#side-bar").removeClass("show");
            $("#anywhere-home").removeClass("bgshow");
          });
        },

    }

    rtsJs.m();
    $('.moving').mousemove(function(e){
      
      var wx = $(window).width();
      var wy = $(window).height();
      
      var x = e.pageX - this.offsetLeft;
      var y = e.pageY - this.offsetTop;
      
      var newx = x - wx/2;
      var newy = y - wy/2;
      
      $('.rt-shape .shape').each(function(){
        var speed = $(this).attr('data-speed');
        if($(this).attr('data-revert')) speed *= -1;
        TweenMax.to($(this), 1, {x: (1 - newx*speed), y: (1 - newy*speed)});
        
      });
      
    });


})(jQuery, window)