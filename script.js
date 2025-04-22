class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity; 
    }
    getTotalValue() {
        return this.price * this.quantity; 
        // returns the total value of the product
    }

    toString() {
        return `Product Name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`;
        // returns a string representation of the product
    }
}

class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }

    toString() {
        return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
        // returns a string representation of the perishable product
    }
}


class Product {
    static applyDiscount(products, discount) {
        products.forEach(product => {
            product.price -= product.price * (discount / 100);
            // apply discount to each product
            console.log(`Discount applied to ${product.name}. New price: ${product.price}`);
        });
    }
}

class storeInventory {
    constructor() {
        this.products = []; // array to hold products
    }

    addProduct(product) {
        this.products.push(product); // add product to inventory
        return console.log(`Product ${product.name} added to inventory.`);
    }

    getInventoryValue() {
        const total = this.products.reduce((total, product) => total + product.getTotalValue(), 0); // calculate by summing up the total value of all products
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

// create an instance of storeInventory
let store = new storeInventory();

//example products
let product1 = new PerishableProductProperties("Milk", 2.5, 10, "2023-10-01");
let product2 = new PerishableProductProperties("Bread", 1.5, 20, "2023-10-05");
let product3 = new ProductProperties("Cereal", 3.0, 15);
let product4 = new ProductProperties("Juice", 2.0, 5);
let product5 = new ProductProperties("Eggs", 3.5, 12);

// add products to store inventory
store.addProduct(product1);
store.addProduct(product2);
store.addProduct(product3);
store.addProduct(product4);
store.addProduct(product5);


//before discount
store.getInventoryValue();
//apply discount
Product.applyDiscount(store.products, 15);
//after discount
store.getInventoryValue();

//find product by name
store.findProductByName("Milk");