const express = require("express");
const passport = require("passport");
const session = require("express-session");
require("dotenv").config();

const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./middleware/passportConfig')

// Routes
const authRoutes = require('./routes/authRoutes');
const homeRoutes = require('./routes/homeRoutes');

app.use('/', homeRoutes);
app.use('/auth', authRoutes);

// Handle other routes (if needed)
app.get('*', (req, res) => {
  res.status(404).send('Not Found');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});