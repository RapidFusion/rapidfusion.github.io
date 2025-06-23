// Project data (dummy content for now)
const projects = [
  {
    title: "Color Cargo",
    desc: "A physics-based platformer with dynamic level generation.",
    img: "assets/image-colorcargo.webp?q=tbn:ANd9GcT_cuympapAi8189Y1f_61rRbyB7-oKNDOK2Q&s?text=Alpha"
  },
  {
    title: "Epic StuntMan Run",
    desc: "Multiplayer top-down shooter built in Unity using Netcode.",
    img: "assets/image-stuntman.webp?text=Beta"
  },
  {
    title: "Fly Wheels",
    desc: "Experimental game loop mechanics in Unreal Engine 5.",
    img: "assets/image-flywheels.webp?text=Gamma"
  },
  {
    title: "Whip n Flip",
    desc: "Experimental game loop mechanics in Unreal Engine 5.",
    img: "assets/image-whipnflip.webp?text=Gamma"
  },
  {
    title: "Whist Game",
    desc: "Experimental game loop mechanics in Unreal Engine 5.",
    img: "assets/image-whist.webp?text=Gamma"
  }
];


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
      setTimeout(typeWriter, 20);
    }
  }

  typeWriter();
}
// Show first project by default when page loads
showProject(0);
