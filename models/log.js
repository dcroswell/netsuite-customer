/**
 * Created by Don on 24/05/2015.
 */
var assert = require("assert");
var Log = function(args) {
    assert.ok(args.subject && args.entry, "Needs a subject and Entry.");
    var log = {};
    log.subject = args.subject;
    log.entry = args.entry;
    log.createdAt = new Date();
    return log;
}
exports = Log;
