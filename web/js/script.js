/**
 * Created by DINTANAVONG on 30/09/2017.
 */

/* Check if content loaded */
$(window).on('load',function() {
    $("#loader").fadeOut(6000);
    $('.pages').show(4000);
    $('#footer').fadeIn();
});

$(document).ready(function() {
     // Display carousel
     $('.carousel.carousel-slider').carousel({fullWidth: true});
    // // Initialize collapse button
     $(".se_connecter").sideNav();
     $('.parallax').parallax();
     $('.materialboxed').materialbox();
     $('select').material_select();
    if($(".card").length > 0) {
        $("#card").flip({
            axis: 'y',
            trigger: 'hover'
        });
        $("#card1").flip({
            axis: 'y',
            trigger: 'hover'
        });
        $("#card2").flip({
            axis: 'y',
            trigger: 'hover'
        });
        $("#card3").flip({
            axis: 'y',
            trigger: 'hover'
        });
    }
});
