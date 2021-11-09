'use strict';

var config = require('../config');
var sendgrid = require('sendgrid')(config.sendgridKey);

exports.send = async (to, subject, body) => {
    sendgrid.send({
        to: to,
        from: 'onowemalya@gmail.com',
        subject: subject,
        html: body
    });
}
/*
const apiKey = '3d74dd817b16d44e856e5727506329a5-30b9cd6d-671d86fd';
const domain = 'onowemalya@gmail.com';

const mailgun = require('mailgun-js')({ domain, apiKey });



exports.send = async (to, subject, body) => {
    mailgun.messages().send({
        from: 'onowemalya@gmail.com',
        to: to,
        subject: subject,
        html: body,
        text: "Thanks for join us!!"
    });
    console.log('Sent!');
}
*/