const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to CI-CD App");
});

app.post("/create-account", (req, res) => {
  const { username, password } = req.body;

  // Password regex
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password required" });
  }

  if (!passwordRegex.test(password)) {
    return res.status(400).json({ message: "Password does not meet security requirements" });
  }

  return res.status(200).json({ message: "Account created successfully!" });
});

app.listen(3000, () => console.log("http://localhost:3000"));
module.exports = app;
