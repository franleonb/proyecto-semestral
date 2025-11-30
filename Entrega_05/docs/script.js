document.querySelectorAll('*').forEach(el => {
    el.style.cursor = "url('cursor-canasta.png'), auto";
});

const leafCount = 60;

for (let i = 0; i < leafCount; i++) {
    const leaf = document.createElement("div");
    leaf.classList.add("leaf");

    leaf.style.left = Math.random() * 100 + "vw";

    const size = 20 + Math.random() * 40;
    leaf.style.width = size + "px";
    leaf.style.height = size + "px";

    leaf.style.animationDuration = (5 + Math.random() * 6) + "s";
    leaf.style.animationDelay = Math.random() * 5 + "s";

    document.body.appendChild(leaf);
}

const canastas = document.querySelectorAll('.canasta');

canastas.forEach(canasta => {
  canasta.addEventListener('click', () => {
    const info = canasta.querySelector('.info');
    if (info.style.display === 'block') {
      info.style.display = 'none';
    } else {
      info.style.display = 'block';
    }
  });
});

