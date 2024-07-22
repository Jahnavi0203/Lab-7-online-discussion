const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser'); // Import cookie-parser middleware

const app = express();
const PORT = 8086; // You can change the port if needed

// Middleware to parse JSON and URL encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // Use cookie-parser middleware

// Serve static files from the 'ITC505/module-7' directory
app.use('/ITC505/module-7', express.static(path.join(__dirname, 'ITC505', 'module-7')));

// Serve additional static files from 'LAB-7 online discussion' directory if needed
app.use('/ITC505/module-7', express.static(path.join(__dirname, 'LAB-7 online discussion')));

// Endpoint to serve the landing HTML file
app.get('/ITC505/module-7/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'ITC505', 'module-7', 'index.html'));
});

// Handle other specific routes
app.get('/home', (req, res) => {
  res.send('Welcome to Home Page');
});

app.get('/about', (req, res) => {
  res.send('This is About Us');
});

app.get('/contact', (req, res) => {
  res.send('Contact Us jahnavi@gmail.com');
});

// Route to set a cookie
app.get('/set-cookie', (req, res) => {
    res.cookie('userName', 'Jahnavi', { maxAge: 900000, httpOnly: true }); // Set a cookie with name 'userName'
    res.cookie('userEmail', 'jahnavi@gmail.com', { maxAge: 900000, httpOnly: true }); // Set a cookie with name 'userEmail'
    res.send('Cookies have been set!');
});

// Route to get a cookie
app.get('/get-cookie', (req, res) => {
    const userName = req.cookies.userName;
    const userEmail = req.cookies.userEmail;
    if (userName && userEmail) {
        res.send(`User Name: ${userName}, User Email: ${userEmail}`);
    } else {
        res.send('No cookies found!');
    }
});

// Handle 404 for undefined routes
app.use((req, res) => {
  res.status(404).send('Page Not Found');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
