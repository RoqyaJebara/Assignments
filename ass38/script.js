//ecma script 5 no let no const
//ecma script 6 yes
/////////////////////////////////////////////////////////////////

//ecma script 5 no let no const
var person = {
    name:"",
    age:30,
    print: function(){
        console.log();
      },
};
//constructer function: initialization, first call in class
function Person(name, age){
    this.name = name;
    this.age = age;
 }
 Person.prototype.print = function(){
     console.log(this.name);
 }
 var personOpj= new Person('hussam');
 console.log(personOpj);
 personOpj.print();
 //protype


 ///////////////////////////////////////////////////////////////////////////////////
 function Employee(name, age, job){
    Person.call(this, name, age); 
    this.job = job;
 }
 Employee.prototype = Object.create(Person.prototype);
 Employee.prototype.constructor = Employee;
Employee.prototype.work = function(){
    console.log(this.job);
}
    
var emp = new Employee('hussam', 30, 'development');
//chain
console.log(emp);



//  function Student(name, age, job){
//     this.job = job;
//  }