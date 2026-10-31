# Portfolio contact form

The contact form emails each message to `rehanmdmoin@gmail.com` through Gmail SMTP. MongoDB is optional and is only used to keep a copy of messages.

## Configure email

1. Enable 2-Step Verification on the Google account used to send the messages.
2. Create a Google App Password for this application.
3. Copy `.env.example` to `.env` and set `SMTP_USER` to the sending Gmail address and `SMTP_PASS` to the App Password. Do not use your regular Gmail password or commit `.env`.
4. Install dependencies with `npm install`, then start the server with `npm start`.

The recipient address is configured in the server and does not need to be changed. The `SMTP_HOST` and `SMTP_PORT` values shown in `.env.example` use Gmail's standard SMTP settings.
