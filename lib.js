const Mailgun = require('mailgun-js');

module.exports.mailgun = new Mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
});

module.exports.sendEmail = (opts, callback) => {
  module.exports.mailgun.messages().send({
    from: opts.from,
    to: opts.to,
    subject: opts.subject,
    text: opts.content,
    html: opts.content,
  }, callback);
}
