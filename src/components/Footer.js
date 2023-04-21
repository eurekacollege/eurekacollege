import styles from "@/styles/Footer.module.sass"
import Image from "next/image"

export default function Footer() {
    return (
        <div className={styles.mainFooter}>
            <div className={styles.mainFooter1}>
                <div className={styles.subFooter1}>
                    <p className={styles.subFooterHead}>EUREKA COLLEGE OF CANADA</p>
                    <p>Address <span>379 Columbia St. New Westminster, BC V3L 5T6</span></p>
                    <p>Phone <span>+1 - 604 - 721 - 9159</span></p>
                    <p>Email <span>admin@eurekacollege.ca</span></p>
                </div>
                <div className={styles.subFooter2}>
                    <div>
                        <p className={styles.subFooterHead}>PTIB on going designation certification</p>

                    </div>
                    <div>
                        <p>Stay Connected</p>
                        <Image src="/images/FB.png" width={70} height={90} alt="logo"/>
                        <Image src="/images/IG.png" width={70} height={90} alt="logo"/>
                        <Image src="/images/Linkedin.png" width={70} height={90} alt="logo"/>
                    </div>
                </div>
            </div>
            <div className={styles.subFooter3}>
                    <div>
                        <span>Copyright &copy; 2023 Eureka College of Canada Inc., New Westminister, B.C., Canada</span>
                    </div>
                </div>
        </div>
    )
}