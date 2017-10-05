/**
 * Created by DINTANAVONG on 30/09/2017.
 */

$(document).ready(function() {
    $('.pages').hide();
    $('#footer').hide();
    // Display carousel
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    // Initialize collapse button
    $(".se_connecter").sideNav();
    $('.parallax').parallax();
    $('.materialboxed').materialbox();
    //
    // /* Every time the window is scrolled ... */
    // $(window).scroll( function(){
    //     /* Check the location of each desired element */
    //     $('.p_home').each( function(i){
    //         var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    //         var bottom_of_window = $(window).scrollTop() + $(window).height();
    //         /* If the object is completely visible in the window, fade it it */
    //         if( bottom_of_window > bottom_of_object ){
    //
    //             $(this).animate({'opacity':'1'},500);
    //
    //         }
    //     });
    // });
    $("#card").flip({
        axis: 'y',
        trigger: 'hover'
    });
    $('#loader').delay(4000).fadeOut(500);
    $(".pages").delay(4000).fadeIn(4000);
    $("#footer").delay(5000).fadeIn(4000);
});
