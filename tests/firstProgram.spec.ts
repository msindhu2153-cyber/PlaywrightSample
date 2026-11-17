/*
    Browser:its actual browser instance launched by playwright
    BrowserContext:its a seperate browser session created inside a browser
        =>Each browser context will have seperate 
            * cookies
            * local storage
            * session storage
            * cache
            * session related state
    Page:individual browser tab with in the browser context
        =>A browser context can contain multiple tabs

    Launch a browser:
        import{test,expect} from '@playwright/test'
    Import chromium:
        import{test,expect,chromium} from '@playwright/test'
    Test Method syntax:
        test(#testcasename,#arrowfn)
    Launch chromium browser:
        chromium.launch()
    Create a browser context:(use this for incognito window)
        browser.newContext()
    Create a page:
        context.newPage();
    Interact with the browser:using browser navigation methods
        * Launch any URL:goto(#url#)
    Execute test methods in 2 ways:
        1)using playwright runner ">" icon
        2)npx playwright test tests\firstProgram.spec.ts
    Debug test methods using terminal:
        npx playwright test firstProgram.spec.ts --debug

    *** All browsers interactions are async,hence we need to use async and await

*/

import{test,expect,chromium} from '@playwright/test'

test('launching chromium Binary',async()=>{

    console.log('this is first program');
        
    let browser = await chromium.launch({
        headless:false
    });

    let context1 = await browser.newContext();

    let page1 = await context1.newPage();
    await page1.goto("https://www.amazon.in/");

    let page2 = await context1.newPage();
    await page2.goto("https://www.flipkart.com/");

})

/*
    Instead of adding the above steps to launch a browser and navigate to any page/URL,we can use "fixtures"
        Syntax:async({page})
*/

test('launching chrome by using fixture',async({page})=>{

    await page.goto("https://www.amazon.in/");

})

