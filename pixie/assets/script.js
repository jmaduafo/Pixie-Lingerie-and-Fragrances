$(document).ready(function() {
    var slider = $('.slideshow');
    var slide = $('.slide');
    var slideImage = $('.slider img');
    var count = $('.slider img').length;
    var width = count * 70;
    var lingerie = $("#lingerie");
    var fragrances = $("#fragrances");
    var lingerieNav = $(".lingerie-nav");
    var fragranceNav = $(".fragrances-nav");
    var leftIcons = $(".left-side i");
    var rightNav = $(".right-side a");
    var rightIcons = $(".right-side i");

    //NAV BAR SCROLL
    var oneFifty = 150;

    //MAIN HOME SECTION 
    function shift() {
        $('.slideshow:last').insertBefore('.slideshow:first');
        slide.css("transform", "translateX(-100%)");
    }

    function autoplayShift() {
        i = setInterval(function() {
            shift();}, 7000)
    }
    
    //LINGERIE SLIDER 
    function move() {
        $('.slider img:first').insertBefore('.slider img:last');
        slideImage.css("transform", "translateX(" + width + "px)");
    }

    function moveBack() {
        $('.slider img:last').insertBefore('.slider img:first');
        slideImage.css("transform", "translateX(-" + width + "px)");
        
    }

    function autoplay() {
        i = setInterval(function() {
            move();}, 3500)
    }


    const logoBlack = "assets/6.png";
    const logoLight = "assets/5.png";

    function hoverLingerie() {
        lingerie.hover(function() {
            lingerieNav.css("display", "block");
            leftIcons.css("color", "#000000");
            leftIcons.css("transition", "400ms");
            rightNav.css("color", "#000000");
            rightNav.css("transition", "400ms");
            rightIcons.css("color", "#000000");
            rightIcons.css("transition", "400ms");
            $(".logo-nav").css("background-image", "url(" + logoBlack + ")");
            $(".logo-nav").css("transition", "400ms");

        }, function() {
            if ($(window).scrollTop() > 150) {
                leftIcons.css("color", "#000000");
                rightNav.css("color", "#000000");
                rightIcons.css("color", "#000000");
                $(".logo-nav").css("background-image", "url(" + logoBlack + ")");
            } else {
                leftIcons.css("color", "#FFF9EF");
                rightNav.css("color", "#FFF9EF");
                rightIcons.css("color", "#FFF9EF");
                $(".logo-nav").css("background-image", "url(" + logoLight + ")");
            }
            lingerieNav.css("display", "none");
            $(".logo-nav").css("transition", "400ms");
        })
    }

    function hoverFragrance() {
        fragrances.hover(function() {
            fragranceNav.css("display", "block");
            leftIcons.css("color", "#000000");
            rightNav.css("color", "#000000");
            rightIcons.css("color", "#000000");
            $(".logo-nav").css("background-image", "url(" + logoBlack + ")");
            $(".logo-nav").css("transition", "400ms");
            
        }, function() {
            if ($(window).scrollTop() > 150) {
                leftIcons.css("color", "#000000");
                rightNav.css("color", "#000000");
                rightIcons.css("color", "#000000");
                $(".logo-nav").css("background-image", "url(" + logoBlack + ")");
            } else {
                leftIcons.css("color", "#FFF9EF");
                rightNav.css("color", "#FFF9EF");
                rightIcons.css("color", "#FFF9EF");
                $(".logo-nav").css("background-image", "url(" + logoLight + ")");
            }
            fragranceNav.css("display", "none");
            $(".logo-nav").css("transition", "400ms");
        })
    }

    $(window).on("scroll", function() {
        // $(".nav-top").toggleClass("hide", $(window).scrollTop() > 150);
        // oneFifty = $(window).scrollTop();
        if ($(window).scrollTop() > 150) {
            leftIcons.css("color", "#000000");
            rightNav.css("color", "#000000");
            rightIcons.css("color", "#000000");
            $(".nav-top").css("background-color", "#FFF9EF");
            $(".logo-nav").css("background-image", "url(" + logoBlack + ")");
        } else {
            leftIcons.css("color", "#FFF9EF");
            rightNav.css("color", "#FFF9EF");
            rightIcons.css("color", "#FFF9EF");
            $(".nav-top").css("background-color", "transparent");
            $(".logo-nav").css("background-image", "url(" + logoLight + ")");
        }
        
    })

    
    hoverLingerie();
    hoverFragrance();
    autoplay();
    autoplayShift();


    $("#next").on("click", function() {
        move();
        clearInterval(i);
        autoplay();

    })

    $("#previous").on("click", function() {
        moveBack();
        clearInterval(i);
        autoplay();
    })
  
});
let iconClick;





