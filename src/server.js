const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
// const host = '0.0.0.0';


app.use(express.static('src')); // This serves static files from the 'src' directory


app.listen(port, () => {
  console.log(`Running on ${port}`);
});

