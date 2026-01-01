// Dive Site Modal Functionality - Images match card numbers (1.rasdhoo-reef.webp for card 1)
const diveSiteData = {
  1: {
    image: "images/divesites/01.rasdhooreef.webp",
    title: "Rasdhoo Reef",
    difficulty: "Beginner",
    description: "A beautiful wall on the south side of Rasdhoo island with three small Thilas which are located on the drop-off edge a bit further away from the island wall. Thilas top starts from 18 to 20 meters which is suitable for beginners to experienced divers but the current can be medium to strong. Napoleon, white-tip reef sharks and grey reef sharks can be seen here regularly. Sometimes sting rays resting on the sandy bottom between 25 to 30 meters deep between the wall and thilas. If you are lucky eagle rays, and on very lucky days mantas !! This is also a great dive spot for macro fans because so many small creatures can be found here !",
    depth: "Depth: 8-25m",
    marineLife: "Reef fish, turtles, rays",
    distance: "5 Minutes from Rasdhoo",
    level: "Beginners or Advanced Divers",
    type: "Kind of Channel Dive",
    current: "Small to Medium - can be Strong",
  },
  2: {
    image: "images/divesites/02.madivaruchannel.webp",
    title: "Madivaru Channel",
    difficulty: "Advanced",
    description: "A channel with lots of small thilas between Madivaru island and Rasdhoo local island along with the Atoll drop-off edge. This dive site is possible only when current runs into the Atoll, especially reef on left shoulder which means your dive profile starts from deep to shallow where the deepest thila top starts about 25 meters. On your way, you get to see tons of fish, sharks and all kind of rays can be seen. Sometimes a bit challenging if the current picks up but its worth to try if you get the right current! Only for experienced divers with Deep Dive Training or Advanced level because of the negative entry and the depth !",
    depth: "Depth: 12-35m",
    marineLife: "Sharks, eagle rays, jacks",
    distance: "10 Minutes from Rasdhoo",
    level: "Deep Dive Training or Advanced Divers - NITROX highly recommended",
    type: "Channel Dive",
    current: "Medium to Strong – can be very strong",
  },
  3: {
    image: "images/divesites/03.hammerheadpoint.webp",
    title: "Hammerhead Point",
    difficulty: "Advanced",
    description: "Another highlight, an early morning dive to meet the famous Scalloped Hammerhead shark which can only be seen in a few places in the Maldives. A blue water dive with no reference. In otherwords, no reef or bottom where the blue plankton let you think you are flying among the stars. Even without sharks an unforgottable experience. Only for experienced divers with Deep Dive Training or Advanced level, of course good buoyancy control required! NITROX highly recommended!! Please ask inside for more information !",
    depth: "Depth: 20-40m",
    marineLife: "Hammerhead sharks, pelagics",
    distance: "10 Minutes from Rasdhoo",
    level: "Deep Dive Training or Advanced Divers (Good Buoyancy required) NITROX highly recommended",
    type: "Blue water dive with no reference",
    current: "Medium to Strong – can be very strong",
  },
  4: {
    image: "images/divesites/04.madivarucorner.webp",
    title: "Madivaru Corner",
    difficulty: "Intermediate",
    description: "A highlight in the Rasdhoo Atoll for many reasons. This reef is located just in front of the island Madivaru and has some superb overhangs between 26 to 30 meters before a breathtaking drop-off. The real beauty of the dive will be when the current runs along the reef on the right shoulder and into the Atoll. Because with this current you don't have to swim much because most of the time on your dive you just hold onto some dead coral on the drop-off around 18 meters where the breathtaking show begins. Everybody can find here almost anything they are looking for, from macro to big pelagic species like grey reef sharks, white-tip reef sharks, eagle rays, napoleon wrasse, shoals of barracuda, jack fish and even giant travellis and dog-tooth tunas chasing baitfish etc. Always worth a dive. Anything is possible, however the current can be medium to very strong.",
    depth: "Depth: 10-30m",
    marineLife: "Reef sharks, barracudas",
    distance: "10 Minutes from Rasdhoo",
    level: "Beginners or Advanced Divers",
    type: "Kind of Channel Dive",
    current: "Small to Medium – can be Strong",
  },
  5: {
    image: "images/divesites/05.madivarureef.webp",
    title: "Madivaru Reef",
    difficulty: "Beginner",
    description: "This wall located on the outside reef near the island Madivaru is perfect for a nice and easy drift dive. Also a good opportunity for beginners to experienced divers with medium to strong current. Along reef, corals are growing nicely and many species of fish can be spotted. Do not forget to turn you head the blue where pleasant surprises often appear!",
    depth: "Depth: 5-20m",
    marineLife: "Reef fish, nudibranchs",
    distance: "10 Minutes from Rasdhoo",
    level: "Beginners or Advanced Divers",
    type: "Wall, Drift",
    current: "Small to Medium – can be Strong",
  },
  6: {
    image: "images/divesites/06.veligandueast.webp",
    title: "Veligandu East",
    difficulty: "Intermediate",
    description: "Only 15 minutes away from Kuramathi, this reef slowly goes down to 30 meters. Big coral blocks can be found between 10 and 30 meters and many of them are full with glass fishes. Very friendly turtles, sometimes eagle rays, mobulas or white-tip reef sharks can be seen swimming along the reef. But don't forget to look out for « small stuff » like nudibranches, scorpion fish or stonefish which can also inhabit these blocks. In the shallow part you will find lots of anemones with plenty of « nemos ».",
    depth: "Depth: 8-28m",
    marineLife: "Groupers, snappers, rays",
    distance: "15 Minutes from Rasdhoo",
    level: "Beginners or Advanced Divers",
    type: "Wall, Drift",
    current: "Small to Medium – can be Strong",
  },
  7: {
    image: "images/divesites/07.veligandunorth.webp",
    title: "Veligandu North",
    difficulty: "Intermediate",
    description: "This dive site offers a top reef separated by a sandy plateau between 5 to 9 meters' depth, below is a very nice steep wall dropping to around 25 to 30 meters continuing to the atoll drop-off. Along the wall you can find some overhangs from a depth of 12 to 16 meters in different areas. Sometimes these overhangs are covered by glass fishes, through the glass fishes you may find lobsters or even sting ray resting. Lots of macro stuff possible here. If you look carefully, you may find ghost pipefish and even leaf fish inside the overhangs or at the edge of the overhangs. If Madivaru is the capital of the sharks then Veligandu Noth will be the Capital of the moray eels. Please do not forget to have a look in to the blue – sharks and more !!!!",
    depth: "Depth: 10-32m",
    marineLife: "Napoleon wrasse, sharks",
    distance: "+25 Minutes from Rasdhoo",
    level: "Beginners or Advanced Divers",
    type: "Wall, Drift",
    current: "Small to Medium – can be Strong",
  },
  8: {
    image: "images/divesites/08.madigaa.webp",
    title: "Madigaa",
    difficulty: "Beginner",
    description: "Inside the North Channel, in the manta season (from November to April) there is a good chance of seeing mantas on this dive. A big coral block in 14 metres, with top at 10 metres is an attraction for many species of fish. Best is to sit next to the block when mantas are around and watch them circle !",
    depth: "Depth: 3-15m",
    marineLife: "Colorful reef fish, corals",
    distance: "+25 Minutes from Rasdhoo",
    level: "Beginners or Advanced Divers",
    type: "Coral Block (Mostly sit on the sandy bottom next to the Coral Block)",
    current: "Small to Medium – can be Strong",
  },
  9: {
    image: "images/divesites/09.northchannel.webp",
    title: "North Channel",
    difficulty: "Advanced",
    description: "The only channel in the northern part of the Rasdhoo Atoll where 5 reef fingers are lying towards the outside reef. The tops of the five fingers-shaped thilas are 8 meters below the surface. Between each and every Thila there will be a sandy bottom around the depth of 20 to 22 meters. Each finger provides home for many fish and of course as we are in the channel, there is a very high chance of big pelagic species. Sometimes eagle rays, sharks, turtles and dog-tooth tuna are seen, especially when the current runs into the Atoll. During manta season, mantas are coming here often, especialy when plankton is present! Current can be medium to strong but suitable for beginners to experienced divers.",
    depth: "Depth: 15-40m",
    marineLife: "Manta rays, sharks, tunas",
    distance: "+25 Minutes from Rasdhoo",
    level: "Beginners or Advanced Divers",
    type: "Channel Dive",
    current: "Small to Medium – can be Strong",
  },
  10: {
    image: "images/divesites/10.northcorner.webp",
    title: "North Corner",
    difficulty: "Intermediate",
    description: "A very nice and easy place to dive for beginners, the reef is a steep wall and goes down to approximately 30 meters. A few coral blocks are to be seen on the reef top where lobsters have their « home sweet home ». Along the wall, small holes with nudibranches, shrimps and more. During your dive look to the blue or reef top often because, if you are lucky, it is possible to see eagle rays or manta rays and even white-tip reef sharks which often come and say hi to you !",
    depth: "Depth: 8-25m",
    marineLife: "Reef sharks, groupers",
    distance: "+25 Minutes from Rasdhoo",
    level: "Beginners or Advanced Divers",
    type: "Wall, Drift",
    current: "Small to Medium – can be Strong",
  },
  11: {
    image: "images/divesites/11.miyarufaru.webp",
    title: "Miyaru Faru",
    difficulty: "Intermediate",
    description: "Another wall dive from the atoll barrier reef, but an easy dive site on the outside of the North of the Atoll. The reef slowly goes down between 3 to 10 meters then a steep wall follows. On the bottom 30 to 40 meters, we often see white-tip reef sharks relaxing. On the reef itself you can see moray eels, lionfish and for expert eyes even scorpionfish. A nice and easy dive ! During manta season even mantas… !",
    depth: "Depth: 10-30m",
    marineLife: "Coral gardens, reef fish",
    distance: "+35 Minutes from Rasdhoo",
    level: "Beginners or Advanced Divers",
    type: "Wall, Drift",
    current: "Small to Medium – can be Strong",
  },
  12: {
    image: "images/divesites/12.caves.webp",
    title: "The Caves",
    difficulty: "Advanced",
    description: "The furtherest dive site in the Rasdhoo Atoll which takes about 40 minutes to get to from Rasdhoo. This beautiful wall is part of our atoll barrier reef which is connected along the very end of the Kuramathi Sandbank on the South West side. Very nice reef formation with lots of overhangs between 17 to 30 meters. If you start with the reef on your right shoulder – of course if you are Deep Dive Training or Advanced level then 30 meters swim-through will be the best to start. Even if you are a beginner you could start within your allowable depth limit and keep drifting because soon you will reach 17 to 20 meters overhang which you can go inside but do not forget to get proper buoyancy under the overhang, otherwise you may hit the ceiling or kick on the sandy bottom which may lead to poor visibility or disturb the sting rays who rest often here! Apart from these two specific overhangs, there are still so many small ones where it is possible to find baby white-tip reef sharks or nurse sharks. It's great to stay above 20 meters because very often eagle rays pass long the edge of the reef – above your head. Do have a look into the blue for a surprise !",
    depth: "Depth: 15-35m",
    marineLife: "Cave fish, lobsters",
    distance: "40 Minutes from Rasdhoo",
    level: "Beginners or Advanced Divers",
    type: "Wall, Drift, Overhangs",
    current: "Small to Medium – can be Strong",
  },
  13: {
    image: "images/divesites/13.bodugaa.webp",
    title: "Bodugaa",
    difficulty: "Beginner",
    description: "Bodu Gaa means Big Stone in Dhivehi. This Bodu Gaa can be seen on the reef top just a few inches below the surface and is fully covered by multi-coloured fish. On the wall between 25-28 meters are two sandy areas where it is not rare to meet white-tip reef sharks or sting rays relaxing for the day. Around 25 – 26 meters, a couple of nice coral blocks are well-located on this sandy bottom. These blocks are full of kashmir-snappers, oriental sweet-lips, glass fishes even sting rays are possible underneath any of the coral blocks. When there is some current, eagle rays may show-up.",
    depth: "Depth: 5-25m",
    marineLife: "Coral formations, reef fish",
    distance: "+15 Minutes from Rasdhoo",
    level: "Beginners or Advanced Divers",
    type: "Wall, Drift",
    current: "Small to Medium – can be Strong",
  },
  14: {
    image: "images/divesites/14.threepalms.webp",
    title: "Three Palms",
    difficulty: "Beginner",
    description: "A very nice wall with a reef top starting in shallow water and which can be dived at any depth. Along the dive, we encounter three big coral blocks in three different area beteen 16 – 23 meters, just like « Three Palms ». Anything is possible here, like white-tip reef sharks, sting rays and even more... ! Eagle rays also like to drift in the current along this wall. Looking down, beautiful sea fans can be seen. If you are lucky sometimes green turtle or hawksbill turtle will come and say Hello… !",
    depth: "Depth: 8-25m",
    marineLife: "Unique structures, turtles",
    distance: "12 Minutes from Rasdhoo",
    level: "Beginners or Advanced Divers",
    type: "Wall, Drift",
    current: "Small to Medium – can be Strong",
  },
  15: {
    image: "images/divesites/15.holhifaru.webp",
    title: "Holhifaru",
    difficulty: "Intermediate",
    description: "Outside of Kuramathi, we find 3 bays along the main reef of the island. Each bay is surrounded with coral blocks at different depths between 16 – 25 meters where moray eels and losters are not rare. Very often you can see sting rays resting underneath coral blocks. On the sandy bottom you can find white-tip reef sharks, in the shallow part of the bays black-tip reef sharks – do not forget to have a look to the blue for a surprise… !",
    depth: "Depth: 10-30m",
    marineLife: "Coral gardens, reef sharks",
    distance: "5 Minutes from Rasdhoo",
    level: "Beginners or Advanced Divers",
    type: "Wall, Drift",
    current: "Small to Medium – can be Strong",
  },
  16: {
    image: "images/divesites/16.rasdhoochannel.webp",
    title: "Rashoo Channel",
    difficulty: "Advanced",
    description: "Another great dive site for the experiened divers with Deep Dive Training or Advanced level because of the negative entry and the depth! All thilas are already well-colonised on the atoll drop-off edge at the depth between 20 to 25 meters between Kuramathi and Rasdhoo island. On the sandy bottom between the thilas, look for sting rays or white-tip reef sharks. While crossing the channel, almost anything is possible like grey reef sharks, eagle rays, napoleon, dog-tooth tunas, and many more. On some very lucky days you may see silver-tip reef sharks ! However, this dive can be done only when the current runs into the Atoll. Due to the depth NITROX highly recommended – do not forget to set your computer for NITROX !",
    depth: "Depth: 12-35m",
    marineLife: "Strong currents, eagle rays",
    distance: "+3 Minutes from Rasdhoo",
    level: "Deep Dive Training or Advanced Divers - NITROX highly recommended",
    type: "Channel Dive",
    current: "Medium to Strong – can be very strong",
  },
  17: {
    image: "images/divesites/17.reefexplorer.webp",
    title: "Reef Explorer",
    difficulty: "Intermediate",
    description: "A 30 meter fishing boat that sank in the Rasdhoo channel that lies on its side on a sandy bottom, surrounded by garden eels and shrimp in a depth of 12-16 metres. Some big groupers have been spotted here, and a few mantas occasionally patrol the area. Good buoyancy control is need to avoid kicking up sediment which ruins visibility, and take care to avoid many metal structures protruding from the wreck and in the sand. Some nice coral blocks around. Look out for the cleaner shrimp and red fire-goby in the sand around the wreck.",
    depth: "Depth: 15-30m",
    marineLife: "Wreck exploration, marine life",
    distance: "5 Minutes from Rasdhoo",
    level: "Beginners or Advanced Divers",
    type: "Wreck Dive",
    current: "Small to Medium – can be Strong",
  },
  18: {
    image: "images/divesites/18.kuramathiqueen.webp",
    title: "Kuramthi Queen",
    difficulty: "Advanced",
    description: "A well-protected area – just inside the lagoon of Kuramathi. The Kuramathi Queen sits on a sandy bottom, the top of the wreck is at 16 metres, bottom at +20 m. Great for a night dive, very spooky !",
    depth: "Depth: 20-45m",
    marineLife: "Large pelagics, sharks",
    distance: "10 Minutes from Rasdhoo",
    level: "Beginners or Advanced Divers",
    type: "Wreck Dive",
    current: "Almost nothing",
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
          max-width: 1100px;
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
            ${siteData.image ? `
            <!-- Dive Site Image -->
            <div style="
              margin-bottom: 32px;
              border-radius: 20px;
              overflow: hidden;
              box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
              position: relative;
            ">
              <img src="${siteData.image}" alt="${siteData.title}" style="
                width: 100%;
                height: auto;
                display: block;
                max-height: 450px;
                object-fit: cover;
              " />
            </div>
            ` : ''}
            
            <!-- Dive Site Attributes -->
            <div style="
              background: linear-gradient(135deg, #f0f9ff 0%, #dbeafe 100%);
              padding: 28px;
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
              <div class="dive-attributes-grid" style="
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 20px;
              ">
                <!-- Distance -->
                <div class="dive-attr-item" style="
                  display: flex;
                  flex-direction: column;
                ">
                  <div style="
                    display: flex;
                    align-items: center;
                    margin-bottom: 8px;
                  ">
                    <i class="fas fa-route" style="
                      color: #0ea5e9;
                      font-size: 1.2rem;
                      margin-right: 10px;
                    "></i>
                    <span class="dive-attr-label" style="
                      font-size: 0.75rem;
                      color: #0c4a6e;
                      text-transform: uppercase;
                      letter-spacing: 0.5px;
                      font-weight: 700;
                      font-family: 'Quicksand', sans-serif;
                    ">Distance</span>
                  </div>
                  <span class="dive-attr-value" style="
                    font-size: 1.05rem;
                    color: #1e293b;
                    font-weight: 600;
                    font-family: 'Quicksand', sans-serif;
                    line-height: 1.4;
                  ">${siteData.distance}</span>
                </div>
                
                <!-- Level -->
                <div class="dive-attr-item" style="
                  display: flex;
                  flex-direction: column;
                ">
                  <div style="
                    display: flex;
                    align-items: center;
                    margin-bottom: 8px;
                  ">
                    <i class="fas fa-signal" style="
                      color: #0ea5e9;
                      font-size: 1.2rem;
                      margin-right: 10px;
                    "></i>
                    <span class="dive-attr-label" style="
                      font-size: 0.75rem;
                      color: #0c4a6e;
                      text-transform: uppercase;
                      letter-spacing: 0.5px;
                      font-weight: 700;
                      font-family: 'Quicksand', sans-serif;
                    ">Level</span>
                  </div>
                  <span class="dive-attr-value" style="
                    font-size: 1.05rem;
                    color: #1e293b;
                    font-weight: 600;
                    font-family: 'Quicksand', sans-serif;
                    line-height: 1.4;
                  ">${siteData.level}</span>
                </div>
                
                <!-- Type -->
                <div class="dive-attr-item" style="
                  display: flex;
                  flex-direction: column;
                ">
                  <div style="
                    display: flex;
                    align-items: center;
                    margin-bottom: 8px;
                  ">
                    <i class="fas fa-tag" style="
                      color: #0ea5e9;
                      font-size: 1.2rem;
                      margin-right: 10px;
                    "></i>
                    <span class="dive-attr-label" style="
                      font-size: 0.75rem;
                      color: #0c4a6e;
                      text-transform: uppercase;
                      letter-spacing: 0.5px;
                      font-weight: 700;
                      font-family: 'Quicksand', sans-serif;
                    ">Type</span>
                  </div>
                  <span class="dive-attr-value" style="
                    font-size: 1.05rem;
                    color: #1e293b;
                    font-weight: 600;
                    font-family: 'Quicksand', sans-serif;
                    line-height: 1.4;
                  ">${siteData.type}</span>
                </div>
                
                <!-- Current -->
                <div class="dive-attr-item" style="
                  display: flex;
                  flex-direction: column;
                ">
                  <div style="
                    display: flex;
                    align-items: center;
                    margin-bottom: 8px;
                  ">
                    <i class="fas fa-water" style="
                      color: #0ea5e9;
                      font-size: 1.2rem;
                      margin-right: 10px;
                    "></i>
                    <span class="dive-attr-label" style="
                      font-size: 0.75rem;
                      color: #0c4a6e;
                      text-transform: uppercase;
                      letter-spacing: 0.5px;
                      font-weight: 700;
                      font-family: 'Quicksand', sans-serif;
                    ">Current</span>
                  </div>
                  <span class="dive-attr-value" style="
                    font-size: 1.05rem;
                    color: #1e293b;
                    font-weight: 600;
                    font-family: 'Quicksand', sans-serif;
                    line-height: 1.4;
                  ">${siteData.current}</span>
                </div>
              </div>
            </div>
            
            <!-- Dive Site Description -->
            ${siteData.description ? `
            <div style="
              background: linear-gradient(135deg, #f0f9ff 0%, #dbeafe 100%);
              padding: 28px;
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
              <p style="
                margin: 0;
                font-size: 1.05rem;
                line-height: 1.8;
                color: #1e293b;
                font-family: 'Quicksand', sans-serif;
                position: relative;
              ">${siteData.description}</p>
            </div>
            ` : ''}
            
            <!-- Dive Details Grid -->
            <div style="
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 20px;
              margin-bottom: 36px;
            ">
              <!-- Depth Card -->
              <div style="
                background: linear-gradient(145deg, #ffffff 0%, #f0f9ff 100%);
                padding: 28px;
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
                  display: flex;
                  align-items: center;
                  margin-bottom: 18px;
                ">
                  <div style="
                    width: 56px;
                    height: 56px;
                    background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%);
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-right: 14px;
                    box-shadow: 0 6px 18px rgba(59, 130, 246, 0.35);
                  ">
                    <i class="fas fa-water" style="color: white; font-size: 24px;"></i>
                  </div>
                  <div>
                    <div style="
                      font-size: 0.7rem;
                      color: #3b82f6;
                      text-transform: uppercase;
                      letter-spacing: 1.2px;
                      font-weight: 700;
                      margin-bottom: 4px;
                    ">Depth Range</div>
                    <div style="
                      font-size: 1.4rem;
                      font-weight: 800;
                      color: #1e293b;
                      font-family: 'Quicksand', sans-serif;
                      letter-spacing: -0.3px;
                    ">${siteData.depth}</div>
                  </div>
                </div>
              </div>
              
              <!-- Marine Life Card -->
              <div style="
                background: linear-gradient(145deg, #ffffff 0%, #ecfdf5 100%);
                padding: 28px;
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
                  display: flex;
                  align-items: center;
                  margin-bottom: 18px;
                ">
                  <div style="
                    width: 56px;
                    height: 56px;
                    background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-right: 14px;
                    box-shadow: 0 6px 18px rgba(16, 185, 129, 0.35);
                  ">
                    <i class="fas fa-fish" style="color: white; font-size: 24px;"></i>
                  </div>
                  <div>
                    <div style="
                      font-size: 0.7rem;
                      color: #10b981;
                      text-transform: uppercase;
                      letter-spacing: 1.2px;
                      font-weight: 700;
                      margin-bottom: 4px;
                    ">Marine Life</div>
                    <div style="
                      font-size: 1.15rem;
                      font-weight: 700;
                      color: #1e293b;
                      font-family: 'Quicksand', sans-serif;
                      line-height: 1.4;
                    ">${siteData.marineLife}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Action Button -->
            <div style="
              margin-top: 8px;
            ">
              <a href="https://wa.me/9609774604?text=Hi!%20I'm%20interested%20in%20diving%20at%20${encodeURIComponent(siteData.title)}.%20Can%20you%20provide%20more%20information?" target="_blank" rel="noopener noreferrer" style="
                display: flex;
                align-items: center;
                justify-content: center;
                background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                color: white;
                text-align: center;
                padding: 20px 40px;
                border-radius: 18px;
                text-decoration: none;
                font-weight: 800;
                font-size: 1.15rem;
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
                <i class="fab fa-whatsapp" style="margin-right: 14px; font-size: 1.5rem; position: relative; z-index: 1;"></i>
                <span style="position: relative; z-index: 1; letter-spacing: 0.3px;">Book This Dive Site</span>
              </a>
            </div>
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

// Function to setup dive site click handlers and populate attributes
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

    // Get site data
    const siteData = diveSiteData[siteNumber];
    if (siteData) {
      // Find the specs container
      const specsContainer = card.querySelector(".dive-site-detail-specs");
      if (specsContainer) {
        // Clear existing content
        specsContainer.innerHTML = "";
        
        // Add Depth (existing)
        const depthSpec = document.createElement("div");
        depthSpec.className = "dive-site-detail-spec";
        depthSpec.innerHTML = `
          <i class="fas fa-water"></i>
          <span>${siteData.depth}</span>
        `;
        specsContainer.appendChild(depthSpec);
        
        // Add Attributes Section (if they exist) - Compact icon-based design
        if (siteData.distance || siteData.level || siteData.type || siteData.current) {
          const attributesContainer = document.createElement("div");
          attributesContainer.className = "dive-site-attributes";
          
          if (siteData.distance) {
            const attrItem = document.createElement("div");
            attrItem.className = "dive-site-attribute-item";
            attrItem.title = `Distance: ${siteData.distance}`;
            attrItem.innerHTML = `<i class="fas fa-route"></i>`;
            attributesContainer.appendChild(attrItem);
          }
          
          if (siteData.level) {
            const attrItem = document.createElement("div");
            attrItem.className = "dive-site-attribute-item";
            attrItem.title = `Level: ${siteData.level}`;
            attrItem.innerHTML = `<i class="fas fa-signal"></i>`;
            attributesContainer.appendChild(attrItem);
          }
          
          if (siteData.type) {
            const attrItem = document.createElement("div");
            attrItem.className = "dive-site-attribute-item";
            attrItem.title = `Type: ${siteData.type}`;
            attrItem.innerHTML = `<i class="fas fa-tag"></i>`;
            attributesContainer.appendChild(attrItem);
          }
          
          if (siteData.current) {
            const attrItem = document.createElement("div");
            attrItem.className = "dive-site-attribute-item";
            attrItem.title = `Current: ${siteData.current}`;
            attrItem.innerHTML = `<i class="fas fa-water"></i>`;
            attributesContainer.appendChild(attrItem);
          }
          
          specsContainer.appendChild(attributesContainer);
        }
      }
    }

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
        padding: 28px 20px !important;
      }
      
      /* Attributes section - first section */
      #dive-modal-content > div:last-child > div:nth-child(1) {
        padding: 32px 24px !important;
        margin-bottom: 24px !important;
        border-radius: 18px !important;
      }
      
      /* Reduce image size on mobile */
      #dive-modal-content img {
        max-height: 220px !important;
        margin-bottom: 20px !important;
      }
      
      #dive-modal-content > div:last-child > div img {
        border-radius: 16px !important;
      }
      
      .dive-attributes-grid {
        display: grid !important;
        grid-template-columns: 1fr !important;
        gap: 22px !important;
      }
      
      .dive-attr-item {
        display: grid !important;
        grid-template-columns: 140px 1fr !important;
        column-gap: 14px !important;
        row-gap: 8px !important;
        min-height: auto !important;
        width: 100% !important;
        padding: 14px 0 !important;
        border-bottom: 1px solid rgba(14, 165, 233, 0.15) !important;
      }
      
      .dive-attr-item:last-child {
        border-bottom: none !important;
        padding-bottom: 0 !important;
      }
      
      .dive-attr-item > div {
        display: flex !important;
        align-items: center !important;
        margin-bottom: 0 !important;
        flex-shrink: 0 !important;
      }
      
      .dive-attr-item i {
        font-size: 0.85rem !important;
        margin-right: 8px !important;
        flex-shrink: 0 !important;
      }
      
      .dive-attr-label {
        font-size: 0.62rem !important;
        flex-shrink: 0 !important;
      }
      
      .dive-attr-value {
        grid-column: 2 !important;
        font-size: 0.82rem !important;
        line-height: 1.5 !important;
        margin-top: 4px !important;
        display: block !important;
        width: 100% !important;
        max-width: 100% !important;
        overflow-wrap: normal !important;
        word-break: normal !important;
        white-space: normal !important;
        hyphens: none !important;
      }
      
      #dive-modal-content > div:last-child > div:nth-child(1) > div:first-child {
        margin-bottom: 14px !important;
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
        font-size: 0.85rem !important;
      }
      
      #dive-modal-content > div:last-child > div:nth-child(1) p {
        font-size: 0.88rem !important;
        line-height: 1.7 !important;
        margin-top: 8px !important;
      }
      
      /* Description section - second section */
      #dive-modal-content > div:last-child > div:nth-child(2):not(.dive-attributes-grid) {
        padding: 28px 24px !important;
        margin-top: 20px !important;
        margin-bottom: 24px !important;
        border-radius: 18px !important;
      }
      
      /* Depth/Marine Life Grid - third section */
      #dive-modal-content > div:last-child > div:nth-child(3) {
        grid-template-columns: 1fr !important;
        gap: 18px !important;
        margin-top: 20px !important;
        margin-bottom: 24px !important;
      }
      
      #dive-modal-content > div:last-child > div:nth-child(3) > div {
        padding: 20px !important;
        border-radius: 18px !important;
      }
      
      /* Depth and Marine Life Cards - fix icon containers */
      #dive-modal-content > div:last-child > div:nth-child(3) > div > div:first-child {
        width: 46px !important;
        height: 46px !important;
        margin-bottom: 14px !important;
        border-radius: 12px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        flex-shrink: 0 !important;
        margin-right: 12px !important;
      }
      
      #dive-modal-content > div:last-child > div:nth-child(3) > div > div:first-child i {
        font-size: 20px !important;
        color: white !important;
      }
      
      /* Ensure gradient backgrounds are maintained for icon containers */
      #dive-modal-content > div:last-child > div:nth-child(3) > div:first-child > div:first-child {
        background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%) !important;
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.25) !important;
      }
      
      #dive-modal-content > div:last-child > div:nth-child(3) > div:last-child > div:first-child {
        background: linear-gradient(135deg, #10b981 0%, #34d399 100%) !important;
        box-shadow: 0 4px 12px rgba(16, 185, 129, 0.25) !important;
      }
      
      #dive-modal-content > div:last-child > div:nth-child(3) > div > div:nth-child(2) {
        font-size: 0.72rem !important;
      }
      
      #dive-modal-content > div:last-child > div:nth-child(3) > div > div:nth-child(3) {
        font-size: 1.05rem !important;
      }
      
      /* Button section - last element */
      #dive-modal-content > div:last-child > a {
        padding: 14px 24px !important;
        font-size: 0.95rem !important;
        border-radius: 14px !important;
        margin-top: 24px !important;
        display: block !important;
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
      
      #dive-modal-content img {
        max-height: 180px !important;
        margin-bottom: 18px !important;
      }
      
      #dive-modal-content > div:last-child > div:nth-child(1) p {
        font-size: 0.83rem !important;
      }

      .dive-attr-item {
        grid-template-columns: 110px 1fr !important;
        column-gap: 12px !important;
        padding-bottom: 22px !important;
      }
      
      .dive-attr-item > div {
        margin-bottom: 12px !important;
      }

      .dive-attr-label {
        font-size: 0.6rem !important;
      }

      .dive-attr-value {
        font-size: 0.8rem !important;
      }
      
      .dive-attr-item i {
        font-size: 0.8rem !important;
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
