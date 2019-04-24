const express = require('express');

const app = express();


// Middleware for static files
app.use(express.static('public'));

// Our first route
app.get('/', (request, response, next)=> {
  response.sendFile(__dirname + '/public/views/index.html');
});

// Our secon route
app.get('/about', (request, response, next)=> {
  response.send('<h1>About me - page</h1>')
});

app.listen(3000, () => {
  console.log('My first express up is running :) ');
});
