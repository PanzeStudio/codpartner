;(function($) {
    $(document).ready(function() {

        // Initialize AOS
        AOS.init({
            duration: 1200, // Animation duration in milliseconds
            once: true,     // Animation should happen only once
        });

        $(document).ready(function(){
            $('.navbar__area .nav__menu  li > .toggle').on('click', function(){
                $(this).siblings('ul').slideToggle(); // Toggle submenu
                $(this).find('i').toggleClass('fa-plus fa-minus'); // Toggle icon
            });
        });
        

        $('.toggle__button').on('click', function(){
            $(this).toggleClass('active');
            $('.nav__menu').slideToggle();
        
            // Toggle icon class
            $(this).find('i').toggleClass('fa-bars-staggered fa-times');
        });
        

        
        
        var $grid = $('.masonry__items');

        if ($grid.length) {
            // Initialize Masonry
            $grid.masonry({
                itemSelector: '.masonry__items .masonry__item',
                columnWidth: '.masonry__items .masonry__item',
                percentPosition: false
            });
        }

        // "Load More" Button Functionality
        $('#load_more_testimonial_1').on('click', function() {
            // Show the next 3 hidden items
            $('#testimonial_1 .masonry__item:hidden').slice(0, 3).fadeIn(function() {
                $grid.masonry('layout'); // Re-layout Masonry after revealing items
            });

            // Hide the button if no more hidden items exist
            if ($('#testimonial_1 .masonry__item:hidden').length === 0) {
                $('.testimonial_load_more').fadeOut();
            }
        });
        
        $('.counter').counterUp({
            delay: 10,  // Speed of counting
            time: 2000  // Duration in milliseconds
        });
        

        $(".accordion__item .title.active").next(".description").show();
        $(".accordion__item .title").click(function () {
            let $parent = $(this).closest(".accordions");
        
            // Hide all descriptions except the clicked one
            $parent.find(".description").slideUp();
            $parent.find(".accordion__item .title").removeClass("active")
                   .find("i").removeClass("fa-minus").addClass("fa-plus");
        
            // Toggle the clicked one
            if (!$(this).next(".description").is(":visible")) {
                $(this).addClass("active");
                $(this).next(".description").slideDown();
                $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
            }
        });
        

        

    });
})(jQuery);



var swiper = new Swiper(".partners__slider", {
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true, // Enable infinite loop
    autoplay: {
        delay: 0, // Continuous sliding
        disableOnInteraction: false, // Continue autoplay after user interaction
    },
    speed: 4000, // Slide speed in milliseconds
    simulateTouch: false, // Disable touch interaction
    allowTouchMove: false, // Disable slide dragging
    draggable: false, // Disable dragging on desktop
    breakpoints: {
        640: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 6,
        },
    },
});


var swiper = new Swiper(".client__slider", {
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true, // Enable infinite loop
    autoplay: {
        delay: 0, // Continuous sliding
        disableOnInteraction: false, // Continue autoplay after user interaction
    },
    speed: 4000, // Slide speed in milliseconds
    simulateTouch: false, // Disable touch interaction
    allowTouchMove: false, // Disable slide dragging
    draggable: false, // Disable dragging on desktop
    breakpoints: {
        640: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 5,
        },
    },
});

var swiper = new Swiper(".trusted__slider", {
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true, // Enable infinite loop
    autoplay: {
        delay: 0, // Continuous sliding
        disableOnInteraction: false, // Continue autoplay after user interaction
    },
    speed: 4000, // Slide speed in milliseconds
    simulateTouch: false, // Disable touch interaction
    allowTouchMove: false, // Disable slide dragging
    draggable: false, // Disable dragging on desktop
    breakpoints: {
        640: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 5,
        },
    },
});

var swiper = new Swiper(".outreach__slider.one", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 10,
    loop: true, // Enable infinite loop
    autoplay: {
        delay: 0, // Continuous sliding
        disableOnInteraction: false, // Continue autoplay after user interaction
    },
    speed: 4000, // Slide speed in milliseconds
    simulateTouch: false, // Disable touch interaction
    allowTouchMove: false, // Disable slide dragging
    draggable: false, // Disable dragging on desktop
});

var swiper = new Swiper(".outreach__slider.two", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 10,
    loop: true, // Enable infinite loop
    autoplay: {
        delay: 0, // Continuous sliding
        disableOnInteraction: false, // Continue autoplay after user interaction
        reverseDirection: true, // Moves to the left
    },
    speed: 4000, // Slide speed in milliseconds
    simulateTouch: false, // Disable touch interaction
    allowTouchMove: false, // Disable slide dragging
    draggable: false, // Disable dragging on desktop
});