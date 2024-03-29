$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scroll > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
//Slide ip script
$('.scroll-up-btn').click(function() {
    $('html').animate({scrollTop: 0});
})

//type animation Script
var typed = new Typed(".typing",{
    strings: ["Estudante de CC", "Front-end Web Developer", "Engenheiro de software", "Gamer"],
    typeSpeed: 80,
    backSpeed: 30,
    loop: true,
})
var typed = new Typed(".typing-2",{
    strings: ["Estudante de CC", "Front-end Web Developer", "Engenheiro de software", "Gamer"],
    typeSpeed: 80,
    backSpeed: 30,
    loop: true,
})

//toggle de menu/navbar de script
$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
})
//owl carousel Script
$('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autopalyTimeOut: 2000,
    autoplayHoverPause: true,
    reponsive: {
        0:{
            items: 1,
            nav: false,
        },
        600:{
            items: 2,
            nav: false,
        },
        1000:{
            items: 3,
            nav: false,
        }

    }
    });
});