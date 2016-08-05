/**
* Protractor e2e test spec
* Verify the following additional elements are present on the login page after a correct user address has been entered:
+Authentication type drop-down list, password. (Both of these elements should be enabled).
+Verify the link text is as expected (the app text is the correct text).
+Verify that the ‘Login as a different user’ button returns the user to the initial login page and that the link text
is as expected (the app text is the correct text).
+Verify that that the reset password navigates the user to the reset page, and that the following elements, all enabled, are present on the reset page:
Email address to reset, reset button, ‘never mind take me back’ link.
+Verify the link text is as expected (the app text is the correct text).
+Verify that the ‘Never mind’ link takes the user back to the login page with the Password element present and enabled, and the Login button present and disabled.
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

function EmailInput (){
  Login.txtEmailAddress.sendKeys(Credentials.username);
  Login.btnSubmit.get(0).click();
}

describe('Verify elements displayed after correct email input', () => {

  it('Should display enabled password text box', () => {
    EmailInput();
    expect(Login.txtPassword.isDisplayed()).toBe(true);
    expect(Login.txtPassword.isEnabled()).toBe(true);
  });

  it('Should display enabled Authentication type drop-down list', () => {
    EmailInput();
    expect(Login.drpDomain.isDisplayed()).toBe(true);
    expect(Login.drpDomain.isEnabled()).toBe(true);
  });

  it('Should display "Log as different user" link', () => {
    EmailInput();
    expect(Login.lnkText.get(0).isDisplayed()).toBe(true);
    expect(Login.lnkText.getText(0)).toContain('Log in as a different user.');
  });

  it('Should display "Forgot your password?" link', () => {
    EmailInput();
    expect(Login.lnkText.get(1).isDisplayed()).toBe(true);
    expect(Login.lnkText.getText(1)).toContain('Forgot your password?');
  });
});

describe('Verify links behaviour on login page', () => {

  it('Should return user to initial login page after clicking on ‘Login as a different user’ link', () => {
    EmailInput();
    Login.lnkText.get(0).click();
    expect(Login.btnSubmit.getText(0)).toContain('Next');
    expect(Login.btnSubmit.get(0).isEnabled()).toBe(false);
  });

  it('Should navigate user to reset page after clicking on ‘Reset password’ link', () => {
    EmailInput();
    Login.lnkText.get(1).click();
    expect(browser.getCurrentUrl()).toContain('forgot-password');
  });

  it('Should navigate user to reset back to login page after clicking on ‘Never mind’ link', () => {
    EmailInput();
    Login.lnkText.get(1).click(); //navigates to 'Never mind' link
    Login.lnkText.get(0).click(); //clicks on 'Never mind' link

    // Password element present and enabled
    expect(Login.txtPassword.isDisplayed()).toBe(true);
    expect(Login.txtPassword.isEnabled()).toBe(true);

    // Login button present and disabled.
    expect(Login.btnSubmit.get(0).isDisplayed()).toBe(true);
    expect(Login.btnSubmit.get(0).isEnabled()).toBe(false);
    });
});
