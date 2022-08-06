Feature: Techfios Bank and Cash New Account Functionality

@AddAccount
Scenario: User should be able to login with valid credential and open a new account
	Given User is on Techfios login page
	When User enters the username "demo@techfios.com"
	When User enters the password "abc123"
	And User clicks on Signin button
	Then User should land on Dashboard page
	When User clicks on bankAndCash
	When User clicks on newAccount
	When User enters accountTitle as "tech0055" in accounts page
	When User enters description as "New Account" in accounts page
	When User enters initialBalance as "50000" in accounts page
	When User enters accountNumber as "000999333" in accounts page
	When User enters contactPerson as "Miller" in accounts page
	When User enters phone as "45632189" in accounts page
	When User enters internetBankingURL as "https://www.bankofamerica.com/" in accounts page
	And User clicks on Submit button
	Then User should be able to validate account created successfully