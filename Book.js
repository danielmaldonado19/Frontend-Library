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