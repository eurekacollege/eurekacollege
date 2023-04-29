import styles from "@/styles/AlertMessage.module.sass"

export default function AlertMessage({message, type}) {
    const className = type === 'error' ? styles.error : styles.success;
    return(
        <div className={`${styles.container} ${className}`}>
            <p>{message}</p>
        </div>
    )
}
