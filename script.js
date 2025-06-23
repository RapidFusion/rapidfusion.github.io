// Project data (dummy content for now)
const projects = [
  {
    title: "Project Alpha",
    desc: "A physics-based platformer with dynamic level generation.",
    img: "https://encrypted-tbn0.gstatic.com/images?			q=tbn:ANd9GcT_cuympapAi8189Y1f_61rRbyB7-oKNDOK2Q&s?text=Alpha"
  },
  {
    title: "Project Beta",
    desc: "Multiplayer top-down shooter built in Unity using Netcode.",
    img: "https://media.gq-magazine.co.uk/photos/645b5c3c8223a5c3801b8b26/16:9/w_2560%2Cc_limit/100-best-games-hp-b.jpg?text=Beta"
  },
  {
    title: "Project Gamma",
    desc: "Experimental game loop mechanics in Unreal Engine 5.",
    img: "https://via.placeholder.com/600x300?text=Gamma"
  }
];

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
