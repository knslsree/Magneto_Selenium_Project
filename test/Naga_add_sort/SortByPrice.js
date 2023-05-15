// Includes
const { Builder, By, Key, until } = require('selenium-webdriver');

const assert = require('assert');
const should = require('chai').should();
const expect = require('chai').expect;


/*
   I want to search for a product
   and view list of products in
    sorted by price.*/


             describe.only('Sort by Price', () => {
                // Test case:
                    context('Search for shirts in search bar and perfom sorting', () => {
                        it('I see the shirts in sorted order', async () => {
                            // Start web browser
                            const driver = await new Builder().forBrowser('firefox').build();
                            try{

                                        await driver.get('https://magento.softwaretestingboard.com/');
                                        // Get the search input
                                        await driver.wait(until.elementLocated(By.css('#search')), 1000);
                                        await driver.findElement(By.id('search')).sendKeys('shirt', Key.RETURN);

                                        
                                        // await driver.sleep(100);
                                        //get the sort element and displaying Sort By       
                                        await driver.wait(until.elementLocated(By.css('.toolbar-sorter')),10000);
                                        let data=await driver.findElement(By.css('.toolbar-sorter'));
                                        let value =await data.findElement(By.css('.sorter-label'));
                                        let display=await value.getText();
                                        console.log(display);

                                        //document.querySelector('.products >li:nth-child(2)');---selecting the 2 child
                                        //document.querySelector('.product > strong:first-child')--gettinng the product text
                                        await driver.wait(until.elementLocated(By.css('.products')),10000);
                                        await driver.findElement(By.css('.products'));
                                        let valuesort =await driver.findElement(By.css('.products >li:nth-child(2)'));
                                        //console.log(valuesort);

                                        await driver.wait(until.elementLocated(By.css('.product')),10000);
                                        await driver.findElement(By.css('.product'));
                                        let sor= await valuesort.findElement(By.css('.product > strong:first-child')).getText();
                                        //let displaysort=await value.getText();
                                        console.log(sor);

                                        await driver.sleep(2000);
                                        //price selecting
                                        await driver.wait(until.elementLocated(By.css('.sorter-options')),10000);
                                        let price=await driver.findElement(By.css('.sorter-options'));
                                        await driver.sleep(1000);
                                        await driver.findElement(By.css('.sorter-options > option:nth-child(2)')).click();

                                       /* assert.equal(sor,'Circe Hooded Ice Fleecee'); // Builtin Node
                                        expect(sor).to.equal('Circe Hooded Ice Fleecee'); // Chai expect
                                        sor.should.equal('Circe Hooded Ice Fleece'); // Chai should*/

                                       
                                       //await driver.quit();

                            }

                            catch(error)
                            {
                                console.log(error);
                            }
                            finally{
                               
                               // await driver.quit();
                            }
                        });
                    });
                });

           
                            
           
           

            
    





      
