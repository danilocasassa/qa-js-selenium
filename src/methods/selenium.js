import { Builder } from "selenium-webdriver";

import chrome from "selenium-webdriver/chrome";
import firefox from "selenium-webdriver/firefox";

class SeleniumDriver {
  constructor(driver) {
    this.driver = driver;
  }

  async setDriver() {
    this.driver = await new Builder()
      .setChromeOptions(this.getOptionsBrowser())
      .forBrowser(process.env.BROWSER)
      .build();
    await this.driver.manage().setTimeouts({ implicit: 10000 });
    await this.driver.manage().window().setRect({ width: 1920, height: 1080 });
  }

  getDriver() {
    return this.driver;
  }

  async tearUp() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = process.env.TIMEOUT;
    await this.setDriver();
  }

  async tearDown() {
    await this.driver.quit();
    this.driver = null;
  }

  getOptionsBrowser() {
    switch (process.env.BROWSER) {
      case "chrome":
        let chromOpt = new chrome.Options();
        chromOpt.addArguments("disable-infobars");
        chromOpt.addArguments("no-sandbox");
        chromOpt.addArguments("disable-gpu");
        chromOpt.addArguments("disable-dev-shm-usage");
        chromOpt.addArguments("window-size=1366x768");
        chromOpt.setUserPreferences({ credential_enable_service: false });
        if (process.argv.slice(2) != "--headed") chromOpt.addArguments("headless");
        return chromOpt;
      case "firefox":
        let foxOpt = new firefox.Options();
        foxOpt.addArguments("disable-infobars");
        foxOpt.addArguments("no-sandbox");
        foxOpt.addArguments("disable-gpu");
        foxOpt.addArguments("disable-dev-shm-usage");
        foxOpt.addArguments("window-size=1366x768");
        if (process.argv.slice(2) != "--headed") foxOpt.addArguments("headless");
        return foxOpt;
      default:
        throw new Error(
          `O browser ${process.env.BROWSER} não foi configurado. Considere configura-lo antes de executar os testes`
        );
        break;
    }
  }
}

module.exports = new SeleniumDriver();
