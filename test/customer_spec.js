/**
 * Created by Don on 24/05/2015.
 */
var should = require("should");
var Customer = require("../models/customer");

describe("Customer", function() {

    describe("defaults", function() {
        var customer = {};

        before(function () {
            customer = new Customer({email : "don@greenbilling.com",internalid: 0, sessionToken: "abc123ABC123"});
        });

        it("email is don@greenbilling.com", function(){
            customer.email.should.equal("don@greenbilling.com");
        });
        it("has an internal id", function() {
            customer.internalid.should.equal(0);
        });

        it("has a sessionToken", function() {
            customer.sessionToken.should.be.defined;
        })
    });

});
