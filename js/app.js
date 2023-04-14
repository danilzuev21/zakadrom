document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('.menu-burger').addEventListener('click', ()=> {
        document.querySelector('.menu').classList.toggle('menu--active');
        document.querySelector('.open').classList.toggle('d-none');
        document.querySelector('.icon-close').classList.toggle('d-none'); 
    });


    document.addEventListener('click', (event) => {
        if(event.target.matches('.btn-js')) {
            console.log('myModal');
            openModal('#myModal');
        }
    });

    const swiper1 = new Swiper('.cases__slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        // pagination: {
        //     el: ".swiper-pagination",
        //     clickable: true,
        // },
        navigation: {
            nextEl: '.swiper-button-case-next',
            prevEl: '.swiper-button-case-prev',
        },
    });
    const swiper2 = new Swiper('.reviews__slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-reviews-next',
            prevEl: '.swiper-button-reviews-prev',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window width is >= 480px
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 40
            },
        },

        // pagination: {
        //     el: ".swiper-pagination",
        //     clickable: true,
        // },
    });

});



async function closeModal(selector) {
    let myModalEl = document.querySelector(selector);
    let modal = bootstrap.Modal.getOrCreateInstance(myModalEl);
    modal.hide();
}
async function openModal(selector) {
    let myModalEl = document.querySelector(selector);
    let modal = bootstrap.Modal.getOrCreateInstance(myModalEl);
    modal.show();
}

