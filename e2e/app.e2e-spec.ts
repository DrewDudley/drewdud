import { DrewdudPage } from './app.po';

describe('drewdud App', () => {
  let page: DrewdudPage;

  beforeEach(() => {
    page = new DrewdudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
