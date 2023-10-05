let init = false;
const pagination = document.querySelector('.swiper-pagination');
function swiperCard() {
  if (window.innerWidth <= 760) {
    // Если ширина окна меньше или равна 760px и Swiper еще не инициализирован
    if (!init) {
      pagination.classList.remove('hidden')   // получаем список классов и удаляем hidden
      init = true;                            // Установим флаг инициализации в true 

      swiper = new Swiper('.swiper-brands', {
        direction: 'horizontal',
        slidesPerView: 2,
        centeredSlides: true,
        loop: true,
        spaceBetween: 16,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {

          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

          320: {
            slidesPerView: 2,
            spaceBetween: 195,
          },

          560: {
            slidesPerView: 3,
            spaceBetween: 200,
          },
        },
      });
    }
  } else if (init) {
    pagination.classList.add('hidden');
    swiper.destroy();
    init = false;
  }
}

swiperCard();
window.addEventListener('resize', swiperCard);
