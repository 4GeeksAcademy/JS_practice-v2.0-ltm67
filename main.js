console.log("Hola desde la consola")


console.log("Con un loop")
let personajes = ["Mario","Luigi","Bowser","Toad","Peach","Star"]
let numbers = [2,3,4,5,6,7,8,9,15,17,19,20]

for (i = 0; i < personajes.length; i++){
    console.log(personajes[i])
}

for (i = personajes.length - 1; i >= 0; i--){
    console.log(personajes[i])
}

let personajesbuenos = []

for (i = 0; i < personajes.length; i++){
    if(personajes[i] !== "Bowser"){
         personajesbuenos.push(personajes[i])
    } 
}

console.log(personajes)
console.log(personajesbuenos)

console.log(personajes.filter((personaje) => personaje != "Bowser"))
console.log(personajes)

console.log(numbers)
console.log(numbers.filter((number) => number != 7))
console.log(numbers.filter((number) => number > 7 ))
console.log(numbers.filter((number) => number < 15))
console.log(numbers.filter((number) => number% 3 == 0))

let newNumbers = []

for(i = 0; i < numbers.length; i++){
   console.log(numbers[i] * 4)
   newNumbers.push(numbers[i] * 4)
}

console.log(numbers)
console.log(newNumbers)

let mapNumbers = numbers.map((number) => number * 4)
console.log(mapNumbers)





