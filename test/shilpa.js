// Includes
const { Builder , By, Key, until} = require ('selenium-webdriver');
const should = require('chai').should();

/*  As a customer,
I want to be able to search for a product,
so that I can find the product I want to buy.
*/

//Test grouping:search
describe.only('Search for a product', () => {
    //Test case:
    context('I search for a product',() => {
        it('I should see the product that i have searched for ', async() => {
            //start the webbrowser
            const driver = await new Builder().forBrowser('firefox').build();

            //Search for a product
           try{
            //Move to magento site
            await driver.get('https://magento.softwaretestingboard.com/');
            //Get the search input
            await driver.wait(until.elementLocated(By.css('#search')),50000);
            await driver.findElement(By.id('search')).sendKeys('shirt for men', Key.RETURN);

            //Find the first product
             await driver.wait(until.elementsLocated(By.css('.item.product.product-item:nth-child(3)'))),10000;
            const product= await driver.findElement(By.css('.item.product.product-item:nth-child(3)'));

            //find the information in the product we selected
             let productTitle = await product.findElement(By.css('.product-item-link'));
             let productPrice = await product.findElement(By.css('.price'))
            

            // Extra text
            let productTitleText = await productTitle.getText();
            let productPriceText = await productPrice.getText();

            productTitleText.should.equal('Balboa Persistence Tee');
            productPriceText.should.equal('$29.00');
            


            console.log(productTitleText, productPriceText);
            await driver.quit();
           } 
           finally {
           //await driver.quit();
           }

        });
    });
});
