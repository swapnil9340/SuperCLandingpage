import React from 'react'
import Banner from '../../component/Banner.jsx'
import OlympiadIntro from '../../component/OlympiadIntro.jsx'
import Challenge from '../../component/Challenge.jsx'
import AboutOlympiad from '../../component/AboutOlympiad .jsx'
import SuperCAppSection from '../../component/SuperCAppSection.jsx'
import AppDownload from '../../component/AppDownload.jsx'
import Trusted from '../../component/Trusted.jsx'
import DontMissOpp from '../../component/DontMissOpp.jsx'
import CallToActionButtons from '../../component/Download&Resister.jsx'
import FAQ from '../../component/FAQ.jsx'
import Testimonial from '../../component/Testimonial.jsx'
import PreviousWinners from '../../component/PrviousWinner.jsx'
import SyllabusOverview from '../../component/SyllabusOverview.jsx'


const LandingPage = () => {
  return (
    <>
      <Banner />
      <OlympiadIntro />
      <Challenge />
      <AboutOlympiad />
      <SyllabusOverview />
      <SuperCAppSection />
       <AppDownload />
      <PreviousWinners />
      <Trusted />
      <Testimonial />
      <FAQ />
      <DontMissOpp />
      <CallToActionButtons />
    </>
  )
}

export default LandingPage