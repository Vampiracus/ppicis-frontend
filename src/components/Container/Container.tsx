import { PropsWithChildren } from 'react'
import styles from './Container.module.scss'

const Container = (
  props: PropsWithChildren & { class?: string; outerClass?: string }
) => {
  return (
    <div
      className={
        styles.container + (props.outerClass ? ' ' + props.outerClass : '')
      }>
      <div
        className={
          styles.container__content + (props.class ? ' ' + props.class : '')
        }>
        {props.children}
      </div>
    </div>
  )
}

export default Container