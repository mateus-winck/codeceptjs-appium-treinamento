exports.config = {
  output: './output',
  helpers: {
    Appium: {
      app: '/Users/mateu/source/repos/curso_appium/apkqazando/app-release.apk',
      platform: 'Android',
      desiredCapabilities: {
        appPackage: 'com.qazandoapp',
        appActivity: 'MainActivity',
        deviceName: 'pixel',
        plataformVersion: '9'
      }
    }
  },
  include: {
    I: './steps_file.js',
    login_page: './pages/login_page.js',
    home_page: './pages/home_page.js'
  },
  mocha: {},
  bootstrap: './server/server.js',
  teardown: './server/server.js',
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    }
  },
  tests: './steps/*_test.js',
  name: 'curso_appium'
}