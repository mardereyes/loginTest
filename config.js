
exports.config = {

  capabilities: {
    'browserName': 'chrome',
    'shardTestFiles': 'true',
    'maxInstances': '1',
  },

  specs: ['login/loginCase3.js'],

  baseUrl: 'https://login-alpha.mimecast.com',
  framework: 'jasmine2',
  allScriptsTimeout: 10000,
  getPageTimeout: 10000,

  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: true,
    showColors: true,
    defaultTimeoutInterval: 500000,
    includeStackTrace: true
  }

};
