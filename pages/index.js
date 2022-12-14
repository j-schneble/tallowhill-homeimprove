import { Container, Divider, SimpleGrid } from '@chakra-ui/react'
import Head from 'next/head'
import { LiveProjectSection } from '../section/LiveProjectSection';
import styles from '../styles/Home.module.css'
import ProfileSection from '../section/ProfileSection';
import WeAre from '../section/WeAre';
import LetsGetStarted from '../section/LetsGetStarted';
import  ServiceComp  from '../service/serviceComp.tsx';
import NewServiceComp from '../service/newServiceComp.tsx'
import MostPopular from '../service/mostPopular.tsx'
import IconPrices from '../service/iconPrices.tsx'

export default function Home() {


  return (
    <div bgclassName={styles.container}>
      <Head>
        <title>Tallow Hill | Home</title>
        <meta property="og:title" content="Tallow Hill | Tallow Hill Home Services"></meta>
        <meta name="description" content="Tallow Hill | Tallow Hill Home Services" />
        <link rel="icon" href="/hammer2.png" />
      </Head>

      <main>
        <Container  maxW="container.lg" mt={['5', '10']} mb={['5', '10']}>
       <ProfileSection />
          <Divider my={2} bgColor="orange.500" p="1.25"/>
          <WeAre />
          <MostPopular />
          
     
          <LetsGetStarted />
          <IconPrices />
          <NewServiceComp />
        
      
       
          <Divider my={7} />
      

          
        </Container>
      </main>
    </div>
  )
}

