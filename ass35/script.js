let st1 ="hussam ";
console.log(st1.length);

function validateDescription(description){
    if(description.length>100)
        return "Description is too long";
    return "Description is valid";
}

console.log(
    validateDescription("description")
);
let st2="Javascript";
console.log(st2.slice(0,1))
console.log(st2.slice(0,5))
console.log(st2.slice(4,10))
console.log(st2.slice(4))
console.log(st2.slice(-6))
function readMore(str){
    return str.slice(0,50)+"... Read more"
}
console.log(readMore("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaalllllllllllllllllll"));
let st3="Java Script";
console.log(st3.charAt(9));

function checkUsername(username){
    return username.charAt(0).toUpperCase()+username.slice(1);
}

let st4="Java Script";
console.log(st4.toUpperCase());
console.log(checkUsername("hussam"));

let st5="      Hello Java Script         ";
console.log(st5);
console.log(st5.trim());

function cleanEmail(email){

    return email.trim().toLowerCase();
}
console.log(cleanEmail("  User@example.com "));

let st6="Hello Java Script";
console.log(st6.substring(0,7));
function maskPhone(str){
    return "*".repeat(str.length-3)+str.substring(str.length-3);
    // return "*** *** *"+str.substring(str.length-3);

}
console.log(maskPhone("0788123456"));
console.log("Ali".repeat(3));

let st7="Java Script world , world" ;
console.log(st7.replace("world","hello"))
console.log(st7.replaceAll("world","hello"))
console.log(st7.replace(/world/g,"hello"))

let st8="Java Script world , world" ;
console.log(st8.split("w"));

let st9="Java Script world , world" ;
console.log(st8.includes("world"));

function checkBadWords(str){
    if(str.includes("badWords")){
        return "this is a bad word";
    }
    return "approved words";
}
console.log(checkBadWords("jjjjjjj badWords llllll"));

let st10="Java Script world , world" ;
console.log(st10.endsWith("ld"));

let fileName="test.jpg";

if(fileName.endsWith(".jpg")){

}

let st11="JavaScript world world" ;
console.log(st11.indexOf("ld"));
console.log(st11.indexOf("1"));

let st12="JavaScript world world" ;
console.log(st11.lastIndexOf("ld"));