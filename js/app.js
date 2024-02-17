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


document.addEventListener('DOMContentLoaded', function() {
    try {
        const relaxSwiper = new Swiper('.relax-swiper', {
            loop: true,     
            slidesPerView: 'auto',
            spaceBetween: 26,
            speed: 700,
            breakpoints: {
                1440: {
                    centeredSlides: true,
                    slidesPerView: 3,
                    spaceBetween: 160,
                }
            }
        });
    } catch {}

    try {
        playVideo()
    } catch {}

    mobileMenu()
    
});

(function ($) {
    $('.phone-input').mask('+7(999)999 99-99', {
        placeholder: '',
    });
})(jQuery);
