const container = document.querySelector('.container');
const api_url = 'https://source.unsplash.com/random/';
const rows_num = 25;

for (let i = 0; i<rows_num*3; i++) {
    const img = document.createElement('img');
    img.src = `${api_url}${getRandomTamanho()}`;
    container.appendChild(img)
}

function getRandomTamanho() {
    return `${getRandomNumero()}x${getRandomNumero()}`
}

function getRandomNumero() {
    return Math.floor(Math.random()*10 ) + 300
}