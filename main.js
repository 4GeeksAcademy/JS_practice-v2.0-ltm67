console.log("Hola desde la consola")


console.log("Con un loop")
let personajes = ["Mario","Luigi","Bowser","Toad","Peach","Star"]

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



