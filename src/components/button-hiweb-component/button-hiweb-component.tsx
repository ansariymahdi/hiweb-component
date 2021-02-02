import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'button-hiweb-component',
  styleUrl: 'button-hiweb-component.scss',
  shadow: true,
})
export class ButtonHiwebComponent {
  @Prop() title: string;
  render() {
    return <button class="button-wrapper  button--wide m-3">{this.title}</button>;
  }
}
