const express = require('express');
const booksRoute = require('./route/booksRoute');
const usersRoute = require('./route/usersRoute');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.use(booksRoute);
app.use(usersRoute);
app.listen(3333);