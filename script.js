// Project data (dummy content for now)
const projects = [
  {
    title: "Whist Game",
    desc: "AlWest is an old card game full of fun, clubbing and passion governed by elaborate laws and rules. The AlWest game is one of the oldest and most famous card games in the world, from which it borrowed most of the card games currently prevalent, as it started in the eighteenth century to find its place in social events and a direct challenge between four players",
    img: "assets/image-whist.webp?text=Gamma",
    lnk: 'https://play.google.com/store/apps/details?id=com.whist.whistapp&hl=en-US'
  },
  {
    title: "Color Cargo",
    desc: "Cargo Puzzle is the ultimate blend of bus sorting games, and bus color match ! You have to match delivery boxes with the right cargo buses by their colors, a bus color sort experience. Perfect for fans of puzzle games and fun games, this game is all about strategy, speed, and precision.",
	
    img: "assets/image-colorcargo.webp?q=tbn:ANd9GcT_cuympapAi8189Y1f_61rRbyB7-oKNDOK2Q&s?text=Alpha",
    lnk: 'https://play.google.com/store/apps/details?id=com.genigames.delivery.color.match.puzzle&pcampaignid=web_share'
  },
  {
    title: "Epic StuntMan Run",
    desc: "Ready to test your speed, reflexes, and parkour run race skills? Jump into the ultimate 3D race where every second counts! Run, jump, swing, and climb through challenging tracks in this fun race filled with crazy obstacles course. This is not just any running game—it’s a high-energy epic race with fun challenges where only the fastest and smartest players make it to the finish line!",
    img: "assets/image-stuntman.webp?text=Beta",
    lnk: 'https://play.google.com/store/apps/details?id=com.genigames.parkour.run.fun.race&pcampaignid=web_share'
  },
  {
    title: "Fly Wheels",
    desc: "Experience the thrill of futuristic flying cars in this exciting world of flying car games that combines the best of car jumping games and flying car simulator ! Become the ultimate car race master as you drag, release, and watch your flying car soar through the skies. With simple controls and addictive gameplay like airplane games, this is the perfect mix of fun and challenge.",
    img: "assets/image-flywheels.webp?text=Gamma",
    lnk: 'https://play.google.com/store/apps/details?id=com.genigames.flying.car.jump.evolution&hl=en-US'
  },
  {
    title: "Whip n Flip",
    desc: "Be attentive, be alert, the ragdoll monsters and the brainrot are coming for you. Use different weapons to throw the rope at them, flip and smash them aside for your survival.",
    img: "assets/image-whipnflip.webp?text=Gamma",
    lnk: 'https://play.google.com/store/apps/details?id=com.genigames.hit.ragdoll.rope.knife.master&hl=en-US'
  }, 
  {
    title: "Rescue Dash",
    desc: "Plan smart, act fast — guide emergency vehicles to their destinations before time runs out. Draw optimal paths on busy roads, avoid collisions, and manage multiple routes under pressure. Every second counts in this strategic puzzle game where quick thinking and precision save the day.",
    img: "assets/image-rescuedash.webp?text=Gamma",
    lnk: 'https://drive.google.com/file/d/19UNLarrmMjKqfPmbGuMd1mR3nsI3DCxa/view?usp=drive_link'
  },
  {
    title: "Tower Tetris",
    desc: "Plan smart, act fast — guide emergency vehicles to their destinations before time runs out. Draw optimal paths on busy roads, avoid collisions, and manage multiple routes under pressure. Every second counts in this strategic puzzle game where quick thinking and precision save the day.",
    img: "assets/image-tetristower.jpg?text=Gamma",
    lnk: 'https://drive.google.com/file/d/1RLi0dX_KDcrPt6HDwcL3PIksWsBq1d9R/view?usp=drive_link'
  }

];

let ind = 0;



window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const scrollHeight = document.body.scrollHeight;
  const viewportHeight = window.innerHeight;

  const nearBottom = scrollY + viewportHeight >= scrollHeight - 100;

  if (nearBottom) {
    document.body.classList.add('bg-bottom');
  } else {
    document.body.classList.remove('bg-bottom');
  }
});




// Function to update project view
function showProject(index) {
  ind = index;
  const proj = projects[index];
  const image = document.getElementById('projectImage');
  const title = document.getElementById('projectTitle');
  const desc = document.getElementById('projectDesc');

  // Step 1: Scale down current image
  image.classList.remove('scale-up');
  image.classList.add('scale-down');

  // Step 2: After scale-down completes, switch image
  setTimeout(() => {
    // Apply scale-initial before replacing image
    image.classList.remove('scale-down');
    image.classList.add('scale-initial');

    // Change the image
    image.src = proj.img;

    // Wait for image load before scaling up (safer)
    image.onload = () => {
      // Force reflow so next class triggers animation
      void image.offsetWidth;

      image.classList.remove('scale-initial');
      image.classList.add('scale-up');
    };
  }, 300); // match transition duration

  // Step 3: Update title
  title.textContent = proj.title;

  // Step 4: Typing animation
  let i = 0;
  desc.textContent = '';

  function typeWriter() {
    if (i < proj.desc.length) {
      desc.textContent += proj.desc.charAt(i);
      i++;
      setTimeout(typeWriter, 1);
    }
  }

  typeWriter();
}
// Show first project by default when page loads
showProject(0);

function openLink() {
    const proj = projects[ind];
    window.open(proj.lnk, '_blank'); // Opens in new tab
  }