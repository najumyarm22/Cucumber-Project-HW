package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class DashboardPage {

	WebDriver driver;
	
	public DashboardPage(WebDriver driver) {
		this.driver=driver;
	}
	
	@FindBy(how = How.XPATH, using = "//span[text()='Bank & Cash']") WebElement BANK_CASH_ELEMENT;
	@FindBy(how = How.XPATH, using = "//a[text()='New Account']") WebElement NEW_ACCOUNT_ELEMENT;
	
	public void clickOnCashAndBank() {
		BANK_CASH_ELEMENT.click();
	}

	public void clickOnNewAccount() {
		NEW_ACCOUNT_ELEMENT.click();
	}
}
