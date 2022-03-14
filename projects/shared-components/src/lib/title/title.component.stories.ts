import { Story, Meta } from '@storybook/angular/types-6-0';
import { TitleComponent } from './title.component';

export default {
  title: 'Title',
  component: TitleComponent,
  argTypes: {
    content: { control: 'text' },
  },
} as Meta;

const Template: Story<TitleComponent> = (args: TitleComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  content: 'My first title',
};
