const path = require('path');
const express = require('express');
const app = express();
const transporter = require('./config');
const dotenv = require('dotenv');
dotenv.config();

const buildPath = path.join(__dirname, '..', 'public');
app.use(express.json());
app.use(express.static(buildPath));

app.post('/send', (req, res) => {
    try {
        const mailOptions = {
            from: req.body.name,
            to: process.env.email,
            subject: 'New Form Entry',
            html: `<p>Name: ${req.body.name}</p><br>
            <p>Email: ${process.env.email}</p><br>
            <p>Message: ${req.body.message}</p>`

        };
        transporter.sendMail(mailOptions, function(err, info) {
            if (err) {
                res.status(500).send({
                    success: false,
                    message: 'Something went wrong. Try again in a while'
                });

            } else {
                res.send({
                    success: true,
                    message: 'Thanks for writing me :) I will be back to you asap!'

                });
            }
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Something went wrong. Try again in a while'
        });
    }
});

app.listen(443, () => {
    console.log('Server start on port 8000');
});