const express = require("express");
const { sendMail } = require("./emailService");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let otp = Math.random();
otp = otp * 1000000;
otp = parseInt(otp);
console.log(otp);
app.post("/send", async (req, res) => {
  let email = req.body.email;
  let EmailSent = await sendMail(email, otp);
  res.status(200).send(EmailSent);
});
app.post("/verify", (req, res) => {
  let otpv = req.body.otpv;
  if (otpv == otp) {
    res.send("Login Successfully");
  } else {
    res.status(400).send("Login failed");
  }
});
app.listen(8080, () => console.log("server is running on port 8080"));
