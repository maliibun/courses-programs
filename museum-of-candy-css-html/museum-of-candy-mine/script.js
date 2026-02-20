
$(window).scroll( () => {
    let $heightScrolled = $(window).scrollTop();
    let $defaultHeight = 10;

    if($heightScrolled > $defaultHeight){
        $('#nav').addClass("navbar-scrolled");
    } else $('#nav').removeClass("navbar-scrolled");
})
