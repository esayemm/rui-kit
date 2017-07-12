import styles     from './index.scss'
import React      from 'react'
import CSSModules from 'react-css-modules'
import PropTypes  from 'prop-types'

@CSSModules(styles, { allowMultiple: true })
export default class Row extends React.Component {
  // main container element that contains all the items
  containerEl = null

  static propTypes = {
    align: PropTypes.oneOf(['left', 'right', 'center']),
    attrItem: PropTypes.object,
    items: PropTypes.node,
  }

  static defaultProps = {
    align: 'center',
    attrItem: {},
    items: [],
  }

  renderItems = (items) => {
    const {
      attrItem,
    } = this.props

    return items.map((node, i) => {
      return <div
        key={i}
        styleName='container__item'
        {...attrItem}
      >
        {node}
      </div>
    }).filter(Boolean)
  }

  render() {
    const {
      align,
      attrItem, // eslint-disable-line
      items,
      ...rest,
    } = this.props

    return <div
      styleName={`container ${align}`}
      ref={(el) => this.containerEl = el}
      {...rest}
    >
      {this.renderItems(items)}
    </div>
  }
}
