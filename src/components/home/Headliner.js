import styles from "@/styles/home/Headliner.module.sass"
import Button from "@/components/Button"

export default function Headliner() {
    return (
        <div className={styles.mainHeadliner}>
            <div>
                <p className={styles.word1}>DISCOVERING</p>
                <p className={styles.word1}> OPPORTUNITIES</p>
                <p className={styles.word2}>TO GREATER HEIGHTS</p>
            </div>
            <div className={styles.button}>
                <Button green={true} style2={styles.but1}>Explore Courses</Button>
                <Button green={false} style2={styles.but2}>Connect with us</Button>
            </div>
        </div>
    )
}