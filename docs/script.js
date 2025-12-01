document.addEventListener("DOMContentLoaded", () => {

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

        leaf.style.animationDuration = (6 + Math.random() * 6) + "s";
        leaf.style.animationDelay = Math.random() * 5 + "s";

        document.body.appendChild(leaf);
    }

    const canastas = document.querySelectorAll('.canasta');
    canastas.forEach(canasta => {
        canasta.addEventListener('click', () => {
            const info = canasta.querySelector('.info');
            info.style.display = info.style.display === 'block' ? 'none' : 'block';
        });
    });

    document.querySelectorAll('.carrusel').forEach(carrusel => {
        const slides = carrusel.querySelectorAll('.slide');
        const prev = carrusel.querySelector('.prev');
        const next = carrusel.querySelector('.next');
        let index = 0;

        function showSlide(i) {
            slides.forEach(s => s.classList.remove('active'));
            slides[i].classList.add('active');
        }

        showSlide(index);

        prev.addEventListener('click', () => {
            index = (index - 1 + slides.length) % slides.length;
            showSlide(index);
        });

        next.addEventListener('click', () => {
            index = (index + 1) % slides.length;
            showSlide(index);
        });
    });

});
