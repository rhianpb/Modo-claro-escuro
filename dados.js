const toggleTheme = document.getElementById('toggle-theme');
const body = document.body;


const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
}

toggleTheme.addEventListener('click', () => {
  body.classList.toggle('dark-mode');


  localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark-mode' : '');
});