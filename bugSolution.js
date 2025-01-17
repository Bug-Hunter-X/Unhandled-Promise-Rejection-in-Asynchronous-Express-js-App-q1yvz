const express = require('express');
const app = express();
app.get('/', async (req, res) => {
  try {
    // Simulate an asynchronous operation that might fail
    await new Promise(resolve => setTimeout(resolve, 1000));
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      // Simulate a database error
      throw new Error('Database connection failed');
    } else {
      res.send('Hello, world!');
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).send('Internal Server Error');
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));