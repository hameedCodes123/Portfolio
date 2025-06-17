var typed = new Typed('#element', {
    strings: ['Web Developer', 'Java Developer'],
    typeSpeed: 90,
    backSpeed: 30,
    backDelay: 2000,
    loop: true
  });
    // Get all anchor tags with class "nav-link"
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
      link.addEventListener('click', function() {
        // Remove 'active' class from all links
        links.forEach(l => l.classList.remove('active'));
        
        // Add 'active' class to the clicked link
        this.classList.add('active');
      });
    });