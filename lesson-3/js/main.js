const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];//массив товаров
        this.allProducts = [];//массив объектов
        this._getProducts()
            .then(data => { //data - объект js
                this.goods = [...data];
                this.render()
            });
    }

    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }

// Вывод товаров на страницу
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }
    }

    calcSum() {
        return this.arrProducts.reduce(function (sum, current) {
            return sum += current.price;
        }, 0)
    }
}

class ProductItem {
    constructor(product, img = 'https://placehold.it/200x150') {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }

    render() {
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
}

let list = new ProductsList();

class Basket {
    constructor(container = '.cart-block') {
        this.container = container;
        this.goods = [];//массив товаров
        this._clickBasket();
        this._getBasketItem()
            .then(data => { //data - объект js
                this.goods = [...data.contents];
                this.render()
            });
    }

    _getBasketItem() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new BasketItem();
            block.insertAdjacentHTML('beforeend', productObj.render(product));
        }
    }

    _clickBasket() {
        document.querySelector(".btn-cart").addEventListener('click', () => {
            document.querySelector(this.container).classList.toggle('invisible');
        });
    }
}

class BasketItem {
    render(product, img = ``) {
        `<div class="card-item" data-id="${product.id_product}">
          <div class="product-bio">
            <img src="${img}" alt="image">
            <div class="product-desc">
              <p class="product-title">${product.product_name}</p>
              <p class="product_quantity">Quantity: ${product.quantity}</p>
              <p class="product-single-price"${product.price} each</p>
            </div>
          </div>
          <div class="right-block">
            <p class="product-price">${product.quantity * product.price}$</p>
            <button class="del-btn" data-id="${product.id_product}">X</button>
          </div>
        </div>`
    }
}

let bask = new Basket();



