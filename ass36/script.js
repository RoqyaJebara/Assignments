let st="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quibusdam, aut amet sequi deleniti "+
"perspiciatis magni. Sapiente alias unde mollitia vel eum sit cumque non atque, inventore illum aliquam accusantium!"

function checkLength(str){
    if( str.length>=280)
        return "exceed 280"
    else
        return "not exceed 280"
}
console.log(checkLength(st));

function checkUpper(str){
  
        return str.charAt(0).toUpperCase();
}
console.log(checkUpper(st));

function toUpper(str){
  
    return str.toUpperCase();
}
console.log(toUpper(st));

function toLower(str){
  
    return str.toLowerCase();
}
console.log(toLower(st));

function totrim(str){
  
    return str.trim();
}
console.log(totrim("   name@example.com   "));

console.log(st.slice(0,103));
function maskPhone(str){
    return "*".repeat(str.length-4)+str.substring(str.length-4);

}
console.log(maskPhone("0788123456"));

let st2="Java Script world , world" ;
console.log(st2.replace("world","hello"))
console.log(st2.replaceAll("world","hello"))
console.log(st2.replace(/world/g,"hello"))

console.log(st.split(","));

function checkBadWords(str){
    if(str.includes("badWords")){
        return "this is a bad word";
    }
    return "approved words";
}
console.log(checkBadWords("jjjjjjj badWords llllll"));

let fileName="test.jpg";

if(fileName.endsWith(".jpg")){
console.log("true image")
}
console.log("Huda".repeat(6));

console.log(st.indexOf("dolor"));
console.log(st.indexOf("1"));


console.log(st.concat("1111"));

