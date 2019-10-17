




 $(document).ready( async function () {
    let selected_link = ''
    const url = window.location.pathname.split('/')[2]
    console.log(url)
    if (url == undefined) {
        selected_link = 'Home'
    }
    if (url === 'games.html') {
        selected_link = 'Games'
    }
    if (url === 'whitepaper.html') {
        selected_link = 'WhitePaper'
    }
    if (url === 'faq.html') {
        selected_link = 'FAQ'
    }
    if (url === 'tutorials.html') {
        selected_link = 'Tutorials'
    }
    if (url === 'about.html') {
        selected_link = 'About Us'
    }

    let nav_nuttons = [
        { name: 'Home', link: '/', img: '../../images/nav-icons/1.svg' },
        { name: 'Games', link: '../pages/games.html', img: '../../images/nav-icons/2.svg' },
        { name: 'WhitePaper', link: '../pages/whitepaper.html',  img: '../../images/nav-icons/3.svg' },
        { name: 'FAQ', link: '../pages/faq.html',  img: '../../images/nav-icons/4.svg' },
        { name: 'Tutorials', link: '../pages/tutorials.html',  img: '../../images/nav-icons/5.svg' },
        { name: 'About Us', link: '../pages/about.html',  img: '../../images/nav-icons/6.svg' },

    ]
    const buttons_ul =await  document.querySelector('.navigation__container')
 if(buttons_ul){
    nav_nuttons.map((m, i) => {

        let li =  `<li class='${selected_link == m.name ? 'navigation__link navigation__link__active' : 'navigation__link'}'>
        <a href ='${m.link}' class='nav__link'>
        <img src='${m.img}'/> 
        <h4>${m.name}</h4>
        </a>
        </li>`


        $('.nav__link').click(function () {
            changeLink()
        })

        buttons_ul.innerHTML += li

    })

    $('nav').css('opacity', '1')
 }

});

function changeLink(e) {
    // alert('Load was performed.')
}