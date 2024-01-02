// Create web server to handle request and response
// const http = require('http');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const commentRouter = require('./routes/commentRouter');
const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');

// Create an express application
const app = express();

app.use(morgan('dev'));

// Parse the body of the request message which is formatted in JSON
app.use(bodyParser.json());

// Mount the router module on the /dishes route
app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);
app.use('/comments', commentRouter);

// Serve static files
app.use(express.static(__dirname + '/public'));

// Start the server
// const hostname = 'localhost';
// const port = 3000;
// const server = http.createServer(app);
// server.listen(port, hostname, () => {
// 	console.log(`Server running at http://${hostname}:${port}/`);
// });

// Start the server
const port = 3000;
app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}/`);
});
