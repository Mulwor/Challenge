function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide() {
  sliderImages.forEach((sliderImage) => {
    
    const slideInAt = window.scrollY + window.innerHeight - sliderImage.height / 2;
    // scrollY - Возвращает число пикселей, на которое документ пролистали в данный момент по вертикали.
    // Высота (в пикселях) области просмотра окна браузера, включая, если отображается, горизонтальную полосу прокрутки.
    console.log('Высчитывает пролистывания и вычитает высоту деленная на два: ' + slideInAt);

    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    // offsetTop - возвращает расстояние текущего элемента по отношению к верхней части offsetParent (en-US) узла.
    console.log("Растояние + высота: " + imageBottom)

    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));
