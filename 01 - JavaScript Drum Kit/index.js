// Метод addEventListener позволяет назначить на элемент обработчики событий. С его 
// помощью, можно указать, например, что делать при клике по кнопке, или что делать 
// при наборе текста в текстовом поле.

// 1. Логика по нажатию на клавиатуре будет воспроизводится звук:
function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);   
  // <audio data-key="65" src="sounds/clap.wav"></audio>
  // event.keyCode => 65, 83, 32              
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();                 // Воспроизводит по нажатию


  // Для добавление анимации по клику
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  key.classList.add('playing');
}

// Удаляет анимацию
function removeTransition(event) {
  if (event.propertyName !== 'transform') return;
  event.target.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
// const keys = Array.from(document.querySelectorAll('.key'));

keys.forEach((key) => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
