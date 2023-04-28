const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router');
const cors = require('cors')

// middleware
app.use(express.json());
app.use(cors())


MongoClient.connect('mongodb://127.0.0.1:27017', {useUnifiedTopology: true})
  .then(client => {
    const db = client.db('LilyPad');
    const frogsCollection = db.collection('frogs')
    const frogsRouter = createRouter(frogsCollection)
    app.use('/api/frogs', frogsRouter)
  })
  .catch(console.error)

  MongoClient.connect('mongodb://127.0.0.1:27017', {useUnifiedTopology: true})
  .then(client => {
    const db = client.db('LilyPad');
    const postsCollection = db.collection('posts')
    const postsRouter = createRouter(postsCollection)
    app.use('/api/posts', postsRouter)
  })
  .catch(console.error)

// ====== ORIGINAL CONTENT =====
// MongoClient.connect('mongodb://127.0.0.1:27017', {useUnifiedTopology: true})
//   .then(client => {
//     const db = client.db('<database_name>');
//     const NAMECollection = db.collection('<collection_name>')
//     const NAMERouter = createRouter(NAMECollection)
//     app.use('/api/NAME', NAMERouter)
//   })
//   .catch(console.error)

//   MongoClient.connect('mongodb://127.0.0.1:27017', {useUnifiedTopology: true})
//   .then(client => {
//     const db = client.db('<database_name>');
//     const NAMECollection = db.collection('<collection_name>')
//     const NAMERouter = createRouter(NAMECollection)
//     app.use('/api/NAME', NAMERouter)
//   })
//   .catch(console.error)

app.listen(9000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
