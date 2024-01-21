const WebDesignApp = {
  init: function () {
    this.setupMenu();
    this.setupSmoothScroll();
    this.duplicateInstagramContent();
    this.setupScrollReveal();
  },

  setupMenu: function () {
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");
    const menuBtnIcon = menuBtn.querySelector("i");

    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");

      const isOpen = navLinks.classList.contains("open");
      menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
    });

    navLinks.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuBtnIcon.setAttribute("class", "ri-menu-line");
    });
  },

  setupSmoothScroll: function () {
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 60, // Adjust the offset as needed
            behavior: "smooth",
          });
        }
      });
    });
  },

  duplicateInstagramContent: function () {
    const instagram = document.querySelector(".instagram__flex");
    const instagramContent = Array.from(instagram.children);

    instagramContent.forEach((item) => {
      const duplicateNode = item.cloneNode(true);
      duplicateNode.setAttribute("aria-hidden", true);
      instagram.appendChild(duplicateNode);
    });
  },

  setupScrollReveal: function () {
    const scrollRevealOption = {
      origin: "bottom",
      distance: "50px",
      duration: 1000,
    };

    // ... (Existing code for scroll reveal)

    // Example for header container
    ScrollReveal().reveal(".header__content p", {
      ...scrollRevealOption,
    });

    ScrollReveal().reveal(".header__content h1", {
      ...scrollRevealOption,
      delay: 500,
    });

    ScrollReveal().reveal(".header__content .header__btn", {
      ...scrollRevealOption,
      delay: 1000,
    });
  },
};

// Initialize the WebDesignApp object when the DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  WebDesignApp.init();
});
