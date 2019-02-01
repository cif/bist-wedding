/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
// Configure the email transport using the default SMTP transport and a GMail account.
// For other types of transports such as Sendgrid see https://nodemailer.com/transports/
// TODO: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

const sendEmail = (change, going) => {
  console.log('changed???', change)
  const snapshot = change.after;
  const { names, guests } = snapshot.val();


  const mailOptions = {
    from: '"Wedding Website" <noreply@thebistwedding.com>',
    to: 'email@benipsen.com, sarahtantillo@gmail.com',
  };

  // Building Email message.
  mailOptions.subject = going
    ? 'Someone is coming to the wedding...'
    : 'We got more space opened up 🎉!';

  mailOptions.text = going
      ? `${names} is coming with ${guests}`
      : `${names} will not be partying with us.`


  return mailTransport.sendMail(mailOptions)
    .then(() => console.log('Sent notification'))
    .catch((error) => console.error('There was an error while sending email:', error));
}
// Sends an email confirmation when a user changes his mailing list subscription.
exports.sendEmailGoing = functions
  .database
  .ref('/going/{name}')
  .onWrite((change) => sendEmail(change, true));

  exports.sendEmailNotGoing = functions
  .database
  .ref('/notgoing/{name}')
  .onWrite((change) => sendEmail(change, false));