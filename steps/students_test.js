Feature('students');

var Chance = require('chance');
var chance = new Chance();

const { I, login_page, home_page} = inject ()
const code = require('../utils/code')
const name = require('../utils/name')

Scenario('Add student whit success', () => {

    const myCode = code.getCode()
    const myName = name.getName()

    login_page.doLogin('teste@teste.com', '123456')
    home_page.registerStudent(myCode, myName)
    home_page.searchStudent(myName, myCode)
});
