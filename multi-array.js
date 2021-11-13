

const temp = [20, 31, 41, 17, 9, 43, 23, 47, 1, -15, 2]

console.log(temp)

let min = Math.min.apply(null, temp),
    max = Math.max.apply(null, temp);
    
console.log(min)
console.log(max)

console.log(`Ova e najniskata dnevna temperatura: ${min}`)
console.log(`Ova e najvisokata dnevna temperatura: ${max}`)