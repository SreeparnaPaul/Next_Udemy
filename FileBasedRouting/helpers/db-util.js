import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const client = new MongoClient(
    "mongodb+srv://sreeparnapaul21:sreeparna@cluster0.9fu3q59.mongodb.net/events?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  await client.connect();
  return client;
}
export async function insertDocument(client, collection, document) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db();
  const documents = await db.collection(collection).find().sort(sort).toArray();
  return documents;
}
