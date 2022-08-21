const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50}
];

const renderProduct = (elem, img = './js/websiteplanet-dummy-540X400.png') => {
    return `<div class="product-item">
                <img src="${img}" alt="картинка">
                <div class="wrp__inner">
                    <h3>${elem.title}</h3>
                    <p>${elem.price} $</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
};

const renderPage = list => {
    document.querySelector('.products').innerHTML = list.map(item => renderProduct(item)).join('');
};

renderPage(products);
