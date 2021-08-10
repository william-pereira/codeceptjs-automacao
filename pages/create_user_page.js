const { I } = inject();

module.exports = {
  fields: {
      firstName: '#customer_firstname',
      lastName: '#customer_lastname',
      password: '#passwd',
      address: '#address1',
      day: '#days',
      month: '#months',
      year: '#years',
      city: '#city',
      state: '#id_state',
      postcode: '#postcode',
      phone: '#phone_mobile',


    },

  button: {
    male: '#id_gender1',
    register: 'Register',
  },
  messages: {

  },
  labels: {
    createAnAccount: '.page-heading'
  },

   createUserWithSuccess(name, lastName) {
    I.waitForElement(this.fields.firstName, 10)
   // var Main_title = await I.grabTextFrom(this.labels.createUserWithSuccess)
  //  validacao.equal(Main_title, 'CREATE AN ACCOUNT')
    I.click(this.button.male)
    I.fillField(this.fields.firstName, name)
    I.fillField(this.fields.lastName, lastName)
    I.fillField(this.fields.password, secret('12345'))
    I.selectOption(this.fields.day, '14')
    I.selectOption(this.fields.month, '12')
    I.selectOption(this.fields.year, '1994')
    I.fillField(this.fields.address, 'Rua Seis, 681')
    I.fillField(this.fields.city, 'Guarulhos')
    I.selectOption(this.fields.state, 'Florida')
    I.fillField(this.fields.postcode,'00000')
    I.fillField(this.fields.phone, '+55 11 980522405')
  },
  createUser() {
    I.click(this.button.register)
  }
  
}
 