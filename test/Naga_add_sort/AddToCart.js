// Includes
const { Builder, By, Key, until } = require('selenium-webdriver');
const should = require('chai').should();

                    /*
                    Navigate to Women and 
                    select Tops  and 
                    choose the first item in the list that is displayed and add item to cart
                    */
                    describe.only('Navigate to women category', () => {
                    // Test case:
                    context('Select Tops from dropdown', () => {
                        it('I see the selected product is added to cart', async () => {
                            // Start web browser
                            const driver = await new Builder().forBrowser('firefox').build();
                            try{

                                await driver.get('https://magento.softwaretestingboard.com/');

                                 // Navigate to women catogery
                                //document.querySelector('.ui-menu >li :nth-child(2)').innerHTML--women  
                                 await driver.wait(until.elementLocated(By.css('.ui-menu')), 30000);
                                let val= await driver.findElement(By.css('.ui-menu'));
                                let val1= await val.findElement(By.css('.ui-menu >li :nth-child(2)')).click();
               
                      
                                 // navigating to category to home > women and selecting tops and using the ref navigating to desired page(tops-women)
                                await driver.wait(until.elementLocated(By.css('.items')), 10000);
                                let elemen = await driver.findElements(By.css('.items'));
                                await elemen[1].findElement(By.css('a[href$="/tops-women.html"]')).click();

                               await driver.sleep(1000);

                               //Selecting the first element from list(breathe-easy-tank) the navigating to selected Tee(breathe-easy-tank.html)
                               await driver.wait(until.elementLocated(By.css('.products')),10000);
                               let cart= await driver.findElement(By.css('.products'));
                               let cartadd =await cart.findElement(By.css('.products >li:first-child'));
                               cartadd.findElement(By.css('a[href$="/breathe-easy-tank.html"]')).click();

                               await driver.sleep(1000);
                                  
                               //document.querySelector('.option-label-size-143-item-168')-selecting M size
                                
                               await driver.wait(until.elementLocated(By.css('#option-label-size-143-item-168')),10000);
                               await driver.findElement(By.id('option-label-size-143-item-168')).click();

                               //document.querySelector('#option-label-color-93-item-60')--selectinng the color
                               await driver.wait(until.elementLocated(By.css('#option-label-color-93-item-60')),10000);
                               await driver.findElement(By.id('option-label-color-93-item-60')).click();
                            
                                //accessing the qty text
                              await driver.wait(until.elementLocated(By.css('.box-tocart')),10000);
                              let qty= await driver.findElement(By.css('.box-tocart'));
                              let qtytext= await qty.findElement(By.css('.box-tocart > div :nth-child(1)'));
                               //accessing the text 
                               await driver.wait(until.elementLocated(By.css('#qty')),10000);
                               await driver.findElement(By.id('qty')).click();

                               //add to cart
                               //document.querySelector('.product-add-form').innerHtml -text for add button selected items to cart
                               //document.querySelector('#product-addtocart-button')

                               await driver.sleep(10000);
                               await driver.wait(until.elementLocated(By.css('#product-addtocart-button')),10000);
                               await driver.findElement(By.id('product-addtocart-button')).click();
                            

                               
                                 


                               
                                 
                               

                            }
                            finally{}
                        });
                    });
                });


              
            
    





      
