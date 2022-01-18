const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless : false
    });
    const page = await browser.newPage();
    await page.goto('https://coinpan.com');

    // 브라우저 닫기 전에 wait
    await page.waitFor(10000);
    await browser.close();
})();

/**
 * 기본적인 사용 형태
 * 
 * puppeteer.launch() 를 통해 브라우저를 열고
 * browser.newPage() 를 통해 새로운 창을 연다
 * 그리고 해당 페이지를 goto(dest)를 통해 이동할 수 있다
 * 그리고 browser.close()를 통해 브라우저를 닫음으로써 종료가능
 * 
 * 단 headless 모드가 true로 설정되어 있으면 아무일도 일어나지
 * 않으니 false로 바꾼다다
 */
