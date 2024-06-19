import { argsToTemplate, type Meta, type StoryObj } from '@storybook/angular';
import { CardComponent } from './card.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const CARD_TITLE = 'Create new user';
const CARD_BODY = 'Card Body';

const meta: Meta<CardComponent> = {
  component: CardComponent,
  title: 'Common / Card',
  argTypes: {
    variant: {
      options: ['default', 'gray'],
      control: {
        type: 'radio',
      },
    },
  },
  render: (args: CardComponent) => {
    return {
      props: {
        ...args,
      },
      template: `
        <lib-card ${argsToTemplate(args)}>
          <div>${CARD_BODY}</div>
        </lib-card>
      `,
    };
  },
};
export default meta;
type Story = StoryObj<CardComponent>;

export const Card: Story = {
  args: {
    heading: CARD_TITLE,
    variant: 'default',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(CARD_TITLE)).toBeTruthy();
    expect(canvas.getByText(CARD_BODY)).toBeTruthy();
  },
};
