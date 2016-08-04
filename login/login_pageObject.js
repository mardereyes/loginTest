/**
* Page object file
*/
'use strict';

class login {

  static FillLoginForm (username, password) {
    this.txtEmailAddress.sendKeys(username);
    this.btnSubmit.get(0).click();
    this.txtPassword.sendKeys(password);
    this.btnSubmit.get(0).click();
  }

  static get txtEmailAddress() {
    return element(by.id('username'));
  }

  static get txtPassword() {
    return element(by.id('password'));
  }

  static get btnSubmit() {
    return element.all(by.css('.btn-primary'));
  }

  static get drpDomain() {
    return element(by.id('type'));
  }

  static get lnkText() {
    return element.all(by.css('.btn-text'));
  }

  static get lblErrorMessage() {
    return element(by.css('.text-danger'));
  }

}

module.exports = login;
