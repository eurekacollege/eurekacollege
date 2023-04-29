import Link from "next/link";
import Image from "next/image";

export default function ImageWithLink(href, src, style, width, height) {
  return (
        <Link href={href} passHref>
        <div>
            <Image src={src} alt="Image" className={style} width={70} height={80} />
        </div>
        </Link>
  );
}