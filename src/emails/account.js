const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'leandro.franc2008@hotmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the machine, ${name}. \nWhere have you been? \nIt's alright we've told you where you have been.`
    });
}

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'leandro.franc2008@hotmail.com',
        subject: 'Thanks for using our service',
        text: `Hey, what's up ${name}. \nWould mind telling us why are you leaving? \nPlease feel free to send an answer in this e-mail.`
    });
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}