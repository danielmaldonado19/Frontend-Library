class Shoppingcart{
    /*This class will allows to load the books we want to buy. It will sum the total amount of the cart and finally, it will display the total amount we're willing to pay.*/

    constructor(){
        //Constructor has no parameters because we're not going to insert anyone.
        this.products = [];
        //This is an empty array which we'll fill as we add books by the "addBook" method.
        
    }

    addBook(quant, price){
        this.products.push(...Array(quant).fill(price));
        //"this.products" is an dynamic array.
        //".push()"" is the method which allow us to add elements to "this.products" array.
        //"..." command allow us to add to the same array each product price. If we don't put that, then each time we execute "addBook" method, it will create an array as element of "this.products" array.
        //"Array()" is an object, "(quant)" creates the number of empty spaces.
        //".fill()" allow us to put an element in the array selected position. "(price)" is the addBook parameter which we'll use as "this.product" array's element.

    }

    showProducts(){
        console.log(this.products);
    }

    calcTotal(){
        return this.products.map(price => price).reduce((total, price) => total + price, 0);
        //".map()" method executes a function for each array element, and for each element it returns an element we want.
        //".reduce()" uses an array as input and it gets one single element from the function with the help of a accumulator.

    }

    displayTotal(){
        console.log(`El monto total es de: ${this.calcTotal()}`);
    }
}

const myCart = new Shoppingcart();
myCart.addBook(2,100);
myCart.addBook(3,50);
myCart.showProducts();
myCart.calcTotal();
myCart.displayTotal();
