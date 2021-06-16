const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}
$(document).ready(function () {
    $nav = $(".nav");
    $toggleCollapse = $(".toggle-collapse");

    /*click event on toggle*/
    $toggleCollapse.click(function () {
        $nav.toggleClass("collapse");
    });

    //carosul for blog

    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,

        dots: false,
        nav: true,
        navText: [$('.owl-nav-prev'), $('.owl-nav-next ')],
        responsive: responsive
    });
    //click to sceoll top
    $('.move-up span').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    })

    //AOS 
    AOS.init();

});
