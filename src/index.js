// Imports
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

const  middlewares = require('./middlewares');

// Declarations
const app = express();

mongoose.connect(process.env.DATABSE_URL, {
	useNewUrlParser: true,
});

app.use(morgan('common'));
app.use(helmet());
app.use(cors({
	origin: 'http://localhost:3000',
}));

app.get('/', (req, res) => {
	res.json({
		message: 'Hello World!'
	});
});

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const port = process.env.PORT || 1337;
app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`);
});