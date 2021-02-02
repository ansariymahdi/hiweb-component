import { newSpecPage } from '@stencil/core/testing';
import { ButtonHiwebComponent } from '../button-hiweb-component';

describe('button-hiweb-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ButtonHiwebComponent],
      html: `<button-hiweb-component></button-hiweb-component>`,
    });
    expect(page.root).toEqualHtml(`
      <button-hiweb-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </button-hiweb-component>
    `);
  });
});
