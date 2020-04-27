const express = require('express');
const connectDB = require('./config/db');
const app = express();
connectDB();
app.get('/',(req,res) => res.json({ msg: 'Welcome to ContactKeeper API...'}));

app.use(express.json({extended:false}));

app.use('/api/users',require('./routes/users'));
app.use('/api/contacts',require('./routes/contacts'));
app.use('/api/auth',require('./routes/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));