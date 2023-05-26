/* eslint-disable react/no-unescaped-entities */
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import styles from "@/styles/about/About.module.sass";
import AboutHeadliner from "@/components/about/AboutHeadliner";
import Image from "next/image"

export default function About() {
  return (
    <>
      <Navbar />
      <AboutHeadliner/>
      <div className={styles.container}>
        <div>
          <p className={styles.title} id="about">ABOUT EUREKA COLLEGE OF CANADA</p>
          <p className={styles.para}>
            Eureka College of Canada is a dedicated organization that supports
            internationally educated nurses (IENs) as they transition into
            Canadian Nursing. We provide a mentorship program that focuses on
            helping IENs prepare for and successfully pass four nursing exams:
            CELBAN, NCAS, CPNRE / REXPN and, NCLEX-RN. Our goal is to bridge the gap
            between IENs' education and experience and the Canadian nursing
            system, and to help these individuals achieve their career goals in
            Canada.
          </p>
          <p className={styles.para}>
            Our organization is made up of a team of experienced nursing
            professionals, including registered nurses and educators, who are
            passionate about helping IENs succeed. We have a deep understanding
            of the challenges that IENs face when transitioning into Canadian
            nursing, and we work tirelessly to provide the guidance and support
            that these individuals need to succeed.
          </p>
          <p className={styles.para}>
            At Eureka College of Canada, we believe that every IEN deserves the
            opportunity to pursue a successful nursing career in Canada. That's
            why we dedicate ourselves to providing high-quality mentorship and
            educational programs that are tailored to the unique needs of each
            individual. Whether you're just starting your journey or you're
            preparing for your final exams, we're here to support you every step
            of the way.
          </p>
        </div>
        {/* <div>
          <p className={styles.title}>VISION OF EUREKA COLLEGE</p>
          <p className={styles.para}>
            The school vision for Eureka College is to be a leader in supporting
            internationally educated nurses (IENs) in their transition to
            Canadian nursing. We aim to bridge the gap between IENs' education
            and experience and the Canadian nursing system by providing a
            comprehensive mentorship program that focuses on helping IENs
            prepare for and successfully pass the four nursing exams required in
            Canada.
          </p>
          <p className={styles.para}>
            We strive to provide individualized support to each IEN through our
            team of experienced nursing professionals who are dedicated to
            helping IENs succeed. We believe that every IEN deserves the
            opportunity to pursue a successful nursing career in Canada, and we
            work tirelessly to provide the guidance and resources needed to
            achieve this goal.
          </p>
          <p className={styles.para}>
            At Eureka College, we are committed to excellence in mentorship and
            education for IENs, and we aspire to create a welcoming and
            inclusive community that values diversity and cultural exchange. Our
            vision is to be recognized as a leading institution for supporting
            IENs in their pursuit of a successful nursing career in Canada.
          </p>
        </div> */}
        <div>
          <p className={styles.title} id="mission">MISSION OF EUREKA COLLEGE OF CANADA</p>
          <p className={styles.para}>
            At Eureka College of Canada, we are committed to excellence in mentorship for
            IENs and education for healthcare professionals. We aspire to create
            a welcoming, inclusive community that values diversity and cultural
            exchange. We aim to be recognized as a leading institution for
            supporting the next generation of healthcare professionals and
            internationally educated nurses. We will do our best to provide a
            supportive learning environment that fosters growth and development
            and to ensure that each student is well-prepared and confident in
            their ability to succeed in the Canadian healthcare system.
          </p>
          {/* <p className={styles.para}>
            Our team of experienced nursing professionals is committed to
            providing personalized guidance and support to each IEN, recognizing
            the unique challenges that these individuals face in their journey
            to Canadian nursing. We are dedicated to creating a welcoming and
            inclusive community that values diversity and cultural exchange, and
            we aspire to be recognized as a leader in supporting IENs in their
            pursuit of a successful nursing career in Canada.
          </p>
          <p className={styles.para}>
            Through our high-quality mentorship and educational programs, we aim
            to empower IENs to achieve their full potential, both personally and
            professionally. Our mission is to provide a supportive and
            collaborative learning environment that fosters growth and
            development, and to ensure that each IEN is well-prepared and
            confident in their ability to succeed in the Canadian nursing
            system.
          </p> */}
        </div>
        <div>
          <p className={styles.title}>MEET THE TEAM</p>
          <div className={styles.imgContainer}>
            <div>
              <Image src="/images/archisinlao.png" alt="Photo" width={70} height={80}/>
              <p className={styles.name}>Archimedes Sinlao</p>
              <p>Founder, Owner</p>
            </div>
            <div>
              <Image src="/images/marilee.png" alt="Photo" width={70} height={80}/>
              <p className={styles.name}>Marilee Dela Cruz Sinlao</p>
              <p>CEO, Co-owner</p>
            </div>
          </div>
        </div>
      </div>
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