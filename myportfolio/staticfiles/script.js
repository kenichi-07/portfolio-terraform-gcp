const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

// Resize the canvas to fill the entire screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Characters for matrix effect
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];

for (let x = 0; x < columns; x++) {
  drops[x] = 1;
}

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#00FF00';
  ctx.font = fontSize + 'px monospace';

  for (let i = 0; i < drops.length; i++) {
    const text = characters[Math.floor(Math.random() * characters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(draw, 35);

// Dynamic title rotation
const titles = ["DevOps Engineer", "Cloud Architect", "Full Stack Developer", "Cybersecurity Engineer"];
let titleIndex = 0;

setInterval(() => {
  document.getElementById("dynamic-title").innerText = titles[titleIndex];
  titleIndex = (titleIndex + 1) % titles.length;
}, 3000);

// Glitching profile picture
const profilePic = document.getElementById('profile-pic');
const originalPic = document.getElementById('profile-img-path').value; //'{% static "portfolio/profile.jpg" %}';  // Your original picture
const anonymousPic = document.getElementById('anonymous-img-path').value;
//'{% static "portfolio/anonymous.png" %}';  // Anonymous picture

// function glitchPicture() {
//     profilePic.src = anonymousPic;
//     setTimeout(() => {
//         profilePic.src = originalPic;
//     }, 200);  // Show anonymous for 0.40 seconds, then switch to original
// }

// setInterval(glitchPicture, 600);  // Every 0.60 seconds, toggle the pictures
setInterval(() => {
    // Toggle between the images every 600ms
    profilePic.src = anonymousPic;
    setTimeout(() => {
      profilePic.src = originalPic;
    }, 800); // Display profile.jpg for 200ms
  }, 200); // Display anonymous.png for 400ms