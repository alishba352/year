function showFireworks() {
  const container = document.getElementById("fireworks-container");
  for (let i = 0; i < 15; i++) {
    createFirework(container);
  }
}

function createFirework(container) {
  const firework = document.createElement("div");
  firework.className = "firework";
  firework.style.left = Math.random() * 100 + "%";
  firework.style.animationDuration = 1 + Math.random() * 2 + "s";

  firework.style.background = `radial-gradient(circle, 
    rgba(255, 255, 255, 1) 0%, 
    rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1) 60%, 
    rgba(0, 0, 0, 0) 100%)`;

  container.appendChild(firework);

  setTimeout(() => {
    firework.remove();
  }, 3000);
}

// CSS for fireworks
const style = document.createElement("style");
style.innerHTML = `
  .firework {
    position: absolute;
    top: 100%;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    animation: rise 2s ease-in-out, burst 1s ease-out 2s forwards;
  }

  @keyframes rise {
    0% {
      top: 100%;
      opacity: 0.7;
    }
    50% {
      opacity: 1;
    }
    100% {
      top: 30%;
      opacity: 1;
    }
  }

  @keyframes burst {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(3);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);




// JavaScript can handle interactions or custom features
console.log("Background video loaded!");
