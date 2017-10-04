#!/usr/bin/env node

const lib = require('./lib.js');

let program = require('commander');

program
  .option('-s, --subject <subject>', 'Subject of the email')
  .option('-c, --content <content>', 'Content of the email')
  .option('-e, --sender <email>', 'Email of the sender')
  .option('-r, --recipient <email>', 'Email of the recipient')
  .parse(process.argv);

if (typeof program.subject === 'undefined'
  || typeof program.content === 'undefined'
  || typeof program.sender === 'undefined'
  || typeof program.recipient === 'undefined') {
   console.error('missing flag(s)');
   process.exit(1);
}

const opts = {
  from: program.sender,
  to: program.recipient,
  subject: program.subject,
  content: program.content,
};
lib.sendEmail(opts, (err, res) => {
  if (err) console.log('Error:', err);
  else console.log('Email sent.')
});
