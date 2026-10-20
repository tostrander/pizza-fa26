// Import the express module
import express from 'express';

// Create an instance of an
// express application
const app = express();

// Define a port number for
// our server to listen on
const PORT = 3000;

// Create an array to store orders
const orders = [];

// Enable static file serving
app.use(express.static('public'));

// Add "middleware" to allow the app to parse form data
// Access form data through req.body
app.use(express.urlencoded({ extended: true }));

// Define a default route ("/")
app.get('/', (req, res) => {
    //res.send('Welcome to Poppa\'s Pizza');
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

// Add a contact route to display a contact view page
app.get('/contact-us', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/contact.html`);
});

// Add an order confirmation route
app.get('/confirm-order', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/confirm.html`);
});

// Add a route to process a pizza order
app.post('/submit-order', (req, res) => {

    // Create a JSON object to store order data
    const order = req.body;
    order['timestamp'] = new Date();

    console.log(order);

    // Add order object to orders array
    orders.push(order);
    console.log(orders);

    // Display the confirmation page
    res.sendFile(`${import.meta.dirname}/views/confirm.html`);

});

// Start the server on the designated port
app.listen(PORT, () => {
    console.log(`Server is running at 
        http://localhost:${PORT}`);
});

