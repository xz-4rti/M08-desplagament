const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');

const app = express();

// Middleware configuration
app.use(cors());
app.use(express.json()); // Parse JSON body content
app.use('/', routes); // Use routes

// Start the server
app.listen(5000, () => {
    console.log('Server is listening on port 5000');
});
