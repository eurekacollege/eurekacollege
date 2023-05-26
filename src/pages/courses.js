import Navbar from "@/components/Navigation";
import CourseSection from "@/components/courses/CourseSection";
import CourseHeadliner from "@/components/courses/CourseHeadliner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "@/styles/courses/Courses.module.sass";

export default function Courses() {
  return (
    <>
      <Navbar />
      <CourseHeadliner />
      <Header style={styles.header} tag="iens">IENs PREPARATION COURSES</Header>
      <CourseSection />
      {/* <Header style={styles.header} tag="certificate">CERTIFICATION COURSES</Header>
      <div className={styles.certContainer}>
        <p>DEMENTIA CERTIFICATE</p>
        <p>PALLIATIVE CERTIFICATE</p>
        <p>MENTAL HEALTH CERTIFICATE</p>
        <p>MEDICATION ADMINISTRATION</p>
        <p>More Courses Soon - Medical Office Administration and ESL Courses</p>
        <p className={styles.certContact}>
          Please connect with us to learn more about our short certification
          courses.
        </p>
        <p className={styles.certContact1}>Call us today at 604 721 9159</p>
      </div> */}
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const isUnderConstruction = true;

  if (isUnderConstruction) {
    return {
      redirect: {
        destination: "/underconstruction",
        permanent: false,
      },
    };
  }

  return {
    props: {}, // You can pass additional props here if needed
  };
}