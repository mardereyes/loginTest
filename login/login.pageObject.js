/**
* Page object file
*/
'use strict';

class login {

  static login (username, password) {
    this.txtUsername.clear();
    this.txtUsername.sendKeys(username);
    this.txtPassword.clear();
    this.txtPassword.sendKeys(password);
    this.btnLogin.click();
  }

  static get txtEmailAddress() {
    return element(by.id('username'));
  },

  static get btnNext() {
    return elementl($$('.btn-primary'));
  }

}

module.exports = login;
