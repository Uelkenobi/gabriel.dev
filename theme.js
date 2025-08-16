const toggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if(currentTheme === 'dark') {
  document.body.classList.add('dark');
}

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
});

// Scroll Reveal com Intersection Observer
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active'); // Ativa animação
        observer.unobserve(entry.target);     // Para de observar depois de aparecer
      }
    });
  },
  { threshold: 0.1 } // 10% do elemento visível para disparar
);

reveals.forEach(el => observer.observe(el));
