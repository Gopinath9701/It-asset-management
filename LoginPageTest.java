package com.test;

import org.junit.Assert;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class LoginPageTest {

    @Test
    public void testLoginPage() throws Exception {

        WebDriver driver = new ChromeDriver();

        driver.manage().window().maximize();
        driver.get("http://localhost:3000");

        Thread.sleep(3000);

        // Open Login Page
        driver.findElement(By.xpath("//button[contains(text(),'Login')]")).click();
        Thread.sleep(2000);

        // LP01 - Login Page Opened
        Assert.assertTrue(driver.getPageSource().contains("Login"));
        System.out.println("LP01 Passed - Login Page Opened");

        // LP02 - Employee ID or Email Field
        Assert.assertTrue(
                driver.findElement(By.name("employeeIdOrEmail")).isDisplayed());
        System.out.println("LP02 Passed - Employee ID/Email Field Displayed");

        // LP03 - Password Field
        Assert.assertTrue(
                driver.findElement(By.name("password")).isDisplayed());
        System.out.println("LP03 Passed - Password Field Displayed");

        // LP04 - Login Button
        Assert.assertTrue(
                driver.findElement(By.xpath("//button[@type='submit']")).isDisplayed());
        System.out.println("LP04 Passed - Login Button Displayed");

        // LP05 - Forgot Password Link
        Assert.assertTrue(
                driver.findElement(By.linkText("Forgot Password?")).isDisplayed());
        System.out.println("LP05 Passed - Forgot Password Link Displayed");

        System.out.println("All Login Page Test Cases Passed");

        driver.quit();
    }
}