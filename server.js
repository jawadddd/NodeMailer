///////////node mailer with separate html file
var express=require('express');
var app=express();
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
var nodemailer = require('nodemailer');

app.get('/',function(req,response){
response.sendFile('D:/University Semesters/6th Sem/web Programming/activities/nodeMailer nodejsActivity/index.html');
});
    
app.post('/sendMail',function(req,response){
    console.log("reached");
const nameIs=req.body.name;
const emailIs=req.body.email;
const subjectIs=req.body.subject;
const msgIs=req.body.msg;


var transporter = nodemailer.createTransport({
    port: 465,
    host:"smtp.gmail.com",
      auth: {
        user: 'jawadhaider682@gmail.com',//add here your mail
        pass: 'hhvytvawppihugqt'//add here your gmail app pass
        },
     logger: true,
      debug: true,
      secureConnection: false,
    secure: true,
    });
    var mailOptions={
        from:'jawadhaider682@gmail.com',
        to:emailIs,
        subject:subjectIs,
        text:msgIs
    };
    transporter.sendMail(mailOptions,function(error,info){
        if(error)
        {
            console.log(error);
        }
        else
        {
            console.log("Email sent to your entered email bro_"+nameIs);
        }
    });
    




response.writeHead(200, {'Content-Type': 'text/html'});
response.end("Response Submitted");


});  
var server=app.listen(8003,function(){
console.log("Server running at 8003");
});