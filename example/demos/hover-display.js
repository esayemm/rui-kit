import { HoverDisplay } from '../../src'

/* eslint-disable react/jsx-key */
export default {
  display          : 'HoverDisplay',
  to               : '/hover-display',
  demoComponentAttr: {
    header: `<HoverDisplay />`,
    demos : [
      <HoverDisplay
        style={{background: 'yellow', padding: '1rem', border: '1px solid black'}}
        content={
          <div style={{background: 'blue', height: '200px', width: '200px'}}>
            Content
          </div>
        }
      >
        Hover over me to display content
      </HoverDisplay>,

      <div style={{overflow: 'hidden'}}>
        <HoverDisplay
          style={{background: 'yellow', padding: '1rem', border: '1px solid black'}}
          content={
            <div style={{background: 'blue', height: '200px', width: '200px'}}>
              Inside overflow hidden Content
            </div>
          }
        >
          Inside a overflow hidden
        </HoverDisplay>
      </div>,
    ],
    codeSnippetType: 'html',
    codeSnippet    : `
      <HoverDisplay
        style={{background: 'yellow', padding: '1rem', border: '1px solid black'}}
        content={
          <div style={{background: 'blue', height: '200px', width: '200px'}}>
            Content
          </div>
        }
      >
        Hover over me to display content
      </HoverDisplay>

      <div style={{overflow: 'hidden'}}>
        <HoverDisplay
          style={{background: 'yellow', padding: '1rem', border: '1px solid black'}}
          content={
            <div style={{background: 'blue', height: '200px', width: '200px'}}>
              Inside overflow hidden Content
            </div>
          }
        >
          Inside a overflow hidden
        </HoverDisplay>
      </div>
          `,
  },
}
/* eslint-enable react/jsx-key */