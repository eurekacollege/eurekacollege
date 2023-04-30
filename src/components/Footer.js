import styles from "@/styles/Footer.module.sass";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {

  function redirectImg(url) {
    window.open(url, "_blank");
  }
  
  return (
    <div className={styles.mainFooter}>
      <div className={styles.mainFooter1}>
        <div className={styles.subFooter1}>
          <p className={styles.subFooterHead}>EUREKA COLLEGE OF CANADA INC.</p>
          <p>
            Address <span>379 Columbia St. New Westminster, BC V3L 5T6</span>
          </p>
          <p>
            Phone <span>+1 - 604 - 721 - 9159</span>
          </p>
          <p>
            Email <span>admin@eurekacollege.ca</span>
          </p>
          <div>
            <p>Stay Connected</p>
            <Image src="/images/FB.png" width={70} height={90} alt="logo" onClick={() => redirectImg("https://www.facebook.com/profile.php?id=100092027768719&mibextid=ZbWKwL")}/>
            <Image src="/images/IG.png" width={70} height={90} alt="logo" onClick={() => redirectImg("https://www.instagram.com/eurekacollegeofcanada/")}/>
            {/* <Image
              src="/images/Linkedin.png"
              width={70}
              height={90}
              alt="logo"
            /> */}
          </div>
        </div>
        <div className={styles.subFooter2}>
          <div>
            <p className={styles.subFooterText}>
              Eureka College of Canada Inc. has applied for Designation to the Private Training
              Institutions Branch (PTIB) of the Ministry of Advanced Education
              and Skills Training which administers the Private Training Act and
              associated regulations. Our application is ongoing.
            </p>
            <Link href="/connectwithus">Connect with us</Link>
          </div>
        </div>
      </div>
      <div className={styles.subFooter3}>
        <div>
          <span>
            Copyright &copy; 2023 Eureka College of Canada Inc., New
            Westminister, B.C., Canada
          </span>
        </div>
      </div>
    </div>
  );
}
