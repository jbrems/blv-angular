import { Story, Meta } from '@storybook/angular/types-6-0';
import { BlvTitleComponent } from './title.component';

export default {
  title: 'Title',
  component: BlvTitleComponent,
  argTypes: {
    content: { control: 'text' },
  },
} as Meta;

const Template: Story<BlvTitleComponent> = (args: BlvTitleComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  content: 'My first title',
};
