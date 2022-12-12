const inputs = document.querySelectorAll('.controls input');

function handlerUpdate() {
  // Переменная для px
  const app = this.dataset.sizing || '';
  console.log(this);

  // ссылается на DOM-объект для тега <html>, style.setProperty() где устанавливает новое
  // значение свойства в объекте объявления стиля CSS.
  document.documentElement.style.setProperty(`--${this.name}`, this.value + app);
}

inputs.forEach((input) => input.addEventListener('change', handlerUpdate));
inputs.forEach((input) => input.addEventListener('mousemove', handlerUpdate));
