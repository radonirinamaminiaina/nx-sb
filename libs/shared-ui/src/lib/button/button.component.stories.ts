import { argsToTemplate, type Meta, type StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { action } from '@storybook/addon-actions';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'Common / Button',
  argTypes: {
    label: {
      description: 'Label of the button',
    },
    size: {
      defaultValue: 'md',
      options: ['lg', 'md', 'sm'],
      description: 'Size of the button',
      control: {
        type: 'radio',
      },
    },
    variant: {
      defaultValue: 'primary',
      options: ['default', 'primary', 'danger', 'success', 'warning'],
      description: 'Variant of the button',
      control: {
        type: 'select',
      },
    },
  },
  render: (args: ButtonComponent) => {
    console.log(args);
    return {
      props: {
        ...args,
        click: action('click'),
      },
      template: `<lib-button ${argsToTemplate(args)}></lib-button>`,
    };
  },
};
export default meta;
type Story = StoryObj<ButtonComponent>;

export const Button: Story = {
  args: {
    label: 'Button label',
    size: 'md',
    variant: 'primary',
  },
};
