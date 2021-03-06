var knwl = require('knwl.js'),
    knwlInstance = new knwl('english'),
    readline = require('readline'),
    unique = require('array-unique'),
    request = require('request');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Input an email address: ', function(strInput) {
    console.log(" ");
    var arrInput = strInput.split("@");
    
    request("http://www." + arrInput[1], function(err, response, body) {
        if (err) {
            console.log(err);
        }
        else {
            knwlInstance.init(body);
            var arrPhones = knwlInstance.get('phones') ,
            arrEmails = knwlInstance.get('emails');
        
            if(arrPhones.length == 0){
                console.log("No phone numbers found");
                console.log("------------------------------");
            }
            else{
                var arrUPhones = Array();
                for(var i = 0; i <= (arrPhones.length - 1); i++){
                    delete arrPhones[i]['preview'];
                    delete arrPhones[i]['found'];
                    arrUPhones[i] = arrPhones[i]['phone'];
                }
                console.log(unique(arrUPhones));
                console.log("------------------------------");
            }

            if(arrEmails.length == 0){
                console.log("No email addresses found");
            }
            else{
                var arrUEmails = new Array();
                for(var i = 0; i <= (arrEmails.length - 1); i++){
                    delete arrEmails[i]['preview'];
                    delete arrEmails[i]['found'];
                    arrUEmails[i] = arrEmails[i]['address'];
                }
                console.log(unique(arrUEmails));
            }
        }
    });
    rl.close();
});


