import Link from "next/link"
import Image from "next/image"
import styles from "@/styles/Nav.module.sass"

export default function Navbar() {

    return (
        <div className={styles.mainNav}>
            <div className={styles.subNav1}>
                <Image src="/images/eurekalogo1.png" width={278} height={134} alt="Logo" />
            </div>
            <div className={styles.subNav2}>
                <div className={styles.subNav2_a}></div>
                <div className={styles.subNav2_b}>
                    <Link href="/">HOME</Link>
                    <Link href="/courses#iens">IENs PREPARATION COURSES</Link>
                    <Link href="/courses#certificate">CERTIFICATION COURSES</Link>
                    <Link href="/about">ABOUT US</Link>
                    <Link href="#">CONTACT US</Link>
                </div>
            </div>
        </div>
    )
}