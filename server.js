const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');

// middlewares
app.use(cors());
app.use(express.json());
//  we can send unlimited payload if you put extended true...
app.use(express.urlencoded({ extended: true }));


// calling routes here
require('./apis')(app)

// listening port
app.listen(port, () => {
    console.log(`server is connected at ${port}`)
})