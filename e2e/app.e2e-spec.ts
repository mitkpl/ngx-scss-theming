import { NgxScssThemingPage } from './app.po';

describe('ngx-scss-theming App', () => {
  let page: NgxScssThemingPage;

  beforeEach(() => {
    page = new NgxScssThemingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
