const Student = require('../src/Encapsulation');
const Inh = require('../src/Inheritance');
const LiskovBad = require('../src/LiskovSubstitution_bad');
const LiskovGood = require('../src/LiskovSubstitution_good');
const Dog = require('../src/OpenClose');

// ------------- Encapsulation.js -------------
test('Test - Student Instantiation', () => {
    let student = new Student("Christy");
    expect(student.name).toBe("Christy");
});

test('Test - Student getName()', () => {
    let student = new Student("Christy");
    expect(student.getName()).toBe("Christy");
});

test('Test - Student setName()', () => {
    let student = new Student("Christy");
    student.setName("newChristy");
    expect(student.name).toBe("newChristy");
});

// ------------- Inheritance.js -------------
test("Test - Electronics Instantiation", () => {
    let electronics = new Inh.Electronics(11);
    expect(electronics.batteryVoltage).toBe(11);
});

test("Test - Electronics printBattery()", () => {
    let electronics = new Inh.Electronics(11);
    expect(electronics.printBattery()).toBe("I have a battery with 11");
});

test("Test - Mac Instantiation", () => {
    let mac = new Inh.Mac("apple", 11);
    expect(mac.brand).toBe("apple");
    expect(mac.batteryVoltage).toBe(11);
});

test("Test - Mac show()", () => {
    let mac = new Inh.Mac("apple", 11);
    expect(mac.show()).toBe("I have a battery with 11, the brand is apple");
});

// ------------- LiskovSubstitution_bad.js -------------
test("Test - Rectangle Instantiation", () => {
    let rectangle = new LiskovBad.Rectangle(2, 3);
    expect(rectangle.width).toBe(2);
    expect(rectangle.height).toBe(3);
});

test("Test - Rectangle setWidth()/setHeight()", () => {
    let rectangle = new LiskovBad.Rectangle(2, 3);
    rectangle.setWidth(4);
    rectangle.setHeight(4);
    expect(rectangle.width).toBe(4);
    expect(rectangle.height).toBe(4);
});

test("Test - Rectangle area()", () => {
    let rectangle = new LiskovBad.Rectangle(2, 3);
    expect(rectangle.area()).toBe(6);
});

test("Test - Square Instantiation", () => {
    let square = new LiskovBad.Square(2, 2);
    expect(square.width).toBe(2);
    expect(square.height).toBe(2);
});

test("Test - Square setWidth()/setHeight()", () => {
    let square = new LiskovBad.Square(2, 2);
    square.setHeight(3);
    square.setWidth(3);
    expect(square.width).toBe(3);
    expect(square.height).toBe(3);
});

// ------------- LiskovSubstitution_good.js -------------
test("Test - Shape Instantiation", () => {
    let shape = new LiskovGood.Shape();
    expect(shape.area()).toBe(0);
});

test("Test - Rectangle Instantiation and area()", () => {
    let rec = new LiskovGood.Rectangle(2,3);
    expect(rec.width).toBe(2);
    expect(rec.height).toBe(3);
    expect(rec.area()).toBe(6);
});

test("Test - Square Instantiatio nand area()", () => {
    let square = new LiskovGood.Square(2);
    expect(square.width).toBe(2);
    expect(square.area()).toBe(4);
});

test("Test - Circle Instantiation and area()", () => {
    let circle = new LiskovGood.Circle(2);
    expect(circle.radius).toBe(2);
    expect(circle.area()).toBe(12.57);
});

// ------------- OpenClose.js -------------

test("Test - Dog Instantiation and getName()", () => {
    let dog = new Dog("Lucy", 10, "F");
    expect(dog.name).toBe("Lucy");
    expect(dog.weight).toBe(10);
    expect(dog.sex).toBe("F");
    expect(dog.getName()).toBe("its name is Lucy");
});