require('./configs/ddbb-connection.config')             // conexión BD

const express = require('express')
const app = express()

const Dog = require('./models/dog.model')               // modelo

app.use(express.static('public'))
app.set('views', `${__dirname}/views`)
app.set('view engine', 'hbs')


app.get('/', (req, res) => {

    Dog
        .find()
        .then(allDogs => res.render('dogs-page', { allDogs }))
        .catch(err => console.log('Ha habido un error:', err))
})



app.listen(3000, () => console.log('Server listening on port 3000'))