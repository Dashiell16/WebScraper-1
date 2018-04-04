var knwl = require('./node_modules/knwl.js/knwl.js'),
    cheerio = require('./node_modules/cheerio/index.js'),
    knwlInstance = new knwl('english'),
    request = require('request');

knwlInstance.init("07795066161 is my phone number and daniel.0397@live.com is my email");
var phones = knwlInstance.get('phones'),
    emails = knwlInstance.get('emails');

console.log(phones);
console.log(emails);


request("https://www.canddi.com", function(err, response, body) {
    if (err) {
        console.log(err);
    }
    else {
        knwlInstance.init(body);
        var phones2 = knwlInstance.get('phones'),
        emails2 = knwlInstance.get('emails');
        console.log(phones2);
        console.log(emails2);
    }
});