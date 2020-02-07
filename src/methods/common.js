import { urls } from "../datas";
import { By } from "selenium-webdriver";

export async function goToHomePage(driver) {
  await driver.get(urls.homePage);
}

export async function getElementByXpath(driver, elementXpath) {
  return await driver.findElement(By.xpath(elementXpath));
}

export async function getElementByName(driver, elementName) {
  return await driver.findElement(By.name(elementName));
}

export async function getElementById(driver, elementId) {
  return await driver.findElement(By.id(elementId));
}

export async function clickElement(element) {
  await element.click();
}

export async function elementIsVisible(element) {
  expect(await element.isDisplayed()).toBe(true);
}

export async function typeTextInElement(element, text) {
  await element.sendKeys(text);
}
