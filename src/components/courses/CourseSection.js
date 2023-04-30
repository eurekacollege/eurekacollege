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
          <CourseCard src="/images/CELBAN.png" imageStyle={styles.cardImage}>
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
            <p>NCAS - RN</p>
          </div>
          <CourseCard src="/images/NCAS.png" imageStyle={styles.cardImage}>
            <p className={styles.paragraph}>
              Nursing Community Assessment for Nurses (NCAS) uses a
              computer-based Assessment (CBA), a Simulation Lab Assessment
              (SLA), and an Oral Assessment to assess the extent to which
              applicants demonstrate the skills and competencies required for
              practice.
            </p>
          </CourseCard>
        </div>
        <div className={styles.cardBox}>
          <div className={styles.cardHeader}>
            <p>NCLEX - RN</p>
          </div>
          <CourseCard src="/images/nclex.png" imageStyle={styles.cardImage}>
            <p className={styles.paragraph}>
              Our National Council Licensure Examination (NCLEX) mentorship
              program covers all important areas needed for you to successfully
              pass this high-stake exam.
            </p>
          </CourseCard>
        </div>
      </div>
    </div>
  );
}
