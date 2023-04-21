import styles from "@/styles/Button.module.sass"
import classNames from "classnames"

export default function Button({green, type, children, onClick, style2}) {

    if (green) {
        return <button className={classNames(styles.button1, style2)} type={type} onClick={onClick}>{children}</button>
      } else {
        return <button className={classNames(styles.button2, style2)} type={type} onClick={onClick}>{children}</button>
      }
}