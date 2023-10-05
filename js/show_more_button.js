
// Получаем все логотипы 
const logos = document.querySelectorAll('.swiper-slide');
const button = document.querySelector('#show_more');

// Флаг, который показывает, активна ли кнопка Показать все
let buttonActive = false;

// Переменная для определения размера экрана в среднем режиме (midscreen)
let midscreen;

// Скрываем содержимое при загрузке страницы и при изменении размера окна
hideContent(false);
window.addEventListener('resize', () => hideContent(false));

// Добавляем обработчик клика на кнопку "Показать все"
button.addEventListener('click', () => {
  if (!buttonActive) {
    // Если кнопка не активна, показываем все логотипы
    showAll(logos);
    // Добавляем класс 'swiper__show-more-button--active' и меняем текст кнопки
    button.classList.add('swiper__show-more-button--active');
    button.textContent = 'Скрыть';
    buttonActive = true;
  } else {
    // Если кнопка активна, скрываем лишние логотипы
    hideContent(true);
    // Убираем класс 'swiper__show-more-button--active' и меняем текст кнопки
    button.classList.remove('swiper__show-more-button--active');
    button.textContent = 'Показать все';
    buttonActive = false;
  }
});

// Функция для скрытия лишних логотипов в зависимости от размера окна
function hideContent(isButton) {
  if ((!buttonActive || isButton) && window.innerWidth > 760) {
    // Проверяем размер окна и определяем средний режим
    midscreen = window.innerWidth > 760 && window.innerWidth <= 1110;

    if (window.innerWidth > 760 && window.innerWidth < 1110) {
      // Если ширина окна меньше 1110, скрываем лишние логотипы 6 штук
      hideByNumber(6, logos);
    } else if (window.innerWidth >= 1110) {
      // Если ширина окна больше или равна 1110, скрываем больше логотипов 8 штук
      hideByNumber(8, logos);
    }
  } else {
    // Если кнопка не активна или это изменение размера окна, то показываем все логотипы
    showAll(logos);
  }
}

// Функция для скрытия логотипов начиная с заданного числа
function hideByNumber(number, array) {
  // Сначала показываем все логотипы
  showAll(logos);

  // Затем скрываем логотипы, начиная с заданного числа
  for (let i = number; i < array.length; i++) {
    array[i].classList.add('hidden');
  }
}

// Функция для показа всех логотипов
function showAll(array) {
  for (let i = 0; i < array.length; i++) {
    array[i].classList.remove('hidden');
  }
}




