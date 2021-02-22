class Rectangle{
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    setWidth(x){
        this.width = x;
    }
    setHeight(y){
        this.height = y;
    }
    area(){
        return this.width * this.height;
    }
}

class Square extends Rectangle{
    setWidth(x){
        this.width = x;
        this.height = x;
    }
    setHeight(y){
        this.width = y;
        this.height = y;
    }
}

module.exports = {Rectangle, Square};


/* the function breaks Liskov Substitution

function increaseRectangleWidth(rectangle){
    rectangle.setWidth(rectangle.width + 1);
}

*/

/*
const r1 = new Rectangle(10, 2);
const r2 = new Rectangle(5,5);
const r3 = new Square(5,5);

increaseRectangleWidth(r1); // (10+1) * 2 = 22
increaseRectangleWidth(r2);  // (5+1) * 5 = 30

should also be 30, but it shows 36 because it increase both width and height to 6
it breaks the Liskov Substitution principle
increaseRectangleWidth(r3);

console.log(r1.area());
console.log(r2.area());
console.log(r3.area());

 */


