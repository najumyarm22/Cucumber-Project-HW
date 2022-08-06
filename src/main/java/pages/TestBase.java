package pages;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.junit.rules.Timeout;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TestBase {

	public static WebDriver driver;  // we make this public static to be accessible in other classes that extend this class.
	
	public void initDriver() {
		System.setProperty("webdriver.chrome.driver", "drivers\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
	}
	
	// Method to take Screenshot:
	public void takeScreenshot(WebDriver driver) {
		TakesScreenshot ts = (TakesScreenshot)driver; // this is type casting
		File sourceFile = ts.getScreenshotAs(OutputType.FILE);
		
		// to format the file name of our screenshots, we need the following 3 line codes and use that variable to replace System.currentTimeMillis()
		SimpleDateFormat formatter = new SimpleDateFormat("MMddyyy_HHmmss");
		Date date = new Date();
		String label = formatter.format(date);
				
		try {
			FileUtils.copyFile(sourceFile, new File(System.getProperty("user.dir")+"/screenshot/"+label+".png"));
		} catch (IOException e) {
			e.printStackTrace();
		}
		
	}
	
	// Method to generate Random Number:
	public int generateRandomNumber(int bound) {
		Random rnd = new Random();
		int genNum=rnd.nextInt(bound);
		return genNum;
	}
	
}
