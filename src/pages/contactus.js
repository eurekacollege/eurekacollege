import Navbar from "@/components/Navigation"
import Footer from "@/components/Footer"
import styles from "@/styles/contact/ContactUs.module.sass"
import ContactUsHeadliner from "@/components/contact/ContactusHeadliner"

export default function ContactUs() {
    return (
        <>
            <Navbar/>
            <ContactUsHeadliner/>
            <div className={styles.mainContainer}>
                <div className={styles.infoContainer}>
                    <p className={styles.title}>EUREKA COLLEGE OF CANADA</p>
                    <p className={styles.boldText}>Address <span>379 Columbia St. New Westminster, BC V3L 5T6</span></p>
                    <p className={styles.boldText}>Phone <span>+1 - 604 - 721 - 9159</span></p>
                    <p className={styles.boldText}>Email <span>admin@eurekacollege.ca</span></p>
                </div>
                <div className={styles.mapContainer}>
                    <iframe className={styles.map}src="https://www.google.com/maps/d/embed?mid=1tliqdAvoOjvxqDlxopMmA7MHiLKu4EM&ehbc=2E312F"></iframe>
                </div>
            </div>
            <Footer/>
        </>
    )
}