const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const routes = require('./routes/index');

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

// Midlewares
app.use((req, res, next) => {
  console.log(`${req.url} -${req.method}`); // Utilizar apostrofes ` ` si no el codigo no funciona
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Routes
app.use(routes);


// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});
