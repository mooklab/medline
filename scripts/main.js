new Swiper('section.about div.swiper', {
    navigation: {
        prevEl: 'section.about div.swiper-navigation div.arrow:first-child',
        nextEl: 'section.about div.swiper-navigation div.arrow:last-child',
    },
    pagination: {
        el: 'section.about  div.swiper-pagination'
    }
})

new Swiper('section.gallery div.swiper', {
    slidesPerView: 1.5,
    spaceBetween: 20,
    // slidesOffsetAfter: 20,
    // slidesOffsetBefore: 20,
    centeredSlides: true,
    centeredSlidesBounds: true,
    loop: true,
    // freeMode: true,
    navigation: {
        prevEl: 'section.gallery div.swiper-navigation div.arrow:first-child',
        nextEl: 'section.gallery div.swiper-navigation div.arrow:last-child',
    },
    breakpoints: {
        640: {
            slidesPerView: 2.5,
        },
        960: {
            slidesPerView: 4,
        }
    }
})

new Swiper('section.reviews div.swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        prevEl: 'section.reviews div.swiper-navigation div.arrow:first-child',
        nextEl: 'section.reviews div.swiper-navigation div.arrow:last-child',
    },
    breakpoints: {
        960: {
            slidesPerView: 2,
        },
    }
})

