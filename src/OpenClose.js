class Dog{
    constructor(name, weight, sex) {
        this.name = name;
        this.weight = weight;
        this.sex = sex;
    }

    getName(){
        return "its name is " + this.name;
    }

}

module.exports = Dog;