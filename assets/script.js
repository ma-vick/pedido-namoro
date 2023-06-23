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