const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");
let driver = new Builder().forBrowser("chrome").build();

async function myFunction() {
    try {
        const searchString = "Dead"
        
        await driver.get("https://www.deadneighbors.com/news")
        var title = await driver.getTitle();
        console.log('Title is:',title);
        await newTabWindow();
    } catch (error) {
        
    }
    finally {
        await driver.quit();
    }
   }
myFunction();


  

