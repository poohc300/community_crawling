const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

(async() => {

    const browser = await puppeteer.launch({
        headless : false
    });
    const page = await browser.newPage();

    await page.setViewport({
        width: 1366,
        height: 768
    });
   
    // access URL
    await page.goto('https://inven.co.kr/board/lol/4626');

    // GET page html
    const content = await page.content();

    // load cheerio on $
    const $ = cheerio.load(content);
    // get all copied list with Selector
    const lists = $("#lolDbManualToolList > div.listTable > table > tbody");
    
    // circulate all list
    lists.each((index, list) => {
         
        const body = $(list).text();
     
        console.log({
            index, body
        });
    });

    // finish browser
    browser.close();
})();