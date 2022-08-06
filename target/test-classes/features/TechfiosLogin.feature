@LoginFeature @Regression
Feature: Techfios login functionality validation

@Scenario1 @Smoke
Scenario: User should be able to login with correct credentials
	Given User is on Techfios Login page
	When User enters username as "demo@techfios.com"
	When User enters password as "abc123"
	And User clicks on Signin button
	Then User should land on Dashboard page
	
	
	# This is a negative Scenario (test case)
@Scenario2
Scenario: User should not be able to login with incorrect credentials
	Given User is on Techfios Login page
	When User enters username as "demo3@techfios.com"
	When User enters password as "abc124"
	And User clicks on Signin button
	Then User should not land on Dashboard page
	
	
	#And can be used at the end of any other Keyword. Like, When When When, and instead of last When we use And.