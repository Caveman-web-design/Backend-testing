const express = require('express');
const app = express();

// Define a route that responds with a simple message
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Start the server and listen on port 3000 (you can change the port number)
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});