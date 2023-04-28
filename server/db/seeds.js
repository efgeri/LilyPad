use LilyPad;
db.dropDatabase();

const frogs = [
    {
      "name": "Kermitt",
      "image_url": "https://images.unsplash.com/photo-1598537179958-687e6cc625fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
      "friends": []
    },
    {
      "name": "Throg",
      "image_url": "https://images.unsplash.com/photo-1559253664-ca249d4608c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      "friends": []
    },
    {
      "name": "Bogariel Frogariel",
      "image_url": "https://images.unsplash.com/photo-1591575930710-f88ddf08a52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      "friends": []
    },
    {
      "name": "Hot Toady",
      "image_url": "https://images.unsplash.com/photo-1579380608611-224fa7dce7b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      "friends": []
    },
    {
        "name": "Bully the Frog",
        "image_url": "https://images.unsplash.com/photo-1560726853-257e78b87eca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80",
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