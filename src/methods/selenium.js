import { Builder } from "selenium-webdriver";

import chrome from "selenium-webdriver/chrome";

class SeleniumDriver {
  getDriver() {
    return new Builder()
      .setChromeOptions(this.getOptionsBrowser())
      .forBrowser("chrome")
      .build();
  }

  getOptionsBrowser() {
    let chromOpt = new chrome.Options();
    chromOpt.addArguments("disable-infobars");
    //chromOpt.addArguments("--headless");
    chromOpt.addArguments("--disable-dev-shm-usage");
    chromOpt.addArguments("--start-maximized");
    chromOpt.setUserPreferences({ credential_enable_service: false });

    return chromOpt;
  }
}

export default SeleniumDriver;
