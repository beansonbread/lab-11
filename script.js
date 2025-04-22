class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity; 
    }
    getTotalValue() {
        return this.price * this.quantity;
    }

    toString() {
        return console.log(`Product Name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`);
    }
}

class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }

    toString() {
        return console.log(`${super.toString()}, Expiration Date: ${this.expirationDate}`);
    }
}


class Product {
    static applyDiscount(products, discount) {
        products.forEach(product => {
            product.price -= product.price * (discount / 100);
        });
    }
}

class storeInventory {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
        return console.log(`Product ${product.name} added to inventory.`);
    }

    getInventoryValue() {
        const total = this.products.reduce((total, product) => total + product.getTotalValue(), 0);
        console.log(`Total inventory value: ${total}`);
        return total;
    }

    findProductByName(name) {
        const product = this.products.find(product => product.name === name);
        if (product) {
            console.log(`Product found: ${product.toString()}`);
            return product;
        } else {
            console.log(`Product ${name} not found in inventory.`);
            return null;
        }
    }   
}

let store = new storeInventory();
