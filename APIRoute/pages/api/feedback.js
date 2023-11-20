import fs from "fs";
import path from "path";
function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const feedback = req.body.feedback;
    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      feedback: feedback,
    };
    //store newFeedbak in database or in a file
    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const filedata = fs.readFileSync(filePath);
    const data = JSON.parse(filedata);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "Success!", feedback: newFeedback });
  } else {
    res.status(200).json({
      message: "This works!",
    });
  }
}
export default handler;
