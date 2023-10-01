const button = documnet.getElementById('btn');
const body =document.querySelector('body');
const color = ['red', 'green', 'blue', 'yellow', 'pink', 'grey', 'lime'];

body.style.backgroundColor = 'black';
button.addEventListener('click', () => {
    const colorIndex = parseInt(Math.random() * color.length);
});