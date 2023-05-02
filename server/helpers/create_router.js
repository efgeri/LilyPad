const express = require('express');
const { ObjectId } = require('mongodb')

const handleError = res => {
  return err => {
  console.error(err);
  res.status(500);
  res.json({ status: 500, error: err})
  }
}

const createRouter = function (collection) {

  const router = express.Router();


  // INDEX
  router.get('/', (req, res) => {
    collection
      .find()
      .toArray()
      .then(docs => res.json(docs))
      .catch(handleError(res))
  })

  // SHOW
  router.get('/:id', (req, res) => {
    const id = req.params.id
    collection
      .findOne({ _id: new ObjectId(id) })
      .then(doc => res.json(doc))
      .catch(handleError(res))
  })

  // CREATE
  router.post('/', (req, res) => {
    const newData = req.body
    collection
      .insertOne(newData)
      .then(result => {
      res.json({ _id: result.insertedId})
      })
    .catch(handleError(res))
  })

  // DESTROY
  router.delete('/:id', (req, res) => {
    const id = req.params.id
    collection
      .deleteOne({ _id: new ObjectId(id) })
      .then(result => res.json(result))
      .catch(handleError(res))
  })
  
  //UPDATE in mongodb drivers 5.3
  router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    collection
      .updateOne(
        { _id: new ObjectId(id) },
        { $set: updatedData }
      )
      .then(result => res.json(result))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  })

  // Like a post
router.put('/:id/like', (req, res) => {
  const id = req.params.id;
  const frogId = req.body.frogId;

  collection
    .updateOne(
      { _id: new ObjectId(id) },
      { $addToSet: { likes: frogId } }
    )
    .then(result => res.json(result))
    .catch(handleError(res));
});

// Unlike a post
router.put('/:id/unlike', (req, res) => {
  const id = req.params.id;
  const frogId = req.body.frogId;

  collection
    .updateOne(
      { _id: new ObjectId(id) },
      { $pull: { likes: frogId } }
    )
    .then(result => res.json(result))
    .catch(handleError(res));
});


  
  
  return router;
  
  
};

module.exports = createRouter;