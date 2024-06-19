import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { InputComponent } from './input.component';
import { userEvent, within } from '@storybook/testing-library';
import { ButtonComponent } from '../button/button.component';

const meta: Meta<InputComponent> = {
  component: InputComponent,
  title: 'Form / Input',
  decorators: [
    moduleMetadata({
      imports: [ButtonComponent],
    }),
  ],
  render: (args: InputComponent) => ({
    props: {
      ...args,
    },
    template: `
    <div>
      <lib-input ${argsToTemplate(args)}>
        <input id="email" data-testid="email" type="email" placeholder="Email" />
      </lib-input>
      <lib-button label="Submit"></lib-button>
    </div>`,
  }),
};
export default meta;
type Story = StoryObj<InputComponent>;

export const Input: Story = {
  args: {},
};
