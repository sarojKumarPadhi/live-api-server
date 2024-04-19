const express = require('express');
const app = express();
const port = 5000;


app.get('/', (req, res) => {
    res.send("server is started but you have to go to (/send_sms) route for send otp thanks ");
    
})


app.get('/send_sms', (req, res) => {
    res.send(`your OTP has been sent to given phone Number ${req.query.phone_number} with  otp : ${req.query.otp}`);
        const fast2sms = require('fast-two-sms')
    var options = {authorization : "x4Zp3IUA7OliNTcGunMWqfs5X1m0QhtPCFBSJwegKaDE9Lb2vrel1RrEJ6s2V9KaWoH78TgYcOPkNDv4" ,message: `Thanks for using for jonkk services and your verfication code is : ${req.query.otp}`,  numbers : [`${req.query.phone_number}`]}

    fast2sms.sendMessage(options).then((response) => {
      console.log(response)
    })
      .catch((error) => {
      console.log(error)
    })
        console.log(req.query.phone_number)
    })


app.listen(port, () => {
    console.log(`server has been started at ${port}`)
    
})