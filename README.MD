[![Build Status](https://travis-ci.org/yt249/is219_oop.svg?branch=master)](https://travis-ci.org/yt249/is219_oop)
[![Coverage Status](https://coveralls.io/repos/github/yt249/is219_oop/badge.svg?branch=master)](https://coveralls.io/github/yt249/is219_oop?branch=master)

**<h1 align="center"> Design Patterns </h1>**

<h3><u>1. Structural - Facade Pattern</u></h3>
<p>In is219_csv_reader repo src/CSV/Reader.js:</p>
<p>Facade structural pattern hopes to hide all the complicated code for a simple 
function call. For this reader class, the user can simply enter the filepath of 
file and the Model to this function to get the content in csv type without actually opening the file 
or reading through it in the code. </p>

<pre>class Reader{
         static printRecords(filename, Model){
             const filePath = require('../FilePath');
             const fs = require('fs');
             const parse = require('csv-parse/lib/sync');
     
             let absolutePath = filePath.getAbsolutePath(filename);
             const options = {
                 columns: true,
                 delimiter: ',',
                 trim: true,
                 skip_empty_lines: true
             };
             let contents = fs.readFileSync(absolutePath);
             const record = parse(contents, options);
             let list = Array();
             record.forEach(function (data) {
                 list.push(Model.create(data));
             });
             return list;
         }
     }
</pre> 

<h3><u>2. Behavior - Strategy Pattern</u></h3> 
<p>In is219_calculator repo - src/Operations/StrategyExample.js: </p>

<p>Strategy pattern suggest to take something that does specific stuff in different ways out off the same class
and extract all those algorithm into separate classes, so that we can only call the needed one if we need. 
In this case, the Calculation class is taking in any kind of operation functions as op given 2 parameters,
and we can put in any operations we want. </p>

<pre>class Calculation{
         constructor(a, b, operation){
             this.a = a;
             this.b = b;
             this.operation = operation;
         }
         GetResults(){
             return this.operation(this.a,this.b);
         }
     }
</pre>

<h3><u>3. Creational - Prototype Pattern</u></h3> 
<p>In is219_calculator repo src/Calculator.js:</p>
For this pattern, I will implement a Copy() function. 
This function will take case the work whenever it is needed to be 
copied to a new Calculator.
<pre> static Copy() {
        let newCalc = new Calculator();
        newCalc.Calculations = this.Calculations;
        return newCalc;
    }
</pre>

**<h1 align="center"> What is S.O.L.I.D.?</h1>**

<br>
S - Single Responsibility Principle <br>
O - Open-Closed Principle<br>
L - Liskov Substitution Principle<br>
I - Interface Segregation Principle <br>
D - Dependency Inversion Principle  
<br>

<h3><u>S - Single Responsibility Principle</u></h3>

<b>is219_calculator repo - Operations/Calculator.js</b>:
<pre>
static addCalculation(calculation){
        Calculator.Calculations.push(calculation);
    }
</pre>
This addCalculation function is only doing one task, which is pushing value 
into the Calculations array.

<h3><u>O - Open-Closed Principle</u></h3>

<b>OpenClose.js</b>: <br>
If we want to know if its a HE or SHE, we can just add the function below without
changing the existing code. 
<pre>
getSex(){
    return "its sex is " + this.sex;
   }
</pre>
The code should be open to extension, but closed to modification.  <br>

<h3><u>L - Liskov Substitution Principle</u></h3>

Comparing both <b>LiskovSubstitution_bad.js</b> and <b>LiskovSubstitution_good.js</b>:<br>
<li>bad - Sub(Square) class is not compatible of the function in the parent class(rectangle)<br>
<li>good -  create another class(shape) that has the area function, and both rectangle and square class are 
going to extend this class so that we can override the area function in each class and be able to get the correct area
for each of the shape. 

<h3><u>I - Interface Segregation Principle</u></h3>
<b>InterfaceSegregation.js</b>: <br>
"Interface" forces classes that implements it to contain all the functions it has in the interface. <br>
Animal has the swim function, but the Deer does not know how to swim so that it should not have the swim function, so 
it violates this principle. However, JavaScript does not have interfaces, so this principle will not ne required here since 
there will be no enforcement on this. 
 
<h3><u>D - Dependency Inversion Principle</u></h3>
<b>DependencyInversion.js</b>: <br>
It is saying that the high-level modules should not depends on low-level modules, instead
, both should depends on the same abstractions.<br>
When we implement the high-level classes, we do not have to worry about the low-level
classes. We do not have to change anything in the code as long as the abstraction class 
does not change.   
<br>

**<h1 align="center"> Other 4 Principles?</h1>**

<h3><u>1. Encapsulation</u></h3>
<b>Encapsulation.js</b>: <br>
we make the variables meaningful only in the class, and the setter/getter methods are the way
we use in order to access and manipulate the variable in the class. However, the other class cannot
access these variables. <br>

<h3><u>2. Abstraction</u></h3>
<b>DependencyInversion.js</b>: <br>
Abstraction is to make sure that each object can only expose a high-level class and do not have 
to worry about any low-level classes tied to the abstraction class. Just like how the classes are 
structured in this file. <br>

<h3><u>3. Inheritance</u></h3>
<b>Inheritance.js</b>: <br>
In this file, we have a Mac class that inherited the Electronics class, and the Mac class also inherits 
all the method from the super class's, it can be able to use the printBattery() method from the Electronics 
class. <br>
That forms a hierarchy. <br>

<h3><u>4. Polymorphism</u></h3>
<b>LiskovSubstitution_good.js</b>: <br>
Polymorphism takes the advantage of Inheritance. Polymorphism is designed when the objects share behaviors
and to be able to override those shared behaviors. <br>
In the file, three of different shapes share the same area() method from the Shape class, but on the other hand, 
the ways to calculate area for those shapes are different, so it allows each child class to keep its own unique 
method. 

























