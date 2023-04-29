import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Nav.module.sass";
import { Navbar, Nav } from "react-bootstrap";

// export default function Navbar() {

//     return (
//         <div className={styles.mainNav}>
//             <div className={styles.subNav1}>
//                 <Image src="/images/eurekalogo1.png" width={278} height={134} alt="Logo" />
//             </div>
//             <div className={styles.subNav2}>
//                 <div className={styles.subNav2_b}>
//                     <Link href="/">HOME</Link>
//                     <Link href="/courses#iens">IENs PREPARATION COURSES</Link>
//                     <Link href="/courses#certificate">CERTIFICATION COURSES</Link>
//                     <Link href="/about">ABOUT US</Link>
//                     <Link href="#">CONTACT US</Link>
//                 </div>
//             </div>
//         </div>
//     )
// }

export default function Navigation() {
  return (
    <div className={styles.mainNav}>
      <Navbar expand="lg" className={styles.navMain}>
        <Navbar.Brand href="#" className={styles.imageContainer}>
          <Image
            src="/images/eurekalogo1.png"
            width={278}
            height={134}
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={styles.toggle}
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={`${styles.collapsed}`}
        >
          <Nav className={`${styles.navContainer}`}>
            <Nav.Item className={`${styles.customNavItem}`}>
              <Nav.Link className={`${styles.customNavLink}`} href="/">
                HOME
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className={`${styles.customNavItem}`}>
              <Nav.Link
                className={`${styles.customNavLink} text-no-wrap`}
                href="/courses#iens"
              >
                IENs PREPARATION COURSES
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className={`${styles.customNavItem}`}>
              <Nav.Link
                className={`${styles.customNavLink} text-no-wrap`}
                href="/courses#certificate"
              >
                CERTIFICATION COURSES
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className={`${styles.customNavItem}`}>
              <Nav.Link
                className={`${styles.customNavLink} text-no-wrap`}
                href="/about"
              >
                ABOUT US
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className={`${styles.customNavItem}`}>
              <Nav.Link
                className={`${styles.customNavLink} text-no-wrap`}
                href="/contactus"
              >
                CONTACT US
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
