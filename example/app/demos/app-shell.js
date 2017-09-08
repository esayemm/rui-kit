import doc          from 'components/DocPage/doc'
import tinycolor    from 'tinycolor2'
import variables    from 'esayemm-styles/variables'

import { AppShell } from '../../../src'

export default doc({
  component: AppShell,
  to       : '/appshell',
  display  : 'AppShell',
  sections : [
    {
      header     : 'AppShell',
      description: 'A sample layout.',
      demo       : <AppShell
        style={{
          border: `1px solid ${tinycolor(variables.colors.secondary).setAlpha(.2)}`,
          height: '300px',
        }}
        headerNode={<div>Header</div>}
        leftNode={<div>Hi</div>}
        links={[
          {
            header: 'test',
            items : [
              {
                display: 'cool',
                to     : '#',
              },
            ],
          },
        ]}
      >
          hi
      </AppShell>,
    },
  ],
})
