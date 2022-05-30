const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World! :)')
});

const items = [
    {id: 1, name: 'chips', count: 20},
    {id: 2, name: 'rice-5kg', count: 30},
    {id: 3, name: 'biscuit', count: 10},
    {id: 4, name: 'milk-250g', count: 20},
    {id: 5, name: 'miranada-1L', count: 15}
];
app.get('/items', (req, res) => {
    res.send(items);
  });

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
  })