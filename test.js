const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");
let driver = new Builder().forBrowser("chrome").build();

async function myFunction() {
    try {
        const searchString = "Dead"
        
        await driver.get("https://www.deadneighbors.com/news")
        await driver.get("https://www.deadneighbors.com/info")
        driver.navigate().back()
        var title = await driver.getTitle();
        console.log('Title is:',title);
        await newTabWindow();
    } catch (error) {
        
    }
    finally {
        await driver.quit();
    }
   }
  
   async function newTabWindow(){
       try{
        // Opens a new tab and switches to new tab
        await driver.switchTo().newWindow('tab');
        
        // Opens a new window and switches to new window
        await driver.switchTo().newWindow('window');
        
          
        
           
    }catch(error){
        console.log("errorrrrrr",error)
    }
}
myFunction();


  

