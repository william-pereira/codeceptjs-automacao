const { I } = inject();

module.exports = {
  button: {
      userName: '.header_user_info'
  },

  validateUserLogged(name, lastName) {
    I.waitForElement(this.button.userName)
    I.see(`${name} ${lastName}`)
  }
  
}
