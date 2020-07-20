const puppeteer = require('puppeteer');

let browser, page;
 
beforeEach(async () => {
  browser = await puppeteer.launch();
  page = await browser.newPage();
  await page.goto('http://localhost:3000/#/login');
});

describe('Login test cases', () => {
  it('should login with sucess', async () => {
    await page.$eval('input[id=email]', el => el.value = 'Test@test.com');
    await page.$eval('input[id=pass]', el => el.value = 'Senha123');
    await page.$eval('#form-button', btn => btn.click());
    const content = await page.$$('.landing-page__p');
    expect(content).not.toHaveLength(0);
  });

  it('should login with sucess', async () => {
    await page.$eval('input[id=email]', el => el.value = 'Test@test.com');
    await page.$eval('input[id=pass]', el => el.value = 'Senha1234');
    await page.$eval('#form-button', btn => btn.click());
    const content = await page.$$('#pass-error-msg');
    expect(content).not.toHaveLength(0);
  });

});

afterEach( async () => {
  await browser.close();
});
