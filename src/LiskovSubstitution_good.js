class Shape{
    area(){
        return 0;
    }
}

class Rectangle extends Shape{
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    area(){
        return this.width * this.height;
    }
}

class Square extends Shape{
    constructor(width) {
        super();
        this.width = width;
    }
    area(){
        return this.width **2;
    }
}

class Circle extends Shape{
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        let a = Math.PI * this.radius ** 2;
        return parseFloat(a.toFixed(2));
    }
}

module.exports = {Shape, Rectangle, Square, Circle};
