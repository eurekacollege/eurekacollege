import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import Headliner from "@/components/home/Headliner"
import CourseCard from '@/components/home/CourseCard'
import CourseSection from '@/components/home/CourseSection'
import AboutSection from "@/components/home/AboutSection"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navigation/>
      <Headliner />
      <CourseSection />
      <AboutSection/>
      <Footer/>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
    </>
  )
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