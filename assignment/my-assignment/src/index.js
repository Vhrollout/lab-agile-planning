const navLinks = document.querySelectorAll('a');

navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default jump behavior

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth' // Enable smooth scrolling
      });


      // Optional:  Adjust scroll position for fixed headers, etc.
      // const headerOffset = 80; // Example offset
      // const y = targetElement.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      // window.scrollTo({ top: y, behavior: 'smooth' });


    }
  });
});

AOS.init({
  duration: 800, // Animation duration in milliseconds
  once: false   // Whether animation should happen only once
});