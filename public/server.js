const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); // This serves static files from the 'public' directory

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});