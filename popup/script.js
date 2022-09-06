const open1 = document.getElementById('open');
const close1 = document.getElementById('close');

const container = document.getElementById('container');

open1.addEventListener ('click',() => {
    container.classList.add('active');
});
close1.addEventListener ('click',() => {
    container.classList.remove('active');
});

