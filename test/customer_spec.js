/**
 * Created by Don on 24/05/2015.
 */
var assert = require ("assert");
var should = require("should");
var Customer = require("../models/customer");

describe("Customer", function() {

    describe("defaults", function() {
        var customer = {};

        before(function () {
            customer = new Customer({email : "don@greenbilling.com"});
        });

        //happy path
        it("customer has an email of don@greenbilling.com", function(){
            customer.email.should.equal("don@greenbilling.com");
        });

        //no email on customer
        it("an empty or null email", function() {

        });
    });

});
