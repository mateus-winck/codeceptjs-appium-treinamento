const { I } = inject();

module.exports = {

  button:{
    save: '~salvar'
  },
  
  field: {
    codigo: '//android.widget.EditText[@content-desc="codigo"]',
    aluno: '~aluno',
    search: '~search'
  },

  registerStudent(codigo, aluno){
    I.fillField(this.field.codigo, codigo),
    I.fillField(this.field.aluno, aluno),
    I.tap(this.button.save)
  },

  searchStudent(search, check){
    I.fillField(this.field.search, search),
    I.seeElement('//android.view.ViewGroup[@content-desc="' + check + '"]/android.widget.TextView')
  },

  checkLoginSuccess() {
    I.waitForElement(this.field.codigo, 5)
    I.seeElement(this.field.codigo)
  }
}
