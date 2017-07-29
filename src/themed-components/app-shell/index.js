import styles      from './index.scss'
import React       from 'react'
import CSSModules  from 'react-css-modules'
import PropTypes   from 'prop-types'
import {
  NavLink,
}                  from 'react-router-dom'
import {
  LeftMiddleRight,
  Row,
  Sidebar,
  Dropdown,
}                  from '../../index.js'

@CSSModules(styles)
export default class AppShell extends React.Component {
  static propTypes = {
    headerNode: PropTypes.node,
    // Top left display node.
    leftHeader: PropTypes.node,
    // Top right node.
    rightNodeLinks: PropTypes.arrayOf(PropTypes.shape({
      display: PropTypes.string,
      to: PropTypes.string,
    })),
    // If present, the sidebar will display with the links.
    links: PropTypes.arrayOf(PropTypes.shape({
      header: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(PropTypes.shape({
        display: PropTypes.string.isRequired,
        to: PropTypes.string,
      })),
    })),
    // Main content.
    children: PropTypes.node,
    contentWidth: PropTypes.any,
    className: PropTypes.string,
    style: PropTypes.object,
  }

  static defaultProps = {
    links: [],
    rightNodeLinks: [],
  }

  render() {
    const {
      links,
      leftHeader,
      rightNodeLinks,
      headerNode,
      contentWidth,
      style,
      className,
      children,
    } = this.props

    return <div styleName='index'
      style={style}
      className={className}
    >
      <LeftMiddleRight
        styleName='header'
        left={<Row
          align='left'
          items={[
            <h3 key={0}>
              {leftHeader}
            </h3>
          ]}
        />}
        middle={<Row
          items={[
            headerNode,
          ]}
        />}
        right={<Row
          align='right'
          items={rightNodeLinks.map(({ display, to, href }, i) => {
            const attr = {
              key: i,
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
          })}
        />}
      />

      <div styleName='row'>
        {
          links.length !== 0 && <div styleName='sidebar-wrapper'>
            <Sidebar styleName='sidebar'>
              {
                links.map((link, i) => {
                  return <Dropdown
                    key={i}
                    header={
                      <div className={styles.dropheader}>
                        {link.header}
                      </div>
                    }
                  >
                    {
                      link.items.map((item, j) => {
                        return <NavLink
                          key={j}
                          to={item.to || '#'}
                          className={styles.dropchild}
                          activeClassName={styles.active}
                        >
                          {item.display}
                        </NavLink>
                      })
                    }
                  </Dropdown>
                })
              }
            </Sidebar>
          </div>
        }

        <div styleName='content'>
          <div style={{
            width: '100%',
            maxWidth: contentWidth,
            margin: '0 auto',
          }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  }
}
