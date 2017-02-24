import { ExpEnginePage } from './app.po';

describe('exp-engine App', function() {
  let page: ExpEnginePage;

  beforeEach(() => {
    page = new ExpEnginePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
