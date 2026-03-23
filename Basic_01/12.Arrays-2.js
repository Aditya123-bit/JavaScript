const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["flash", "superman", "Batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros)

const allhero = marvel_heros.concat(dc_heros)
console.log(allhero)

const all_new_hero = [...marvel_heros,...dc_heros]
console.log(all_new_hero)

console.log(Array.isArray("Aditya"))
console.log(Array.from("Aditya"))
console.log(Array.from({name: "Aditya"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))