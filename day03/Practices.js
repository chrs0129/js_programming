
/*
Create a new custom class for Product with following requirements:
    Atributes: 
        name, price, quantity, descritpion, productId
    actions:
        constructor: to initialize all attributes
        displayProductInfo: to display the product information (name, price, quantity, description)
       
     */
    
/**
 * Represents a product with attributes such as name, price, quantity, description, and productId.
 * @constructor
 * @param {string} name - The name of the product.
 * @param {number} price - The price of the product.
 * @param {number} quantity - The quantity of the product.
 * @param {string} description - The description of the product.
 * @param {number} productId - The unique identifier of the product.
 */
class Product{ 
    constructor(name, price, quantity, description, productId){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
        this.productId = productId;
    }

    /**
     * Displays the product information (name, price, quantity, description, productId) in the console.
     */
    displayProductInfo(){
        console.log(`Product Name: ${this.name}`);
        console.log(`Product Price: ${this.price}`);
        console.log(`Product Quantity: ${this.quantity}`);
        console.log(`Product Description: ${this.description}`);
        console.log(`Product ID: ${this.productId}`);
    }
}

// test product object

let product1 = new Product('Shirt', 20, 50, 'Comfortable and stylish shirt', 1);
product1.displayProductInfo();
 // expected output: Product Name: Shirt, Product Price: 20, Product Quantity: 50, Product Description: Comfortable and stylish shirt, Product ID: 1

console.log('----------------------------------------------------');

/*
create a parent call for Animal with following requirements
    Atributes:
    name, age, gender, breed

    Actions:
    constructor: to initialize all attributes
    eat: to display a message that the name is eating
    sllep: to display a message that the name is sleeping
*/
  class Animal {
    constructor(name, age, gender, breed) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.breed = breed;
    }
    eat() {
        console.log(`${this.name} is eating.`);
    }  
    sleep() {
        console.log(`${this.name} is sleeping.`);
    }
}
/*
Create a child class that inherits from Animal with following requirements
Dog class: Dog    
Atributes:
    Additional action:
    bark: to display a message that the name is barking

Cat class: Cat    
    Additional action:
    meow: to display a message that the name is meowing
*/
  class Dog extends Animal {
    
    bark() {
        console.log(`${this.name} is barking.`);
    }
}
  class Cat extends Animal {
    
    
    meow() {
        console.log(`${this.name    } is meowing.`);
    }
}
  




        



