import { newE2EPage } from '@stencil/core/testing';

describe('button-hiweb-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<button-hiweb-component></button-hiweb-component>');

    const element = await page.find('button-hiweb-component');
    expect(element).toHaveClass('hydrated');
  });
});
