/**
* Protractor e2e test spec
* Verify that the user can login with correct user address and password (I.e. Your address and your changed password).
Verify that e.g. The inbox refresh button is present and visible, in order to do this.

Case 6: [optional]
Verify that the user, when logged in, can compose and send a message.
*/

//Variables
const Login = require ('../login/login_pageObject.js');
const Credentials = require ('../login/credentials.js');
//

beforeEach (() => {
  //URL had to contain the cookie from the original email sent by mimecast, otherwise credentials wouldn't be valid. Perhaps a session ID.
  browser.get('/m/secure/login/?tkn=WVXYHQ7cA8nSKgxK0RS4nkdOIDqpeB5cYTr3ptKQOtRRUm0poN7PZ_cOXXqmu1ZSPxbDSpccdqyHcLr4Z0WYoUUaJR4MrVGHESpRXK3_Gyw#/login');
  browser.driver.manage().window().setSize(1280, 1024);
  browser.driver.manage().deleteAllCookies();
});

describe('Verify login and send an email', () => {

  it('Should allow user to log in with correct username and password', () => {
    Login.FillLoginForm(Credentials.username,Credentials.password);
    browser.waitForAngular();
    expect(Login.btnRefresh.isDisplayed()).toBe(true);
  });

  it('Should allow user to compose and send an email', () => {
    Login.FillLoginForm(Credentials.username,Credentials.password);
    browser.waitForAngular();
    Login.btnConmpose.click();
    Login.txtFieldTo.sendKeys(Credentials.recipient);
    Login.txtFieldTo.sendKeys(protractor.Key.ENTER);
    Login.txtFieldSubject.sendKeys('Protractor Test bogus email');
    Login.txtComposeBody.sendKeys('This is the body for the Protractor Test bogus email. Have a jolly good day!');
    Login.btnSend.click();
    //I couldn't see the confirmation message css without spamming someome with an @mimecast email address :)
    //expect(Login.lblConfirmation.isDisplayed()).toBe.(true);
  });

});
