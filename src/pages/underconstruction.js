import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from '@/styles/underconstruction/UnderConstruction.module.sass';
import Image from "next/image"
// export default function UnderConstruction() {
//   const isMobile = useMediaQuery({ maxWidth: 768 }); // Set your desired breakpoint for mobile devices
//   const [videoSrc, setVideoSrc] = useState('');

//   useEffect(() => {
//     if (isMobile) {
//       setVideoSrc('/images/414x896mp4.mp4');
//     } else {
//       setVideoSrc('/images/2560x1440mp4.mp4');
//     }
//   }, [isMobile]);

//   return (
//     <div>
//         <video className={styles.pic} src={videoSrc} width={1500} height={1500} alt="image" autoPlay loop/>
//     </div>
//   );
// }

export default function UnderConstruction() {
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Set your desired breakpoint for mobile devices
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    if (isMobile) {
      setImgSrc('/images/UnderConstruction_Mobile.png');
    } else {
      setImgSrc('/images/UnderConstruction.png');
    }
  }, [isMobile]);

  return (
    <div>
        <Image className={styles.pic} src={imgSrc} width={1500} height={1500} alt="image" autoPlay loop/>
    </div>
  );
}