/* just looking at the structure

class LowLevel1 {
}
class LowLevel2 {
}
class LowLevel3 {
}
class Abstraction {
    constructor() {
        this.a = new LowLevel1();
        this.b = new LowLevel2();
        this.c = new LowLevel3();
    }
}
class HighLevel {
    constructor() {
        this.abstraction = new Abstraction();
    }
}

 */
