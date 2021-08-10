var validacao = require('assert')
var faker = require('faker');

const {I, home_page, login_page, create_user_page, my_account_page, login} = inject()

Feature('Create User');
Scenario('Login with success', async ({login}) => {
 await login('user')
})

Scenario('Create New Account User', async () => {
  
  var name = faker.name.firstName();
  var lastName = faker.name.lastName();


  I.amOnPage('/')

  // home
  home_page.accessLoginPage()
  // login
  login_page.submitCreateAccount(faker.internet.email())

  // create user
  create_user_page.createUserWithSuccess(name, lastName)
  create_user_page.createUser()
  // I.grabTitle = Captura apenas o título da página
 

  // My Account
  my_account_page.validateUserLogged(name, lastName)
});
