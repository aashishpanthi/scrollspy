function scrollspy(navbar) {
  const links = document.querySelectorAll(".scrollspyLinks");
  const sections = document.querySelectorAll(".scrollspySection");

  const indicator = document.createElement("span");
  indicator.style = `position: absolute; height: 3px;width: 0;background: red;bottom: 0;left: 0;transition: width 0.3s, left 0.1s;`;
  navbar.appendChild(indicator);

  links.forEach((link) => {
    link.onclick = () => {
      sections.forEach((section) => {
        if (link.dataset.target === section.id) {
          document.documentElement.scrollTop = section.offsetTop;
        }
      });
    };
  });

  window.onscroll = () => perform();
  window.onload = () => perform();

  const perform = () => {
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
}

moudule.exports.scrollspy = scrollspy;
