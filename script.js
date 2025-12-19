// Dive Site Modal Functionality - Images match card numbers (1.rasdhoo-reef.webp for card 1)
const diveSiteData = {
  1: {
    image: "images/1.rasdhoo-reef.webp",
    title: "Rasdhoo Reef",
    difficulty: "Beginner",
    description:
      "Beautiful coral formations with abundant marine life and excellent visibility. Perfect for photographers and marine enthusiasts looking to capture the vibrant underwater ecosystem.",
    depth: "Depth: 8-25m",
    marineLife: "Reef fish, turtles, rays",
  },
  2: {
    image: "images/2.madivaru-channel.webp",
    title: "Madivaru Channel",
    difficulty: "Intermediate",
    description:
      "Thrilling drift dive through the channel with strong currents and pelagic encounters. Experience the rush of gliding through nutrient-rich waters teeming with marine life.",
    depth: "Depth: 12-35m",
    marineLife: "Sharks, eagle rays, jacks",
  },
  3: {
    image: "images/3.hammerhead.webp",
    title: "Hammerhead Point",
    difficulty: "Advanced",
    description:
      "Famous hammerhead shark encounters in deep blue waters with strong currents. This thrilling dive site offers unforgettable encounters with schools of hammerhead sharks.",
    depth: "Depth: 20-40m",
    marineLife: "Hammerhead sharks, pelagics",
  },
  4: {
    image: "images/4.madivaru-corner.webp",
    title: "Madivaru Corner",
    difficulty: "Intermediate",
    description:
      "Spectacular corner dive with dramatic drop-offs and diverse marine ecosystems. The corner creates a natural gathering point for large schools of fish and predators.",
    depth: "Depth: 10-30m",
    marineLife: "Reef sharks, barracudas",
  },
  5: {
    image: "images/5.madivaru-reef.webp",
    title: "Madivaru Reef",
    difficulty: "Beginner",
    description:
      "Gentle reef dive perfect for beginners with colorful corals and friendly marine life. Enjoy a relaxed dive exploring healthy coral gardens and spotting tropical reef fish.",
    depth: "Depth: 5-20m",
    marineLife: "Reef fish, nudibranchs",
  },
  6: {
    image: "images/6.veligandu-east.webp",
    title: "Veligandu East",
    difficulty: "Intermediate",
    description:
      "East-facing reef with excellent coral coverage and abundant fish life. This pristine reef showcases some of the healthiest coral formations in the atoll.",
    depth: "Depth: 8-28m",
    marineLife: "Groupers, snappers, rays",
  },
  7: {
    image: "images/7.veligandu-north.webp",
    title: "Veligandu North",
    difficulty: "Intermediate",
    description:
      "Northern reef section with dramatic topography and large fish aggregations. The unique underwater landscape creates perfect habitat for diverse marine species.",
    depth: "Depth: 10-32m",
    marineLife: "Napoleon wrasse, sharks",
  },
  8: {
    image: "images/8.madigaa.webp",
    title: "Madigaa",
    difficulty: "Beginner",
    description:
      "Shallow reef perfect for snorkeling and beginner divers with calm conditions. An ideal spot for first-time divers and those seeking a peaceful underwater experience.",
    depth: "Depth: 3-15m",
    marineLife: "Colorful reef fish, corals",
  },
  9: {
    image: "images/9.north-channel.webp",
    title: "North Channel",
    difficulty: "Advanced",
    description:
      "Challenging drift dive through the northern channel with strong currents. Advanced divers will love the adrenaline rush and spectacular pelagic encounters.",
    depth: "Depth: 15-40m",
    marineLife: "Manta rays, sharks, tunas",
  },
  10: {
    image: "images/10.north-corner.webp",
    title: "North Corner",
    difficulty: "Intermediate",
    description:
      "Corner dive with excellent coral formations and diverse marine life. This strategic location attracts both reef dwellers and passing pelagic species.",
    depth: "Depth: 8-25m",
    marineLife: "Reef sharks, groupers",
  },
  11: {
    image: "images/11.miyaru-faru.webp",
    title: "Miyaru Faru",
    difficulty: "Intermediate",
    description:
      "Spectacular reef with vibrant coral gardens and abundant marine biodiversity. A photographer's paradise with endless opportunities to capture underwater beauty.",
    depth: "Depth: 10-30m",
    marineLife: "Coral gardens, reef fish",
  },
  12: {
    image: "images/12.caves.webp",
    title: "The Caves",
    difficulty: "Advanced",
    description:
      "Underwater cave system with dramatic rock formations and unique marine life. Explore mysterious caverns and swim-throughs adorned with soft corals and sponges.",
    depth: "Depth: 15-35m",
    marineLife: "Cave fish, lobsters",
  },
  13: {
    image: "images/13.bodugaa.webp",
    title: "Bodugaa",
    difficulty: "Beginner",
    description:
      "Beautiful reef with thriving hard corals and excellent visibility for photography. Crystal clear waters make this an ideal site for underwater photography and videography.",
    depth: "Depth: 5-25m",
    marineLife: "Coral formations, reef fish",
  },
  14: {
    image: "images/14.three-palm.webp",
    title: "Three Palms",
    difficulty: "Beginner",
    description:
      "Named after three distinctive coral formations, offering diverse marine habitats. These iconic pinnacles serve as landmarks and hubs of marine activity.",
    depth: "Depth: 8-25m",
    marineLife: "Unique structures, turtles",
  },
  15: {
    image: "images/15.holhifaru.webp",
    title: "Holhifaru",
    difficulty: "Intermediate",
    description:
      "Spectacular reef with vibrant coral gardens and diverse marine ecosystems. This site showcases the incredible biodiversity of Rasdhoo Atoll.",
    depth: "Depth: 10-30m",
    marineLife: "Coral gardens, reef sharks",
  },
  16: {
    image: "images/16.rashoo-channel.webp",
    title: "Rashoo Channel",
    difficulty: "Advanced",
    description:
      "Thrilling drift dive through the channel with chances to spot pelagic species. Strong currents bring nutrients and attract magnificent pelagic visitors.",
    depth: "Depth: 12-35m",
    marineLife: "Strong currents, eagle rays",
  },
  17: {
    image: "images/17.reef-explorer.webp",
    title: "Reef Explorer",
    difficulty: "Intermediate",
    description:
      "Artificial reef created by a sunken vessel, now home to diverse marine species. This wreck has transformed into a thriving ecosystem over the years.",
    depth: "Depth: 15-30m",
    marineLife: "Wreck exploration, marine life",
  },
  18: {
    image: "images/18.kuramthi-queen.webp",
    title: "Kuramthi Queen",
    difficulty: "Advanced",
    description:
      "Deep dive site known for large pelagic encounters and dramatic underwater landscapes. Experience the thrill of diving in the blue with massive schools of fish.",
    depth: "Depth: 20-45m",
    marineLife: "Large pelagics, sharks",
  },
};

// Function to show detailed information modal
const showDiveSiteModal = (siteData) => {
  console.log("Showing info modal for:", siteData.title);

  // Remove any existing modal
  const existingModal = document.getElementById("dive-modal");
  if (existingModal) {
    existingModal.remove();
  }

  // Get difficulty badge color
  const getDifficultyColor = (difficulty) => {
    switch(difficulty.toLowerCase()) {
      case 'beginner': return '#10b981';
      case 'intermediate': return '#f59e0b';
      case 'advanced': return '#ef4444';
      default: return '#5ebec4';
    }
  };

  const difficultyColor = getDifficultyColor(siteData.difficulty);

  // Create detailed information modal HTML
  const modalHTML = `
      <div id="dive-modal" style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.75);
        backdrop-filter: blur(20px);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        box-sizing: border-box;
        animation: modalFadeIn 0.4s ease-out;
        overflow: hidden;
      ">
        <div id="dive-modal-content" style="
          position: relative;
          background: #ffffff;
          border-radius: 28px;
          max-width: 700px;
          width: 100%;
          max-height: 90vh;
          box-shadow: 
            0 40px 100px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.1);
          animation: modalSlideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        " onclick="event.stopPropagation()">
          
          <!-- Close Button -->
          <button onclick="document.getElementById('dive-modal').style.animation='modalFadeOut 0.3s ease-out';document.getElementById('dive-modal-content').style.animation='modalSlideDown 0.3s ease-out';setTimeout(()=>{document.getElementById('dive-modal').remove();document.body.style.overflow='auto';},300)" style="
            position: absolute;
            top: 24px;
            right: 24px;
            background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
            border: none;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            font-size: 26px;
            cursor: pointer;
            z-index: 10;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
            color: #64748b;
            font-weight: 300;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          " onmouseover="this.style.background='linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';this.style.color='white';this.style.transform='rotate(90deg) scale(1.1)';this.style.boxShadow='0 6px 20px rgba(239, 68, 68, 0.4)'" onmouseout="this.style.background='linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)';this.style.color='#64748b';this.style.transform='rotate(0deg) scale(1)';this.style.boxShadow='0 4px 12px rgba(0, 0, 0, 0.1)'">&times;</button>
          
          <!-- Header Section with Modern Gradient -->
          <div style="
            background: linear-gradient(135deg, #1b4965 0%, #0ea5e9 50%, #5ebec4 100%);
            padding: 50px 36px 36px;
            color: white;
            position: relative;
            overflow: hidden;
            flex-shrink: 0;
          ">
            <!-- Animated Background Pattern -->
            <div style="
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(94, 190, 196, 0.15) 0%, transparent 50%);
              opacity: 0.6;
            "></div>
            
            <!-- Decorative Dots -->
            <div style="
              position: absolute;
              top: 20px;
              right: 80px;
              width: 120px;
              height: 120px;
              background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 2px, transparent 2px);
              background-size: 20px 20px;
              opacity: 0.3;
            "></div>
            
            <!-- Difficulty Badge -->
            <div style="
              display: inline-flex;
              align-items: center;
              background: rgba(255, 255, 255, 0.25);
              backdrop-filter: blur(10px);
              border: 2px solid rgba(255, 255, 255, 0.3);
              color: white;
              padding: 8px 20px;
              border-radius: 30px;
              font-size: 0.8rem;
              font-weight: 700;
              margin-bottom: 20px;
              text-transform: uppercase;
              letter-spacing: 1px;
              box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
              position: relative;
            ">
              <i class="fas fa-award" style="margin-right: 8px; font-size: 1rem;"></i>
              ${siteData.difficulty} Level
            </div>
            
            <!-- Title -->
            <h2 style="
              margin: 0;
              font-size: 2.2rem;
              font-weight: 800;
              line-height: 1.2;
              font-family: 'Quicksand', sans-serif;
              text-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
              letter-spacing: -0.5px;
              position: relative;
            ">${siteData.title}</h2>
          </div>
          
          <!-- Content Section -->
          <div style="padding: 36px; overflow-y: auto; flex: 1; min-height: 0;">
            
            <!-- Description -->
            <div style="
              background: linear-gradient(135deg, #f0f9ff 0%, #dbeafe 100%);
              padding: 24px;
              border-radius: 20px;
              margin-bottom: 32px;
              border: 2px solid #bae6fd;
              box-shadow: 0 4px 15px rgba(14, 165, 233, 0.08);
              position: relative;
              overflow: hidden;
            ">
              <div style="
                position: absolute;
                top: -20px;
                right: -20px;
                width: 100px;
                height: 100px;
                background: radial-gradient(circle, rgba(94, 190, 196, 0.1) 0%, transparent 70%);
                border-radius: 50%;
              "></div>
              <div style="
                display: flex;
                align-items: center;
                margin-bottom: 12px;
              ">
                <div style="
                  width: 40px;
                  height: 40px;
                  background: linear-gradient(135deg, #5ebec4 0%, #0ea5e9 100%);
                  border-radius: 12px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  margin-right: 12px;
                  box-shadow: 0 4px 12px rgba(94, 190, 196, 0.3);
                ">
                  <i class="fas fa-info-circle" style="color: white; font-size: 1.1rem;"></i>
                </div>
                <h3 style="
                  margin: 0;
                  font-size: 1rem;
                  font-weight: 700;
                  color: #0c4a6e;
                  text-transform: uppercase;
                  letter-spacing: 0.5px;
                  font-family: 'Quicksand', sans-serif;
                ">About This Site</h3>
              </div>
              <p style="
                margin: 0;
                font-size: 1.05rem;
                line-height: 1.8;
                color: #1e293b;
                font-family: 'Quicksand', sans-serif;
                position: relative;
              ">${siteData.description}</p>
            </div>
            
            <!-- Dive Details Grid -->
            <div style="
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 18px;
              margin-bottom: 32px;
            ">
              <!-- Depth Card -->
              <div style="
                background: linear-gradient(145deg, #ffffff 0%, #f0f9ff 100%);
                padding: 24px;
                border-radius: 20px;
                box-shadow: 0 6px 20px rgba(59, 130, 246, 0.12);
                border: 2px solid #dbeafe;
                transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
                position: relative;
                overflow: hidden;
              " onmouseover="this.style.transform='translateY(-6px) scale(1.02)';this.style.boxShadow='0 12px 30px rgba(59,130,246,0.2)';this.style.borderColor='#93c5fd'" onmouseout="this.style.transform='translateY(0) scale(1)';this.style.boxShadow='0 6px 20px rgba(59,130,246,0.12)';this.style.borderColor='#dbeafe'">
                <div style="
                  position: absolute;
                  top: -10px;
                  right: -10px;
                  width: 80px;
                  height: 80px;
                  background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
                  border-radius: 50%;
                "></div>
                <div style="
                  width: 52px;
                  height: 52px;
                  background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%);
                  border-radius: 14px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  margin-bottom: 16px;
                  box-shadow: 0 6px 18px rgba(59, 130, 246, 0.35);
                ">
                  <i class="fas fa-water" style="color: white; font-size: 22px;"></i>
                </div>
                <div style="
                  font-size: 0.75rem;
                  color: #3b82f6;
                  margin-bottom: 6px;
                  text-transform: uppercase;
                  letter-spacing: 1px;
                  font-weight: 700;
                ">Depth Range</div>
                <div style="
                  font-size: 1.3rem;
                  font-weight: 800;
                  color: #1e293b;
                  font-family: 'Quicksand', sans-serif;
                  letter-spacing: -0.3px;
                ">${siteData.depth}</div>
              </div>
              
              <!-- Marine Life Card -->
              <div style="
                background: linear-gradient(145deg, #ffffff 0%, #ecfdf5 100%);
                padding: 24px;
                border-radius: 20px;
                box-shadow: 0 6px 20px rgba(16, 185, 129, 0.12);
                border: 2px solid #d1fae5;
                transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
                position: relative;
                overflow: hidden;
              " onmouseover="this.style.transform='translateY(-6px) scale(1.02)';this.style.boxShadow='0 12px 30px rgba(16,185,129,0.2)';this.style.borderColor='#a7f3d0'" onmouseout="this.style.transform='translateY(0) scale(1)';this.style.boxShadow='0 6px 20px rgba(16,185,129,0.12)';this.style.borderColor='#d1fae5'">
                <div style="
                  position: absolute;
                  top: -10px;
                  right: -10px;
                  width: 80px;
                  height: 80px;
                  background: radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%);
                  border-radius: 50%;
                "></div>
                <div style="
                  width: 52px;
                  height: 52px;
                  background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
                  border-radius: 14px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  margin-bottom: 16px;
                  box-shadow: 0 6px 18px rgba(16, 185, 129, 0.35);
                ">
                  <i class="fas fa-fish" style="color: white; font-size: 22px;"></i>
                </div>
                <div style="
                  font-size: 0.75rem;
                  color: #10b981;
                  margin-bottom: 6px;
                  text-transform: uppercase;
                  letter-spacing: 1px;
                  font-weight: 700;
                ">Marine Life</div>
                <div style="
                  font-size: 1.1rem;
                  font-weight: 700;
                  color: #1e293b;
                  font-family: 'Quicksand', sans-serif;
                  line-height: 1.5;
                ">${siteData.marineLife}</div>
              </div>
            </div>
            
            <!-- Features List -->
            <div style="
              background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
              padding: 26px;
              border-radius: 20px;
              margin-bottom: 28px;
              border: 2px solid #fcd34d;
              box-shadow: 0 6px 20px rgba(251, 191, 36, 0.15);
              position: relative;
              overflow: hidden;
            ">
              <div style="
                position: absolute;
                top: -30px;
                right: -30px;
                width: 120px;
                height: 120px;
                background: radial-gradient(circle, rgba(217, 119, 6, 0.1) 0%, transparent 70%);
                border-radius: 50%;
              "></div>
              <div style="
                display: flex;
                align-items: center;
                margin-bottom: 16px;
              ">
                <div style="
                  width: 44px;
                  height: 44px;
                  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
                  border-radius: 12px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  margin-right: 12px;
                  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.35);
                ">
                  <i class="fas fa-check-circle" style="
                    color: white;
                    font-size: 1.2rem;
                  "></i>
                </div>
                <h3 style="
                  margin: 0;
                  font-size: 1.05rem;
                  font-weight: 800;
                  color: #78350f;
                  text-transform: uppercase;
                  letter-spacing: 0.8px;
                  font-family: 'Quicksand', sans-serif;
                ">What to Expect</h3>
              </div>
              <ul style="
                margin: 0;
                padding-left: 0;
                list-style: none;
                color: #92400e;
                font-size: 0.98rem;
                line-height: 2;
                font-weight: 500;
              ">
                <li style="display: flex; align-items: center; margin-bottom: 8px;">
                  <i class="fas fa-check" style="color: #059669; margin-right: 12px; font-size: 0.9rem; min-width: 18px;"></i>
                  Professional dive guides included
                </li>
                <li style="display: flex; align-items: center; margin-bottom: 8px;">
                  <i class="fas fa-check" style="color: #059669; margin-right: 12px; font-size: 0.9rem; min-width: 18px;"></i>
                  All necessary equipment provided
                </li>
                <li style="display: flex; align-items: center; margin-bottom: 8px;">
                  <i class="fas fa-check" style="color: #059669; margin-right: 12px; font-size: 0.9rem; min-width: 18px;"></i>
                  Safety briefing before dive
                </li>
                <li style="display: flex; align-items: center;">
                  <i class="fas fa-check" style="color: #059669; margin-right: 12px; font-size: 0.9rem; min-width: 18px;"></i>
                  Perfect for ${siteData.difficulty.toLowerCase()} level divers
                </li>
              </ul>
            </div>
            
            <!-- Action Button -->
            <a href="https://wa.me/9609774604?text=Hi!%20I'm%20interested%20in%20diving%20at%20${encodeURIComponent(siteData.title)}.%20Can%20you%20provide%20more%20information?" target="_blank" rel="noopener noreferrer" style="
              display: flex;
              align-items: center;
              justify-content: center;
              background: linear-gradient(135deg, #10b981 0%, #059669 100%);
              color: white;
              text-align: center;
              padding: 18px 36px;
              border-radius: 16px;
              text-decoration: none;
              font-weight: 800;
              font-size: 1.1rem;
              transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
              box-shadow: 0 8px 25px rgba(16, 185, 129, 0.35);
              font-family: 'Quicksand', sans-serif;
              position: relative;
              overflow: hidden;
              border: 2px solid rgba(255, 255, 255, 0.2);
            " onmouseover="this.style.transform='translateY(-4px) scale(1.02)';this.style.boxShadow='0 12px 35px rgba(16,185,129,0.45)';this.style.borderColor='rgba(255,255,255,0.4)'" onmouseout="this.style.transform='translateY(0) scale(1)';this.style.boxShadow='0 8px 25px rgba(16,185,129,0.35)';this.style.borderColor='rgba(255,255,255,0.2)'">
              <div style="
                position: absolute;
                top: -50%;
                left: -50%;
                width: 200%;
                height: 200%;
                background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
                animation: pulse 2s ease-in-out infinite;
              "></div>
              <i class="fab fa-whatsapp" style="margin-right: 12px; font-size: 1.4rem; position: relative; z-index: 1;"></i>
              <span style="position: relative; z-index: 1;">Book This Dive Site</span>
            </a>
          </div>
        </div>
      </div>
    `;

  // Add modal to body
  document.body.insertAdjacentHTML("beforeend", modalHTML);

  // Prevent body scroll
  document.body.style.overflow = "hidden";

  // Close on backdrop click
  const modal = document.getElementById("dive-modal");
  modal.addEventListener("click", (e) => {
    if (e.target.id === "dive-modal") {
      modal.style.animation = "modalFadeOut 0.3s ease-out";
      document.getElementById("dive-modal-content").style.animation =
        "modalSlideDown 0.3s ease-out";
      setTimeout(() => {
        modal.remove();
        document.body.style.overflow = "auto";
      }, 300);
    }
  });

  // Close on Escape key
  const escapeHandler = (e) => {
    if (e.key === "Escape") {
      modal.style.animation = "modalFadeOut 0.3s ease-out";
      document.getElementById("dive-modal-content").style.animation =
        "modalSlideDown 0.3s ease-out";
      setTimeout(() => {
        modal.remove();
        document.body.style.overflow = "auto";
      }, 300);
      document.removeEventListener("keydown", escapeHandler);
    }
  };
  document.addEventListener("keydown", escapeHandler);
};

// Global function to open dive site modal (can be called from HTML onclick)
window.openDiveSite = function (siteNumber) {
  console.log(`openDiveSite called for site ${siteNumber}`);
  const siteData = diveSiteData[siteNumber];

  if (siteData) {
    showDiveSiteModal(siteData);
  } else {
    console.error(`No data found for site ${siteNumber}`);
  }
};

// Function to setup dive site click handlers
const setupDiveSiteCards = () => {
  console.log("Setting up dive site cards...");

  const cards = document.querySelectorAll(".dive-site-detail-card");
  console.log("Found dive site cards:", cards.length);

  if (cards.length === 0) {
    console.warn(
      "No dive site cards found! Make sure you're on dive-sites.html"
    );
    return;
  }

  cards.forEach((card, index) => {
    const siteNumber = index + 1;
    console.log(`Setting up card ${siteNumber}`);

    // Set cursor to pointer
    card.style.cursor = "pointer";

    // Add click handler
    card.onclick = function (e) {
      console.log(`Card ${siteNumber} clicked via onclick!`);
      window.openDiveSite(siteNumber);
    };

    // Also add event listener as backup
    card.addEventListener(
      "click",
      function (e) {
        console.log(`Card ${siteNumber} clicked via addEventListener!`);
        e.preventDefault();
        e.stopPropagation();
        window.openDiveSite(siteNumber);
      },
      false
    );
  });

  console.log("Dive site cards setup complete!");
};

// Enhanced Mobile menu toggle
const createMobileMenu = () => {
  const navContainer = document.querySelector(".nav-container");
  const navMenu = document.querySelector(".nav-menu");

  // Get all nav items once
  const navItems = document.querySelectorAll(".nav-item");
  
  // Add class to nav items with dropdowns for CSS targeting
  navItems.forEach((item) => {
    const dropdownMenu = item.querySelector(".dropdown-menu");
    if (dropdownMenu) {
      item.classList.add("has-dropdown");
    }
  });

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
      
      // Close all mobile dropdowns when closing menu
      navItems.forEach((item) => {
        item.classList.remove("mobile-dropdown-open");
      });
    }
  });

  // Handle mobile dropdown toggle and navigation
  navItems.forEach((item) => {
    const navLink = item.querySelector(".nav-link");
    const dropdownMenu = item.querySelector(".dropdown-menu");

    if (dropdownMenu) {
      // Parent item with dropdown - toggle dropdown on click
      navLink.addEventListener("click", (e) => {
        if (window.innerWidth <= 768 && isMenuOpen) {
          e.preventDefault();
          e.stopPropagation();
          
          // Toggle dropdown
          const isOpen = item.classList.contains("mobile-dropdown-open");
          
          // Close all other dropdowns
          navItems.forEach((otherItem) => {
            if (otherItem !== item) {
              otherItem.classList.remove("mobile-dropdown-open");
            }
          });
          
          // Toggle current dropdown
          if (isOpen) {
            item.classList.remove("mobile-dropdown-open");
          } else {
            item.classList.add("mobile-dropdown-open");
          }
        }
      });

      // Handle dropdown sub-items - scroll to target and close menu
      // Add staggered animation indices to list items for smooth fade-in
      const dropdownListItems = dropdownMenu.querySelectorAll("li");
      dropdownListItems.forEach((listItem, index) => {
        listItem.style.setProperty("--item-index", index);
      });
      
      const dropdownLinks = dropdownMenu.querySelectorAll("a");
      dropdownLinks.forEach((dropdownLink) => {
        dropdownLink.addEventListener("click", (e) => {
          if (window.innerWidth <= 768 && isMenuOpen) {
            const href = dropdownLink.getAttribute("href");
            
            // Check if it's an anchor link (same page)
            if (href && href.startsWith("#") && href !== "#") {
              e.preventDefault();
              
              // Close menu first
              navMenu.classList.remove("mobile-active");
              mobileMenuBtn.innerHTML = "☰";
              mobileMenuBtn.setAttribute("aria-expanded", "false");
              document.body.style.overflowY = "auto";
              document.body.style.overflowX = "hidden";
              isMenuOpen = false;
              
              // Extract hash from href (remove #)
              const hash = href.substring(1);
              const targetElement = document.querySelector(`#${hash}`);
              
              if (targetElement) {
                // Small delay to let menu close
                setTimeout(() => {
                  const headerOffset = 80;
                  const elementPosition = targetElement.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                  });
                }, 100);
              }
            } else {
              // External link, page link, or cross-page anchor - close menu and navigate
              navMenu.classList.remove("mobile-active");
              mobileMenuBtn.innerHTML = "☰";
              mobileMenuBtn.setAttribute("aria-expanded", "false");
              document.body.style.overflowY = "auto";
              document.body.style.overflowX = "hidden";
              isMenuOpen = false;
            }
          }
        });
      });
    } else {
      // Regular nav item without dropdown - close menu on click
      navLink.addEventListener("click", () => {
        if (window.innerWidth <= 768 && isMenuOpen) {
          navMenu.classList.remove("mobile-active");
          mobileMenuBtn.innerHTML = "☰";
          mobileMenuBtn.setAttribute("aria-expanded", "false");
          document.body.style.overflowY = "auto";
          document.body.style.overflowX = "hidden";
          isMenuOpen = false;
        }
      });
    }
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
      
      // Close all mobile dropdowns
      navItems.forEach((item) => {
        item.classList.remove("mobile-dropdown-open");
      });
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
      
      // Close all mobile dropdowns
      navItems.forEach((item) => {
        item.classList.remove("mobile-dropdown-open");
      });
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
      
      // Close all mobile dropdowns
      navItems.forEach((item) => {
        item.classList.remove("mobile-dropdown-open");
      });
    }
  });
};

// Initialize mobile menu
document.addEventListener("DOMContentLoaded", createMobileMenu);

// Scroll animations and interactive features
const initScrollAnimations = () => {
  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.05,
    rootMargin: "0px 0px -20px 0px",
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
    element.style.transition = "opacity 0.4s ease, transform 0.4s ease";
    observer.observe(element);
  });

  // Grouped stagger for nicer reveal timing
  const applyStagger = (nodes, baseDelay = 0, step = 0.04) => {
    nodes.forEach((el, i) => {
      el.style.transitionDelay = `${baseDelay + i * step}s`;
    });
  };

  applyStagger(storyHeader, 0, 0.03);
  applyStagger(storyParagraphs, 0.02, 0.05);
  applyStagger(storyHighlights, 0.1, 0.05);
  applyStagger(showcaseItems, 0.05, 0.04);

  // Team section stagger timing
  applyStagger(teamTitle, 0, 0.05);
  applyStagger(teamCards, 0.1, 0.06);
  applyStagger(valuesHeaders, 0.05, 0.05);
  applyStagger(valueItems, 0.15, 0.06);
  applyStagger(certHeaders, 0.05, 0.05);
  applyStagger(certItems, 0.15, 0.06);
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
  // Initialize TripAdvisor slider
  const tripadvisorSlides = document.querySelectorAll(
    ".tripadvisor-slider .review-slide"
  );
  const tripadvisorDots = document.querySelectorAll(
    ".tripadvisor-dots .dot"
  );
  const tripadvisorPrevBtn = document.querySelector(".tripadvisor-prev");
  const tripadvisorNextBtn = document.querySelector(".tripadvisor-next");

  // Initialize Google slider
  const googleSlides = document.querySelectorAll(".google-slider .review-slide");
  const googleDots = document.querySelectorAll(".google-dots .dot");
  const googlePrevBtn = document.querySelector(".google-prev");
  const googleNextBtn = document.querySelector(".google-next");

  // Helper function to initialize a slider
  const initSlider = (
    slides,
    dots,
    prevBtn,
    nextBtn,
    sliderName = "slider"
  ) => {
    if (slides.length === 0 || dots.length === 0) {
      console.info(
        `${sliderName} not found on this page. Skipping initialization.`
      );
      return;
    }

    let currentSlide = 0;

    const showSlide = (index) => {
      // Remove active class from all slides and dots
      slides.forEach((slide) => slide.classList.remove("active"));
      dots.forEach((dot) => dot.classList.remove("active"));

      // Add active class to current slide and dot
      if (slides[index]) {
        slides[index].classList.add("active");
      }
      if (dots[index]) {
        dots[index].classList.add("active");
      }
    };

    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    };

    const prevSlide = () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
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

    // Initialize slider
    showSlide(currentSlide);
  };

  // Initialize both sliders
  initSlider(
    tripadvisorSlides,
    tripadvisorDots,
    tripadvisorPrevBtn,
    tripadvisorNextBtn,
    "TripAdvisor slider"
  );

  initSlider(
    googleSlides,
    googleDots,
    googlePrevBtn,
    googleNextBtn,
    "Google slider"
  );
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

// Add modal animations CSS
const addModalAnimations = () => {
  const style = document.createElement("style");
  style.textContent = `
    @keyframes modalFadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    
    @keyframes modalFadeOut {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
    
    @keyframes modalSlideUp {
      from {
        opacity: 0;
        transform: translateY(50px) scale(0.96);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
    
    @keyframes modalSlideDown {
      from {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
      to {
        opacity: 0;
        transform: translateY(30px) scale(0.96);
      }
    }
    
    @keyframes pulse {
      0%, 100% {
        opacity: 0.5;
        transform: scale(1);
      }
      50% {
        opacity: 0.8;
        transform: scale(1.05);
      }
    }
    
    @keyframes modalZoomIn {
      from {
        opacity: 0;
        transform: scale(0.8);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    
    @keyframes modalZoomOut {
      from {
        opacity: 1;
        transform: scale(1);
      }
      to {
        opacity: 0;
        transform: scale(0.9);
      }
    }
    
    @keyframes slideUpLabel {
      from {
        opacity: 0;
        transform: translateX(-50%) translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
      }
    }
    
    /* Mobile responsive for dive site modal */
    @media (max-width: 768px) {
      #dive-modal {
        padding: 12px !important;
        align-items: center !important;
        justify-content: center !important;
        overflow: hidden !important;
      }
      
      #dive-modal-content {
        max-width: 100% !important;
        max-height: calc(100vh - 24px) !important;
        margin: 0 !important;
        border-radius: 24px !important;
        width: 100% !important;
      }
      
      #dive-modal-content > div:first-child {
        padding: 38px 20px 28px !important;
      }
      
      #dive-modal-content > div:first-child h2 {
        font-size: 1.6rem !important;
        padding-right: 50px;
        letter-spacing: -0.3px !important;
      }
      
      #dive-modal-content > div:first-child > div:nth-child(3) {
        font-size: 0.72rem !important;
        padding: 7px 16px !important;
        margin-bottom: 14px !important;
      }
      
      #dive-modal-content > div:last-child {
        padding: 24px 18px !important;
      }
      
      #dive-modal-content > div:last-child > div:nth-child(1) {
        padding: 20px !important;
        margin-bottom: 24px !important;
        border-radius: 18px !important;
      }
      
      #dive-modal-content > div:last-child > div:nth-child(1) > div:first-child {
        margin-bottom: 10px !important;
      }
      
      #dive-modal-content > div:last-child > div:nth-child(1) > div:first-child > div {
        width: 36px !important;
        height: 36px !important;
        border-radius: 10px !important;
      }
      
      #dive-modal-content > div:last-child > div:nth-child(1) > div:first-child > div i {
        font-size: 1rem !important;
      }
      
      #dive-modal-content > div:last-child > div:nth-child(1) h3 {
        font-size: 0.9rem !important;
      }
      
      #dive-modal-content > div:last-child > div:nth-child(1) p {
        font-size: 0.98rem !important;
        line-height: 1.7 !important;
      }
      
      #dive-modal-content > div:last-child > div:nth-child(2) {
        grid-template-columns: 1fr !important;
        gap: 14px !important;
        margin-bottom: 24px !important;
      }
      
      #dive-modal-content > div:last-child > div:nth-child(2) > div {
        padding: 20px !important;
        border-radius: 18px !important;
      }
      
      #dive-modal-content > div:last-child > div:nth-child(2) > div > div:first-child {
        width: 46px !important;
        height: 46px !important;
        margin-bottom: 14px !important;
      }
      
      #dive-modal-content > div:last-child > div:nth-child(2) > div > div:first-child i {
        font-size: 20px !important;
      }
      
      #dive-modal-content > div:last-child > div:nth-child(2) > div > div:nth-child(2) {
        font-size: 0.72rem !important;
      }
      
      #dive-modal-content > div:last-child > div:nth-child(2) > div > div:nth-child(3) {
        font-size: 1.2rem !important;
      }
      
      #dive-modal-content > div:last-child > div:nth-child(3) {
        padding: 22px !important;
        margin-bottom: 24px !important;
        border-radius: 18px !important;
      }
      
      #dive-modal-content > div:last-child > div:nth-child(3) > div:first-child {
        margin-bottom: 14px !important;
      }
      
      #dive-modal-content > div:last-child > div:nth-child(3) > div:first-child > div {
        width: 40px !important;
        height: 40px !important;
      }
      
      #dive-modal-content > div:last-child > div:nth-child(3) h3 {
        font-size: 0.95rem !important;
      }
      
      #dive-modal-content > div:last-child > div:nth-child(3) ul {
        font-size: 0.92rem !important;
        line-height: 1.8 !important;
      }
      
      #dive-modal-content > div:last-child > div:nth-child(3) ul li {
        margin-bottom: 6px !important;
      }
      
      #dive-modal-content > div:last-child > a {
        padding: 16px 28px !important;
        font-size: 1.05rem !important;
        border-radius: 14px !important;
      }
      
      #dive-modal-content > div:last-child > a i {
        font-size: 1.3rem !important;
      }
      
      #dive-modal-content button {
        top: 14px !important;
        right: 14px !important;
        width: 42px !important;
        height: 42px !important;
        font-size: 24px !important;
      }
    }
    
    /* Small mobile phones */
    @media (max-width: 375px) {
      #dive-modal {
        padding: 8px !important;
      }
      
      #dive-modal-content {
        max-height: calc(100vh - 16px) !important;
        border-radius: 20px !important;
      }
      
      #dive-modal-content > div:first-child {
        padding: 34px 16px 24px !important;
      }
      
      #dive-modal-content > div:first-child h2 {
        font-size: 1.4rem !important;
      }
      
      #dive-modal-content > div:last-child {
        padding: 20px 14px !important;
      }
      
      #dive-modal-content > div:last-child > div:nth-child(1) p {
        font-size: 0.93rem !important;
      }
      
      #dive-modal-content button {
        width: 38px !important;
        height: 38px !important;
        font-size: 22px !important;
      }
    }
    
    /* Tablet responsive */
    @media (max-width: 1024px) and (min-width: 769px) {
      #dive-modal-content {
        max-width: 600px !important;
      }
    }
    
    /* Smooth scrolling for modal content */
    #dive-modal {
      -webkit-overflow-scrolling: touch;
    }
  `;
  document.head.appendChild(style);
};

// Initialize all features when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded - initializing features...");

  initScrollAnimations();
  initCTAButton();
  addRippleAnimation();
  initReviewSlider();
  initTravelInfoPopup();
  addModalAnimations();
  initStickyNavbar();

  // Setup dive site cards (only on dive-sites.html page)
  setupDiveSiteCards();

  // Try again after a short delay to ensure DOM is fully rendered
  setTimeout(() => {
    setupDiveSiteCards();
  }, 500);

  // Partnerships section removed; related animations not initialized
  // Uncomment the line below if you want parallax effect
  // initParallaxEffect();
});

// Sticky Navbar Scroll Effect
const initStickyNavbar = () => {
  const header = document.querySelector(".header");

  if (!header) return;

  let lastScroll = 0;
  const scrollThreshold = 50; // Add scrolled class after scrolling 50px

  const handleScroll = () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > scrollThreshold) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    lastScroll = currentScroll;
  };

  // Use passive event listener for better performance
  window.addEventListener("scroll", handleScroll, { passive: true });

  // Check initial scroll position
  handleScroll();
};

// FAQ Toggle Functionality
window.toggleFAQ = function (faqNumber) {
  const faqItem = document.querySelector(`.faq-item:nth-child(${faqNumber})`);
  const allFaqItems = document.querySelectorAll(".faq-item");

  if (faqItem) {
    // Check if this FAQ is already active
    const isActive = faqItem.classList.contains("active");

    // Close all FAQs
    allFaqItems.forEach((item) => {
      item.classList.remove("active");
    });

    // If it wasn't active, open it
    if (!isActive) {
      faqItem.classList.add("active");

      // Smooth scroll to the FAQ item if it's not fully visible
      setTimeout(() => {
        const rect = faqItem.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

        if (!isVisible) {
          faqItem.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
        }
      }, 100);
    }
  }
};

// Package Customizer Functionality
const packagePricing = {
  divePerUnit: 60, // $60 per dive
  nightPerUnit: 50, // $50 per night
  addons: {
    picnic: 65,
    snorkeling: 45,
    transfer: 80,
    night: 90,
  },
};

// Update dives count with buttons
window.updateDives = function (change) {
  const divesCount = document.getElementById("dives-count");
  const divesSlider = document.getElementById("dives-slider");

  if (divesCount && divesSlider) {
    let currentValue = parseInt(divesCount.textContent);
    let newValue = currentValue + change;

    // Constrain value between min and max
    newValue = Math.max(
      parseInt(divesSlider.min),
      Math.min(parseInt(divesSlider.max), newValue)
    );

    divesCount.textContent = newValue;
    divesSlider.value = newValue;

    // Update slider background
    updateSliderBackground(divesSlider);

    // Calculate total
    calculateTotal();
  }
};

// Update dives from slider
window.updateDivesFromSlider = function () {
  const divesCount = document.getElementById("dives-count");
  const divesSlider = document.getElementById("dives-slider");

  if (divesCount && divesSlider) {
    divesCount.textContent = divesSlider.value;

    // Update slider background
    updateSliderBackground(divesSlider);

    // Calculate total
    calculateTotal();
  }
};

// Update nights count with buttons
window.updateNights = function (change) {
  const nightsCount = document.getElementById("nights-count");
  const nightsSlider = document.getElementById("nights-slider");

  if (nightsCount && nightsSlider) {
    let currentValue = parseInt(nightsCount.textContent);
    let newValue = currentValue + change;

    // Constrain value between min and max
    newValue = Math.max(
      parseInt(nightsSlider.min),
      Math.min(parseInt(nightsSlider.max), newValue)
    );

    nightsCount.textContent = newValue;
    nightsSlider.value = newValue;

    // Update slider background
    updateSliderBackground(nightsSlider);

    // Calculate total
    calculateTotal();
  }
};

// Update nights from slider
window.updateNightsFromSlider = function () {
  const nightsCount = document.getElementById("nights-count");
  const nightsSlider = document.getElementById("nights-slider");

  if (nightsCount && nightsSlider) {
    nightsCount.textContent = nightsSlider.value;

    // Update slider background
    updateSliderBackground(nightsSlider);

    // Calculate total
    calculateTotal();
  }
};

// Update slider background gradient
function updateSliderBackground(slider) {
  const min = parseInt(slider.min);
  const max = parseInt(slider.max);
  const value = parseInt(slider.value);
  const percentage = ((value - min) / (max - min)) * 100;

  slider.style.background = `linear-gradient(to right, #5ebec4 0%, #5ebec4 ${percentage}%, #e2e8f0 ${percentage}%, #e2e8f0 100%)`;
}

// Calculate total price
window.calculateTotal = function () {
  // Get dive count
  const divesCount = document.getElementById("dives-count");
  const nightsCount = document.getElementById("nights-count");

  if (!divesCount || !nightsCount) return;

  const dives = parseInt(divesCount.textContent);
  const nights = parseInt(nightsCount.textContent);

  // Calculate base prices
  const divesPrice = dives * packagePricing.divePerUnit;
  const nightsPrice = nights * packagePricing.nightPerUnit;

  // Calculate addons
  let addonsPrice = 0;
  const picnicChecked = document.getElementById("addon-picnic")?.checked;
  const snorkelingChecked =
    document.getElementById("addon-snorkeling")?.checked;
  const transferChecked = document.getElementById("addon-transfer")?.checked;
  const nightChecked = document.getElementById("addon-night")?.checked;

  if (picnicChecked) addonsPrice += packagePricing.addons.picnic;
  if (snorkelingChecked) addonsPrice += packagePricing.addons.snorkeling;
  if (transferChecked) addonsPrice += packagePricing.addons.transfer;
  if (nightChecked) addonsPrice += packagePricing.addons.night;

  // Calculate total
  const total = divesPrice + nightsPrice + addonsPrice;

  // Update UI with smooth animation
  updatePriceDisplay("dives-price", divesPrice);
  updatePriceDisplay("nights-price", nightsPrice);
  updatePriceDisplay("addons-price", addonsPrice);
  updatePriceDisplay("total-price", total);

  // Update summary counts
  const summaryDives = document.getElementById("summary-dives");
  const summaryNights = document.getElementById("summary-nights");

  if (summaryDives) summaryDives.textContent = dives;
  if (summaryNights) summaryNights.textContent = nights;

  // Update WhatsApp link
  updateWhatsAppLink();
};

// Update price display with animation
function updatePriceDisplay(elementId, value) {
  const element = document.getElementById(elementId);
  if (!element) return;

  const formattedValue = `$${value}`;

  // Add pulse animation
  element.style.transform = "scale(1.1)";
  element.style.color = "#5ebec4";

  setTimeout(() => {
    element.textContent = formattedValue;
    element.style.transform = "scale(1)";
    element.style.color = "";
  }, 150);
}

// Initialize package customizer on page load
document.addEventListener("DOMContentLoaded", function () {
  // Initialize sliders backgrounds
  const divesSlider = document.getElementById("dives-slider");
  const nightsSlider = document.getElementById("nights-slider");

  if (divesSlider) {
    updateSliderBackground(divesSlider);
  }

  if (nightsSlider) {
    updateSliderBackground(nightsSlider);
  }

  // Calculate initial total
  calculateTotal();

  // Update WhatsApp link with package details
  updateWhatsAppLink();

  // Update WhatsApp link whenever package changes
  const addonCheckboxes = document.querySelectorAll(
    'input[type="checkbox"][id^="addon-"]'
  );

  if (divesSlider) {
    divesSlider.addEventListener("input", updateWhatsAppLink);
  }
  if (nightsSlider) {
    nightsSlider.addEventListener("input", updateWhatsAppLink);
  }
  addonCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", updateWhatsAppLink);
  });
});

// Function to update WhatsApp link with current package configuration
function updateWhatsAppLink() {
  const whatsappBtn = document.getElementById("whatsapp-quote-btn");
  if (!whatsappBtn) return;

  // Get current configuration
  const dives = document.getElementById("dives-count")?.textContent || "5";
  const nights = document.getElementById("nights-count")?.textContent || "3";
  const total = document.getElementById("total-price")?.textContent || "$0";

  // Get selected addons
  const addons = [];
  const picnicChecked = document.getElementById("addon-picnic")?.checked;
  const snorkelingChecked = document.getElementById("addon-snorkeling")?.checked;
  const transferChecked = document.getElementById("addon-transfer")?.checked;
  const nightChecked = document.getElementById("addon-night")?.checked;

  if (picnicChecked) addons.push("Picnic Island Trip");
  if (snorkelingChecked) addons.push("Snorkeling Trip");
  if (transferChecked) addons.push("Airport Transfer (2-way)");
  if (nightChecked) addons.push("Night Dive Experience");

  // Build WhatsApp message
  let message = `Hello! I'm interested in a custom dive package:\n\n`;
  message += `📊 Package Details:\n`;
  message += `• ${dives} Dives\n`;
  message += `• ${nights} Nights\n`;
  if (addons.length > 0) {
    message += `\n➕ Add-ons:\n`;
    addons.forEach((addon) => {
      message += `• ${addon}\n`;
    });
  }
  message += `\n💰 Estimated Total: ${total}\n\n`;
  message += `Please provide a detailed quote for this package. Thank you!`;

  // Encode message for URL
  const encodedMessage = encodeURIComponent(message);
  const whatsappNumber = "9609774604";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  // Update button href
  whatsappBtn.href = whatsappUrl;
}

// Initialize courses review slider and filters
document.addEventListener("DOMContentLoaded", function () {
  // Initialize courses review slider
  initCoursesReviewSlider();

  // Initialize course filters
  initCourseFilters();
});

// Course Filter Functionality
function initCourseFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const courseCards = document.querySelectorAll(".course-card");
  const specialtyHeader = document.querySelector(".specialty-header");

  if (filterBtns.length === 0 || courseCards.length === 0) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const filter = this.getAttribute("data-filter");

      // Update active button
      filterBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      // Filter courses with smooth animation
      let visibleCount = 0;
      let delay = 0;

      courseCards.forEach((card, index) => {
        const cardLevel = card
          .querySelector(".course-level")
          ?.textContent.toLowerCase();
        const isSpecialty = card.classList.contains("specialty");

        let shouldShow = false;

        if (filter === "all") {
          shouldShow = true;
        } else if (filter === "specialty") {
          shouldShow = isSpecialty;
        } else if (cardLevel && cardLevel.includes(filter)) {
          shouldShow = true;
        }

        if (shouldShow) {
          // First hide all cards instantly
          card.classList.remove("card-visible");
          card.classList.add("card-hidden");

          // Then show with staggered animation
          setTimeout(() => {
            card.style.display = "flex";
            setTimeout(() => {
              card.classList.remove("card-hidden");
              card.classList.add("card-visible");
            }, 20);
          }, delay);

          delay += 80; // Stagger by 80ms for smoother effect
          visibleCount++;
        } else {
          // Hide with fade out
          card.classList.remove("card-visible");
          card.classList.add("card-hidden");
          setTimeout(() => {
            card.style.display = "none";
          }, 500); // Match CSS transition duration
        }
      });

      // Show/hide specialty header with smooth transition
      if (specialtyHeader) {
        if (filter === "all" || filter === "specialty") {
          specialtyHeader.style.display = "block";
          setTimeout(() => {
            specialtyHeader.style.opacity = "1";
            specialtyHeader.style.transform = "translateY(0)";
          }, delay + 100);
        } else {
          specialtyHeader.style.opacity = "0";
          specialtyHeader.style.transform = "translateY(-20px)";
          setTimeout(() => {
            specialtyHeader.style.display = "none";
          }, 500);
        }
      }
    });
  });

  // Initialize all cards as visible
  courseCards.forEach((card) => {
    card.classList.add("card-visible");
  });
}

// Courses Review Slider Functionality
let currentReviewIndex = 0;
let reviewInterval;

function initCoursesReviewSlider() {
  const slides = document.querySelectorAll(".review-slide");
  const dots = document.querySelectorAll(".review-dot");

  if (slides.length === 0 || dots.length === 0) {
    console.info(
      "Courses review slider not found on this page. Skipping initCoursesReviewSlider."
    );
    return;
  }

  // Auto-slide every 5 seconds
  reviewInterval = setInterval(() => {
    goToReview((currentReviewIndex + 1) % slides.length);
  }, 5000);
}

window.goToReview = function (index) {
  const slides = document.querySelectorAll(".review-slide");
  const dots = document.querySelectorAll(".review-dot");

  if (slides.length === 0 || dots.length === 0) return;

  // Remove active class from all
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  // Add active class to current
  slides[index % slides.length]?.classList.add("active");
  dots[index % dots.length]?.classList.add("active");

  currentReviewIndex = index;

  // Reset auto-slide timer
  clearInterval(reviewInterval);
  reviewInterval = setInterval(() => {
    goToReview((currentReviewIndex + 1) % slides.length);
  }, 5000);
};

// Weather Date Display
// Filter functionality for dive sites
const initDiveSiteFilters = () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const diveSiteCards = document.querySelectorAll('.dive-site-detail-card');

  if (filterButtons.length === 0 || diveSiteCards.length === 0) {
    return;
  }

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Filter cards
      diveSiteCards.forEach(card => {
        const difficulty = card.getAttribute('data-difficulty');
        
        if (filter === 'all' || difficulty === filter) {
          card.classList.remove('hidden');
          card.style.animation = 'fadeInUp 0.5s ease both';
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
};

// Initialize filters when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initDiveSiteFilters();
  });
} else {
  initDiveSiteFilters();
}

const updateWeatherDate = () => {
  const weatherDateElement = document.getElementById("weather-date");
  if (weatherDateElement) {
    const today = new Date();
    const options = { weekday: "long", day: "numeric", month: "long" };
    const formattedDate = today.toLocaleDateString("en-US", options);
    weatherDateElement.textContent = formattedDate;
  }
};

// Initialize weather date on page load
document.addEventListener("DOMContentLoaded", () => {
  updateWeatherDate();
  initSmoothScroll();
});

// Smooth scroll for hero button and all anchor links
const initSmoothScroll = () => {
  // Handle all anchor links with smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      
      // Skip if href is just "#"
      if (href === '#') return;
      
      const targetElement = document.querySelector(href);
      
      if (targetElement) {
        e.preventDefault();
        
        // Calculate offset for fixed header
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
};
