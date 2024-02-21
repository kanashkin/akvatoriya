function playVideo() {
    const playBtns = document.querySelectorAll('.video-play')

    if (playBtns) {
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

function openPopup() {
    const openTriggers = document.querySelectorAll('.open-popup')
    const closeTrigger = document.querySelector('.hide-popup')
    const popup = document.querySelector('.overlay')

    if (openTriggers && closeTrigger && popup) {
        openTriggers.forEach(function(btn) {
            btn.addEventListener('click', function() {
                popup.classList.add('active')
            })
        })

        closeTrigger.addEventListener('click', function() {
            popup.classList.remove('active')
        })
    }
}

function selectPeoples() {
    const inputBtns = document.querySelectorAll('.people__input button')

    if (inputBtns) {
        inputBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                let currentInput = btn.closest('.people__input').querySelector('input')
                let currentValue = parseInt(currentInput.value)
    
                if (btn.classList.contains('people__input-minus')) {
                    if(currentValue > 0) {
                        currentValue -= 1
                    }
                } else {
                    currentValue += 1
                }

                currentInput.value = currentValue
            })
        })
    }
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

    playVideo()
    mobileMenu()
    openPopup()
    selectPeoples()
});

(function ($) {
    $('.phone-input').mask('+7(999)999 99-99', {
        placeholder: '',
    });
})(jQuery);
