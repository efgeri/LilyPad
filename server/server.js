const express = require('express');
require("dotenv").config();
const app = express();
const createRouter = require('./helpers/create_router');
const cors = require('cors')
const mongoose = require('mongoose')
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.DATABASE_URL


// middleware
app.use(express.json());
app.use(cors())




// Create a MongoClient with a MongoClientOptions object to set the Stable API version
console.log(uri)
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);




// mongoose.connect(uri || 'mongodb://127.0.0.1:27017')
MongoClient.connect(uri, {useUnifiedTopology: true})
  .then(client => {
    const db = client.db('LilyPad');
    const frogsCollection = db.collection('frogs')
    const frogsRouter = createRouter(frogsCollection)
    app.use('/api/frogs', frogsRouter)
  })
  .catch(console.error)

  // mongoose.connect(uri || 'mongodb://127.0.0.1:27017')
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
