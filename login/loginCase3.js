/**
* Protractor e2e test spec
* Verify that the user cannot log into the Secure Messaging site with an invalid user address.
(error text – match expected text message).
*/

//Variables
const Login = require ('../login/login_pageObject.js');
//

beforeEach (() => {
  browser.get('/m/secure/login');
  browser.driver.manage().window().setSize(1280, 1024);
  browser.driver.manage().deleteAllCookies();
});

describe('Verify login error messages', () => {

  it('Should display error message whenever invalid email address is submited', () => {
    Login.FillLoginForm('invalid@invalid.com','Prueba2016!');
    expect(Login.lblErrorMessage.isDisplayed()).toBe(true);
    expect(Login.lblErrorMessage.getText()).toEqual('Invalid user name, password or permissions. Please check you are using the correct URL.');
  });

  it('Should display error message whenever invalid password address is submited', () => {
    Login.FillLoginForm('attorith@gmail.com','invalid');
    expect(Login.lblErrorMessage.isDisplayed()).toBe(true);
    expect(Login.lblErrorMessage.getText()).toEqual('Invalid user name, password or permissions. Please check you are using the correct URL.');
  });

});
