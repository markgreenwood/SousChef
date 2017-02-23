describe ('SousChef App', () => {

  beforeAll (() => {
    const options = {
      baseUrl: 'http://localhost:3000',
      url: '/api/auth/signin',
      method: 'POST'
    };
  });
  
  it ('has a title', () => {
    browser.get('/');
    expect(browser.getTitle()).toEqual('SousChef');
  });

  describe ('SousChef nav menu', () => {

    browser.get('/');

    it ('has a Home link', () => {
      expect(element.all(by.css('nav li')).first().getText()).toEqual('Home');
    });

    it ('has an About link', () => {
      expect(element.all(by.css('nav li')).last().getText()).toEqual('About');      
    });
  });

  it ('lands on a welcome page', () => {
    browser.get('/');
    expect(element.all(by.css('section h1')).first().getText()).toEqual('Welcome to SousChef!');
  });

});