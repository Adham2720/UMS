
import initApp from './src/router.js'
import express from 'express'


export const app = express();
const port = 5000

initApp(app,express);

// import sgMail from'@sendgrid/mail'
// import twilio from'twilio';
// const accountSid = 'AC3494540f4ccef5c41cc2631f4af8d958';
// const authToken = 'd190d6bf124feff77af8c5c54b8555a3';
// const client = twilio(accountSid, authToken);
// client.messages
//   .create({
//     body: 'Hello usef !',
//     from: '+12059003455',
//     to: '+201010390616' 
//   })
//   .then(message => console.log('Message sent:', message.sid))
//   .catch(error => console.error('Error:', error));






// async..await is not allowed in global scope, must use a wrapper


app.listen(port, ()=>{
 console.log(`running on port....... ${port} `)
})
