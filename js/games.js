
const games = [
    {
        name: 'game name',
        link: 'wfewfwef',
        img: '../images/PNG/5.png',
        demo: ''
    },
    {
        name: 'game name',
        link: 'l32423423ala',
        img: '../images/PNG/5.png',
        demo: ''
    }
]


let error = ''
window.onload = async function () {
    let game_box = document.querySelector('.games__flex')
    try {
        if (!window.tronWeb) {
            window.tronWeb = await tronWeb;

        }
    }
    catch (err) {
        error = err
    }
    if (error) {
        games.map((game, index) => {

            let la = `<li>
           <img src='${game.img}'/>
           <span>
           <h2>${game.name}</h2>
           <p>online slots</p>
           </span>
           <span>
           <button class='game__iframe__link'>
          
           </button>
           </span>
           </li>`


            game_box.innerHTML += la

        })
        $('.game__iframe__link').html('<span><h3>PLAY NOW</h3><figure>⟶</figure></span>')
        $('.game__iframe__link').click(function () {
            openAlertBox()
        })

    } else {

        setTimeout(() => {
            var address = window.tronWeb.defaultAddress.base58

            const date = new Date().getTime().toString(16)
            console.log(address)
            games.map((game, index) => {

                let la = `<li>
           <img src='${game.img}'/>
           <span>
           <h2 class='test111'>${game.name}</h2>
           <p>online slots</p>
           </span>
           <span>
           <button 
           class='open__game__iframe'
           src='https://pza.stage.aergs.eu/casinos/ixone/pandaplanet/index.html?sessionId=91&licenseId=1&userId=4&gameId=PandaPlanet&realMoney=T&tournamentId=0&homeURL=dir.bg&lang=&curr=USD&jp=1&rid=0&up=300&serverAddress=https://pza.stage.aergs.eu:8081/casino/gameservlet&cdn=https://cdn.akamaii.eu'

           class='game__iframe__link'>
            <span><h3>PLAY NOW</h3><figure>⟶</figure></span>
           </button>
           </span>
           </li>`

                game_box.innerHTML += la

                $('.open__game__iframe').on('click', openGameIframe)
            })
        }, 200);
    }
    $('.game__overlay').click(function () {
        $('.exit__permission').addClass('exit__permission__active')
    })
    $('.exit__permission .overlay').click(function () {
        $('.exit__permission').removeClass('exit__permission__active')
    })
    $('.submit__exit__iframe').click(function () {
        closeGameIframe()
        $('.exit__permission').removeClass('exit__permission__active')
    })
    $('.close__exit__iframe').click(function () {
        $('.exit__permission').removeClass('exit__permission__active')
    })


};



function openGameIframe() {
    const iframe = document.createElement('iframe')
    let src = this.getAttribute('src')
    iframe.src = src
    const btn = document.createElement('button')
    btn.classList.add('iframe__close__btn')
    btn.addEventListener('click', () =>{
        $('.exit__permission').addClass('exit__permission__active')
    })

    $('.game__iframe__container').addClass('game__iframe__container__active')
    $('.game__iframe__box').append(iframe)
    $('.game__iframe__box').append(btn)
}


function closeGameIframe() {
    $('.game__iframe__container').removeClass('game__iframe__container__active')
    $('.game__iframe__box iframe').attr('src', '')
    $('.game__iframe__box').html('')
}

function openAlertBox() {
    $('.alert__box').addClass('alert__box__active')
}
function test1() {

}