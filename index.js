const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.prt || 5000;

//Middle ware
app.use(bodyParser.json());

//Mongo DB connection
mongoose.connect('mongodb://localhost:27017/', {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
})

.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

// Routes
const bookRoutes = require('./routes/books');
app.use('/api/books', bookRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});