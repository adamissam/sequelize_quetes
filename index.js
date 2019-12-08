const express= require('express')
const app = express()
//const models = require('./data-player/models')
const port = process.env.PORT || 8007
const { Item } = require('./data-player/models');



app.get('/api/items', async (req, res) => {
  res.send({ items: await Item.findAll() });
});

const PORT = process.env.PORT || 8007;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});