let nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('nav_scroll', window.scrollY > 0);
});

let AllNavLink = document.querySelectorAll('.nav_link li a');

AllNavLink.forEach(item => {
  item.addEventListener('click', () => {
    removeActive();
    item.classList.add('active');
  });
});

const removeActive = () => AllNavLink.forEach(item => {
  item.classList.remove('active');
})