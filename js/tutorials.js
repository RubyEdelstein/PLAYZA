

let selected_video = ''
$(document).ready(function () {
    tutorial_videos.map((elem, index) => {
        const li = document.createElement('li')
        li.setAttribute('url', elem.url)
        li.classList.add('tutorial__element')


        let html = `<span>
            
            <figure></figure>
            <img src='${elem.img}'/>
            <p>${elem.text}</p>
            </span>`
        li.innerHTML += html

        $('.tutorials__flex').append(li)

        $('.tutorial__element').on('click', playVideo)
    })
$('.overlay').click(function(){
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