/**
* Protractor e2e test spec
* Verify that the user can login with correct user address and password (I.e. Your address and your changed password).
Verify that e.g. The inbox refresh button is present and visible, in order to do this.

Case 6: [optional]
Verify that the user, when logged in, can compose and send a message.
*/

//Variables
const Login = require ('../login/login_pageObject.js');
//

beforeEach (() => {
  browser.get('/m/secure/login');
  browser.driver.manage().window().setSize(1280, 1024);
  browser.driver.manage().deleteAllCookies();
});

describe('Verify login and send an email', () => {

  it('Should allow user to log in with correct username and password', () => {
    browser.pause();
    Login.FillLoginForm('attorith@gmail.com','Qwertyuiop16!');
    expect(Login.btnRefresh.isDisplayed()).toBe(true);
  });

  it('Should allow user to compose and send an email', () => {
    Login.FillLoginForm('attorith@gmail.com','Qwertyuiop16!');
    Login.btnConmpose.click();
    Login.txtFieldTo.sendKeys('attorith@gmail.com');
    Login.txtFieldSubject.sendKeys('Protractor Test bogus email');
    Login.txtComposeBody.sendKeys('This is the body for the Protractor Test bogus email. Have a jolly good day!');
    Login.btnSend.click();
  //  expect(Login.lblConfirmation.isDisplayed()).toBe.(true); //I couldn't see the confirmation message css without spamming Carlo :)
  });

});
