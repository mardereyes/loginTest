/**
* Page object file
*/
'use strict';

class login {

  static login (username, password) {
    this.txtEmailAddress.clear();
    this.txtUsername.sendKeys(username);
    this.btnNext.get(0).click;
    this.txtPassword.clear();
    this.txtPassword.sendKeys(password);
    this.btnSubmit.click();
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

}

module.exports = login;
