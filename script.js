for (let i = 0; i < 1500 ; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    document.querySelector('.container').appendChild(box)
    box.style.backgroundColor = 
    'rgb(' + Math.round(Math.random() * 255) +
        ','+ Math.round(Math.random() * 255) +
        ','+ Math.round(Math.random() * 255) +
    ')'
}