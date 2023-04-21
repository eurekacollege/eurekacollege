import CourseCard from "@/components/home/CourseCard";
import styles from "@/styles/courses/CourseSection.module.sass";

export default function CourseSection() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.cardBox}>
          <div className={styles.cardHeader}>
            <p>CELBAN</p>
          </div>
          <CourseCard src="/images/celban1.png" imageStyle={styles.cardImage}>
            <p className={styles.paragraph}>
              The Canadian English Language Benchmark Association for Nurses
              (CELBAN) is designed to assess the English language proficiency of
              internationally educated nurses (IENs) who are applying for
              licensure in the nursing profession in Canada. CELBAN is
              recognized by nursing licensing bodies across Canada.
            </p>
          </CourseCard>
        </div>
        <div className={styles.cardBox}>
          <div className={styles.cardHeader}>
            <p>NCAS - RN MENTORSHIP PROGRAM</p>
          </div>
          <CourseCard src="/images/ncas1.png" imageStyle={styles.cardImage}>
            <p className={styles.paragraph}>
              The Canadian English Language Benchmark Association for Nurses
              (CELBAN) is designed to assess the English language proficiency of
              internationally educated nurses (IENs) who are applying for
              licensure in the nursing profession in Canada. CELBAN is
              recognized by nursing licensing bodies across Canada.
            </p>
          </CourseCard>
        </div>
        <div className={styles.cardBox}>
          <div className={styles.cardHeader}>
            <p>NCLEX - RN MENTORSHIP PROGRAM</p>
          </div>
          <CourseCard src="/images/nclex.png" imageStyle={styles.cardImage}>
            <p className={styles.paragraph}>
              The Canadian English Language Benchmark Association for Nurses
              (CELBAN) is designed to assess the English language proficiency of
              internationally educated nurses (IENs) who are applying for
              licensure in the nursing profession in Canada. CELBAN is
              recognized by nursing licensing bodies across Canada.
            </p>
          </CourseCard>
        </div>
      </div>
    </div>
  );
}
