const marvel_heros = ["Ironman", "thor","Spiderman"]
const dc_heros = ["Superman", "batman","flash"]
//marvel_heros.push(dc_heros)

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros)

// const all_new_heros =[...marvel_heros,...dc_heros]
// console.log(all_new_heros);

const another_Array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array =another_Array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Masood"))
console.log(Array.from("Masood"))
console.log(Array.from({name: "Maood"})) // intrested

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3 ))