package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AddAccountPage {

	WebDriver driver;
	
	public AddAccountPage(WebDriver driver) {
		this.driver=driver;
	}
		
	@FindBy(how=How.XPATH, using="//input[@id='account']") WebElement ACCOUNT_TITLE_ELEMENT;
	@FindBy(how=How.XPATH, using="//input[@id='description']") WebElement DESCRIPTION_ELEMENT;
	@FindBy(how=How.XPATH, using="//input[@id='balance']") WebElement INITIAL_BALANCE_ELEMENT;
	@FindBy(how=How.XPATH, using="//input[@id='account_number']") WebElement ACCOUNT_NUMBER_ELEMENT;
	@FindBy(how=How.XPATH, using="//input[@id='contact_person']") WebElement CONTACT_PERSON_ELEMENT;
	@FindBy(how=How.XPATH, using="//input[@id='contact_phone']") WebElement PHONE_ELEMENT;
	@FindBy(how=How.XPATH, using="//input[@id='ib_url']") WebElement INTERNET_BANKING_URL_ELEMENT;
	@FindBy(how=How.XPATH, using="//button[@class='btn btn-primary']") WebElement SUBMIT_BUTTON_ELEMENT;
	
	
	public void enterAccountTitle(String accountTitle) {
		ACCOUNT_TITLE_ELEMENT.sendKeys(accountTitle);
	}
	
	public void enterDescription(String description) {
		DESCRIPTION_ELEMENT.sendKeys(description);
	}
	
	public void enterInitialBalance(String initialBalance) {
		INITIAL_BALANCE_ELEMENT.sendKeys(initialBalance);
	}
	
	public void enterAccountNumber(String accountNumber) {
		ACCOUNT_NUMBER_ELEMENT.sendKeys(accountNumber);
	}
	
	public void enterContactPerson(String contactPerson) {
		CONTACT_PERSON_ELEMENT.sendKeys(contactPerson);
	}
	
	public void enterPhoneNumber(String phone) {
		PHONE_ELEMENT.sendKeys(phone);
	}
	
	public void enterInternetBankingUrl(String url) {
		INTERNET_BANKING_URL_ELEMENT.sendKeys(url);
	}
	
	public void clickOnSubmitButton() {
		SUBMIT_BUTTON_ELEMENT.click();
	}
	
}
