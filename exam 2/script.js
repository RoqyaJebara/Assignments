function CountVowels (str) {
    let count = 0;
    let vowels = ["a","e","i","o","u","A","E","I","O","U"];
    for (let i = 0; i < str.length; i++) {
        if (str.includes(vowels[i])) {
            count++;
        }
    }
    return count;
}
console.log("CountVowels is "+CountVowels("Hello World"));

////////////////////////////////

function checkNumbers(arr){
for(let i=0; i<arr.length; i++){
    if(arr[i]%2!=0){
        console.log(arr[i]+" is an odd number");
    }else{
        console.log(arr[i]+" is an even number");
    }
} 
}
checkNumbers([1,2,3,4,5,6,7,8,9,10]);
/////////////////////////////////
function LongestWord (str){
    let words = str.split(" ");
    let longest = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}
console.log("LongestWord  "+LongestWord("I love JavaScript programming"));
//////////////////////////////////////
function FizzBuzz (){
    for (let i = 1; i <= 50; i++) {
        if (i%3==0 && i%5==0) {
            console.log(i+" FizzBuzz");
        }else if (i%3==0) {
            console.log(i+" Fizz");
        }else if (i%5==0) {
            console.log(i+" Buzz");
        }else{
            console.log(i +"  no Fizz or Buzz");
        }
    }
}
FizzBuzz();
/////////////////////////////////////
function SecondLargestNumber (arr){
    let max = arr[0];
    let secondMax = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        }else if (arr[i] > secondMax && arr[i] != max) {
            secondMax = arr[i];
    return secondMax;
}}}
console.log("SecondLargestNumber   "+SecondLargestNumber([10,5,20,8,12]));
//////////////////////////////////////
function FlattenNestedArray(arr){
    let Flatten =[];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            Flatten = Flatten.concat(FlattenNestedArray(arr[i]));
        }else{
            Flatten.push(arr[i]);
        }
    }
    return Flatten;
}
console.log(FlattenNestedArray([1,[2,[3,4],5],6]));
////////////////////////////////////////