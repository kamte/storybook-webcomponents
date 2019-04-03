import { storiesOf } from '@storybook/polymer';
import { withKnobs, number } from '@storybook/addon-knobs';
import '../countup-button'


storiesOf('countup-button', module)
  .addDecorator(withKnobs)
  .add('add props',
  () => {
    const num = number('increment value', 5);

    return `<countup-button increment="${num}" />`
  }
);
