
 const soon = [
    {
        "name":"sdvsd",
        img:'../../images/PNG/game.png',
        "date":"22/02/19",
        "link":"https://www.youtube.com/embed/9Sc-ir2UwGU"
    },
    {
        "name":"sdvsd",
        img:'../../images/PNG/game.png',
        "date":"22/02/19",
        "link":"https://www.youtube.com/embed/9Sc-ir2UwGU"
    },
    {
        "name":"sdvsd",
        img:'../../images/PNG/game.png',
        "date":"22/02/19",
        "link":"https://www.youtube.com/embed/9Sc-ir2UwGU"
    },
    {
        "name":"sdvsd",
        img:'../../images/PNG/game.png',
        "date":"22/02/19",
        "link":"https://www.youtube.com/embed/9Sc-ir2UwGU"
    },
    {
        "name":"sdvsd",
        img:'../../images/PNG/game.png',
        "date":"22/02/19",
        "link":"https://www.youtube.com/embed/9Sc-ir2UwGU"
    },
    {
        "name":"sdvsd",
        img:'../../images/PNG/game.png',
        "date":"22/02/19",
        "link":"https://www.youtube.com/embed/9Sc-ir2UwGU"
    },
    {
        "name":"sdvsd",
        img:'../../images/PNG/game.png',
        "date":"22/02/19",
        "link":"https://www.youtube.com/embed/9Sc-ir2UwGU"
    },
    {
        "name":"sdvsd",
        img:'../../images/PNG/game.png',
        "date":"22/02/19",
        "link":"https://www.youtube.com/embed/9Sc-ir2UwGU"
    },
    {
        "name":"sdvsd",
        img:'../../images/PNG/game.png',
        "date":"22/02/19",
        "link":"https://www.youtube.com/embed/9Sc-ir2UwGU"
    },
    {
        "name":"sdvsd",
        img:'../../images/PNG/game.png',
        "date":"22/02/19",
        "link":"https://www.youtube.com/embed/9Sc-ir2UwGU"
    },
    {
        "name":"sdvsd",
        img:'../../images/PNG/game.png',
        "date":"22/02/19",
        "link":"https://www.youtube.com/embed/9Sc-ir2UwGU"
    },
    {
        "name":"sdvsd",
        img:'../../images/PNG/game.png',
        "date":"22/02/19",
        "link":"https://www.youtube.com/embed/9Sc-ir2UwGU"
    }
]

let active_section = 'home'
$(document).ready(function () {
   
    const game_box = document.querySelector('.home__comming__soon')
    soon.map((game, index) => {
        game_box.innerHTML += `<li class='coming__soon__element'>
        <img src = '${game.img}' class='coming__soon__image'/>
        <h2>${game.name}</h2>
        <h3>Comming in ${game.date}</h3>
       
       <span class='coming__soon__trailer'>
       <img src ='../../images/SVG/film-regular.svg'/>
       <p>SHOW TRAILER</p>
       </span>
        </a>
        </li>`
        $('.coming__soon__trailer').attr('url',game.link )
        $('.coming__soon__trailer').on('click', playVideo)
    })
  
  $('.home__header__img h3').click(function(){
    showNumber()
  })


  $('.tutorials__iframe__container .overlay').click(function(){
    closeVideo()
})
})


function playVideo(e) {
    $('.iframe__box').html('')
    const box = $('.tutorials__iframe__container')
    box.addClass('active__iframe')
    const selected_video = this.getAttribute('url')
    const frame = document.createElement('iframe')
    frame.setAttribute('src', selected_video)

    $('.iframe__box').append(frame)

}


function closeVideo(){
    $('.iframe__box').html('')
    const box = $('.tutorials__iframe__container')
    box.removeClass('active__iframe')
}

function showNumber(){
    // var address = window.tronWeb.defaultAddress.base58;
    console.log(tron_error)
}