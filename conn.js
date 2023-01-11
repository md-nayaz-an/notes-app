const { MongoClient } = require("mongodb");


let db
async function connectToDb() {
  try {
    const url = 'mongodb+srv://nayaz:mohammed@cluster0.lkbjb36.mongodb.net/';
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

    await client.connect();
    console.log('Connected to db');
    db = client.db("notes_db");
    console.log(db)
  }
  catch(e) {
    console.error(e);
  }
}

function getDb() {
  return db;
}

connectToDb()

module.exports = { connectToDb, getDb };