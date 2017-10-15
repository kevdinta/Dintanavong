/**
 * Created by DINTANAVONG on 30/09/2017.
 */

/* Check if content loaded */
$(window).on('load',function() {
    /* Fait disparaitre le chargement */
    $("#loader").fadeOut();
    /* Affiche le contenu des pages web avec un effet fade */
    $('.pages').fadeIn(4000);
    $('#footer').fadeIn(4000);
    /* Check s'il y a un input avec l'id submit */
    if ($('#submit').length) {
        $('#submit').on('click', function () {
            /* Retarde le submit... à travailler... */
            $('form').submit( function(event) {
                var formId = this.id,
                    form = this;
                success_submit();
                event.preventDefault();
            });
        });
    }
    /* back to top */
    if ($('#back-to-top').length) {
        var scrollTrigger = 100,
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
});

$(document).ready(function() {
     // Display carousel
     $('.carousel.carousel-slider').carousel({fullWidth: true});
    // // Initialize collapse button
     $(".se_connecter").sideNav();
     $('.parallax').parallax();
     $('select').material_select();
     $('.slider').slider({
         indicators:true,
         height: 550
     });
    if($(".card").length > 0) {
        $(".cards").flip({
            axis: 'y',
            trigger: 'hover'
        });
    }
    $('.dropdown-button').dropdown({
            inDuration: 300,
            outDuration: 225,
            hover: true,
            belowOrigin: true, // Displays dropdown below the button
        }
    );
});

function success_submit() {
    // Utilisation de sweet alert
    swal({
        title: 'Message envoyé !',
        text: "Wolpertinger s'assure de vous répondre dans les plus brefs délais",
        type: 'success',
        timer: 5000
    })
}