import selenium from "./selenium";
import { until } from "selenium-webdriver";

let driver;

export async function setDriverUtils() {
  driver = await selenium.getDriver();
}

export async function goToPage(page) {
  await driver.get(page);
}

export async function waitElement(element, timeout = Number(process.env.TIMEOUT)) {
  await driver.wait(until.elementLocated(element, timeout));
}

export async function getElementBy(element) {
  await waitElement(element);
  return await driver.findElement(element);
}

export async function clickElement(element) {
  let el = await getElementBy(element);
  await el.click();
}

export async function elementIsVisible(element) {
  let el = await getElementBy(element);
  return await el.isDisplayed();
}

export async function typeTextInElement(element, text) {
  let el = await getElementBy(element);
  await el.sendKeys(text);
}

export async function sendKeyCommand(element, command) {
  let el = await getElementBy(element);
  await el.sendKeys(command);
}
