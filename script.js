class Book{
/*Class name always start with uppercase.*/

    constructor(title, author, topic, price){
    /*This method help us to construct our object at the moment we need to instantiate the class.*/ 
    this._title = title;
    this._author = author;
    this._topic = topic;
    this._price = price;
    /*"this" word refers directly to the object property. Thats how we assign a value to the referred property when we create a new object instance*/   
    }
    
    /*Abstraction: pick up ONLY the useful properties of a object. It only focus in important details*/
}
/*The class has no return.

It only contains vars and functions (properties & methods).
*/

const book1 = new Book("Millionaire Mind", "T. Harv Ecker", "Self Improvement", 16);
//Thats how we instantiate a new class