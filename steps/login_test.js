
const { I, login_page, home_page} = inject ()

Feature('login'); 

Scenario('Login whit success', () => {
    
    login_page.doLogin('teste@teste.com', '123456')

    home_page.checkLoginSuccess()
});

Scenario('Login fail', () => {

    login_page.doLogin('xxx', '123456')

    login_page.checkLoginError()
});
