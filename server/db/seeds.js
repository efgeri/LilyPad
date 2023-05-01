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
const bogarielId = insertFrogResult.insertedIds[2]
const hotToadyId = insertFrogResult.insertedIds[3]
const bullyId = insertFrogResult.insertedIds[4]

const posts = [
  {
    "poster": kermittId,
    "receiver": throgId,
    "image_url": "https://images.unsplash.com/photo-1622268002940-4a58833ec8f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
    "comment": {
        "original": "This is a comment",
        "likes": [kermittId]
    }
  },
  {
    "poster": hotToadyId,
    "receiver": kermittId,
    "image_url": "https://images.unsplash.com/photo-1622268002940-4a58833ec8f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
    "comment": {
        "original": "This is not a comment",
        "likes": []
    }
  },
  {
    "poster": bullyId,
    "receiver": bogarielId,
    "image_url": "",
    "comment": {
        "original": "This could be a comment, but without an image",
        "likes": []
    }
  },
  {
    "poster": bullyId,
    "receiver": throgId,
    "image_url": "https://images.unsplash.com/photo-1622268002940-4a58833ec8f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
    "comment": {
        "original": "This could be a comment, but without an image",
        "likes": []
    }
  },
  {
    "poster": hotToadyId,
    "receiver": bogarielId,
    "image_url": "",
    "comment": {
        "original": "This could be a comment, but without an image",
        "likes": []
    }
  },
  {
    "poster": throgId,
    "receiver": bogarielId,
    "image_url": "",
    "comment": {
        "original": "This could be a comment, but without an image",
        "likes": []
    }
  },
  {
    "poster": hotToadyId,
    "receiver": bogarielId,
    "image_url": "https://images.unsplash.com/photo-1622268002940-4a58833ec8f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
    "comment": {
        "original": "This could be a comment, but without an image",
        "likes": []
    }
  },
  {
    "poster": bullyId,
    "receiver": bogarielId,
    "image_url": "",
    "comment": {
        "original": "This could be a comment, but without an image",
        "likes": []
    }
  },
  {
    "poster": kermittId,
    "receiver": bogarielId,
    "image_url": "",
    "comment": {
        "original": "This could be a comment, but without an image",
        "likes": []
    }
  },
  {
    "poster": hotToadyId,
    "receiver": throgId,
    "image_url": "",
    "comment": {
        "original": "This could be a comment, but without an image",
        "likes": []
    }
  },
  {
    "poster": kermittId,
    "receiver": hotToadyId,
    "image_url": "https://images.unsplash.com/photo-1622268002940-4a58833ec8f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
    "comment": {
        "original": "This could be a comment, but without an image",
        "likes": []
    }
  },
  {
    "poster": bullyId,
    "receiver": kermittId,
    "image_url": "",
    "comment": {
        "original": "This could be a comment, but without an image",
        "likes": []
    }
  },
]

const insertPostResult = db.posts.insertMany(posts)
