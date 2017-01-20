//form valiadation 
$(function() {

    $.validator.addMethod("lettersonly", function(value, element) {
        return this.optional(element) || /^[a-z\s]+$/i.test(value);
    }, "Only alphabetical characters");

    $.validator.addMethod("language", function(value, element, arg){
        return arg != value;
    }, "Select language");
    $.validator.addMethod("day", function(value, element, arg){
        return arg != value;
    }, "Select day");
    $.validator.addMethod("month", function(value, element, arg){
        return arg != value;
    }, "Select month");
    $.validator.addMethod("year", function(value, element, arg){
        return arg != value;
    }, "Select year");

    $("#js-register-form").validate({

        rules: {
            form_name: {
                required: true,
                lettersonly: true
            },
            form_email: {
                required: true,
                email: true
            },
            form_pswd1:{
                required:true,
                minlength:6

            },
            form_pswd2:{
                required:true,
                equalTo:'#form_pswd1',
                minlength:6
            },
            form_language:{
                language: "default"
            },
            form_dd:{
                day: "default"
            },
            form_mm:{
                month: "default"
            },
            form_yyyy:{
                year: "default"
            }

        },

    });

});

// slider
$(document).ready(function(){
    $(' .bxslider').bxSlider({
        auto: true,
        pause: 10000,
        responsive: true,
    });
});

<!--anchor links-->
$(document).ready(function(){
        $(".register__btn").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });

<!--hideme-->
$(window).scroll( function(){

    $('.hideme').each( function(){
        var bottom_of_object = $(this).position().top + 100;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if( bottom_of_window > bottom_of_object ){
            $(this).animate({
                'opacity':'1'
            },1000);
        }
    });
});

// Animation for header
$(function() {
    header = $('.main-header'),
    logo = $('.main-header__logo'),
    h3 = $('.main-header__h3'),
    h1 = $('.main-header__title h1'),
    btn= $('#header__btn'),
    tl = new TimelineMax();

    tl
        .to(header, 1.5, {autoAlpha:1, ease:Power1.easeOut})
        .from(logo, 2, { autoAlpha:0, scale:.05, ease:Power1.easeOut})
        .from(logo, 1, { top:"60%", left:"40%", position:"absolute", ease:Power1.easeOut})
        .from(h1, 1, {autoAlpha:0, top:-150, ease:Power1.easeOut})
        .from(h3, 1, {autoAlpha:0, bottom:-150, ease:Power1.easeOut})
        .from(btn, 1, {autoAlpha:0, left:150, ease:Power1.easeOut})

});

// Animation for Notebook
$(function() {
        left = $('.notebook__item:first-child'),
        right = $('.notebook__item:last-child'),
        scrollMagicController = new ScrollMagic(),
        tlPartners = new TimelineMax();

    tlPartners
        .from(left, 1.5, {autoAlpha:0, left: 300, ease:Power1.easeOut})
        .from(right, 1.5, {autoAlpha:0, scale:.05, ease:Power1.easeOut})

    var scene = new ScrollScene({
        triggerElement: '.notebook',
        reverse: false,
        offset: 0
    })
        .setTween(tlPartners)
        .addTo(scrollMagicController);
});

// Animation for Scheme
$(function() {
        h2 = $('.scheme__title'),
        h3 = $('.scheme h3'),
        image1 = $('.scheme .image1'),
        image2 = $('.scheme .image2'),
        image3 = $('.scheme .image3'),
        image4 = $('.scheme .image4'),
        arrowDoun = $('.scheme .arrow_down'),
        arrowUp = $('.scheme .arrow_up'),
        scrollMagicController = new ScrollMagic(),
        tlPartners = new TimelineMax();

    tlPartners
        .from(image4, .5, {autoAlpha:0,  ease:Power1.easeOut})
        .from(image2, .5, {autoAlpha:0,  ease:Power1.easeOut}, '=-0.5')
        .from(image1, .5, {autoAlpha:0,  ease:Power1.easeOut})
        .from(image3, .5, {autoAlpha:0,  ease:Power1.easeOut}, '=-0.5')
        .from(arrowDoun, .5, {autoAlpha:0,  ease:Power1.easeOut})
        .from(arrowUp, .5, {autoAlpha:0,  ease:Power1.easeOut}, '=-0.5')
        .from(h3, 1, {text:"", ease:Power0.easeNone}, '=-0.5')

    var scene = new ScrollScene({
        triggerElement: '.scheme',
        reverse: false,
        offset: 0
    })
        .setTween(tlPartners)
        .addTo(scrollMagicController);


});

// Animation for City
$(function() {
    city = $('.city'),

        scrollMagicController = new ScrollMagic(),
        tlPartners = new TimelineMax();

    tlPartners
        .from(city, 1.5, {autoAlpha:0, top:50,  ease:Power1.easeOut})


    var scene = new ScrollScene({
        triggerElement: '.city',
        reverse: false,
        offset: 0
    })
        .setTween(tlPartners)
        .addTo(scrollMagicController);


});


