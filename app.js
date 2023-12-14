const express = require('express'); 
const app = express();
const blogRoutes = require('C:/Users/under/Desktop/FHICT/SEM3/FED/blogapp/routes/blogRoutes.js');
const db = require('./database'); // Ensure this path is correct to your database setup file

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); // Body parser for form data

// Routes
app.get('/', (req, res) => res.redirect('/blogs')); // Redirect root to the blogs
app.use('/blogs', blogRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));