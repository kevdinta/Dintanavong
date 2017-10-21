/**
 * Created by DINTANAVONG on 30/09/2017.
 */

/* Check if content loaded */
$(window).on('load',function() {
    /* Fait disparaitre le chargement */
    $("#loader").fadeOut();
    $("#loaderDp").fadeOut(5000);
    $("#fullpage").fadeIn(2000);
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
    if($(".card").length) {
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
    if($('#fullpage').length) {
        $('#fullpage').fullpage({
            //Navigation
            navigation: true,
            navigationTooltips:['Accueil', 'Déni', 'Colère', 'Négociation', 'Dépression', 'Acceptation'],
            showActiveTooltip: true,
            keyboardScrolling: true
        });
        var bg = {
            0: "https://www.ihdimages.com/wp-content/uploadsktz/2014/11/fantasy_forest_landscape_cool_wallpapers.jpg",
            1: "https://i.imgur.com/RIhHH2f.jpg",
            2: "http://bhstorm.com/i/2016/10/anime-fantasy-landscape-wallpapers-background.jpg",
            3: "http://www.cgartt.com/images/works/201403/1394804487.jpg",
            4: "https://s-media-cache-ak0.pinimg.com/originals/9d/d7/1c/9dd71cd2cd0ccc63c19f64230090a71e.jpg",
            5: "https://s-media-cache-ak0.pinimg.com/originals/19/71/ab/1971ab731c0b89bf46bcaf708976fc91.jpg"
        };
        $(".section").each(function(i){
            $(this).css("background", "url("+bg[i]+")");
        });

        $(function () {
            $('.tlt').textillate();
        })

        $('#un-mute').on('click', function () {
            // Mute - Unmute
            $.each($('audio'), function (i, val) {
                $('audio')[i].muted ^= 1;
            })
        });
    }
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