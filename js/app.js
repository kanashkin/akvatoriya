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