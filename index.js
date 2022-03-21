//Include the express library
const express = require('express');

//Include the morgan middleware
const morgan = require('morgan');

//Include the cors middleware
const cors = require('cors');

//Create a new express application
const app = express();

//Tell express we want to use the morgan library
app.use(morgan('dev'));

//Tell express we want to use the cors library
app.use(cors());

//Start up our server
const port = 3030;
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}/`);
});

let counter = 0;

// app.get("/", (req, res) => {
//   console.log("got request!")
//   res.send("Hello!")
// })

// Implement API endpoint
app.get('/', (req, res) => {
	console.log('NVIDIA GeForce GTX 1080 Ti -> ', req.method);
	res.json({ msg: 'hello!' });
});

app.get('/bye', (req, res) => {
	res.json({ msg: 'goodbye!' });
});

app.get('/greeting', (req, res) => {
	counter++;
	res.json({ greeting: 'good day' });
});

app.get('/greeting/morning', (req, res) => {
	counter++;
	res.json({ greeting: 'good morning' });
});

app.get('/greeting/afternoon', (req, res) => {
	counter++;
	res.json({ greeting: 'good afternoon' });
});

app.delete('/greeting', (req, res) => {
  res.json({greeting: 'good bye'})
})

app.get('/count', (req, res) => {
	res.json({count: counter})
})
