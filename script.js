// Mobile nav toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('show'));
});

// Pipeline stage click -> show info
const stages = document.querySelectorAll('.stage');
const infoBox = document.getElementById('infoBox');

stages.forEach(stage => {
  stage.addEventListener('click', () => {
    stages.forEach(s => s.classList.remove('active'));
    stage.classList.add('active');
    infoBox.textContent = stage.dataset.info;
  });
});

// FAQ accordion
document.querySelectorAll('.faq-item').forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});
