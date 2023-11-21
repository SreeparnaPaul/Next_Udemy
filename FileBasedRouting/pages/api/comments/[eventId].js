function handler(req, res) {
  const eventId = req.query.eventId;
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
    console.log(email, name, comment);
    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      comment,
    };
    res.status(201).json({ message: "Added Comment", comment: newComment });
  }
  if (req.method === "GET") {
    const dummyList = [
      { id: "c1", name: "Sree", comment: "First comment" },
      { id: "c2", name: "Parna", comment: "Second comment" },
    ];
    res.status(200).json({ comments: dummyList });
  }
}
export default handler;
