/**
* Page object file
*/
'use strict';

class credentials {

  static get username () {
    return 'your@email.com';
  }

  static get password () {
    return 'YourPassword!';
  }

  static get recipient () {
    return 'email@recipient.com';
  }

}

module.exports = credentials;
