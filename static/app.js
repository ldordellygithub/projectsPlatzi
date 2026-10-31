 const nav = document.querySelector('.navbar');
      const navToggleButton = document.querySelector('.nav-toggle');
      const navLinks = document.getElementById('primary-navigation');

      if (nav && navToggleButton && navLinks) {
        const setMenuState = (isOpen) => {
          nav.classList.toggle('is-open', isOpen);
          navToggleButton.setAttribute('aria-expanded', String(isOpen));
          navToggleButton.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
        };

        navToggleButton.addEventListener('click', () => {
          const isExpanded = navToggleButton.getAttribute('aria-expanded') === 'true';
          setMenuState(!isExpanded);
        });

        window.addEventListener('resize', () => {
          if (window.innerWidth > 768) {
            setMenuState(false);
          }
        });
      }
