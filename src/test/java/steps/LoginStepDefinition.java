package steps;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pages.AddAccountPage;
import pages.DashboardPage;
import pages.DatabasePage;
import pages.LoginPage;
import pages.TestBase;

public class LoginStepDefinition extends TestBase { // To access methods fromTestBase, we need to inherit it.

	LoginPage loginPage; // LoginPage initialized here
	DatabasePage databasePage;
	DashboardPage dashboardPage;
	AddAccountPage addAccountPage;

	@Before
	public void methodName() { // doing this allows us to implement any step in any order.
		initDriver();
		loginPage = PageFactory.initElements(driver, LoginPage.class); // LoginPage is defined here
		databasePage = new DatabasePage();
		dashboardPage = PageFactory.initElements(driver, DashboardPage.class);
		addAccountPage = PageFactory.initElements(driver, AddAccountPage.class);
	}

	@Given("^User is on Techfios Login page$")
	public void user_is_on_Techfios_Login_page() {
		driver.get("https://www.techfios.com/billing/?ng=admin/");
	}

	@When("^User enters username as \"([^\"]*)\"$")
	public void user_enters_username_as(String username) {
		loginPage.enterUsername(username);

	}

	@When("^User enters password as \"([^\"]*)\"$")
	public void user_enters_password_as(String password) {
		loginPage.enterPassword(password);
	}

	@When ("^User enters \"([^\"]*)\" from database$")
	public void user_enters_from_database(String userData) {
		
//		if(userData.equalsIgnoreCase("username")) {
//			loginPage.enterUsername("Get username from DB");
//		} else if(userData.equalsIgnoreCase("password")) {
//			loginPage.enterPassword("Get password from DB");
//		}else {
//			System.out.println("Unable to retrieve data: '"+userData+"' from DB!");
//		}
		
		switch (userData) {
		case "username":
			loginPage.enterUsername(databasePage.getDataFromDB("username"));
			System.out.println("Username from DB: " + databasePage.getDataFromDB("username"));
			break;
			
		case "password":
			loginPage.enterPassword(databasePage.getDataFromDB("password"));
			System.out.println("Password from DB: " + databasePage.getDataFromDB("password"));
			break;
		default:
			System.out.println("Unable to retrieve data: '"+userData+"' from DB!");
		}
	}

	@And("^User clicks on Signin button$")
	public void user_clicks_on_Signin_button() {
		loginPage.clickOnSigninButton();
	}

	@Then("^User should land on Dashboard page$")
	public void user_should_land_on_Dashboard_page() {
		Assert.assertEquals("Dashboard- iBilling", loginPage.getPageTitle());
		takeScreenshot(driver);
	}

	@Then("^User should not land on Dashboard page$")
	public void user_should_not_land_on_Dashboard_page() {
		Assert.assertEquals("Login - iBilling", loginPage.getPageTitle());
	}

	@Given("^User is on Techfios login page$")
	public void user_is_on_Techfios_login_page() {
		driver.get("https://www.techfios.com/billing/?ng=admin/");
	}

	@When("^User enters the username \"([^\"]*)\"$")
	public void user_enters_the_username(String username) {
		loginPage.enterUsername(username);
	}

	@When("^User enters the password \"([^\"]*)\"$")
	public void user_enters_the_password(String password) {
		loginPage.enterPassword(password);
	}

	@When("^User clicks on bankAndCash$")
	public void user_clicks_on_bankAndCash() {
		dashboardPage.clickOnCashAndBank();
	}

	@When("^User clicks on newAccount$")
	public void user_clicks_on_newAccount() {
		dashboardPage.clickOnNewAccount();
	}

	@When("^User enters accountTitle as \"([^\"]*)\" in accounts page$")
	public void user_enters_accountTitle_as_in_accounts_page(String accountTitle) {
		addAccountPage.enterAccountTitle(accountTitle+generateRandomNumber(999));
	}

	@When("^User enters description as \"([^\"]*)\" in accounts page$")
	public void user_enters_description_as_in_accounts_page(String description) {
		addAccountPage.enterDescription(description);
	}

	@When("^User enters initialBalance as \"([^\"]*)\" in accounts page$")
	public void user_enters_initialBalance_as_in_accounts_page(String initialBalance) {
		addAccountPage.enterInitialBalance(initialBalance);
	}

	@When("^User enters accountNumber as \"([^\"]*)\" in accounts page$")
	public void user_enters_accountNumber_as_in_accounts_page(String accountNumber) {
		addAccountPage.enterAccountNumber(accountNumber+generateRandomNumber(999));
	}

	@When("^User enters contactPerson as \"([^\"]*)\" in accounts page$")
	public void user_enters_contactPerson_as_in_accounts_page(String contactPerson) {
		addAccountPage.enterContactPerson(contactPerson);
	}

	@When("^User enters phone as \"([^\"]*)\" in accounts page$")
	public void user_enters_phone_as_in_accounts_page(String phone) {
		addAccountPage.enterPhoneNumber(phone+generateRandomNumber(999));
	}

	@When("^User enters internetBankingURL as \"([^\"]*)\" in accounts page$")
	public void user_enters_internetBankingURL_as_in_accounts_page(String internetBankingURL) {
		addAccountPage.enterInternetBankingUrl(internetBankingURL);
	}
	
	@And("^User clicks on Submit button$")
	public void user_clicks_on_Submit_button() {
		addAccountPage.clickOnSubmitButton();
	}

	@Then("^User should be able to validate account created successfully$")
	public void user_should_be_able_to_validate_account_created_successfully() {
		Assert.assertEquals("Accounts- iBilling", loginPage.getPageTitle());
	}

	@After
	public void teardown() {
		driver.close();
		driver.quit();
	}
}
