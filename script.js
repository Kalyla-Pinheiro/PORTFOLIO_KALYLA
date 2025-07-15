// Fade-in suave usando IntersectionObserver
document.addEventListener("DOMContentLoaded", function() {
  const fadeEls = document.querySelectorAll('.fadein');
  const observer = new window.IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  fadeEls.forEach(el => observer.observe(el));
});

// Scrollspy aprimorado
document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("header nav a");
  function onScroll() {
    let scrollPos = window.scrollY + 130;
    let found = false;
    sections.forEach(section => {
      if(!found && scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === "#" + section.id);
        });
        found = true;
      }
    });
  }
  window.addEventListener("scroll", onScroll);
  onScroll();
});

// Dark/Light mode aprimorado
(function() {
  const themeToggle = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const body = document.body;

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    body.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
    updateToggleIcon(theme);
  }

  function updateToggleIcon(theme) {
    themeToggle.innerHTML =
      theme === 'dark'
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
  }

  // Preferência do usuário
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    setTheme(storedTheme);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme('dark');
  } else {
    setTheme('light');
  }

  themeToggle.addEventListener('click', function() {
    const theme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(theme);
  });
})();

// Botão voltar ao topo
document.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById('back-to-top');
  window.addEventListener('scroll', function() {
    btn.style.display = window.scrollY > 350 ? 'flex' : 'none';
  });
  btn.addEventListener('click', function() {
    window.scrollTo({top:0, behavior:'smooth'});
  });
});
