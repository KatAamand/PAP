const express = require('express'); 
const app = express(); 
const port = 3000; 

app.set('view engine', 'ejs'); 
app.use(express.urlencoded({ extended: true})); 

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
});


// Data lists
const event = []; 

const products = [
    { navn: 'Basishold', prisUdenMoms: 275 },
    { navn: 'Mixreformer', prisUdenMoms: 275 },
    { navn: 'Morgentræning', prisUdenMoms: 275 },
    { navn: 'Mandagstræning', prisUdenMoms: 275 },
    { navn: 'Fredagstræning', prisUdenMoms: 275 },
    { navn: 'P-møde', prisUdenMoms: 100}
  ];
  

// Routes 

app.get('/invoice', (req, res) => {
    res.render('invoice', { events });
});

app.post('/invoice', (req, res) => {
    res.redirect('/preview');
});


app.get('/preview', (req, res) => {
    res.render('preview', { prdfData });
});


app.post('/approve', (req, res) => {
    res.send('Faktura sendt!');
});

app.get('/products', (req, res) => {
    res.render('products', { products })
})