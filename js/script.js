// if (window.matchMedia('(max-width: 767.98px)').matches) {
//     $('.myHero').css("display", "none");
//     $('.navbar-brand').css("display", "block");
//     $('.myNavbar').css("margin", "2rem 1rem 0 1rem")
// }

// $(window).resize(function() {
//     if (window.matchMedia('(min-width: 767.98px)').matches) {
//         $('.myHero').css("display", "block");
//         $('.navbar-brand').css("display", "none");
//         $('.myNavbar').css("margin", "0")
//     } else {
//         $('.myHero').css("display", "none");
//         $('.navbar-brand').css("display", "block");
//         $('.myNavbar').css("margin", "2rem 1rem 0 1rem")
//     }
// });

function showNav() {
    // $('.myNavbar').fadeOut(150);
    if ($('.myNavbar').css("display") == "none") {
        $('.myContent').css("margin-top", "-=56");
        $('.myNavbar').css("display", "block").animate({
            width: '100%',
        });
    } else {
        $('.myNavbar').animate({
            width: '0%',
        }, function() {
            $('.myNavbar').css("display", "none");
            $('.myContent').css("margin-top", "+=56px");
        });
    }
}

// $(document).ready(function() {

// });