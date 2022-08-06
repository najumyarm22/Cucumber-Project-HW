$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/AddAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Techfios Bank and Cash New Account Functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5193616200,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should be able to login with valid credential and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credential-and-open-a-new-account",
  "type": "scenario",
  "keyword": "Scenario",
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
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters the password \"abc123\"",
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
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enters description as \"New Account\" in accounts page",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters initialBalance as \"50000\" in accounts page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User enters accountNumber as \"000999333\" in accounts page",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User enters contactPerson as \"Miller\" in accounts page",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User enters phone as \"45632189\" in accounts page",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters internetBankingURL as \"https://www.bankofamerica.com/\" in accounts page",
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
  "duration": 1639883100,
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
  "duration": 2122607800,
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
  "duration": 2085377000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_Signin_button()"
});
formatter.result({
  "duration": 3139696900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 196948800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_bankAndCash()"
});
formatter.result({
  "duration": 58383500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_newAccount()"
});
formatter.result({
  "duration": 306219100,
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
  "duration": 100294300,
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
  "duration": 90939100,
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
  "duration": 87161400,
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
  "duration": 118230900,
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
  "duration": 81577600,
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
  "duration": 86113500,
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
  "duration": 143299600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_Submit_button()"
});
formatter.result({
  "duration": 659301100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 3714300,
  "status": "passed"
});
});