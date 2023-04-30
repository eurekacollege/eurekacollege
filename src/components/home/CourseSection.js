import CourseCard from "@/components/home/CourseCard";
import styles from "@/styles/home/CourseSection.module.sass";

export default function CourseSection() {
  return (
    <div className={styles.container}>
      <div className={styles.cardBox}>
        <div className={styles.cardHeader}>
          <p>CERTIFICATION COURSES</p>
        </div>
        <CourseCard
          src="/images/certCourses2560.jpg"
          children2="Explore Certification Courses"
          href="/courses#certificate"
          imageStyle={styles.cardImage}
          button={true}
          buttonStyle={styles.courseButton}
        >
          <p className={styles.paragraph}>
            We offer a variety of short certifications to help you quickly
            develop new skills and advance your career. Our short certification
            programs are designed to provide you with practical, hands-on
            training in a specific area of expertise. Whether you are looking to
            learn a new technology, develop a new skillset, or improve your
            existing skills, our short certification programs can help you
            achieve your goals. Discover the short certification programs we
            offer and take the first step towards enhancing your professional
            development.
          </p>
          <ul>
            <li>Dementia</li>
            <li>Palliative</li>
            <li>Mental Health Certificate</li>
            <li>Medication Administration</li>
            <li>More Courses Soon - Medical Office Administrator and ESL Courses</li>
          </ul>
        </CourseCard>
      </div>
      <div className={styles.cardBox}>
        <div className={styles.cardHeader}>
          <p>IENs PREPARATION COURSES</p>
        </div>
        <CourseCard
          src="/images/iensPrepCourses.jpg"
          children2="Explore IENs Preparation Courses"
          href="/courses#iens"
          imageStyle={styles.cardImage}
          button={true}
          buttonStyle={styles.courseButton}
        >
          <p className={styles.paragraph}>
            We offer certification programs specifically designed for
            internationally-educated nurses. Our certification programs are
            tailored to provide internationally-educated nurses with the skills
            and knowledge needed to successfully transition into Canadian
            Nursing. Our comprehensive program includes training in clinical
            skills, cultural competence, and language proficiency to help you
            meet the requirements of the Canadian nursing profession. Discover
            more about our internationally-educated nurses certification program
            and take the first step towards a successful career in nursing in
            Canada.
          </p>
          <ul>
            <li>CELBAN</li>
            <li>NCAS-RN Mentorship Program</li>
            <li>NCLEX-RN Mentorship Program</li>
          </ul>
        </CourseCard>
      </div>
    </div>
  );
}
