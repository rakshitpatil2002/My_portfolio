const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');

function closeMenu() {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}

menuButton.addEventListener('click', () => {
  const open = navigation.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeMenu();
});
window.matchMedia('(min-width: 561px)').addEventListener('change', closeMenu);
document.querySelector('#year').textContent = new Date().getFullYear();

const projects = {
  harvestify: {
    title: 'Harvestify',
    category: 'MACHINE LEARNING / PREDICTIVE FARMING',
    description: 'A smart farming project designed to help farmers make informed crop and fertilizer choices using IoT sensor data, analytics, and machine learning.',
    features: [
      'Uses IoT sensor data as part of a data-driven farming approach.',
      'Explores Decision Tree, Naive Bayes, and Support Vector Machine models for predictions.',
      'Focuses on recommending suitable crops and fertilizers to support farming decisions.'
    ],
    tags: ['IoT', 'Data analytics', 'Decision Tree', 'Naive Bayes', 'SVM']
  },
  supermarket: {
    title: 'Supermarket Management',
    category: 'SQL / DATABASE MANAGEMENT',
    description: 'A database management project that brings stock information, transaction records, and customer profiles into one system for supermarket operations.',
    features: [
      'Check product stock and access inventory information.',
      'Review transaction records stored in the database.',
      'Access customer profiles to support day-to-day store management.'
    ],
    tags: ['SQL', 'DBMS', 'Inventory management', 'Customer data']
  }
};

const dialog = document.querySelector('#project-dialog');
document.querySelectorAll('.project-details').forEach(button => {
  button.addEventListener('click', () => {
    const project = projects[button.dataset.project];
    document.querySelector('#dialog-title').textContent = project.title;
    document.querySelector('#dialog-category').textContent = project.category;
    document.querySelector('#dialog-description').textContent = project.description;
    document.querySelector('#dialog-features').replaceChildren(...project.features.map(feature => {
      const item = document.createElement('li');
      item.textContent = feature;
      return item;
    }));
    document.querySelector('#dialog-tags').replaceChildren(...project.tags.map(tag => {
      const item = document.createElement('span');
      item.textContent = tag;
      return item;
    }));
    dialog.showModal();
    document.body.classList.add('dialog-open');
  });
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
dialog.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
});

document.querySelector('.copy-email').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText('rakshitppatil69@gmail.com');
    status.textContent = 'Email copied. Let’s connect!';
  } catch {
    status.textContent = 'Copy this address: rakshitppatil69@gmail.com';
  }
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navigation.querySelectorAll('a').forEach(link => {
        const active = link.getAttribute('href') === `#${entry.target.id}`;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
  document.querySelectorAll('main > section[id]').forEach(section => observer.observe(section));
}
