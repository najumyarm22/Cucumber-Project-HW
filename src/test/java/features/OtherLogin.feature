@OtherLoginFeature @Regression
Feature: Techfios Other login validation

	Background:
	Given User is on Techfios Login page

	@OtherScenario1
	Scenario Outline: User should not be able to login with incorrect credentials
	When User enters username as "<username>"
	When User enters password as "<password>"
	And User clicks on Signin button
	Then User should not land on Dashboard page
	Examples:
	|username						|password	|
	|demo@techfios.com	|abc123		|
	|demo@techfios.com	|abc124		|
	|demo2@techfios.com	|abc123		|
	|demo2@techfios.com	|abc124		|
	
	
	
#	@OtherScenario2 @Smoke
#	Scenario: User should not be able to login with incorrect credentials
#	When User enters username as "demo2@techfios.com"
#	When User enters password as "abc123"
#	And User clicks on Signin button
#	Then User should not land on Dashboard page
#	
#	@OtherScenario3
#	Scenario: User should not be able to login with incorrect credentials
#	When User enters username as "demo2@techfios.com"
#	When User enters password as "abc124"
#	And User clicks on Signin button
#	Then User should not land on Dashboard page
	