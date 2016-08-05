/**
* Protractor e2e test spec
* Verify the following elements are present on the login page after navigation to the page:
Email address and Next button. Verify that the former, also, is enabled and the later disabled.
*/

//Variables
const Login = require ('../login/login_pageObject.js');
const Credentials = require ('../login/credentials.js');

//

beforeEach (() => {
  browser.get('/m/secure/login');
  browser.driver.manage().window().setSize(1280, 1024);
  browser.driver.manage().deleteAllCookies();
});

describe('Verify main Page elements are displayed', () => {

  it('Should display email address text box', () => {
    expect(Login.txtEmailAddress.isDisplayed()).toBe(true);
  });

  it('Should display "Next" button', () => {
    expect(Login.btnSubmit.get(0).isDisplayed()).toBe(true);
  });

  it('Should display disabled "Next" button whenever invalid email on email field', () => {
    Login.txtEmailAddress.sendKeys('nottherightformat.com');
    expect(Login.btnSubmit.get(0).isEnabled()).toBe(false);
  });

  it('Should display disabled "Next" button whenever emtpy on email field', () => {
    Login.txtEmailAddress.sendKeys('');
    expect(Login.btnSubmit.get(0).isEnabled()).toBe(false);
  });

  it('Should display enabled "Next" button whenever correct email address on email field', () => {
    Login.txtEmailAddress.sendKeys(Credentials.username);
    expect(Login.btnSubmit.get(0).isEnabled()).toBe(true);
  });

});
