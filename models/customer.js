/**
 * Created by Don on 23/05/2015.
 */
var assert = require("assert");
var utility = require("../libs/utility");

var Customer = function(args) {
    assert.ok(args.email, "Email is required");
    var customer = {};

    customer.email = args.email;
    customer.internalid = args.internalid;
    customer.createdAt = args.createdAt || new Date();
    customer.sessionToken = args.sessionToken || utility.randomString((12));
    return customer;
};

module.exports = Customer;