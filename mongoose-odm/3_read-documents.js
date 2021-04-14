require('./0_ddbb-connection')

const Dog = require('./models/dog.model')




// // .find()
// // Sin argumento, retorna un array de objetos con todos los registros 

// Dog
//     .find()
//     .then(allDogsFromDB => console.log(`Hay un total de ${allDogsFromDB.length} perros`))
//     .catch(err => console.log('Se produjo un error:', err))






// // .find()
// // Puede recibir un primer argumento (query), retorna un array de objetos con todos los registros que hagan match

// Dog
//     .find({ age: { $lt: 13 } })
//     .then(allDogsFromDB => allDogsFromDB.forEach(elm => console.log(`El perro ${elm.name} tiene ${elm.age} años`)))
//     .catch(err => console.log('Se produjo un error:', err))







// // .findById()
// // Recibe un string con un ID, retorna el objeto que haga match, o null si no exitse

// Dog
//     .findById('6076b2d362b0b54d12c6dd92')
//     .then(theDog => console.log(theDog))
//     .catch(err => console.log('Se produjo un error:', err))






// .findOne()
// Recibe un argumento (query), retorna un objeto con el primer registro que haga match 
Dog
    .findOne({ age: { $lt: 6 } })
    .then(dogs => console.log(dogs))
    .catch(err => console.log('Se produjo un error:', err))