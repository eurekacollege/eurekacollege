import styles from "@/styles/CourseCard.module.sass";
import Image from "next/image";
import Button from "@/components/Button"
import Link from "next/link"

export default function CourseCard({children, src, children2, href, button, imageStyle, buttonStyle}) {
  return (
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={styles.cardImage}>
                <Image
                className={imageStyle}
                src={src}
                width={200}
                height={200}
                alt="Image"
                />
            </div>
            <div className={styles.cardInfo}>
                {children}
            </div>
          </div>
          <div className={styles.cardButton}>
            {/* {(button === true) ? <Button green={true} style2={buttonStyle}>{children2}</Button> : null} */}
            {(button === true) ? <Button green={true} style2={buttonStyle}><Link href={href || "#"}>{children2}</Link></Button> : null}
          </div>
        </div>
  );
}
