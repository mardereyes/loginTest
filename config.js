
export.config = {

  capabilities: {
    name: 'Test Job',
    'browserName': 'chrome',
    'shardTestFiles': 'true',
    'maxInstances': '1',
  },

  specs: [
    '../e2e/website/Products/Music/tests/musBasketSpec.js'
  ],

  baseUrl: 'https://login-alpha.mimecast.com/m/secure/login',
  framework: 'jasmine2',
  allScriptsTimeout: 10000,
  getPageTimeout: 10000,

  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: true,
    showColors: true,
    defaultTimeoutInterval: 10000,
    includeStackTrace: true
  }

};
