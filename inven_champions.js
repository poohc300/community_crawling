const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

(async(page_number) => {
    const page_number = this.page_number;
    const browser = await puppeteer.launch({
        headless : false
    });
    const page = await browser.newPage();

    await page.setViewport({
        width: 1366,
        height: 768
    });
  
    // access URL
    await page.goto('https://lol.inven.co.kr/dataninfo/champion/manualTool.php?pg='+page_number);

    // GET page html
    const content = await page.content();

    // load cheerio on $
    const $ = cheerio.load(content);
    // get all copied list with Selector
    const lists = $("#lolDbManualToolList > div.listTable > table > tbody > tr");
    // circulate all list
    lists.each((index, list) => {
        const champ = $(list).find("td.champ > img").attr('src');
        const subject = $(list).find("td.subject").text();
        const content = $(list).find("td.subject > a").attr('href');
        console.log({
            index, champ, subject, content
        });
    });

    // finish browser
    browser.close();
})();

const pages = $("#lolDb > div.lolDbManualToolPage > div.listPage > div.paging");
pages.each((index, page) => {

    const page_urls = $(page).find("span > a").attr("href");
    console.log({
        index, page_urls
    });
});