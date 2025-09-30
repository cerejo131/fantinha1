const lines = document.querySelectorAll('.text-lines p');
let delay = 0;

lines.forEach((line) => {
  line.style.transition = 'opacity 1s ease';
  setTimeout(() => {
    line.style.opacity = 1;
  }, delay);
  delay += 1000; // 1 segundo entre cada linha
});
