class Book{
/*Class name always start with uppercase.*/

    constructor(title, author, topic, price){
    /*This method help us to construct our object at the moment we need to instantiate the class.*/ 
    this._title = title;
    this._author = author;
    this._topic = topic;
    this._price = price;
    /*"this" word refers directly to the object property. Thats how we assign a value to the referred property when we create a new object instance. "_" symbol means the property is private and it shouldnt be modified.*/   
    }
    /*Abstraction: pick up ONLY the useful properties of a object. It only focus in important details*/
}
/*Any class has no return. It only contains variables and functions (properties & methods).
*/


class Comic extends Book{
/*By the command "extends" we indicate which class is the parent class for this one. In this case the parent is Book*/

constructor(title,author,topic,price, comicCharacters, villain){

    super(title, author, topic, price);
    //This way we call the parent class properties.
    this._comicCharacters = comicCharacters;
    /*For the especific properties, we can assign them as always. In this case, "comicCharacters" property includes various names, that way it can contain an array.*/
    this._villain = villain;
}

addVillain(villain){
    this._villain = villain;
}
/*This is how we include methods in the class. The methods are the class functions*/

addComicCharacters(comicCharacters){
    this._comicCharacters.push(comicCharacters);
}
/*This method allows us to enter more comic characters into the array called "comicCharacters"*/

}
/*Comic class needs the same properties as Book class(title,author, topic, price). So we are going to inherit Comic class*/


const book1 = new Book("Millionaire Mind", "T. Harv Ecker", "Self Improvement", 16);
//Thats how we instantiate a new class

const comic1 = new Comic("Black, White & Blood", "Allred Yost", "Violence", 4.99, ["Deadpool","Daredevil"]);

comic1.addVillain("Purple Man");

