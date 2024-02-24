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

function rentalSort() {
    const sortType = document.querySelectorAll('.sort-type__item')
    const visualArrows = document.querySelector('.page-sort__visual')

    if(sortType) {
        sortType.forEach(function(item) {
            item.addEventListener('click', function() {
                sortType.forEach(function(item) {
                    item.classList.remove('active')
                })
    
                item.classList.add('active')
            })
        })
    }

    if(visualArrows) {
        visualArrows.addEventListener('click', function() {
            const arrowItems = visualArrows.querySelectorAll('svg')
            let currentArrow
    
            arrowItems.forEach(function(arrow) {
                if (! arrow.classList.contains('active')) {
                    currentArrow = arrow
                }
    
                arrow.classList.remove('active')
            })
    
            currentArrow.classList.add('active')
        })
    }
}

function selectVesselImage() {
    const selectItems = document.querySelectorAll('.vessel__item-photo')
    
    selectItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const currentItem = item.closest('.vessel__item-visual').querySelector('.vessel__current-photo')

            let currentUrl = currentItem.getAttribute('src')
            let selectUrl = item.getAttribute('src')

            currentItem.setAttribute('src', selectUrl)
            item.setAttribute('src', currentUrl)
        })
    })

}

function popupForm() {
    const openTriggers = document.querySelectorAll('.popup-form-open')
    const form = document.querySelector('.popup-overlay')

    if (openTriggers) {
        openTriggers.forEach(function(btn) {
            btn.addEventListener('click', function() {
                form.classList.add('active')
            })
        })
    }
}

function teplohodFilters() {
    const openTrigger = document.querySelector('.open-filters')
    const filtersBlock = document.querySelector('.rental__filters')
    const closeTrigger = document.querySelector('.hide-filters')

    openTrigger.addEventListener('click', function() {
        filtersBlock.classList.add('active')
    })

    closeTrigger.addEventListener('click', function() {
        filtersBlock.classList.remove('active')
    })
}

function teplohodCards() {
    const vesselCardsWrapper = document.querySelector('.rental__items')

    function checkWidth() {
        if(vesselCardsWrapper) {
            if(window.innerWidth > 1800) {
                addEmptyCard([0, 4])
            } else if(window.innerWidth > 1439) {
                addEmptyCard([0, 3])
            } else if(window.innerWidth > 767) {
                addEmptyCard([0, 2])
            } else if(window.innerWidth < 768) {
                let emptyCards = document.querySelectorAll('.vessel__card.empty')

                emptyCards.forEach(function(card) {
                    card.remove()
                })

                teplohodFilters()
            }
        }
    }

    checkWidth()
    window.addEventListener('resize', checkWidth)

    function addEmptyCard(indexesArr) {
        let emptyCards = document.querySelectorAll('.vessel__card.empty')

        emptyCards.forEach(function(card) {
            card.remove()
        })

        for(let i = 0; i < indexesArr.length; i++) {
            let cardIndex = indexesArr[i]
            let emptyCard = document.createElement('div')
            emptyCard.classList.add('vessel__card', 'empty')

            let referenceElement = vesselCardsWrapper.children[cardIndex]
            vesselCardsWrapper.insertBefore(emptyCard, referenceElement)
        }
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
    rentalSort()
    selectVesselImage()
    popupForm()
    teplohodCards()
});

(function ($) {
    $('.phone-input').mask('+7(999)999 99-99', {
        placeholder: '',
    });
})(jQuery);
