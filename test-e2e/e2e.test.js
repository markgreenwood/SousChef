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

});