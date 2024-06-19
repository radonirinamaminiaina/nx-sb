import type { Meta, StoryObj } from '@storybook/angular';
import { CardLoginComponent } from './card-login.component';
import { userEvent, waitFor, within, fn, expect } from '@storybook/test';

const meta: Meta<CardLoginComponent> = {
  component: CardLoginComponent,
  title: 'Form / Login',
  args: {
    onSubmit: fn(),
  },
};
export default meta;
type Story = StoryObj<CardLoginComponent>;

export const Login: Story = {
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    console.log(args);

    await step('Enter credentials', async () => {
      await userEvent.type(canvas.getByTestId('email'), 'rado@gmail.com');
      await userEvent.type(canvas.getByTestId('password'), '123456');
    });

    await step('Submit form', async () => {
      await userEvent.click(canvas.getByTestId('submit'));
    });

    await waitFor(() => expect(canvas.getByTestId('success')).toBeTruthy());
  },
};
