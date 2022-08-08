Feature: Techfios Bank and Cash New Account Functionality

@AddAccount
Scenario Outline: User should be able to login with valid credential and open a new account
	Given User is on Techfios login page
	When User enters the username "<username>"
	When User enters the password "<password>"
	And User clicks on Signin button
	Then User should land on Dashboard page
	When User clicks on bankAndCash
	When User clicks on newAccount
	When User enters accountTitle as "<accountTitle>" in accounts page
	When User enters description as "<description>" in accounts page
	When User enters initialBalance as "<initialBalance>" in accounts page
	When User enters accountNumber as "<accountNumber>" in accounts page
	When User enters contactPerson as "<contactPerson>" in accounts page
	When User enters phone as "<phone>" in accounts page
	When User enters internetBankingURL as "<internetBankingURL>" in accounts page
	And User clicks on Submit button
	Then User should be able to validate account created successfully
	
	Examples:
	|username		  		|password|accountTitle|description|initialBalance|accountNumber|contactPerson|phone		|internetBankingURL			  		 |
	|demo@techfios.com|abc123  |tech0055		|New Account|50000		  	 |000999333	 	 |Miller	   	 |45632189|https://www.bankofamerica.com/|
#	|demo@techfios.com|abc123  |tech00  		|NewAccount2|50	  		  	 |000999444	 	 |Miller	   	 |45632555|https://www.bankofamerica.com/|