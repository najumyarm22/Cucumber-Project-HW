@DBLoginFeature @Regression
Feature: Techfios login functionality validation

@DBScenario1 @Smoke
Scenario: User should be able to login with correct credentials
	Given User is on Techfios Login page
	When User enters "username" from database
	When User enters "password" from database
	And User clicks on Signin button
	Then User should land on Dashboard page