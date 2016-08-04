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

describe('Verify login', () => {

  it('Should allow user to log in with correct username and password', () => {
    browser.pause();
    Login.FillLoginForm('attorith@gmail.com','Computer2016!');
    //expect(Login.lblErrorMessage.isDisplayed()).toBe(true);
  });


});
