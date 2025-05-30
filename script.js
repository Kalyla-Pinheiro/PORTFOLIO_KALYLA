// Fade-in ao rolar
document.addEventListener("DOMContentLoaded", function() {
  const fadeEls = document.querySelectorAll('.fadein');
  function fadeInOnScroll() {
    fadeEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if(rect.top < window.innerHeight - 60) {
        el.classList.add('visible');
      }
    });
  }
  window.addEventListener("scroll", fadeInOnScroll);
  fadeInOnScroll();
});

// Destaca link da navbar conforme seção visível (scrollspy simples)
document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("header nav a");
  function onScroll() {
    let scrollPos = window.scrollY + 120;
    sections.forEach(section => {
      if(scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === "#" + section.id);
        });
      }
    });
  }
  window.addEventListener("scroll", onScroll);
  onScroll();
});

// Dark/Light mode
(function() {
  const themeToggle = document.getElementById('theme-toggle');
  const root = document.documentElement;

  // Salva/recupera preferência do usuário
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    root.setAttribute('data-theme', storedTheme);
    updateToggleIcon(storedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    root.setAttribute('data-theme', 'dark');
    updateToggleIcon('dark');
  }

  themeToggle.addEventListener('click', function() {
    let theme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateToggleIcon(theme);
  });

  function updateToggleIcon(theme) {
    themeToggle.innerHTML =
      theme === 'dark'
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
  }
})();
