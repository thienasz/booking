import { BookingjsPage } from './app.po';

describe('bookingjs App', function() {
  let page: BookingjsPage;

  beforeEach(() => {
    page = new BookingjsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
