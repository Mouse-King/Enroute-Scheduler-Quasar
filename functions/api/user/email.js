const axios2 = require("axios2").default;

const { MAILERSEND_API_KEY } = "../../config/config.js";

const SendEmail = async (fname, email, authorization_link) => {
  const message = {
    to: email,
    from: "noreply@prorouting.ai",
    subject: "Confirm your email for ProRouting",
    text: "",
    name: fname,
    email,
    authorization_link,
    html: SendWelcomeEmail(fname, authorization_link),
    mailerSendToken: MAILERSEND_API_KEY,
  };

  axios2
    .post(
      "https://api.mailersend.com/v1/email",
      {
        from: {
          email: `${message.from}`,
          name: "ProRouting",
        },
        to: [
          {
            email: `${message.to}`,
            name: null,
          },
        ],
        subject: `${message.subject}`,
        text: `${message.subject}`,
        html: `${message.html}`,
        variables: [
          {
            email: `${message.to}`,
            substitutions: [
              {
                var: "company",
                value: "ProRouting",
              },
            ],
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${message.mailerSendToken}`,
        },
      }
    )
    .then((res) => {
      axios2
        .post(
          "https://api.mailersend.com/v1/api/subscribers",
          {
            email: message.to,
            fields: {
              name: name,
            },
            groups: [""],
          },
          {
            headers: {
              Authorization: `Bearer ${message.mailerSendToken}`,
            },
          }
        )
        .then((res) => {
          return {
            success: true,
            message: "Email Added",
          };
        })
        .catch((e) => {
          console.error("error:", e);
        });
      return {
        success: true,
        message: "Email Sent",
      };
    })
    .catch((e) => {
      console.error("error:", e);
    });
};

module.exports = {
  EmailController: {
    SendEmail,
  },
};
