const ggn_cadet = ["Aman", "Ayush", "Mukul"]
const rtk_cadet = ["Charlie","Rohan","Kapil","Raman","kunal"]

// ggn_cadet.push(rtk_cadet);

// console.log(ggn_cadet);
// console.log(ggn_cadet[2][1]);

// const allCadets = ggn_cadet.concat(rtk_cadet)
// console.log(allCadets);

// Alternate concat

// const all_new_Cadets = [...ggn_cadet, ...rtk_cadet]
// console.log(all_new_Cadets);

const array_00 = [1,2,3,[4,5,6],7,[8,9],10,[11,12,[13,14,]]]
const array_01 = array_00.flat(Infinity)
console.log(array_01);

console.log(Array.isArray("AMAN_SINGH"))
console.log(Array.from("AMAN_SINGH"))
console.log(Array.from({name: "AMAN_SINGH"})) // intresting

let score1 = 200;
let score2 = 250;
let score3 = 400;

console.log(Array.of(score1, score2,score3));