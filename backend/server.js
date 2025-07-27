const express = require('express');
const app = express();

const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
connectDB();

app.use(cors());
app.use(express.json());

// ROUTES
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/supplier', require('./routes/supplierRoutes'));
app.use('/api/buyer', require('./routes/buyerRoutes'));
app.use('/api/materials', require('./routes/materialRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));


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
