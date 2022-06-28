describe('Teste home LoginApp Simples -tecsinapse ', () => {
  
  
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Espera renderizar a tela de boas vindas com sucesso', async () => {
    
    //Dado que o usuário preenche as informações de login
    await element(by.id('inputUser')).typeText('admin');
    await element(by.id('inputPassword')).typeText('admin\n');

    //Quando o usuário tocar em Log In
    await element(by.id('buttonLogin')).tap();

    //Então deve aparecer a tela de boas vindas com sucesso
    await expect(element(by.text('Seja bem vindo, ${admin}'))).toBeVisible();
  });


  it('Espera renderizar tela com  mensagem de erro com campos vazios de user e senha ', async () => {
    await element(by.id('buttonLogin')).tap();

    await expect(element(by.text('Usuário ou senha inválido'))).toBeVisible();
  });


  it('Espera renderizar tela com mensagem de erro para campo usuário ERRADO', async () => {
    await element(by.id('inputPassword')).typeText('admXXX');
    await element(by.id('buttonLogin')).tap();

    await expect(element(by.text('Usuário ou senha inválido'))).toBeVisible();
  });

  it('Espera visualizar mensagem de erro sem senha digitada', async () => {
    await element(by.id('inputUser')).typeText('admin');
    await element(by.id('buttonLogin')).tap();

    await expect(element(by.text('Usuário ou senha inválido'))).toBeVisible();
  });
});