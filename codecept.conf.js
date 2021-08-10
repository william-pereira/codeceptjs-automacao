const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './steps/login_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://automationpractice.com/index.php',
      browser: process.env.NAVEGADOR || 'firefox',
      waitForTimeout: 5000,
      desiredCapabilities: {
        chromeOptions: {
          // args: ["--headless"] /* --headless = não vai abrir o navegador*/
        }
      }
    }
  },
  include: {
    I: './steps_file.js',
    home_page: './pages/home_page.js',
    login_page: './pages/login_page.js',
    create_user_page: './pages/create_user_page.js',
    my_account_page: './pages/my_account_page.js',
  },
  bootstrap: null,
  teardown:  null,
  mocha: {},
  name: 'automacao-codeceptjs-web',
  plugins: {
    allure: {
      enabled: true
    },
    mocha: {
      reporterOptions: {
      }
    },
    stepByStepReport: {
      enabled: false,
      deleteSuccessful: false, 
      fullPageScreenshots: true,
      screenshotsForAllureReport: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
    autoLogin: {
      enabled: true,
      saveToFile: true,
      inject: 'login',
      users: {
        user: {
          login: (I) => {
              I.amOnPage('/') 
              I.click('.login')
              I.fillField('#email', 'Xzavier_Berge@yahoo.com')
              I.fillField('#passwd', secret('12345'))
              I.waitForElement('#passwd', 10)
              I.click('#SubmitLogin')
          },
          // if we see `Admin` on page, we assume we are logged in
          check: (I) => {
             I.amOnPage('/');
             I.see('Dameon Emard');
          }
        }
      }
    }
  }
}