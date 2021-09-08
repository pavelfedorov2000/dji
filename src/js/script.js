'use strict';

window.addEventListener('DOMContentLoaded', () => {
    
    const body = document.querySelector('body');
    const burgerBtn = document.querySelector('.burger-btn');
    const burgerMenu = document.querySelector('.burger-menu');
    const burgerMenuDropBtn = document.querySelectorAll('.burger-menu__item-drop');
    const burgerMainMenu = document.querySelector('.burger-menu__main');
    const burgerSubMenu = document.querySelectorAll('.burger-menu__submenu');
    const burgerBackBtn = document.querySelector('.burger-menu__back-btn');
    const burgerSubMenuBack = document.querySelectorAll('.burger-menu__submenu-back');

    burgerBtn.addEventListener('click', () => {
        body.classList.add('_lock');
        burgerMenu.classList.add('burger-menu--active');
    });

    burgerBackBtn.addEventListener('click', () => {
        body.classList.remove('_lock');
        burgerMenu.classList.remove('burger-menu--active');
    });
    
    for (let i = 0; i < burgerMenuDropBtn.length; i++) {
        burgerMenuDropBtn[i].addEventListener('click', () => {
            burgerMainMenu.style.display = 'none';
            burgerSubMenu[i].classList.add('burger-menu__submenu--active');
        });
    }
    for (let i = 0; i < burgerSubMenuBack.length; i++) {
        burgerSubMenuBack[i].addEventListener('click', () => {
            burgerSubMenu[i].classList.remove('burger-menu__submenu--active');
            burgerMainMenu.style.display = 'block';
        });
    }

    // Search
    const searchBtn = document.querySelector('.header__search-btn');
    const dropSearch = document.querySelector('.drop-search');
    const closeSearchBtn = document.querySelector('.drop-search__close-btn');

    searchBtn.addEventListener('click', () => {
        body.classList.add('_lock');
        dropSearch.classList.add('drop-search--active');
    });

    closeSearchBtn.addEventListener('click', () => {
        body.classList.remove('_lock');
        dropSearch.classList.remove('drop-search--active');
    });


    // Counter
    const minusBtn = document.querySelectorAll('.minus-btn');
    const plusBtn = document.querySelectorAll('.plus-btn');
    let count = 1;

    for (let i = 0; i < minusBtn.length; i++) {
        let input = minusBtn[i].nextElementSibling;
        minusBtn[i].addEventListener('click', () => {
            if (count > 1) {
                count--;
                input.value = count;
            }  
        });
    }

    for (let i = 0; i < plusBtn.length; i++) {
        let input = plusBtn[i].previousElementSibling;
        plusBtn[i].addEventListener('click', (e) => {
            count++;
            input.value = count;
        });
    }

    // Sliders
    const iconsSlider = new Swiper('.icons-slider', {
        // Optional parameters
        slidesToShow: 'auto',
        //loop: true,
        spaceBetween: 48,
    });
    
    const bannerSlider = new Swiper('.banner-slider', {
        // Optional parameters
        slidesToShow: 1,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                pagination: {
                    clickable: true,
                    el: '.swiper-pagination',
                    type: "bullets",
                },
            },
        },
    });
});



