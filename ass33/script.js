
let x=13;
let y=1.5;

let name1 ="hussam";
let lastName="bowwab";

let z=true;
let w= false;

let person={
number:"0799999999",
age:25,
salary:500
};

let cars=["bmw","toyota","kia"];

let date = new Date();

console.log(x+y);

function firstFunction(x,y){
    return x+y;
}
console.log(firstFunction(5,6));

let car={
    name:"bmw",
    color:"black",
    model:"2020",
    info:function(){
        return this.name+" "+this.color+" "+this.model;
    }
}
let user={
    name:"aya",
    age:30,
    salary:1000
}
console.log(user.salary);
console.log(user["salary"]);
console.log(car.model);
console.log(user.salary);
console.log(car.info());
console.log(this.confirm("are you sure?"));
window.onload=function(){};
user.number="0799999999";
console.log(user);
delete user["number"];
console.log(user);

let user1={
    name:"aya",
    age:30,
    salary:1000,
    car1:{name:"bmw",
    color:"black",
    model:"2020",
    info:function(){
        return this.name+" "+this.color+" "+this.model;
    }
    }
}

console.log(user1.car1.info());
document.getElementById("demo").innerHTML=user1.car1.info();
let result='';
for(let x in user1){
    result = result+user1[x];
    
}
console.log(result);

if(user1.age>250){
    document.getElementById("demo").innerHTML=  JSON.stringify(user1);
}
else{
    // document.getElementById("demo").innerHTML="age is less than 25";
    document.getElementById("demo").innerHTML=  Object.values(user1);

}
let day; 
switch(new Date().getDay()){
    case 0:
        day="sunday";
        break;
        
        case 1:
        day="monday";
        break; 

        // case 1:
        // day="monday";
        // break; 

        // case 1:
        // day="monday";
        // break; 

        // case 1:
        // day="monday";
        // break;
        default:
            day="unknown";
            break;
}
console.log(day);