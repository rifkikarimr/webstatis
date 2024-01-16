const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
// const host = '0.0.0.0';


app.use(express.static('public')); // This serves static files from the 'public' directory


app.listen(port, () => {
  console.log(`Running on ${port}`);
});

