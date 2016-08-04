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

  static get txtFieldTo() {
    return element(by.css('.field-to'));
  }

  static get txtFieldSubject() {
    return element(by.css('.field-subject'));
  }

  static get txtComposeBody() {
    return element(by.css('.note-editable'));
  }

  static get btnSubmit() {
    return element.all(by.css('.btn-primary'));
  }

  static get btnRefresh() {
    return element(by.css('.mc-btn-left .cursor-pointer'));
  }

  static get btnConmpose() {
    return element(by.css('[ng-click="action()"]'));
  }

  static get btnSend() {
    return element(by.css('.icon-paper-plane'));
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

  static get lblConfirmation() {
    return element(by.css('tbd'));
  }

}

module.exports = login;
