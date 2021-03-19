const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'resources/views'));

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "public")));

app.get('/', (req, res) => {
    res.render('home');
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server is running at port:', port));
