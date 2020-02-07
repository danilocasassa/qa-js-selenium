import SeleniumDriver from "../src/methods/selenium";
import { goToHomePage, getElementByXpath, clickElement, getElementById, typeTextInElement } from "../src/methods/common";
import { titles, users, passUsers } from "../src/datas";
import { homePage, loginPage, common } from "../src/pageObjects/common";
import { elementIsVisible } from "selenium-webdriver/lib/until";

let driver;

describe("Doing Login in site form", function() {
  beforeAll(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 99999;
    driver = new SeleniumDriver().getDriver();
  });

  afterAll(async () => {
    await driver.quit();
  });

  it("Open the site and open the login form", async function() {
    await goToHomePage(driver);
    expect(await driver.getTitle()).toBe(titles.homePage);
    let loginLink = await getElementByXpath(driver, homePage.loginComCadastroXpath);
    await clickElement(loginLink);
    await elementIsVisible(await getElementByXpath(driver, loginPage.headerTextXpath));
  });

  it("Do the login with default user", async function() {
    let userField = await getElementById(driver, loginPage.userNameId);
    let passUser = await getElementById(driver, loginPage.passUserid);
    let btnEntrar = await getElementByXpath(driver, loginPage.btnLoginXpath);

    await typeTextInElement(userField, users.default);
    await typeTextInElement(passUser, passUsers.default);
    await clickElement(btnEntrar);

    let flashMessage = await getElementById(driver, common.flashMessageId);
    expect(await flashMessage.getText()).toContain("Olá, Tony Stark. Você acessou a área logada!");
  });
});
