module.exports = {
  bootstrap: function() {
   console.log('Isso executou antes do projeto todo')
  },

  teardown: function() {
    console.log('Isso executou DEPOIS do projeto todo')
  }
  

}