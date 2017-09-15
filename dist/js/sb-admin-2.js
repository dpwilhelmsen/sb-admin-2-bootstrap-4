/*!
 * Start Bootstrap - SB Admin 2 for Bootstrap 4 v4.0.2 (http://github.com/dpwilhelmsen/sb-admin-2-bootstrap-4)
 * Copyright 2013-2017 Daniel Wilhelmsen
 * Licensed under MIT (https://github.com/dpwilhelmsen/sb-admin-2-bootstrap-4/blob/master/LICENSE)
 */
$(function() {
    $('#side-menu').metisMenu();
});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
    var setupPage = function() {
        var topOffset = 50;
        var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').removeClass('show');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').addClass('show');
        }

        var height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    };

    $(window).bind("load resize", setupPage);

    var url = window.location;
    var element = $('ul.nav a').filter(function() {
        return this.href == url;
    }).addClass('active').parent();

    while (true) {
        if (element.is('li')) {
            element = element.parent().addClass('in').parent();
        } else {
            break;
        }
    }

    setupPage();
});
