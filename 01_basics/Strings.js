//  MAKE AN ARTICLE ON STRING VIA MDN 

const name = "Aman"
const repo_count  = 56

// console.log(name + repo_count + "Brand");
// outdated
// new way
console.log(`Hello my name is ${name} and repo count is ${repo_count}`);

// another way declare string
const gameName = new String(`amanshh`)
// console.log(gameName.toUpperCase());
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('a'));

const anotherString = gameName.slice(0, 4)
console.log(anotherString);

const Stringone = "   Aman    "
console.log(Stringone);
console.log(Stringone.trim());

const url = "https://aman.com/aman%22singh"
console.log(url.replace(`%22`, `-`));

console.log(url.includes(`aadil`));
console.log(gameName.split(`-`));