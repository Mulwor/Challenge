const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  // Заставляем темы переключаться при каждом клике
  this.classList.toggle('open');
}

function toggleActive(event) {
  // PropertName - получает доступ к свойства объекта
  console.log(event.propertyName);
  if (event.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));