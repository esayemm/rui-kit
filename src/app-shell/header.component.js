import styles    from './header.component.scss'
import PropTypes from 'prop-types'
import {observer} from 'mobx-react'
import {
  NavLink,
}                from 'react-router-dom'

import {theme}   from '../index.js'

function HeaderComponent({
  leftNode,
  headerNode,
  rightNodeLinks,
  ...rest
}) {
  return <header styleName='header'
    {...rest}
    style={{
      background: theme.get('primaryBgColor'),
      color     : theme.get('primaryColor'),
    }}
  >
    <div styleName='header__left'>
      <h3>{leftNode}</h3>
    </div>

    <div styleName='header__middle'>
      <h4>
        {headerNode}
      </h4>
    </div>

    <div styleName='header__right'>
      {
        rightNodeLinks.map(({ display, to, href }, i) => {
          const attr = {
            key      : i,
            className: `${styles.item} ${styles.link}`,
          }

          return to
            ? <NavLink {...attr} to={to}>
              {display}
            </NavLink>
            : <a
              {...attr}
              href={href}
              target='_blank'
            >
              {display}
            </a>
        })
      }
    </div>
  </header>
}

HeaderComponent.propTypes = {
  headerNode    : PropTypes.node,
  // Top left display node.
  leftNode      : PropTypes.node,
  // Top right node.
  rightNodeLinks: PropTypes.arrayOf(PropTypes.shape({
    display: PropTypes.string.isRequired,
    to     : PropTypes.string,
  })),
}

export default observer(cssModule(HeaderComponent, styles, {allowMultiple: true}))