const express = require('express')
const cors = require('cors')
const mongoDBConnection = require('./connection.js')
const app = express()
const dotenv = require('dotenv')
const router = require('./router/index')
dotenv.config()
const PORT = process.env.PORT || 3002


app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

mongoDBConnection.connectToCluster()

app.use(router)

app.listen(PORT, () => {
    console.log(`Server listening on PORT http://localhost:${PORT}`)
})
