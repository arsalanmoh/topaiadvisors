import { Faqs } from '@/components/Faqs'
import { Header } from '@/components/Header'
import { Hero_2 } from '@/components/Hero_2'
import { Trusted } from '@/components/Trusted'
import { UseCases } from '@/components/UseCases'
import { CaseStudies } from '@/components/CaseStudies'
import { Footer } from '@/components/Footer'
import { CallToAction } from '@/components/CallToAction'
import { Stats } from '@/components/Stats'
import { Services } from '@/components/Services'
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero_2 />
        <Trusted />
        {/* <NewsLetter /> */}
        {/* <PrimaryFeatures /> */}
        <Services />
        <UseCases />
        {/* <CaseStudies /> */}
        {/* <Timeline /> */}
        {/* <Features /> */}
        {/* <Faqs /> */}
        {/* <Testimonials /> */}
        {/* <Pricing /> */}
        {/* <NewsLetterFooter/> */}
        <Stats />
        <CallToAction />
      </main>

      <Footer />
    </>
  )
}
