const express = require('express')
const app = express()

app.post('/messages', (req, res) => res.send('Hello World!'))
app.listen(3000, () => console.log('Express API listening on port 3000'))
