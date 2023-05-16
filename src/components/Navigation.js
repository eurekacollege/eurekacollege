import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Nav.module.sass";
import { Navbar, Nav } from "react-bootstrap";
import { useRouter } from "next/router";
import { useState } from "react";


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
  const router = useRouter()

  function handleLogoClick(url) {
    router.push(url)
  }

  return (
    <div className={styles.mainNav}>
      <Navbar expand="lg" className={styles.navMain}>
        <Navbar.Brand href="#" className={styles.imageContainer}>
          <Image
            src="/images/eurekalogo1.png"
            width={278}
            height={134}
            alt="Logo"
            onClick={() => handleLogoClick("/")}
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


// export default function Navigation() {
//   const router = useRouter()
//   const [isOpen, setIsOpen] = useState(false)

//   function handleLogoClick(url) {
//     router.push(url)
//   }

//   function handleToggle(){
//     setIsOpen(!isOpen)
//   }

//   return (
//     <div className={styles.mainNav}>
//       <nav className="navbar navbar-dark indigo darken-2">
//         <a className="navbar-brand" href="#" onClick={() => handleLogoClick('/')}>
//           Navbar
//         </a>
//         <button
//           className={`navbar-toggler third-button ${isOpen ? 'collapsed' : ''}`}
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarSupportedContent22"
//           aria-controls="navbarSupportedContent22"
//           aria-expanded={isOpen ? 'true' : 'false'}
//           aria-label="Toggle navigation"
//           onClick={() => handleToggle()}
//         >
//           <div className="animated-icon3">
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>
//         </button>
//         <div
//           className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}
//           id="navbarSupportedContent22"
//         >
//           <ul className="navbar-nav mr-auto">
//             <li className="nav-item active">
//               <a className="nav-link" href="#">
//                 Home <span className="sr-only">(current)</span>
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Features
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Pricing
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// }