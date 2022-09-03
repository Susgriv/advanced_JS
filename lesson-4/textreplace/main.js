const pEl = document.querySelector('.paragraph');
const btnEl = document.querySelector('.btn');
const btnEl2 = document.querySelector('.btn-lesson2');
const btnReset = document.querySelector('.btn__reset');

btnEl.addEventListener('click', () => {
    pEl.textContent = pEl.textContent.replace(/'/g, '"');

});

btnEl2.addEventListener('click', () => {
    pEl.textContent = pEl.textContent.replace(/\s'|'\s/g, '"');
});

btnReset.addEventListener('click', () => location.reload());
