/* eslint-disable react/no-unescaped-entities */
import styles from "@/styles/courses/CourseHeadliner.module.sass";

export default function CourseHeadliner() {
  return (
    <div className={styles.mainHeadliner}>
      <div className={styles.wordContainer}>
        <p className={styles.word1}>OUR COURSES</p>
        <p className={styles.word2}>
          Welcome to Eureka College, where we offer a wide range of programs to
          help you achieve your goals. Whether you're looking to start a new
          career, enhance your skills, or simply learn something new, we've got
          you covered.
        </p>
      </div>
    </div>
  );
}
