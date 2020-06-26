$(".menu-link, .overlay").click(function() {
    $(".overlay, .wrapper, #mobile-nav, .mobile-menu-container, .header").toggleClass("active");
    //Toggle class for menu icon
    $(".c-hamburger").toggleClass('is-active');
});

$(".mobile-nav-trigger").click(function() {
    $(".mobile-nav").toggleClass("is-visible");
    $("body").toggleClass("scrolling-locked");
    $(".mobile-nav-trigger-cont").toggleClass("menu-is-open");
});

// Open parent menu in mobile nav





// Open parent menu in mobile nav
$("li.active").parent('ul.mobile-nav')
    .show()
    .toggleClass('open')
    .parent('li').find('.show-deeper-level-main').html('<i class=\'icon icon-android-remove\'></i>');

$("li.active").parent('ul.deeper-menu')
    .show()
    .toggleClass('open')
    .parent('li').find('.show-deeper-level-third').html('<i class=\'icon icon-android-remove\'></i>');

$("a .show-deeper-level-main").click(function(e) {
    // Stop parent link
    e.stopPropagation();

    // Show sub menu
    var sub_ul = $(this).parents('li').find('ul');
    sub_ul.slideToggle().toggleClass('open');

    if (sub_ul.hasClass('open')) {
        $(this).html('<i class=\'icon icon-android-remove\'></i>');
    } else {
        $(this).html('<i class=\'icon icon-android-add\'></i>');
    }

    $(this).parents('li').find('ul.sub-menu-level-2').css("display", "none");
    $(this).parents('li').find('ul.sub-menu-level-2').removeClass("open");

    return false;
});
$("a .show-deeper-level-third").click(function(e) {
    // Stop parent link
    e.stopPropagation();
    // Show sub menu
    var sub_ul = $(this).closest('li').find('ul');
    sub_ul.slideToggle().toggleClass('open');

    if (sub_ul.hasClass('open')) {
        $(this).html('<i class=\'icon icon-android-remove\'></i>');
    } else {
        $(this).html('<i class=\'icon icon-android-add\'></i>');
    }

    return false;
});

var yourNavigation = $(".nav");
stickyDiv = "sticky";
yourHeader = $('.header').height();

$(window).scroll(function() {
    if ($(this).scrollTop() > yourHeader) {
        yourNavigation.addClass(stickyDiv);
    } else {
        yourNavigation.removeClass(stickyDiv);
    }
});
//Add class to header on scroll. CSS will make it white on homepage
$(window).scroll(function() {
    var x = $('.header').offset();
    if (x.top > 100) {
        $('.header').addClass('has-scrolled');
    } else {
        $('.header').removeClass('has-scrolled');
    }
});


$(".main-nav .top-level").hover(
    function() {
        if ($(this).hasClass('expanded')) {
            if (!$(this).hasClass('active-trail')) {
                $(this).children('ul').show();
                $(this).children('ul').addClass('menu-hover-active');
            }
        } else {
            $('.top-level.active-trail ul').addClass('not-visible');
        }
    },
    function() {
        if ($(this).hasClass('expanded')) {
            $(this).children('ul').removeClass('menu-hover-active');
            $(this).children('ul').hide();
            $('.top-level.active-trail ul').show();
        } else {
            $('.top-level.active-trail ul').removeClass('not-visible');
            $('.top-level.active-trail ul').show();
        }
    }
);


$('.show-deeper-level').on('click', function() {
    $(this).toggleClass('open-submenu');
});

$(function() {

    var offset = 300,
        duration = 500,
        top_section = $('.to-top'),
        toTopButton = $('a.back-to-top');
    // showing and hiding button according to scroll amount (in pixels)
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $(top_section).fadeIn(duration);
        } else {
            $(top_section).fadeOut(duration);

        }
    });

    // activate smooth scroll to top when clicking on the button

    $(toTopButton).click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 700);
    });


    $("#bootstrapForm").submit(function(event) {

        // make selected form variable
        var vForm = $(this);

        /*
        If not valid prevent form submit
        https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/checkValidity
        */
        if (vForm[0].checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        } else {

            // Replace alert with ajax submit here...
            alert("your form is valid and ready to send");

        }

        // Add bootstrap 4 was-validated classes to trigger validation messages
        vForm.addClass('was-validated');


    });

    $(".map-type-switch").on('click', function() {
        window.open(this.href);
        return false;
    })
    $(".down").click(function() {
        $('html, body').animate({
            scrollTop: $(".our-works").offset().top
        }, 1500);
    });

});