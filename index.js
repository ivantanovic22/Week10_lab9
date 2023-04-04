const express = require('express');
const app = express();
const path = require('path');
const public = path.join(__dirname, 'public');
const env = require('dotenv').config()
const cookieParser = require('cookie-parser')
app.use(cookieParser())
app.use(express.static(public));

// app.get('/', function (req, res) {
//     res.send('Hello and welcome to the guestbook application.');
// })

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.urlencoded({extended: false }));

const mustache = require('mustache-express');
app.engine('mustache', mustache());
app.set('view engine', 'mustache');

const router = require('./routes/guestbookRoutes');
app.use('/', router);

app.listen(3000, () => {
    console.log('Server started on port 3000. Ctrl^c to quit.');
})
