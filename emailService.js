const sgMail = require("@sendgrid/mail");
sgMail.setApiKey("");

const sendMail = (email, otp) => {
  return new Promise((resolve, reject) => {
    try {
      const msg = {
        from: "",
        to: email,
        subject: "Sendgrid Email Service",
        html: "<p> Your otp is </p>" + otp,
      };
      sgMail
        .sendMultiple(msg)
        .then((msg) => {
          resolve(msg);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = {
  sendMail: sendMail,
};
