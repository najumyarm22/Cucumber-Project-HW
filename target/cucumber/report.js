$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/AddAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Techfios Bank and Cash New Account Functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should be able to login with valid credential and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credential-and-open-a-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@AddAccount"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on Techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters the password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Signin button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on bankAndCash",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks on newAccount",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User enters accountTitle as \"\u003caccountTitle\u003e\" in accounts page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enters description as \"\u003cdescription\u003e\" in accounts page",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters initialBalance as \"\u003cinitialBalance\u003e\" in accounts page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User enters accountNumber as \"\u003caccountNumber\u003e\" in accounts page",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User enters contactPerson as \"\u003ccontactPerson\u003e\" in accounts page",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User enters phone as \"\u003cphone\u003e\" in accounts page",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters internetBankingURL as \"\u003cinternetBankingURL\u003e\" in accounts page",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User clicks on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credential-and-open-a-new-account;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "phone",
        "internetBankingURL"
      ],
      "line": 23,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credential-and-open-a-new-account;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "tech0055",
        "New Account",
        "50000",
        "000999333",
        "Miller",
        "45632189",
        "https://www.bankofamerica.com/"
      ],
      "line": 24,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credential-and-open-a-new-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4842328800,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should be able to login with valid credential and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credential-and-open-a-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@AddAccount"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on Techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the username \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters the password \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Signin button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on bankAndCash",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks on newAccount",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User enters accountTitle as \"tech0055\" in accounts page",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enters description as \"New Account\" in accounts page",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters initialBalance as \"50000\" in accounts page",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User enters accountNumber as \"000999333\" in accounts page",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User enters contactPerson as \"Miller\" in accounts page",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User enters phone as \"45632189\" in accounts page",
  "matchedColumns": [
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters internetBankingURL as \"https://www.bankofamerica.com/\" in accounts page",
  "matchedColumns": [
    8
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User clicks on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Techfios_login_page()"
});
formatter.result({
  "duration": 1002159200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 26
    }
  ],
  "location": "LoginStepDefinition.user_enters_the_username(String)"
});
formatter.result({
  "duration": 2196012600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 26
    }
  ],
  "location": "LoginStepDefinition.user_enters_the_password(String)"
});
formatter.result({
  "duration": 2094491600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_Signin_button()"
});
formatter.result({
  "duration": 3381763200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 195691100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_bankAndCash()"
});
formatter.result({
  "duration": 51052100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_newAccount()"
});
formatter.result({
  "duration": 292711000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tech0055",
      "offset": 29
    }
  ],
  "location": "LoginStepDefinition.user_enters_accountTitle_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 115048400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Account",
      "offset": 28
    }
  ],
  "location": "LoginStepDefinition.user_enters_description_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 107264400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 31
    }
  ],
  "location": "LoginStepDefinition.user_enters_initialBalance_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 85953500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "000999333",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enters_accountNumber_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 108626600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miller",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enters_contactPerson_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 93603100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45632189",
      "offset": 22
    }
  ],
  "location": "LoginStepDefinition.user_enters_phone_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 114397900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.bankofamerica.com/",
      "offset": 35
    }
  ],
  "location": "LoginStepDefinition.user_enters_internetBankingURL_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 120434100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_Submit_button()"
});
formatter.result({
  "duration": 596144400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 15377900,
  "status": "passed"
});
formatter.after({
  "duration": 797281000,
  "status": "passed"
});
});