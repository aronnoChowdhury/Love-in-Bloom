    const button = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');
    const openIcon = document.getElementById('menu-icon-open');
    const closeIcon = document.getElementById('menu-icon-close');

    button.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      menu.classList.toggle('animate-fade');
      openIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    });