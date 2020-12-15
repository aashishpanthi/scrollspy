const links = document.querySelectorAll(".scrollspy-link");
const sections = document.querySelectorAll(".scrollspy-section");
const indicator = document.querySelector(".scrollspy-indicator");

links.forEach((link) => {
  link.onclick = () => {
    sections.forEach((section) => {
      if (link.dataset.target === section.id) {
        document.documentElement.scrollTop = section.offsetTop;
      }
    });
  };
});

window.onscroll = () => scrollspy();
window.onload = () => scrollspy();
window.onresize = () => scrollspy();

const scrollspy = () => {
  const pageYPosition =
    document.documentElement.scrollTop || document.body.scrollTop;
  sections.forEach((section) => {
    const sectionYPosition = section.offsetTop;

    if (pageYPosition > sectionYPosition - 60) {
      links.forEach((link) => {
        if (link.dataset.target === section.id) {
          indicator.style.left = `${link.offsetLeft}px`;
          indicator.style.width = `${link.offsetWidth}px`;
        }
      });
    }
  });
};

scrollspy();
