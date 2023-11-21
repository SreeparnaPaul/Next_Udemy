import { MongoClient } from "mongodb";
async function handler(req, res) {
  const eventId = req.query.eventId;
  const client = new MongoClient(
    "mongodb+srv://sreeparnapaul21:sreeparna@cluster0.9fu3q59.mongodb.net/events?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  if (req.method === "POST") {
    const { email, name, comment } = req.body;
    if (
      !email.includes("@") ||
      !email.trim() === "" ||
      !name ||
      !name.trim() === "" ||
      !comment ||
      !comment.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input" });
      return;
    }
    const newComment = {
      email,
      name,
      comment,
      eventId,
    };
    await client.connect();

    const db = client.db();
    const result = await db.collection("comments").insertOne(newComment);

    console.log(result);
    newComment.id = result.insertedId;

    res.status(201).json({ message: "Added Comment", comment: newComment });
  }
  if (req.method === "GET") {
    const db = client.db();
    const documents = await db
      .collection("comments")
      .find()
      .sort({ _id: -1 })
      .toArray();
    res.status(200).json({ comments: documents });
  }
  client.close();
}
export default handler;
