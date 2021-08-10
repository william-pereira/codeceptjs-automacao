var validacao = require('assert')
var faker = require('faker');
const { I } = inject();
const cpfName = require('../utils/cpf_name')
Feature('Login');

BeforeSuite(() => {
  console.log(cpfName.cpfName())
})
Before(() => {
  I.amOnPage('/')
})
After(() => {
  console.log('After')
})
AfterSuite(() => {

  console.log('Depois de tudo')
})
Scenario('Validade Empty E-mail on Create Account', ({ I }) => {
  I.amOnPage('/')

  I.click('.login')
  I.click('#SubmitCreate')
  I.see('Invalid email address')
  I.s
  // I.grabTextFrom = Captura um texto específico através de uma classe ou ID
 });

