const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');
const actions = require('actions');


describe('Mousehover Test', function () {
  let driver;

  before(async function () {
    driver = await new Builder().forBrowser('firefox').build();
  });

  after(async function () {
    await driver.quit();
  });

  it('should select a category using mouse hover', async function () {
    // Open the webpage
    await driver.get('https://magento.softwaretestingboard.com');

     // Create an instance of the Actions class
     //const actions = new Actions(driver);
     

    // Locate the element to mouseover
    await driver.wait(until.elementLocated(By.css('#ui-id-4')),5000);
    const Women = await driver.findElement(By.css('#ui-id-4'));
    

    const actions = driver.actions({bridge: true}); 
     
    await actions.move({duration:3000,origin:Women,y:0}).perform();
    
    

    // Locate and click on the desired sub-menu item or category
    await driver.wait(until.elementLocated(By.xpath('//a[@id="ui-id-9"]')),5000);
    const Tops = await driver.findElement(By.xpath('//a[@id="ui-id-9"]'));
    await actions.move({duration:3000,origin:Tops,x:0}).perform();

    //Click on tees Link
    await driver.wait(until.elementLocated(By.linkText('Tees')),10000);
    const Tees = await driver.findElement(By.linkText('Tees')).click();
    
    //Click on 4th  Product in Tees
    await driver.wait(until.elementLocated(By.partialLinkText('Diva Gym T')),50000);
    const Product = await driver.findElement(By.partialLinkText('Diva Gym T'));
    await Product.click();
    driver.sleep(5000);
    //Add the size
    await driver.wait(until.elementLocated(By.css('#option-label-size-143-item-166')),50000);
    const size= await driver.findElement(By.css('#option-label-size-143-item-166'));
    await size.click();
    //Add the color
    await driver.wait(until.elementLocated(By.css('#option-label-color-93-item-60')),50000);
    const color= await driver.findElement(By.css('#option-label-color-93-item-60'));
    await color.click();
    //Add to Cart
    await driver.wait(until.elementLocated(By.css('#product-addtocart-button')),50000);
    const Cart = await driver.findElement(By.css('#product-addtocart-button'));
    await Cart.click();

   //Assert the cart message
   await driver.wait(until.elementLocated(By.xpath('//div[@role="alert"]')),50000);
   const CartMessage = await driver.findElement(By.xpath('//div[@role="alert"]'));

   //Extract text
   const CartMessageText= await CartMessage.getText();
   console.log(CartMessageText);
   assert.strictEqual(CartMessageText,'You added Diva Gym Tee to your shopping cart.');
    
  });
});
