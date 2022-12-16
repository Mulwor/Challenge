const canvas = document.querySelector('#draw');

// Возвращает контекст рисование на холсте: 2d (двумерный контекст); webgl (тремерный контекста)
const ctx = canvas.getContext('2d');

// Задаается ширина и высота, которая указана в html, по умолчанию 300
canvas.witdh = window.innerWidth;
canvas.height = window.innerHeight;

// Задает цвет или стиль, , используемый при выполнении обводки фигур. По умолчанию цвет черный
ctx.strokeStyle = 'BADA55';
// определяет форму вершин в которых линии сходятся. Длина линий должна быть ненулевой.
// Round - Скругляет углы за счёт добавления сектора с центром в точке пересечения линий и радиусом равным толщине линии.
// bevel - "Срезает" угол, рисуя треугольник с вершинами в точке пересечения линий и крайних точках каждой линии.
// miter - Соединяет линии в одной точке, расширяя для этого их границы и заполняя пространство ромбами .
ctx.lineJoin = 'round';
// Как будут выглядить концы нарисованных линий: butt (прямые), round (концы линии скругленные); square (Концы линий прямые,
// но к ней с обоих концов добавляется поле с шириной равной толщине линии и высотой равной половине от толщины линии.)
ctx.lineCap = 'round';
ctx.lineWidth = 100;

// Когда отпускаем мышлку перестает рисовать
let isDrawing = false;
let lastX = 0;
let lastY = 0;
// Логика по рисованию менять цвет
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  // Запускает новый путь (тобишь начинается рисование)
  ctx.beginPath();
  // Перемешает начальную точку к кординатам x и y
  ctx.moveTo(lastX, lastY);
  // Добавляет линию
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => (isDrawing = false));
canvas.addEventListener('mouseout', () => (isDrawing = false));
