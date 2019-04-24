const express = require('express');
const app = express();

// MIDDLEWARE
// Middleware for static files
app.use(express.static('public'));


// ROUTES
// GET `/` route
app.get('/', (request, response, next)=> {
  response.sendFile(__dirname + '/public/views/index.html');
});

// GET `/about` route
app.get('/about', (request, response, next)=> {
  response.sendFile(__dirname + '/public/views/about.html');
});

// 404 route
app.get('/*', (request, response, next)=> {
  response.status(404);
  response.send('<h1>404 - Page Not Found</h1>');
});


// START THE SERVER
app.listen(3000, () => {
  console.log('My first express up is running :) ');
});
