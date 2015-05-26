/**
 * Created by dcroswell on 25/05/2015.
 */
var NC = require('./libs/newcustomer');
var C = require('./models/customer');

//create a customer
var c = C({email:'don@greenbilling.com'});
console.log(c);

//pass it in as new
//var nc = NC.NewCustomer(c);
//console.log(nc);