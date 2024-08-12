// index.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

// Use product routes
app.use('/products', require('./routes/productroutes'));

app.listen(port, (error) => {
  if (error) {
    console.error(`Server failed to start: ${error}`);
  } else {
    console.log(`Server is running on port ${port}`);
  }
});
