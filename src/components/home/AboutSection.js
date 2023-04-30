import Link from "next/link";
// import Video from "next/image"
import styles from "@/styles/About.module.sass"


/* eslint-disable react/no-unescaped-entities */
export default function AboutSection() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.subContainer}>
        <p className={styles.aboutHeader}>ABOUT EUREKA COLLEGE OF CANADA</p>
        <p className={styles.aboutInfo}>
          At Eureka College of Canada we believe that healthcare is more than just a
          career – it's a calling. Our mission is to inspire and empower
          healthcare professionals, who will go on to make a positive impact on
          the lives of patients and their families.
        </p>
        <p className={styles.aboutInfo}>
          We are excited to welcome students from all backgrounds and walks of
          life to our college, and we look forward to helping you achieve your
          goals and make a difference in the world of healthcare. Join us on
          this journey to make a difference in the lives of others and
          contribute to the health and well-being of our communities.
        </p>
        <Link href="/about#about" className={styles.link2}>Learn More</Link>
      </div>
      <div className={styles.subContainer}>
        <p className={styles.aboutHeader}>WHAT SETS US APART</p>
        <p className={styles.aboutInfo}>
          Eureka College of Canada was built under the foundations of <Link href="https://fnrc.ca/" target="_blank" rel="noopener noreferrer" className={styles.link1}>Footprints Nursing
          Review Center</Link> which is a review center for internationally educated
          nurses. We have a deep understanding of the challenges that IENs face
          when transitioning into Canadian nursing, and we work tirelessly to
          provide the guidance and support that they need to succeed.
        </p>
        <Link href="/about#mission" className={styles.link2}>Learn More</Link>
      </div>
      <div className={styles.videoContainer}>
        <video src="/images/blinkingeyes.mp4" width={500} height={500} alt="image" autoPlay loop/>
      </div>
    </div>
  );
}
