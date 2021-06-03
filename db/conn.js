const mongoose = require('mongoose')

const dbUrl = process.env.DB_URL
//process.env.DATABASE
mongoose
	.connect(dbUrl, {
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then(() => {
		console.log('DB Connection Successful')
	})
	.catch(() => {
		console.log('DB Connection Failed')
	})
