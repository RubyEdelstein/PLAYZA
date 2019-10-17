

var address = ''
let tron_error = ''
window.onload = function () {
    try {
        if (!window.tronWeb) {
            window.tronWeb = tronWeb;
        }
    }
    catch (err) {
        tron_error = err
    }
    if (tron_error) {
        $('.games__link').html('<h5>PLAY NOW</h5>')
        $('.game__play').html('<span><h3>PLAY NOW</h3><figure>⟶</figure></span>')
        $('.games__link').click(function () {
            openAlertBox()
        })

    } else {

        $('.games__link').html(`<a href ='/pages/games.html'>PLAY NOW</a>`)
        $('.game__play').html(`<a href='/pages/games.html'rel="noopener noreferrer"><h3>PLAY NOW</h3><figure>⟶</figure></a>`)

    }
};



$(document).ready(function () {

    $('.navbar').load('../pages/navbar.html');
    // $('.main__loaded__content').load('../pages/home.html');
    $('.footer').load('../pages/footer.html')

    $('.alert__box .overlay').click(function () {
        $('.alert__box').removeClass('alert__box__active')
    })
    setTimeout(() => {
        $('nav').addClass('show__nav')
    }, 200);


});


function openAlertBox() {
    $('.alert__box').addClass('alert__box__active')

}
