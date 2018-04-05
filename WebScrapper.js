var knwl = require('knwl.js'),
    knwlInstance = new knwl('english'),
    readline = require('readline'),
    request = require('request');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Input an email address: ', function(strInput) {
    console.log(" ");
    var arrInput = strInput.split("@");
    
    request("https://www." + arrInput[1], function(err, response, body) {
        if (err) {
            console.log(err);
        }
        else {
            knwlInstance.init(body);
            var arrPhones = knwlInstance.get('phones') ,
            arrEmails = knwlInstance.get('emails') ;
        
            if(arrPhones.length == 0){
                console.log("No phone numbers found");
                console.log("------------------------------");
            }
            else{
                for(var i = 0; i <= (arrPhone.length - 1); i++){
                    delete arrPhone[i]['preview'];
                    delete arrPhone[i]['found'];
                }
                console.log(arrPhones);
                console.log("------------------------------");
            }
            if(arrEmails.length == 0){
                console.log("No email addresses found");
            }
            else{
                for(var i = 0; i <= (arrEmails.length - 1); i++){
                    delete arrEmails[i]['preview'];
                    delete arrEmails[i]['found'];
                }
                console.log(arrEmails);
            }
        }
    });
    rl.close();
});
