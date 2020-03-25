(function($) {
    "use strict";
    var NAY = {};
    var plugin_track = 'static/plugin/';
    $.fn.exists = function() {
        return this.length > 0;
    };

    /* ---------------------------------------------- /*
     * Pre load
    /* ---------------------------------------------- */
    NAY.PreLoad = function() {
        document.getElementById("loading").style.display = "none";
    }

    /*--------------------
        * Menu Close
    ----------------------*/
    NAY.MenuClose = function() {
        $('.navbar-nav a').on('click', function() {
            var toggle = $('.navbar-toggler').is(':visible');
            if (toggle) {
                $('.navbar-collapse').collapse('hide');
            }
        });
    }


    NAY.MenuTogglerClose = function() {
        $(".toggler-menu").on('click', function() {
            $(this).toggleClass('open');
            $('.header-left').stop().toggleClass('menu-open menu-open-desk');
        });
        $('.header-left a').on('click', function() {
            var toggle = $('.toggler-menu').is(':visible');
            if (toggle) {
                $('.header-left').removeClass('menu-open');
                $('.toggler-menu').removeClass('open');
            }
        });
    }

    /* ---------------------------------------------- /*
     * Header Fixed
    /* ---------------------------------------------- */
    NAY.HeaderFixd = function() {
        var HscrollTop = $(window).scrollTop();
        if (HscrollTop >= 100) {
            $('header').addClass('fixed-header');
        } else {
            $('header').removeClass('fixed-header');
        }
    }

    /*--------------------
        * One Page
    ----------------------*/
    NAY.OnePage = function() {
        $('.header-left a[href*="#"]:not([href="#"]), .go-to a[href*="#"]:not([href="#"])').on('click', function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - -2,
                    }, 1000);
                    return false;
                }
            }
        });

        $('.header-nav a[href*="#"]:not([href="#"])').on('click', function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 60,
                    }, 1000);
                    return false;
                }
            }
        });
    }

    /*--------------------
        * One Page
    ----------------------*/
    NAY.OnePageTop = function() {
        $('.header-one-page a[href*="#"]:not([href="#"])').on('click', function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 65,
                    }, 1000);
                    return false;
                }
            }
        });
    }

    NAY.HeaderHeight = function() {
        var HHeight = $('.header-height .fixed-header-bar').height()
        $('.header-height').css("min-height", HHeight);
    }


    /* ---------------------------------------------- /*
     * All Functions
    /* ---------------------------------------------- */
    // loadScript
    var _arr = {};

    function loadScript(scriptName, callback) {
        if (!_arr[scriptName]) {
            _arr[scriptName] = true;
            var body = document.getElementsByTagName('body')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = scriptName;
            // NAYn bind NAY event to NAY callback function
            // NAYre are several events for cross browser compatibility
            // script.onreadystatechange = callback;
            script.onload = callback;
            // fire NAY loading
            body.appendChild(script);
        } else if (callback) {
            callback();
        }
    };

    // Window on Load
    $(window).on("load", function() {
        NAY.PreLoad();
    });
    // Document on Ready
    $(document).on("ready", function() {
        NAY.OnePage(),
            NAY.OnePageTop(),
            NAY.MenuClose(),
            NAY.MenuTogglerClose(),
            NAY.HeaderHeight();
    });

    // Document on Scrool
    $(window).on("scroll", function() {
        NAY.HeaderFixd();
    });

    // Window on Resize
    $(window).on("resize", function() {
        NAY.HeaderHeight();
    });

})(jQuery);