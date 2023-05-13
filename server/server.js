const express = require('express');
require("dotenv").config();
const app = express();
const createRouter = require('./helpers/create_router');
const cors = require('cors')
const { MongoClient } = require('mongodb');
const uri = process.env.DATABASE_URL


app.use(express.json());
app.use(cors())

MongoClient.connect(uri, {useUnifiedTopology: true})
  .then(client => {
    const db = client.db('LilyPad');
    const frogsCollection = db.collection('frogs')
    const frogsRouter = createRouter(frogsCollection)
    app.use('/api/frogs', frogsRouter)
  })
  .catch(console.error)

  MongoClient.connect(uri, {useUnifiedTopology: true})
  .then(client => {
    const db = client.db('LilyPad');
    const postsCollection = db.collection('posts')
    const postsRouter = createRouter(postsCollection)
    app.use('/api/posts', postsRouter)
  })
  .catch(console.error)

app.listen(9000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
