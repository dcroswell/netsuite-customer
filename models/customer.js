/**
 * Created by Don on 23/05/2015.
 */
var assert = require("assert");
var utility = require("../libs/utility");

var Customer = function(args) {
    assert.ok(args.email, "Email is required");
    var customer = {};

    if(args.accessrole)customer.accessrole = args.accessrole; //listitem
    if(args.addressbook)customer.addressbook = args.addressbook; //array
    if(args.balance)customer.balance = args.balance;
    if(args.campaigncategory)customer.campaigncategory = args.campaigncategory; //listitem
    if(args.campaignevent)customer.campaignevent = args.campaignevent; //listitem
    if(args.category)customer.category = args.category; //listitem
    if(args.contactroles)customer.contactroles = args.contactroles; //array
    if(args.creditcards)customer.creditcards = args.creditcards; //array
    if(args.creditholdoverride)customer.creditholdoverride = args.creditholdoverride; //array
    if(args.custentity_2663_customer_refund)customer.custentity_2663_customer_refund = args.custentity_2663_customer_refund; //bool
    if(args.custentity_2663_direct_debit)customer.custentity_2663_direct_debit = args.custentity_2663_direct_debit;//bool
    if(args.custentity_customer_cracka_member)customer.custentity_customer_cracka_member = args.custentity_customer_cracka_member;//bool
    if(args.custentity_customer_dob)customer.custentity_customer_dob = args.custentity_customer_dob; //date format(dd/mm/yyyy)
    if(args.custentity_customer_ebay)customer.custentity_customer_ebay = args.custentity_customer_ebay;//bool
    if(args.custentity_customer_gender)customer.custentity_customer_gender = args.custentity_customer_gender; //listitem
    if(args.custentity_customer_ispurchaseonly)customer.custentity_customer_ispurchaseonly = args.custentity_customer_ispurchaseonly;//bool
    if(args.custentity_customer_mwc)customer.custentity_customer_mwc = args.custentity_customer_mwc;//bool
    if(args.custentity_customer_over18)customer.custentity_customer_over18 = args.custentity_customer_over18;//bool
    if(args.custentity_daily_deals)customer.custentity_daily_deals = args.custentity_daily_deals;//bool
    if(args.custentity_display_name)customer.custentity_display_name = args.custentity_display_name;
    if(args.custentity_email_optout)customer.custentity_email_optout = args.custentity_email_optout;//bool
    if(args.custentity_eway_cardnumber)customer.custentity_eway_cardnumber = args.custentity_eway_cardnumber;
    if(args.custentity_eway_cardtype)customer.custentity_eway_cardtype = args.custentity_eway_cardtype; //listitem
    if(args.custentity_eway_ccname)customer.custentity_eway_ccname = args.custentity_eway_ccname;
    if(args.custentity_eway_customerid)customer.custentity_eway_customerid = args.custentity_eway_customerid
    if(args.custentity_eway_expirymonth)customer.custentity_eway_expirymonth = args.custentity_eway_expirymonth; //listitem
    if(args.custentity_eway_expiryyear)customer.custentity_eway_expiryyear = args.custentity_eway_expiryyear; //listitem
    if(args.custentity_externalid)customer.custentity_externalid = args.custentity_externalid;
    if(args.custentity_globbedname)customer.custentity_globbedname = args.custentity_globbedname;
    if(args.custentity_internalid)customer.custentity_internalid = args.custentity_internalid;
    if(args.custentity_sms_optin)customer.custentity_sms_optin = args.custentity_sms_optin;
    if(args.custentity_snooze_emails_30)customer.custentity_snooze_emails_30 = args.custentity_snooze_emails_30;//bool
    if(args.custentity_special_offers)customer.custentity_special_offers = args.custentity_special_offers;//bool
    if(args.custentity_test_data)customer.custentity_test_data = args.custentity_test_data;//bool
    if(args.custentity_weekly)customer.custentity_weekly = args.custentity_weekly;//bool
    if(args.custentityphone_sales_optin)customer.custentityphone_sales_optin = args.custentityphone_sales_optin;//bool
    if(args.customform)customer.customform = args.customform; //listitem
    if(args.datecreated)customer.datecreated = args.datecreated || new Date(); //Format 6/2/2014 23:48
    if(args.depositbalance)customer.depositbalance = args.depositbalance;
    if(args.displaysymbol)customer.displaysymbol = '$'; //hard coded
    customer.email = args.email; //unique identifier
    if(args.emailpreference)customer.emailpreference = args.emailpreference; //listitem
    if(args.emailtransactions)customer.emailtransactions = args.emailtransactions;//bool
    if(args.entityid)customer.entityid = args.entityid;
    if(args.entitystatus)customer.entitystatus = args.entitystatus; //listitem
    if(args.faxtransactions)customer.faxtransactions = args.faxtransactions;//bool
    if(args.firstname)customer.firstname = args.firstname;
    if(args.giveaccess)customer.giveaccess = args.giveaccess;//bool
    if(args.globalsubscriptionstatus)customer.globalsubscriptionstatus = args.globalsubscriptionstatus; //listitem
    if(args.id)customer.id = args.internalid;
    if(args.isbudgetapproved)customer.isbudgetapproved = args.isbudgetapproved;//bool
    if(args.isninactive)customer.isninactive = args.isninactive;//bool
    if(args.isperson)customer.isperson = args.isperson;//bool
    if(args.lastmodifieddate)customer.lastmodifieddate = args.lastmodifieddate;
    if(args.lastname)customer.lastname = args.lastname;
    if(args.mobilephone)customer.mobilephone = args.mobilephone;
    if(args.overduebalance)customer.overduebalance = args.overduebalance;
    if(args.overridecurrencyformat)customer.overridecurrencyformat = args.overridecurrencyformat;//bool
    if(args.partners)customer.partners = args.partners; //array
    if(args.phone)customer.phone = args.phone;
    if(args.printtransactions)customer.printtransactions = args.printtransactions;//bool
    if(args.receivablesaccount)customer.receivablesaccount = args.receivablesaccount; //listitem
    if(args.recordtype)customer.recordtype = args.recordtype;
    if(args.salesrep)customer.salesrep = args.salesrep; //listitem
    if(args.salutation)customer.salutation = args.salutation;
    if(args.sendemail)customer.sendemail = args.sendemail;//bool
    if(args.shipcomplete)customer.shipcomplete = args.shipcomplete;//bool
    if(args.shipcarrier)customer.shipcarrier = args.shipcarrier;
    if(args.subscriptions)customer.subscriptions = args.subscriptions; //array
    if(args.subsidiary)customer.subsidiary = args.subsidiary; //listitem
    if(args.symbolplacement)customer.symbolplacement = args.symbolplacement;//bool
    if(args.taxable)customer.taxable = args.taxable;//bool
    if(args.taxexempt)customer.taxexempt = args.taxexempt;//bool
    if(args.unbilledorders)customer.unbilledorders = args.unbilledorders;
    if(args.weblead)customer.weblead = args.weblead;
    return customer;
};

module.exports = Customer;