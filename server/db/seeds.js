use LilyPad;
db.dropDatabase();

const frogs = [
    {
      "name": "Kermitt",
      "image_url": "placeholder",
      "friends": []
    },
    {
      "name": "Throg",
      "image_url": "placeholder",
      "friends": []
    },
    {
      "name": "Bogariel Frogariel",
      "image_url": "placeholder",
      "friends": []
    },
    {
      "name": "Hot Toady",
      "image_url": "placeholder",
      "friends": []
    },
    {
        "name": "Bully the Frog",
        "image_url": "placeholder",
        "friends": []
      }
  ]

const insertFrogResult = db.frogs.insertMany(frogs)

const kermittId = insertFrogResult.insertedIds[0]
const throgId = insertFrogResult.insertedIds[1]


db.posts.insertOne(
    {
        "poster": kermittId,
        "receiver": throgId,
        "image_url": "https://images.unsplash.com/photo-1622268002940-4a58833ec8f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
        "comment": {
            "original": ""
        }
    },
)