import { SourgrapePage } from './app.po';

describe('sourgrape App', () => {
  let page: SourgrapePage;

  beforeEach(() => {
    page = new SourgrapePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
