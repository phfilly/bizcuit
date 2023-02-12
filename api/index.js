const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const app = express()

app.use(express.json())

app.use(cors())

app.use('/api', routes)

app.listen(8000, () => {
    console.log(`Server Started at ${8000}`)
})