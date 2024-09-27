document.addEventListener('DOMContentLoaded', () => {
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
      });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;

  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
      htmlElement.classList.remove('theme-dark', 'theme-light');
      htmlElement.classList.add(currentTheme);
      themeToggle.classList.toggle('is-dark', currentTheme === 'theme-light');
      themeToggle.innerHTML = currentTheme === 'theme-light'
          ? '<i class="fa-solid fa-moon"></i>'
          : '<i class="fa-solid fa-sun"></i>';
  }

  themeToggle.addEventListener('click', () => {
      if (htmlElement.classList.contains('theme-dark')) {
          htmlElement.classList.remove('theme-dark');
          htmlElement.classList.add('theme-light');
          themeToggle.classList.add('is-dark');
          themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
          localStorage.setItem('theme', 'theme-light');
      } else {
          htmlElement.classList.remove('theme-light');
          htmlElement.classList.add('theme-dark');
          themeToggle.classList.remove('is-dark');
          themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
          localStorage.setItem('theme', 'theme-dark');
      }
  });
});
