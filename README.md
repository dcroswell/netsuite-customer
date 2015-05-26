# Netsuite Customer

This class contains the standard customer objects from netsuite. It also contains the following sublists:

* Subscriptions
* Address Book
* Contact Roles
* Credit Cards
* Partners

Sublists:

If you use a sublist you must require it in your project. These have been separated to keep lambda's lean and testing easy. 
You should also note that the folder node_modules is not present in the download so you need to install it if you want to test or develop anything.

### Installation

```
npm install dcroswell/netsuite-customer -g
```

### Example

//create a customer
var C = require('./models/customer');
var c = C({email:'don@greenbilling.com'});

### Any tips/suggestions?

Yes!

* To create or access a customer you must always have an email address.

## Required packages and dev packages

* npm install -g nodejs
* npm install -g assert
* npm install -g mocha
* npm install -g should
* npm install -g grunt
* npm install -g grunt-contrib-watch
* npm install -g grunt-contrib-jshint


### My TODO

* build sub-list objects
* remove unnecessary code
* move the objects to green billing repository


