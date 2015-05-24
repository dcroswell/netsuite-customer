/**
 * Created by Don on 24/05/2015.
 */
var C = require('../models/customer');
//var R = require('dcroswell/netsuite-restlet');

var Result = function() {
    var result = {
        success : false,
        message: null
    };
    return result;
};

module.exports.NewCustomer = function(args) {
    //create the customer from the args
    var newcustomer = C(args);
    newcustomer.status = "pending";
    newcustomer.message = null;
    newcustomer.result = new Result();

    //set invalid
    newcustomer.setInvalid = function() {
        newcustomer.status = "invalid";
    };

    //check if valid
    newcustomer.isValid = function() {
        return newcustomer.status == "validated";
    };

    //add customer
    newcustomer.add = function() {
        newcustomer.result.success = true;
        newcustomer.result.message = "Customer was added!";
    };
    return newcustomer;
};