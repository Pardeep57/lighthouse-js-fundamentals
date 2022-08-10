let string1 ="Loopy" ;
let string2 ="Lighthouse" ;
let string3 ="LoopyLighthouse" ;

for (let number = 100; number <= 200; number = number + 1){
if (number % 3 === 0) {
console.log(string1);
} else {
if (number % 5 === 0) {
console.log(string2);
} if (number % 3 && number % 5) {
console.log(string3);
}
}
//console.log(number);
}
