//css
// 'input' , 'div'

//page.Locator('div')

//id attribute > #Id attribute value

//class attribute> .Class attribute value

//Attribute value > [attribute = 'value']

//tag + atrribute > 'tag[attribute = "value"]'

//Multiple attributes in single csss > 'input [placeholder="Username"] [type="text"]'

//parent attribute, child tag .form_group input

//nth child : for list - li tag > 'li:nth-child(2)'




//html/body/div/div/div[2]/div[1]/div

//Absolute xpath - which we dynamically
    //syntax for xpath with attribute
    //tag[@attribute = 'value']

    //syntax for xpath based on text inside the tag
    //tag[text()='value']


    //parent tag - immediate tag for xpath
    //ancestor tag - can be multiple - we need to identify correct ancestor tag
    // - traversing to child


    //*[@id="user-name"]

    //Relative xpath -  Not advisable
    //html/body/div/div/div/div[2]/div/div/div/div[1]/div[2]/div[2]/button

    //div[text()='Sauce Labs Backpack']//ancestor::div[@class='inventory_item_description']//div[@class='pricebar']//button

    //following-sibling
    //preceding-sibling

    //div1 - preceding
    //div2
    //div3 -following