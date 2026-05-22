jQuery(document).ready(function ($) {

    var owl = $("#testimonial")
    owl.owlCarousel({
        autoplay: false,
        items: 4.5,
        loop: true,
        center: true,
        margin: 20,
        dots: true,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3,
                loop: false,
            },
            992: {
                items: 4.5,
                loop: true
            }
        }
    })

})
