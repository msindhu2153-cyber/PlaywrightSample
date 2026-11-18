/*
    Navigation Methods:
    1)page.goto()
    2)page.goback()
    3)page.goForward()
    4)page.reload()

    Page Information Methods:extract information from page using page fixture
    1)page.title():fetch title of teh webpage
    2)page.url():fetch url of the webpage
    3)page.content():fetch entire html document of the webpage
    4)page.viewportSize():get current dimensions
    5)page.closed():returns true if page is closed else false
    6)page.close():used to close the webpage

    Browser Information Methods:extract browser information using browser fixture
    1)browser.browserType()

    Other Supported Methods:
    1)page.setviewportSize():to maximize the webpage
    2)page.context():current browser context


*/

import{test,expect} from '@playwright/test'

test('Test1',async({page,browser})=>{
    let response = await page.goto("https://www.amazon.in/",{ 
                            timeout:10_000,
                            waitUntil:"load" //wait until entire page is loaded
                            //waitUntil:"domcontentloaded" is used to wait until initial html is loaded
                            //waitUntil:"networkidle" is used to wait until all netwrok calls are completed(not recommended in real-time)
                            //waitUntil:"commit" is used to wait until initial document is loaded and get network response from server
                        });

    console.log(response?.status());

    await page.goto("https://www.flipkart.com/",{
        waitUntil:'load'
    });
    await page.goBack({
        waitUntil:'load'
    });

    await page.goForward({
        waitUntil:'load'
    });

    await page.reload({
        waitUntil:'load'
    });

    let pageTitle:string = await page.title();
    console.log(pageTitle);

    let pageUrl:string = page.url();//this method is returning string hence await is not required
    console.log(pageUrl);

    let pageContent:string = await page.content();
    console.log(pageContent);

    let pageviewportSize = page.viewportSize();
    console.log(pageviewportSize);

    let ispageClosed:boolean = page.isClosed();
    console.log(ispageClosed);

    await page.close();

    let ispageClosed1:boolean = page.isClosed();
    console.log(ispageClosed1);
})

