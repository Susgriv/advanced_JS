class ProductList {
    constructor(container = ".products") {
        this.container = container;
        this.arrProducts = [];
        this._fetchProducts(); //Рекомендация, чтобы метод был вызван в текущем классе
        this.render(); // Вывод товаров на страницу
        this.calcSum();
    }


//Рекомендация, чтобы метод был вызван в текущем классе
    _fetchProducts() {
        this.arrProducts = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50}
        ];
    }

// Вывод товаров на страницу
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.arrProducts) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML('beforeend', item.render());
        }
    }

    calcSum() {
       return this.arrProducts.reduce(function (sum, current) {
           return sum += current.price;
       }, 0)


    }
}

class ProductItem {
    constructor(product, img = './js/websiteplanet-dummy-540X400.png') {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }

// Вывод товаров на страницу
    render() {
        return `<div class="product-item">
                <img src="${this.img}" alt="картинка">
                <div class="wrp__inner">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
}

class Basket {
    constructor() {
    }

    addBasket() {
    } // добавление элемента
    deleteBasket() {
    } // удаление элемента
    updateBasket() {
    } // Обновление текущего элемента
}

class BasketItem {
    constructor() {
    }

    render() {
    } //новая разметка корзины
}

let list = new ProductList();

