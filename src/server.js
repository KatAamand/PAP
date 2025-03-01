const express = require('express'); 
const path = require('path'); 
const dotenv = require('dotenv'); 
const app = express(); 

// Configuration
dotenv.config(); 
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs'); 

// Middleware
app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 

// Importing routes
const routes = require('./src/routes/index'); 
app.use('/', routes); 

// Data
const products = require('./models/products');

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});


// Route for homepage
app.get('/', (req, res) => {
    res.render('index');
});