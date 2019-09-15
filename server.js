const express = require('express');
var bodyParser = require('body-parser');

var mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress());
app.use(express.static('public'))
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({
    extended: true
}));

const port = process.env.PORT || 80;


app.get('/', (req, res) => {
    res.render('index')
});

var server = app.listen(port, () => console.log(`App listening on port: ${port}!`));
