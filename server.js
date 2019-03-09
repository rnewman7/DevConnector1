const express = require('express');
const mongoose = require('mongoose');
const app = express();

const db = require('./config/keys').mongoURI;
const users = require('./routes/api/users');
const posts = require('.routes/api/posts');
const profile = require('./routes/api/profile');

//Connect to db 
mongoose    
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

//Let's write our first route
app.get('/', (req, res) => res.send('Hello!'));

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port =process.env.PORT || 5200;
app.listen(port, () => console.log(`Server running on port ${port}`));