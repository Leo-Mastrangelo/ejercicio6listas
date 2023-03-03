//Ejercicio Listas
//Compras
const listaCompras = ["huevos", "tomates","agua","zapallos","azucar","carne"]
listaCompras.splice (2,0,"aceite de girasol")
console.log (listaCompras)
listaCompras.splice (2,1)
console.log (listaCompras)


//Peliculas
const peliculas = [
    {nombre: "gladiador", director: "almodovar", fecha: 2001},
    {nombre: "el secreto de sus ojos", director: "santaolalla", fecha: 2014},
    {nombre: "la odisea de los giles", director: "darin", fecha: 2019},
]

//filter
const peliculaspos2010 = peliculas.filter (obj => obj.fecha > 2010)
console.log (peliculaspos2010)

//map
const directoresPelis = peliculas.map (peliculas => peliculas.director)
console.log (directoresPelis)

const nombrePelis = peliculas.map (peliculas => peliculas.nombre)
console.log (nombrePelis)

//concat
const DirectoresNombres = directoresPelis.concat (nombrePelis)
console.log (DirectoresNombres)

//factor propagacion
const DirectoresNombresFP = [...directoresPelis, ...nombrePelis]
console.log (DirectoresNombresFP)
