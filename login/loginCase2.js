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
//

beforeEach (() => {
  browser.get('/m/secure/login');
  browser.driver.manage().window().setSize(1280, 1024);
  browser.driver.manage().deleteAllCookies();
});

describe('Verify elements displayed after correct email input', () => {

  it('Should display enabled password text box', () => {
    expect(Login.txtPassword.isDisplayed()).toBe(true);
    expect(Login.txtPassword.isEnabled()).toBe(true);
  });

  it('Should display enabled Authentication type drop-down list', () => {
    expect(Login.drpDomain.isDisplayed()).toBe(true);
    expect(Login.drpDomain.isEnabled()).toBe(true);
  });

  it('Should display "Log as different user" link', () => {
    expect(Login.btnNext.get(0).isEnabled()).toBe(false);
  });
});

describe('Verify links behaviour on login page', () => {

  it('Should return user to initial login page after clicking on ‘Login as a different user’ link', () => {

  });

  it('Should navigate user to reset page after clicking on ‘Reset password’ link', () => {

  });

  it('Should navigate user to reset back to login page after clicking on ‘Never mind’ link', () => {
    // Password element present and enabled
    // Login button present and disabled.

  });
});
