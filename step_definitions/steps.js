const { I } = inject();

Given('I fill email', () => {
  I.fillField('~email', 'teste@teste.com')
});

Given('i fill password', () => {
  I.fillField('~senha', '123456')
}),

When('i tap on Entrar', () => {
  I.tap('~entrar')
}),

Then('i see the Salvar', () => {
  I.waitForElement('~codigo', 5)
  I.seeElement('~codigo')
})
