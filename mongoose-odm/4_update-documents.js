require('./0_ddbb-connection')

const Dog = require('./models/dog.model')


// .findByIdAndUpdate()
// Recibe string con id, y la manipulación
// Por defecto, retorna el elemento anterior al update
// El argumento opcional {new: true} hará que retorne el nuevo elemento

// Dog
//     .findByIdAndUpdate('6076b474031fa94d25f29598', { $inc: { age: 100 }, city: 'Oviedo' }, { new: true })
//     .then(dog => console.log("El perro modificado es:", dog))
//     .catch(err => console.log('Hubo un error', err))





// // .updateOne()
// // Recibe query, actualiza el primer match
// // Retorna objeto con detalles de la operación

// Dog
//     .updateOne({ name: 'Cartucho' }, { name: 'Cartucho reloaded' })
//     .then(info => console.log("Los detalles de la modificación son:", info))
//     .catch(err => console.log('Hubo un error', err))





// .updateMany()
// Recibe query, actualiza todos los documentos que hagan match
// Retorna objeto con detalles de la operación

Dog
    .updateMany({ name: 'Popino' }, { name: 'Popino the best doggy' })
    .then(details => console.log("Los detalles de la modificación son:", details))
    .catch(err => console.log('Hubo un error', err))