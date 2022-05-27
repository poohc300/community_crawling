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
    const lists = $("#new-board > form > div > table > tbody > tr");
    
    // circulate all list
    lists.each((index, list) => {
         
        //const hotel = $(list).find("a > div > div.name > strong").text();
        const user = $(list).find("td.user > span").text();
        const body = $(list).find("td.tit > div > div > a").text().split(" ").join("")
        const category = body.substring(2,4);
        const title = body.substring(6);
    
        console.log({
            index, user, category, title
        });
    });

    // finish browser
    browser.close();
})();