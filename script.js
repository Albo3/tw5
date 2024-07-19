document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const header = document.querySelector("header");

  menuToggle.addEventListener("click", function () {
    header.classList.toggle("menu-active");
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      const headerOffset = 70;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Close mobile menu if open
      header.classList.remove("menu-active");
    });
  });

  // Header scroll effect
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Form submission
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      // Here you would typically send the form data to a server
      // For this example, we'll just log it to the console
      const formData = new FormData(contactForm);
      console.log("Form submitted with the following data:");
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }
      // Clear the form
      contactForm.reset();
      // Show a success message (you might want to style this better)
      alert("Thank you for your message. We will get back to you soon!");
    });
  }

  // Animate elements on scroll
  function animateOnScroll() {
    const elements = document.querySelectorAll(".animate-on-scroll");
    const triggerBottom = window.innerHeight * 0.8;

    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < triggerBottom) {
        element.classList.add("animate-fade-in-up");
      }
    });
  }

  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll(); // Run once on load
});

document.addEventListener("DOMContentLoaded", function () {
  const categories = document.querySelectorAll(".service-category");

  categories.forEach((category) => {
    const title = category.querySelector(".category-title");
    title.addEventListener("click", () => {
      category.classList.toggle("active");
    });
  });
});
