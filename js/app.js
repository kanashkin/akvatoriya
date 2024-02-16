function playVideo() {
    const playBtns = document.querySelectorAll('.video-play')

    playBtns.forEach(function(btn) {
        const video = btn.nextElementSibling

        btn.addEventListener('click', function() {
            video.play()
            btn.classList.add('unactive')
        })

        video.addEventListener('click', function() {
            video.pause()
            btn.classList.remove('unactive')
        })
    })
}

playVideo()

function mobileMenu() {
    const openBtn = document.querySelector('.menu-btn.open')
    const closeBtn = document.querySelector('.menu-btn.close')
    const menu = document.querySelector('.mobile__menu')

    openBtn.addEventListener('click', function() {
        menu.classList.add('active')
    })

    closeBtn.addEventListener('click', function() {
        menu.classList.remove('active')
    })
}

mobileMenu()