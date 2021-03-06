import { withKnobs, select, text, boolean } from '@storybook/addon-knobs'
import { storiesOf }                        from '@storybook/react'
import React                                from 'react'

import Button                               from './index.js'

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
      <div className={'rui'}>
        <Button
          buttonType={select('buttonType', {
            filled: 'filled',
            outline: 'outline',
          })}
          rgb={text('rgb', '')}
          href={text('href', '')}
          loading={boolean('loading')}
          onClick={() => new Promise(resolve => setTimeout(resolve, 1000))}
          disabled={boolean('disabled', false)}
        >
          {text('children', 'Hello World')}
        </Button>
      </div>
    )
  })
