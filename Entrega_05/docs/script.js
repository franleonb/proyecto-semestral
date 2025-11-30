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

