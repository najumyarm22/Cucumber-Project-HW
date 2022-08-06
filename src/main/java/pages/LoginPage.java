package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage {

	WebDriver driver;

	public LoginPage(WebDriver driver) {
		this.driver = driver;
	}

	// Element Library
	@FindBy(how = How.XPATH, using = "//input[@id='username']")
	WebElement USER_NAME_ELEMENT;
	@FindBy(how = How.XPATH, using = "//input[@id='password']")
	WebElement PASSWORD_ELEMENT;
	@FindBy(how = How.XPATH, using = "//button[@name='login']")
	WebElement SIGNIN_BUTTON_ELEMENT;
	

	// Methods to interact with the elements
	public void enterUsername(String userName) {
		USER_NAME_ELEMENT.sendKeys(userName);
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	public void enterPassword(String password) {
		PASSWORD_ELEMENT.sendKeys(password);
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	public void clickOnSigninButton() {
		SIGNIN_BUTTON_ELEMENT.click();
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	public String getPageTitle() {
		return driver.getTitle();
	}

	
}
