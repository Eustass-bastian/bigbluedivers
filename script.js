// Enhanced Mobile menu toggle
const createMobileMenu = () => {
  const navContainer = document.querySelector(".nav-container");
  const navMenu = document.querySelector(".nav-menu");

  // Create mobile menu button with hamburger animation
  const mobileMenuBtn = document.createElement("button");
  mobileMenuBtn.className = "mobile-menu-btn";
  mobileMenuBtn.innerHTML = "☰";
  mobileMenuBtn.setAttribute("aria-label", "Toggle mobile menu");
  mobileMenuBtn.setAttribute("aria-expanded", "false");

  navContainer.appendChild(mobileMenuBtn);

  let isMenuOpen = false;

  // Toggle mobile menu with animation
  mobileMenuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
      navMenu.classList.add("mobile-active");
      mobileMenuBtn.innerHTML = "✕";
      mobileMenuBtn.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden"; // Prevent scroll when menu is open
    } else {
      navMenu.classList.remove("mobile-active");
      mobileMenuBtn.innerHTML = "☰";
      mobileMenuBtn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "auto";
    }
  });

  // Close menu when clicking on nav links
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (isMenuOpen) {
        navMenu.classList.remove("mobile-active");
        mobileMenuBtn.innerHTML = "☰";
        mobileMenuBtn.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "auto";
        isMenuOpen = false;
      }
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (isMenuOpen && !navContainer.contains(e.target)) {
      navMenu.classList.remove("mobile-active");
      mobileMenuBtn.innerHTML = "☰";
      mobileMenuBtn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "auto";
      isMenuOpen = false;
    }
  });

  // Handle resize events
  const handleResize = () => {
    if (window.innerWidth > 768) {
      navMenu.classList.remove("mobile-active");
      mobileMenuBtn.innerHTML = "☰";
      mobileMenuBtn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "auto";
      isMenuOpen = false;
    }
  };

  window.addEventListener("resize", handleResize);

  // Close menu on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isMenuOpen) {
      navMenu.classList.remove("mobile-active");
      mobileMenuBtn.innerHTML = "☰";
      mobileMenuBtn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "auto";
      isMenuOpen = false;
    }
  });
};

// Initialize mobile menu
document.addEventListener("DOMContentLoaded", createMobileMenu);

// Scroll animations and interactive features
const initScrollAnimations = () => {
  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe all feature items
  const featureItems = document.querySelectorAll(".feature-item");

  const allAnimatedElements = [...featureItems];

  allAnimatedElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(element);
  });

  // Staggered animation for elements
  allAnimatedElements.forEach((element, index) => {
    element.style.transitionDelay = `${index * 0.1}s`;
  });
};

// CTA Button functionality
const initCTAButton = () => {
  const ctaButton = document.querySelector(".cta-button");
  if (ctaButton) {
    ctaButton.addEventListener("click", () => {
      // Add ripple effect
      const ripple = document.createElement("span");
      ripple.style.position = "absolute";
      ripple.style.borderRadius = "50%";
      ripple.style.background = "rgba(255, 255, 255, 0.3)";
      ripple.style.transform = "scale(0)";
      ripple.style.animation = "ripple 0.6s linear";
      ripple.style.left = "50%";
      ripple.style.top = "50%";
      ripple.style.width = "20px";
      ripple.style.height = "20px";
      ripple.style.marginLeft = "-10px";
      ripple.style.marginTop = "-10px";

      ctaButton.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);

      // Scroll to packages section (you can modify this to scroll to actual packages)
      console.log("CTA button clicked - navigate to packages");
    });
  }
};

// Add ripple animation CSS
const addRippleAnimation = () => {
  const style = document.createElement("style");
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
};

// Parallax effect for the dive experiences section
const initParallaxEffect = () => {
  const diveSection = document.querySelector(".dive-experiences");
  if (diveSection) {
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      diveSection.style.transform = `translateY(${rate}px)`;
    });
  }
};

// Review Slider functionality
const initReviewSlider = () => {
  const slides = document.querySelectorAll(".review-slide");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  let currentSlide = 0;
  let slideInterval;

  const showSlide = (index) => {
    // Remove active class from all slides and dots
    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    // Add active class to current slide and dot
    slides[index].classList.add("active");
    dots[index].classList.add("active");
  };

  const nextSlide = () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  };

  const prevSlide = () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  };

  const startAutoSlide = () => {
    // Auto-slide disabled - slider only changes on manual navigation
    // slideInterval = setInterval(nextSlide, 5000);
  };

  const stopAutoSlide = () => {
    // clearInterval(slideInterval);
  };

  // Event listeners
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();
    });
  }

  // Dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentSlide = index;
      showSlide(currentSlide);
    });
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key === "ArrowRight") {
      nextSlide();
    }
  });

  // Initialize slider
  showSlide(currentSlide);
};

// Partnerships Section Interactive Features (removed)
/* const initPartnershipsAnimations = () => {
  const partnershipCards = document.querySelectorAll(".partnership-card");
  const logoContainers = document.querySelectorAll(".logo-container");

  // Staggered entrance animation for partnership cards
  partnershipCards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px) scale(0.9)";
    card.style.transition = "all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
    card.style.transitionDelay = `${index * 0.1}s`;

    // Trigger animation when card enters viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0) scale(1)";
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(card);
  });

  // Logo rotation and glow effects on hover
  logoContainers.forEach((container) => {
    const card = container.closest(".partnership-card");

    card.addEventListener("mouseenter", () => {
      container.style.transform = "scale(1.1) rotate(5deg)";
      container.style.boxShadow = "0 15px 35px rgba(27, 73, 101, 0.4)";

      // Add pulsing glow effect
      container.style.animation = "logoGlow 2s ease-in-out infinite";
    });

    card.addEventListener("mouseleave", () => {
      container.style.transform = "scale(1) rotate(0deg)";
      container.style.boxShadow = "0 10px 25px rgba(27, 73, 101, 0.3)";
      container.style.animation = "none";
    });
  });

  // Feature tags hover animation
  const featureTags = document.querySelectorAll(
    ".partnership-features .feature-tag"
  );
  featureTags.forEach((tag) => {
    tag.addEventListener("mouseenter", () => {
      tag.style.transform = "translateY(-3px) scale(1.05)";
      tag.style.boxShadow = "0 5px 15px rgba(27, 73, 101, 0.2)";
    });

    tag.addEventListener("mouseleave", () => {
      tag.style.transform = "translateY(0) scale(1)";
      tag.style.boxShadow = "none";
    });
  });

  // Verification badges pulse effect
  const verificationBadges = document.querySelectorAll(
    ".partnership-verification"
  );
  verificationBadges.forEach((badge) => {
    badge.addEventListener("mouseenter", () => {
      badge.style.animation = "badgePulse 1.5s ease-in-out infinite";
    });

    badge.addEventListener("mouseleave", () => {
      badge.style.animation = "none";
    });
  });

  // Stats counter animation
  const statNumbers = document.querySelectorAll(".stat-number");
  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  statNumbers.forEach((stat) => {
    statsObserver.observe(stat);
  });
}; */

/* const animateCounter = (element) => {
  const target = element.textContent;
  const isPercentage = target.includes("%");
  const isPlus = target.includes("+");
  const isStar = target.includes("★");

  let numericValue;
  if (isPercentage) {
    numericValue = parseInt(target.replace("%", ""));
  } else if (isPlus) {
    numericValue = parseInt(target.replace("+", ""));
  } else if (isStar) {
    numericValue = parseInt(target.replace("★", ""));
  } else {
    numericValue = parseInt(target);
  }

  let current = 0;
  const increment = numericValue / 50;
  const timer = setInterval(() => {
    current += increment;
    if (current >= numericValue) {
      current = numericValue;
      clearInterval(timer);
    }

    let displayValue = Math.floor(current);
    if (isPercentage) displayValue += "%";
    else if (isPlus) displayValue += "+";
    else if (isStar) displayValue += "★";

    element.textContent = displayValue;
  }, 30);
}; */

/* const addPartnershipsAnimations = () => {
  const style = document.createElement("style");
  style.textContent = `
    @keyframes logoGlow {
      0%, 100% {
        box-shadow: 0 15px 35px rgba(27, 73, 101, 0.4);
      }
      50% {
        box-shadow: 0 20px 40px rgba(27, 73, 101, 0.6);
      }
    }

    @keyframes badgePulse {
      0%, 100% {
        transform: scale(1);
        background: linear-gradient(135deg, rgba(27, 73, 101, 0.05), rgba(190, 233, 232, 0.1));
      }
      50% {
        transform: scale(1.05);
        background: linear-gradient(135deg, rgba(27, 73, 101, 0.1), rgba(190, 233, 232, 0.2));
      }
    }

    @keyframes cardFloat {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-5px);
      }
    }

    .partnership-card:hover {
      animation: cardFloat 3s ease-in-out infinite;
    }

    .partnerships-badge {
      animation: float 6s ease-in-out infinite;
    }

    .background-pattern {
      animation: patternMove 20s linear infinite;
    }

    .logo-glow {
      animation: glowPulse 3s ease-in-out infinite;
    }

    @keyframes glowPulse {
      0%, 100% {
        opacity: 0;
        transform: scale(1);
      }
      50% {
        opacity: 0.3;
        transform: scale(1.1);
      }
    }

    .partnership-verification i {
      transition: all 0.3s ease;
    }

    .partnership-card:hover .partnership-verification i {
      animation: iconSpin 0.5s ease-in-out;
    }

    @keyframes iconSpin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .cta-button {
      position: relative;
      overflow: hidden;
    }

    .cta-button::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      transition: width 0.3s ease, height 0.3s ease;
    }

    .cta-button:hover::after {
      width: 300px;
      height: 300px;
    }
  `;
  document.head.appendChild(style);
}; */

// Initialize all features when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initScrollAnimations();
  initCTAButton();
  addRippleAnimation();
  initReviewSlider();
  // Partnerships section removed; related animations not initialized
  // Uncomment the line below if you want parallax effect
  // initParallaxEffect();
});
