(function($) {
   "use strict";

    $(document).ready(function () {

        /**-------------------------------------------
         *  Navbar fix
         * -----------------------------------------*/
        $(document).on('click', '.navbar-area .navbar-nav li.menu-item-has-children>a', function (e) {
            e.preventDefault();
        })
       
        /*-------------------------------------
            menu
        -------------------------------------*/
        $('.navbar-area .menu').on('click', function() {
            $(this).toggleClass('open');
            $('.navbar-area .navbar-collapse').toggleClass('sopen');
        });
    
        // mobile menu
        if ($(window).width() < 992) {
            $(".in-mobile").clone().appendTo(".sidebar-inner");
            $(".in-mobile ul li.menu-item-has-children").append('<i class="fas fa-chevron-right"></i>');
            $('<i class="fas fa-chevron-right"></i>').insertAfter("");

            $(".menu-item-has-children a").on('click', function(e) {
                // e.preventDefault();

                $(this).siblings('.sub-menu').animate({
                    height: "toggle"
                }, 300);
            });
        }

        var $this = $('.category-service');
        if ($this.find('div').length > 2) {
            $('.category-service').append('<span><a href="javascript:;" class="showMore-cat"></a></span>');
        }
        
        // If more than 2 Education items, hide the remaining
        $('.category-service .item').slice(0,10).addClass('shown');
        $('.category-service .item').not('.shown').hide();
        $('.category-service .showMore-cat').on('click',function(){
            $('.category-service .item').not('.shown').toggle();
            $(this).toggleClass('showLess');
        });

        var menutoggle = $('.menu-toggle');
        var mainmenu = $('.navbar-nav');
        
        menutoggle.on('click', function() {
            if (menutoggle.hasClass('is-active')) {
                mainmenu.removeClass('menu-open');
            } else {
                mainmenu.addClass('menu-open');
            }
        });
        /**category-slider**/
        $('.category-slider').owlCarousel({
            loop:true,
            margin: 15,
            nav:true,
            dots: false,
            smartSpeed:1500,
            autoWidth:true,
            navText: [leftAngle,rightAngle],
            responsive:{
                0:{
                    items:2
                },
                767:{
                    items:6
                }
            }
        })

        $('.carousel').carousel({
            interval: 2000
          })

        /*--------------------------------------------------
            select onput
        ---------------------------------------------------*/
        if ($('.single-select').length){
            $('.single-select').niceSelect();
        }


        /* -----------------------------------------------------
            Variables
        ----------------------------------------------------- */
        var leftArrow = '<i class="fa fa-arrow-left"></i>';
        var leftAngle = '<i class="fa fa-angle-left"></i>';
        var rightArrow = '<i class="fa fa-arrow-right"></i>';
        var rightAngle = '<i class="fa fa-angle-right"></i>';
        var backButton = '<button class="slide-arrow prev-arrow"><i class="fa fa-angle-left"></i></button>';
        var nextButton = '<button class="slide-arrow next-arrow"><i class="fa fa-angle-right"></i></button>';


        /**course-slider**/
        $('.course-slider').owlCarousel({
            loop:true,
            margin: 30,
            nav:true,
            dots: true,
            smartSpeed:1500,
            navText: [leftAngle,rightAngle],
            responsive:{
                0:{
                    items:1,
                },
                575:{
                    items:2,
                    margin: 20,
                },
                769:{
                    items:3
                },
                1440:{
                    items:4
                }
            }
        })

        /**testimonial-slider**/
        $('.testimonial-slider').owlCarousel({
            loop:true,
            margin: 30,
            nav:true,
            dots: true,
            smartSpeed:1500,
            navText: [leftAngle,rightAngle],
            responsive:{
                0:{
                    items:1,
                    margin: 20,
                },
                769:{
                    items:3
                },
                1440:{
                    items:4
                }
            }
        })

        /**testimonial-slider**/
        $('.testimonial-slider-2').owlCarousel({
            loop:true,
            margin: 30,
            nav:true,
            dots: true,
            smartSpeed:1500,
            navText: [leftAngle,rightAngle],
            responsive:{
                0:{
                    items:1,
                    margin: 20,
                },
                769:{
                    items:3
                },
                1440:{
                    items:3
                }
            }
        })

        /**client-slider**/
        $('.client-slider').owlCarousel({
            loop:true,
            margin: 30,
            nav:true,
            dots: true,
            smartSpeed:1500,
            navText: [leftAngle,rightAngle],
            responsive:{
                0:{
                    items:2
                },
                767:{
                    items:4,
                    margin: 20,
                },
                1300:{
                    items:6
                }
            }
        })

        /**lesson-slider**/
        $('.lesson-slider').owlCarousel({
            loop:true,
            margin: 30,
            nav:true,
            dots: true,
            smartSpeed:1500,
            navText: [leftAngle,rightAngle],
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:2
                },
                1440:{
                    items:2
                }
            }
        })

        /**intro-slider**/
        $('.intro-slider').owlCarousel({
            loop:true,
            margin: 0,
            nav:true,
            dots: true,
            autoplay:true,
            autoplayTimeout:2500,
            smartSpeed:1500,
            navText: [leftAngle,rightAngle],
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:3
                },
                1440:{
                    items:5
                }
            }
        })

        /* -------------------------------------------------------------
            bootstrapTabControl
        ------------------------------------------------------------- */
        function bootstrapTabControl(){
            var i, items = $('.nav-item'), pane = $('.tab-pane');
            var preloaderHTML = '<div class="tab-preloader"><div class="preload"></div></div>';
            
            // tab preloader
            $('button[data-bs-toggle="pill"]').on('shown.bs.tab', function (e) {
                $('.tab-content>.active .course-slider').css({'opacity': 0});
                $('.tab-content>.active').append(preloaderHTML);
                setTimeout(function() {
                    $('.tab-preloader').remove();
                    $('.tab-content>.active .course-slider').css({'opacity': 1});
                }, 1000);
            });
        }
        bootstrapTabControl(); 

        /**---------------------------------------
          Progress BAR
        ----------------------------------------*/
        function td_Progress() {
            var progress = $('.progress-rate');
            var len = progress.length;
             for (var i = 0; i < len; i++) {
                var progressId = '#' + progress[i].id;
                var dataValue = $(progressId).attr('data-value');
                $(progressId).css({'width':dataValue+'%'});
             }
         }
         var progressRateClass = $('.progress-item');
          if ((progressRateClass).length) {
             td_Progress();
         }
         $('.counting').each(function() {
             var $this = $(this),
             countTo = $this.attr('data-count');
           
             $({ countNum: $this.text()}).animate({
                 countNum: countTo
             },
 
             {
                 duration: 2000,
                 easing:'linear',
                 step: function() {
                     $this.text(Math.floor(this.countNum));
                 },
                 complete: function() {
                     $this.text(this.countNum);
                 }
             });  
         });
          

        /* -------------------------------------------------------------
         fact counter
         ------------------------------------------------------------- */
        $('.counter').counterUp({
            delay: 15,
            time: 2000
        });

        /*------------------------------------------------
            Magnific JS
        ------------------------------------------------*/
        $('.play-btn').magnificPopup({
            type: 'iframe',
            removalDelay: 260,
            mainClass: 'mfp-zoom-in',
        });
        $.extend(true, $.magnificPopup.defaults, {
            iframe: {
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: 'v=',
                        src: 'https://www.youtube.com/embed/Wimkqo8gDZ0'
                    }
                }
            }
        });

        /*--------------------------------------------
            Search Popup
        ---------------------------------------------*/
        var bodyOvrelay =  $('#body-overlay');
        var searchPopup = $('#search-popup');

        $(document).on('click','#body-overlay',function(e){
            e.preventDefault();
        bodyOvrelay.removeClass('active');
            searchPopup.removeClass('active');
        });
        $(document).on('click','.search',function(e){
            e.preventDefault();
            searchPopup.addClass('active');
        bodyOvrelay.addClass('active');
        });

        /**featured-accordion**/
        $('.accordion-item').on('click',function(e){
            $('.accordion-item').removeClass('active');
            $(this).toggleClass('active');
        });

        /*------------------
           back to top
        ------------------*/
        $(document).on('click', '.back-to-top', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 200);
        });

    });

    $(window).on("scroll", function() {
        /*---------------------------------------
        sticky menu activation && Sticky Icon Bar
        -----------------------------------------*/

        var mainMenuTop = $(".navbar-area");
        if ($(window).scrollTop() >= 1) {
            mainMenuTop.addClass('navbar-area-fixed');
        }
        else {
            mainMenuTop.removeClass('navbar-area-fixed');
        }
        
        var ScrollTop = $('.back-to-top');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }
    });


    $(window).on('load', function () {

        /*-----------------
            preloader
        ------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut(0);

        /*-----------------
            back to top
        ------------------*/
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut();

        /*---------------------
            Cancel Preloader
        ----------------------*/
        $(document).on('click', '.cancel-preloader a', function (e) {
            e.preventDefault();
            $("#preloader").fadeOut(500);
        });

    });


})(jQuery);