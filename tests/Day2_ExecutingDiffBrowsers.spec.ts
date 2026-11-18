/* 
    use channel to execute tests in real broswers
        let browser = await chromium.launch({
            channel:"chrome"/"msedge",
            headless:false
        });

    Fixtures:objects created by playwright at runtime and destroyed after execution

    Playwright is used to automate UI,API and DB and also performance testing using K6
        UI:automating browser and elements present in the browser
    * default wait timeout for playwright is 30sec

    we can choose the browser while using page fixtures from config file
    * if nothing is provided in test file,then it will choose from the config
    * through command line we can execute the tests in different browsers
        terminal Command:npx playwright test #testname# --project=chromium
    * withinthe code using "use"
        test.use({
            browserName:firefox,
            headless:false
        })
    * for hard timeout,use await page.waitForTimeout(1000)

*/

import{test,expect,chromium,firefox,webkit} from '@playwright/test'

test('running in different browsers and Binaries',async()=>{

    console.log('this is first program');
        
    let browser = await chromium.launch({ //update chromium to firefox/webkit and remove channel
        channel:"msedge",//update channel value to chrome/msedge 
        headless:false
    });

    let context1 = await browser.newContext();

    let page1 = await context1.newPage();
    await page1.goto("https://www.amazon.in/");

    let context2 = await browser.newContext();

    let page2 = await context2.newPage();
    await page2.goto("https://www.flipkart.com/");

})

test.use({
            browserName:"firefox",
            headless:false
        })

test('running in different browsers and Binaries using fixtures',async({page})=>{//playwright will create the page at runtime

    await page.goto("https://www.amazon.in/");

})


