import Jasmine from "jasmine";
import "dotenv/config";
var HtmlReporter = require("jasmine-pretty-html-reporter").Reporter;

const jasmine = new Jasmine();
jasmine.loadConfigFile("spec/support/jasmine.json");
jasmine.addReporter(
  new HtmlReporter({
    path: "results",
    writeReportEachSpec: true
  })
);

jasmine.execute();
