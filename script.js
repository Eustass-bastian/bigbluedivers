// Simple Dive Site Modal Functionality
const createDiveSiteModal = () => {
  console.log("Setting up dive site modals...");

  // Dive site data
  const diveSiteData = {
    1: {
      image: "images/1.rasdhoo-reef.webp",
      title: "Rasdhoo Reef",
      difficulty: "Beginner",
      description:
        "Beautiful coral formations with abundant marine life and excellent visibility.",
      depth: "Depth: 8-25m",
      marineLife: "Reef fish, turtles, rays",
    },
    2: {
      image: "images/3.hammerhead.webp",
      title: "Hammerhead Point",
      difficulty: "Advanced",
      description:
        "Famous hammerhead shark encounters in deep blue waters with strong currents.",
      depth: "Depth: 20-40m",
      marineLife: "Hammerhead sharks, pelagics",
    },
    3: {
      image: "images/2.madivaru-channel.webp",
      title: "Madivaru Channel",
      difficulty: "Intermediate",
      description:
        "Thrilling drift dive through the channel with strong currents and pelagic encounters.",
      depth: "Depth: 12-35m",
      marineLife: "Sharks, eagle rays, jacks",
    },
    4: {
      image: "images/4.madivaru-corner.webp",
      title: "Madivaru Corner",
      difficulty: "Intermediate",
      description:
        "Spectacular corner dive with dramatic drop-offs and diverse marine ecosystems.",
      depth: "Depth: 10-30m",
      marineLife: "Reef sharks, barracudas",
    },
    5: {
      image: "images/5.madivaru-reef.webp",
      title: "Madivaru Reef",
      difficulty: "Beginner",
      description:
        "Gentle reef dive perfect for beginners with colorful corals and friendly marine life.",
      depth: "Depth: 5-20m",
      marineLife: "Reef fish, nudibranchs",
    },
    6: {
      image: "images/6.veligandu-east.webp",
      title: "Veligandu East",
      difficulty: "Intermediate",
      description:
        "East-facing reef with excellent coral coverage and abundant fish life.",
      depth: "Depth: 8-28m",
      marineLife: "Groupers, snappers, rays",
    },
    7: {
      image: "images/7.veligandu-north.webp",
      title: "Veligandu North",
      difficulty: "Intermediate",
      description:
        "Northern reef section with dramatic topography and large fish aggregations.",
      depth: "Depth: 10-32m",
      marineLife: "Napoleon wrasse, sharks",
    },
    8: {
      image: "images/8.madigaa.webp",
      title: "Madigaa",
      difficulty: "Beginner",
      description:
        "Shallow reef perfect for snorkeling and beginner divers with calm conditions.",
      depth: "Depth: 3-15m",
      marineLife: "Colorful reef fish, corals",
    },
    9: {
      image: "images/9.north-channel.webp",
      title: "North Channel",
      difficulty: "Advanced",
      description:
        "Challenging drift dive through the northern channel with strong currents.",
      depth: "Depth: 15-40m",
      marineLife: "Manta rays, sharks, tunas",
    },
    10: {
      image: "images/10.north-corner.webp",
      title: "North Corner",
      difficulty: "Intermediate",
      description:
        "Corner dive with excellent coral formations and diverse marine life.",
      depth: "Depth: 8-25m",
      marineLife: "Reef sharks, groupers",
    },
    11: {
      image: "images/11.miyaru-faru.webp",
      title: "Miyaru Faru",
      difficulty: "Intermediate",
      description:
        "Spectacular reef with vibrant coral gardens and abundant marine biodiversity.",
      depth: "Depth: 10-30m",
      marineLife: "Coral gardens, reef fish",
    },
    12: {
      image: "images/12.caves.webp",
      title: "The Caves",
      difficulty: "Advanced",
      description:
        "Underwater cave system with dramatic rock formations and unique marine life.",
      depth: "Depth: 15-35m",
      marineLife: "Cave fish, lobsters",
    },
    13: {
      image: "images/13.bodugaa.webp",
      title: "Bodugaa",
      difficulty: "Beginner",
      description:
        "Beautiful reef with thriving hard corals and excellent visibility for photography.",
      depth: "Depth: 5-25m",
      marineLife: "Coral formations, reef fish",
    },
    14: {
      image: "images/14.three-palm.webp",
      title: "Three Palms",
      difficulty: "Beginner",
      description:
        "Named after three distinctive coral formations, offering diverse marine habitats.",
      depth: "Depth: 8-25m",
      marineLife: "Unique structures, turtles",
    },
    15: {
      image: "images/15.holhifaru.webp",
      title: "Holhifaru",
      difficulty: "Intermediate",
      description:
        "Spectacular reef with vibrant coral gardens and diverse marine ecosystems.",
      depth: "Depth: 10-30m",
      marineLife: "Coral gardens, reef sharks",
    },
    16: {
      image: "images/16.rashoo-channel.webp",
      title: "Rashoo Channel",
      difficulty: "Advanced",
      description:
        "Thrilling drift dive through the channel with chances to spot pelagic species.",
      depth: "Depth: 12-35m",
      marineLife: "Strong currents, eagle rays",
    },
    17: {
      image: "images/17.reef-explorer.webp",
      title: "Reef Explorer",
      difficulty: "Intermediate",
      description:
        "Artificial reef created by a sunken vessel, now home to diverse marine species.",
      depth: "Depth: 15-30m",
      marineLife: "Wreck exploration, marine life",
    },
    18: {
      image: "images/18.kuramthi-queen.webp",
      title: "Kuramthi Queen",
      difficulty: "Advanced",
      description:
        "Deep dive site known for large pelagic encounters and dramatic underwater landscapes.",
      depth: "Depth: 20-45m",
      marineLife: "Large pelagics, sharks",
    },
  };

  // Function to show modal
  const showModal = (siteData) => {
    console.log("Showing modal for:", siteData.title);

    // Remove any existing modal
    const existingModal = document.getElementById("dive-modal");
    if (existingModal) {
      existingModal.remove();
    }

    // Create modal HTML
    const modalHTML = `
      <div id="dive-modal" style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        box-sizing: border-box;
      ">
        <div style="
          background: white;
          border-radius: 15px;
          max-width: 800px;
          max-height: 90vh;
          overflow: hidden;
          position: relative;
          box-shadow: 0 25px 50px rgba(0,0,0,0.3);
        ">
          <button onclick="document.getElementById('dive-modal').remove()" style="
            position: absolute;
            top: 15px;
            right: 20px;
            background: rgba(255,255,255,0.9);
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            font-size: 20px;
            cursor: pointer;
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
          ">&times;</button>
          
          <div style="width: 100%; height: 300px; overflow: hidden;">
            <img src="${siteData.image}" alt="${siteData.title}" style="
              width: 100%;
              height: 100%;
              object-fit: cover;
            " />
          </div>
          
          <div style="padding: 30px;">
            <h2 style="margin: 0 0 15px 0; color: #1b4965; font-size: 2rem;">${
              siteData.title
            }</h2>
            <div style="
              display: inline-block;
              padding: 8px 16px;
              border-radius: 25px;
              font-size: 0.9rem;
              font-weight: 600;
              text-transform: uppercase;
              margin-bottom: 20px;
              background: ${
                siteData.difficulty === "Beginner"
                  ? "linear-gradient(135deg, #10b981, #059669)"
                  : siteData.difficulty === "Intermediate"
                  ? "linear-gradient(135deg, #0ea5e9, #0284c7)"
                  : "linear-gradient(135deg, #f59e0b, #d97706)"
              };
              color: white;
            ">${siteData.difficulty}</div>
            
            <p style="color: #64748b; line-height: 1.7; margin-bottom: 25px; font-size: 1.1rem;">${
              siteData.description
            }</p>
            
            <div style="display: flex; flex-direction: column; gap: 15px;">
              <div style="display: flex; align-items: center; color: #475569; font-size: 1rem;">
                <i class="fas fa-water" style="color: #0ea5e9; margin-right: 12px; width: 20px; text-align: center;"></i>
                <span>${siteData.depth}</span>
              </div>
              <div style="display: flex; align-items: center; color: #475569; font-size: 1rem;">
                <i class="fas fa-fish" style="color: #0ea5e9; margin-right: 12px; width: 20px; text-align: center;"></i>
                <span>${siteData.marineLife}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // Add modal to body
    document.body.insertAdjacentHTML("beforeend", modalHTML);

    // Close on backdrop click
    document.getElementById("dive-modal").addEventListener("click", (e) => {
      if (e.target.id === "dive-modal") {
        document.getElementById("dive-modal").remove();
      }
    });
  };

  // Add click listeners to all cards
  const addClickListeners = () => {
    const cards = document.querySelectorAll(".dive-site-detail-card");
    console.log("Found cards:", cards.length);

    cards.forEach((card, index) => {
      card.addEventListener("click", (e) => {
        e.preventDefault();
        const siteNumber = index + 1;
        const siteData = diveSiteData[siteNumber];

        if (siteData) {
          showModal(siteData);
        }
      });
    });
  };

  // Try multiple times to ensure it works
  addClickListeners();
  setTimeout(addClickListeners, 100);
  setTimeout(addClickListeners, 500);
};

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
      // Lock vertical scroll but keep horizontal overflow hidden per CSS
      document.body.style.overflowY = "hidden";
      document.body.style.overflowX = "hidden";
    } else {
      navMenu.classList.remove("mobile-active");
      mobileMenuBtn.innerHTML = "☰";
      mobileMenuBtn.setAttribute("aria-expanded", "false");
      // Restore vertical scroll while ensuring horizontal overflow stays hidden
      document.body.style.overflowY = "auto";
      document.body.style.overflowX = "hidden";
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
        document.body.style.overflowY = "auto";
        document.body.style.overflowX = "hidden";
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
      document.body.style.overflowY = "auto";
      document.body.style.overflowX = "hidden";
      isMenuOpen = false;
    }
  });

  // Handle resize events
  const handleResize = () => {
    if (window.innerWidth > 768) {
      navMenu.classList.remove("mobile-active");
      mobileMenuBtn.innerHTML = "☰";
      mobileMenuBtn.setAttribute("aria-expanded", "false");
      document.body.style.overflowY = "auto";
      document.body.style.overflowX = "hidden";
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
      document.body.style.overflowY = "auto";
      document.body.style.overflowX = "hidden";
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

  // Observe existing elements
  const featureItems = document.querySelectorAll(".feature-item");
  const storyHeader = document.querySelectorAll(
    ".our-story-section .story-header"
  );
  const storyParagraphs = document.querySelectorAll(
    ".our-story-section .story-body p"
  );
  const storyHighlights = document.querySelectorAll(
    ".our-story-section .story-highlights .highlight"
  );
  const showcaseItems = document.querySelectorAll(
    ".center-showcase .reveal-item"
  );

  // Team section elements
  const teamTitle = document.querySelectorAll(".team-title");
  const teamCards = document.querySelectorAll(".team-card");
  const valueItems = document.querySelectorAll(".value-item");
  const certItems = document.querySelectorAll(".cert-item");
  const valuesHeaders = document.querySelectorAll(
    ".values-header h3, .values-header p"
  );
  const certHeaders = document.querySelectorAll(
    ".certifications-header h3, .certifications-header p"
  );

  const allAnimatedElements = [
    ...featureItems,
    ...storyHeader,
    ...storyParagraphs,
    ...storyHighlights,
    ...showcaseItems,
    ...teamTitle,
    ...teamCards,
    ...valueItems,
    ...certItems,
    ...valuesHeaders,
    ...certHeaders,
  ];

  allAnimatedElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(element);
  });

  // Grouped stagger for nicer reveal timing
  const applyStagger = (nodes, baseDelay = 0, step = 0.08) => {
    nodes.forEach((el, i) => {
      el.style.transitionDelay = `${baseDelay + i * step}s`;
    });
  };

  applyStagger(storyHeader, 0, 0.05);
  applyStagger(storyParagraphs, 0.05, 0.12);
  applyStagger(storyHighlights, 0.25, 0.1);
  applyStagger(showcaseItems, 0.15, 0.08);

  // Team section stagger timing
  applyStagger(teamTitle, 0, 0.1);
  applyStagger(teamCards, 0.2, 0.15);
  applyStagger(valuesHeaders, 0.1, 0.1);
  applyStagger(valueItems, 0.3, 0.12);
  applyStagger(certHeaders, 0.1, 0.1);
  applyStagger(certItems, 0.3, 0.15);
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

// Travel Information Popup functionality
const initTravelInfoPopup = () => {
  console.log("Initializing travel info popup functionality");
  // Function to open airport info popup
  window.openAirportInfo = () => {
    console.log("Opening airport info popup");
    const popup = document.getElementById("airportInfoPopup");
    const button = document.querySelector(".airport-btn");

    if (popup && button) {
      popup.classList.add("active");
      button.classList.add("active");
      document.body.style.overflow = "hidden";
      console.log("Airport popup opened successfully");
    } else {
      console.log("Airport popup or button not found", { popup, button });
    }
  };

  // Function to close airport info popup
  window.closeAirportInfo = () => {
    const popup = document.getElementById("airportInfoPopup");
    const button = document.querySelector(".airport-btn");

    if (popup && button) {
      popup.classList.remove("active");
      button.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  };

  // Function to open immigration info popup
  window.openImmigrationInfo = () => {
    console.log("Opening immigration info popup");
    const popup = document.getElementById("immigrationInfoPopup");
    const button = document.querySelector(".immigration-btn");

    if (popup && button) {
      popup.classList.add("active");
      button.classList.add("active");
      document.body.style.overflow = "hidden";
      console.log("Immigration popup opened successfully");
    } else {
      console.log("Immigration popup or button not found", { popup, button });
    }
  };

  // Function to close immigration info popup
  window.closeImmigrationInfo = () => {
    const popup = document.getElementById("immigrationInfoPopup");
    const button = document.querySelector(".immigration-btn");

    if (popup && button) {
      popup.classList.remove("active");
      button.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  };

  // Function to open travel tips popup
  window.openTravelTips = () => {
    console.log("Opening travel tips popup");
    const popup = document.getElementById("travelTipsPopup");
    const button = document.querySelector(".tips-btn");

    if (popup && button) {
      popup.classList.add("active");
      button.classList.add("active");
      document.body.style.overflow = "hidden";
      console.log("Travel tips popup opened successfully");
    } else {
      console.log("Travel tips popup or button not found", { popup, button });
    }
  };

  // Function to close travel tips popup
  window.closeTravelTips = () => {
    const popup = document.getElementById("travelTipsPopup");
    const button = document.querySelector(".tips-btn");

    if (popup && button) {
      popup.classList.remove("active");
      button.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  };

  // Close popup when clicking outside the content
  const popups = [
    "airportInfoPopup",
    "immigrationInfoPopup",
    "travelTipsPopup",
  ];

  popups.forEach((popupId) => {
    const popup = document.getElementById(popupId);
    if (popup) {
      popup.addEventListener("click", (e) => {
        if (e.target === popup) {
          // Close the specific popup
          if (popupId === "airportInfoPopup") {
            window.closeAirportInfo();
          } else if (popupId === "immigrationInfoPopup") {
            window.closeImmigrationInfo();
          } else if (popupId === "travelTipsPopup") {
            window.closeTravelTips();
          }
        }
      });
    }
  });

  // Close popup with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const activePopups = popups.filter((id) => {
        const popup = document.getElementById(id);
        return popup && popup.classList.contains("active");
      });

      if (activePopups.length > 0) {
        const activePopup = activePopups[0];
        if (activePopup === "airportInfoPopup") {
          window.closeAirportInfo();
        } else if (activePopup === "immigrationInfoPopup") {
          window.closeImmigrationInfo();
        } else if (activePopup === "travelTipsPopup") {
          window.closeTravelTips();
        }
      }
    }
  });

  // Add event listeners as backup to onclick attributes
  const airportBtn = document.querySelector(".airport-btn");
  const immigrationBtn = document.querySelector(".immigration-btn");
  const tipsBtn = document.querySelector(".tips-btn");

  if (airportBtn) {
    airportBtn.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("Airport button clicked via event listener");
      window.openAirportInfo();
    });
  }

  if (immigrationBtn) {
    immigrationBtn.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("Immigration button clicked via event listener");
      window.openImmigrationInfo();
    });
  }

  if (tipsBtn) {
    tipsBtn.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("Tips button clicked via event listener");
      window.openTravelTips();
    });
  }
};

// Initialize all features when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initScrollAnimations();
  initCTAButton();
  addRippleAnimation();
  initReviewSlider();
  initTravelInfoPopup();
  createDiveSiteModal();

  // Partnerships section removed; related animations not initialized
  // Uncomment the line below if you want parallax effect
  // initParallaxEffect();
});
