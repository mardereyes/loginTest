
exports.config = {

  capabilities: {
    'browserName': 'chrome',
    'shardTestFiles': 'true',
    'maxInstances': '1',
  },

  specs: ['login/loginCase*.js'],

  baseUrl: 'https://login-alpha.mimecast.com',


  onPrepare: function() {
    var SpecReporter = require('jasmine-spec-reporter');
    // add jasmine spec reporter
    jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
  },

  framework: 'jasmine2',
  allScriptsTimeout: 10000,
  getPageTimeout: 10000,

  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: true,
    showColors: true,
    defaultTimeoutInterval: 500000,
    includeStackTrace: true,
    print: function() {}
  }


};
