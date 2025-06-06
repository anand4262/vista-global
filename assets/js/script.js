
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


  // Whatsapp js
const whatsappBtn = document.querySelector('.whatsapp-float');
if (whatsappBtn) {
  whatsappBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Stop the default link opening

    whatsappBtn.classList.add('clicked');

    // Wait 300ms for animation, then open link
    setTimeout(() => {
      whatsappBtn.classList.remove('clicked');
      window.open(whatsappBtn.href, '_blank'); // Open WhatsApp link manually
    }, 300);
  });
}


  });

  