class Shoppingcart{
    /*This class will allows to load the books we want to buy. It will sum the total amount of the cart and finally, it will display the total amount we're willing to pay.*/

    constructor(){
        //Constructor has no parameters because we're not going to insert anyone.
        this.products = [];
        //An empty array which we'll fill as we add books by the "addBook" method.
        
    }

    addBook(quant, price){
        this.products.push(Array(quant).fill(price));
        //"this.products" is an dynamic array.
        //".push()"" is the method which allow us to add elements to "this.products" array.
        //"Array()" is an object, "(quant)" creates the number of empty spaces.
        //".fill()" allow us to put an element in the array selected position. "(price)" is the addBook parameter which we'll use as "this.product" array's element.

    }
}

const myCart = new Shoppingcart();
myCart.addBook(2,100);
