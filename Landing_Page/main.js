const scrollreveloption = {
  distance: "50px",
  origin: "bottom",
  duration:1000,
};

ScrollReveal().reveal(".header_container h1", {
  ...scrollreveloption,
});

ScrollReveal().reveal(".header_container p", {
  ...scrollreveloption,
  delay: 500,
});

ScrollReveal().reveal(".header_container form", {
  ...scrollreveloption,
  delay: 1000,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});