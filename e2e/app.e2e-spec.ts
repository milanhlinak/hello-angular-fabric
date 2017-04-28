import { AngularFabricPage } from './app.po';

describe('angular-fabric App', () => {
  let page: AngularFabricPage;

  beforeEach(() => {
    page = new AngularFabricPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
