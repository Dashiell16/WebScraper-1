var knwl = require('./node_modules/knwl.js/knwl.js'),
    knwlInstance = new knwl('english'),
    request = require('request');

request("https://www.canddi.com", function(err, response, body) {
    if (err) {
        console.log(err);
    }
    else {
        knwlInstance.init(body);
        var arrPhones = knwlInstance.get('phones') ,
        arrEmails = knwlInstance.get('emails') ;
        if(arrPhones.length == 0){
            console.log("No phone numbers found");
        }
        else{
            for(var i = 0; i <= (arrPhone.length - 1); i++){
                delete arrPhone[i]['preview'];
            }
            console.log(arrPhones);
        }
        if(arrEmails.length == 0){
            console.log("No email addresses found");
        }
        else{
            for(var i = 0; i <= (arrEmails.length - 1); i++){
                delete arrEmails[i]['preview'];
            }
            console.log(arrEmails);
        }
    }
});
