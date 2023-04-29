import styles from "@/styles/home/Headliner.module.sass";
import Button from "@/components/Button";
import Header from "@/components/Header";
import Link from "next/link"

export default function Headliner() {
  return (
    <>
        <Header style={styles.header}>
            Eureka College of Canada Inc. has applied for Designation to the Private Training
            Institutions Branch (PTIB) of the Ministry of Advanced Education and
            Skills Training which administers the Private Training Act and
            associated regulations. Our application is ongoing.
      </Header>
      <div className={styles.mainHeadliner}>
        <div>
          <p className={styles.word1}>DISCOVERING</p>
          <p className={styles.word1}> OPPORTUNITIES</p>
          <p className={styles.word2}>TO GREATER HEIGHTS</p>
        </div>
        <div className={styles.button}>
          <Button green={true} style2={styles.but1}>
            <Link href="/courses">Explore Courses</Link>
          </Button>
          <Button green={false} style2={styles.but2}>
            <Link href="/connectwithus">Connect with us</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
