const path = require("path");
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const PORT = 3000
app.use('/', express.static('public'))

app.use(cors({ origin: '*', credentials: true }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs');
app.get('*', (req, res) => res.render(path.join(__dirname, './views/index.ejs')))

app.listen(PORT, () => console.log('\x1b[36m%s\x1b[0m', 'running at http://localhost:' + PORT))