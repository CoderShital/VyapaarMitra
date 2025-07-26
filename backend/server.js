const express = require('express');
const app = express();

const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
connectDB();

app.use(cors());
// app.use(express.json());

// ROUTES
// app.use('/api/auth', require('./routes/authRoutes'));
// app.use('/api/users', require('./routes/userRoutes'));
// app.use('/api/products', require('./routes/productRoutes'));
// app.use('/api/orders', require('./routes/orderRoutes'));
// app.use('/api/admin', require('./routes/adminRoutes'));

const PORT = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.send('Welcome to the root!')
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Centralized error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server Error', error: err.message });
});
