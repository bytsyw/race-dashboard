const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const leagueRoutes = require('./root/backend/routes/leagueRoutes');
const matchRoutes = require('./root/backend/routes/matchRoutes');
const teamRoutes = require('./root/backend/routes/teamRoutes');
const adminRoutes = require('./root/backend/routes/adminRoutes');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Session Setup
app.use(session({
  secret: 'yourSecretKey',
  resave: false,
  saveUninitialized: true
}));

// MongoDB Connection
const uri = "mongodb+srv://bent536:Gl418nSX2NYUC9Gs@cluster0.3dejykk.mongodb.net/";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error(err));

// Routes
app.use('/leagues', leagueRoutes);
app.use('/matches', matchRoutes);
app.use('/teams', teamRoutes);
app.use('/admin', adminRoutes);

// Home Page Route
app.get('/', (req, res) => {
  res.redirect('/leagues');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});