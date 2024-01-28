const WelcomeEmail = (fname, authorization_link) => {
  return ` <html>
      <head>
        <style>
          * {
            font-family: Arial, sans-serif;
            font-size: 16px;
            line-height: 1.4;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            background-color: #f2f2f2;
            padding: 24px;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 24px;
            background-color: #fff;
            border-radius: 6px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          }
          h1 {
            font-size: 28px;
            margin-bottom: 24px;
            text-align: center;
          }
          p {
            margin-bottom: 16px;
          }
          .button {
            display: inline-block;
            background-color: #0496FF;
            color: #fff;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 6px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Welcome to ProRouting, ${fname}!</h1>
          <p>We're thrilled to have you join us.</p>
          <p>Please click the button below to confirm your email address:</p>
          <p style="text-align: center;">
            <a href="${authorization_link}" class="button">Confirm Email</a>
          </p>
          <p>If you didn't sign up for our platform, please disregard this email.</p>
          <p>Thank you for choosing us!</p>
        </div>
      </body>
    </html>`;
};

module.exports = { WelcomeEmail };
