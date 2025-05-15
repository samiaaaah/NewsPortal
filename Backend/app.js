// app.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./config/db.js');

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

// Import routes
const newsRouter = require('./routes/newsRouter.js');
const categoryRouter = require('./routes/categoryRouter.js');
const userRouter = require('./routes/userRouter.js');

// Routes
app.use('/news', newsRouter);
app.use('/category', categoryRouter);
app.use('/admin', userRouter);

// Test route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Database connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

// Start server
app.listen(port, () => {
  console.log(`Your app listening on port ${port}`);
});
