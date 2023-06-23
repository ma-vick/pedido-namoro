function fuja(){
    const btnNot = document.getElementById('not');

    const widthWindow = window.innerWidth;
    const heightWindow = window.innerHeight;

    const maxX = widthWindow - btnNot.offsetWidth;
    const maxY = heightWindow - btnNot.offsetHeight;

    let randomX = Math.floor(Math.random() * maxX);
    let randomY = Math.floor(Math.random() * maxY);

    btnNot.style.left = randomX + 'px';
    btnNot.style.top = randomY + 'px';
}

function fotinhas() {
    const imgzinha = document.getElementById('imgzinha');
    const imageSources = [
      'https://i.gifer.com/4IdO.gif',
      'https://ih1.redbubble.net/image.2897724792.6317/st,small,507x507-pad,600x600,f8f8f8.jpg'
    ];
    let currentIndex = 0;
  
    setInterval(function() {
      imgzinha.setAttribute('src', imageSources[currentIndex]);
      currentIndex = (currentIndex + 1) % imageSources.length;
    }, 2000);
  }

fotinhas();