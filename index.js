const express = require('express')
const app = express()
const { resolve } = require('path')

app.use(express.static(resolve(__dirname, './public')))

app.get('/', (req, res) => {
    res.sendFile(resolve(__dirname, 'app/index.html'))
})

app.listen(8000, () => console.log('Listening on port 8000'))