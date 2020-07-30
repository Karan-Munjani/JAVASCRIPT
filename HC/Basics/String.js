let string = "Javascript Is Fun";
console.log(string.length);

console.log(string.slice(0,string.length-5));

let k = string.indexOf("script");

// print script from given string

let n = "script".length;

console.log(string.slice(k,k+n));
string=string.slice(k,k+n);

console.log(string);
