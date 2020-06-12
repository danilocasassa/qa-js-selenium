import selenium from "../src/methods/selenium";
import { setDriverUtils, typeTextInElement, goToPage, clickElement, elementIsVisible } from "../src/methods/common";
import { googleObjects } from "../src/pageObjects/common";

describe("Search in google", function () {
  beforeEach(async () => {
    await selenium.tearUp();
  });

  afterEach(async () => {
    await selenium.tearDown();
  });

  it("Search about Selenium and NodeJS", async () => {
    await setDriverUtils();
    await goToPage("https://www.google.com/");
    await typeTextInElement(googleObjects.inputSearch, "Selenium and NodeJS");
    await clickElement(googleObjects.btnSearch);
    expect(await elementIsVisible(googleObjects.resultsStats)).toEqual(true);
  });
});
