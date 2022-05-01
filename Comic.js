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
    
    