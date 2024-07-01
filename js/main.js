var typing = new Typed('#typed', {
    strings: ["Designer" , "Developer" , "Freelancer" , "Photographer"],
    typeSpeed: 50,
    backSpeed: 100,
    loop: true
});

let { top: aboutSection } = $("#about").offset()
$(window).scroll(function () {
    let windowOffset = $(window).scrollTop()
    if (windowOffset >aboutSection -50) {
        $("#navBar").css("background-color","rgba(0, 0, 0, 0.8)")
        $("#navBar .container").css("padding", "0 100px")
        $("#backToTop").fadeIn(1000)
    } else {
        $("#navBar").css("background-color", "transparent")
        $("#navBar .container").css("padding", "0 12px")
        $("#backToTop").fadeOut(1000)
    }
})

$("#backToTop").click(function () {
    $("html,body").animate({scrollTop:0},100)
})

$(document).ready(function () {
    $(".loader").fadeOut(1000,function () {
        $("#loading").fadeOut(1000,function () {
            $("body").css("overflow","auto")
        })
    })
})

$('.count').counterUp()