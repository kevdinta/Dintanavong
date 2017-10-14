/**
 * Created by DINTANAVONG on 30/09/2017.
 */

/* Check if content loaded */
$(window).on('load',function() {
    $("#loader").fadeOut();
    $('.pages').fadeIn(4000);
    $('#footer').fadeIn(4000);
    if ($('#submit').length) {
        $('#submit').on('click', function () {
            $('form').submit( function(event) {
                var formId = this.id,
                    form = this;
                success_submit();
                event.preventDefault();
            });
        });
    }
});


$(document).ready(function() {
     // Display carousel
     $('.carousel.carousel-slider').carousel({fullWidth: true});
    // // Initialize collapse button
     $(".se_connecter").sideNav();
     $('.parallax').parallax();
     $('.materialboxed').materialbox();
     $('select').material_select();
     $('.slider').slider({
         indicators:true,
         height: 550
     });
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

function success_submit() {
    swal({
        title: 'Message envoyé !',
        text: "Wolpertinger s'assure de vous répondre dans les plus brefs délais",
        type: 'success',
        timer: 5000
    })
}