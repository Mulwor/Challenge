const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')
// console.log(checkboxes)

let lastChecked;

function handleCheck(e) {
    // Проверка: нажата ли у них клавиша Shift, И убедитесь, что они ее проверяют.
    let inBetween = false;
    if (e.shiftKey && this.checked) {        // e.shiftKey - проверяет была ли нажата shift
      checkboxes.forEach(checkbox => {
        if (checkbox === this || checkbox === lastChecked) {
          
          inBetween = !inBetween;
        }
  
        if (inBetween) {
          checkbox.checked = true;
        }
      });
    }
    lastChecked = this;
}
  
  checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));