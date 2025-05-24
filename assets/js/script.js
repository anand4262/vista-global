
  // Navbar background toggle on scroll
 /*  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('mainNavbar');
    navbar.classList.toggle('bg-darks', window.scrollY > 50);
    navbar.classList.toggle('navbar-dark', window.scrollY > 50);
    navbar.classList.toggle('navbar-light', window.scrollY <= 50);
    navbar.classList.toggle('bg-transparent', window.scrollY <= 50);
  }); */
 
 

  
  document.addEventListener("DOMContentLoaded", () => {
    // Initialize Swiper
    const swiper = new Swiper(".hero-swiper", {
      loop: true,
      effect: "fade",
      fadeEffect: { crossFade: true },
      speed: 1000,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-fraction",
        type: "fraction",
        formatFractionCurrent: number => number.toString().padStart(2, '0'),
        formatFractionTotal: number => number.toString().padStart(2, '0'),
      },
      navigation: {
        nextEl: ".next-btn",
        prevEl: ".prev-btn",
      }
    });
  
    var swiperOne = new Swiper(".mySwiper", {
      effect: "flip",
      grabCursor: true,
      /* pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }, */
    });

    // Navbar scroll behavior
    window.addEventListener("scroll", () => {
      const navbar = document.getElementById("mainNavbar");
      navbar.classList.toggle("scrolled", window.scrollY > 10);
    });
  
    // AOS init
    AOS.init({
      once: false,
      duration: 800,
      easing: 'ease-in-out',
    });

    const toolTip = document.getElementById("tip-icon");
    const fadeText = toolTip.nextElementSibling;
    toolTip.addEventListener("mouseenter", () => {
        fadeText.classList.add("animate__fadeIn")
        fadeText.style.opacity = 1;
    })

    toolTip.addEventListener("mouseleave", () => {
      fadeText.classList.remove("animate__fadeIn")
      fadeText.style.opacity = 0;
  })
  });
