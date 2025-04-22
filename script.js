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



