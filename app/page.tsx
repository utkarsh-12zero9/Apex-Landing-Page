import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Opportunity from '../components/Opportunity'
import Modules from '../components/Modules'
import Tools from '../components/Tools'
import Faculty from '../components/Faculty'
import SocialProof from '../components/SocialProof'
import FAQ from '../components/FAQ'
import FinalCTA from '../components/FinalCTA'
import CourseBrief from '@/components/CourseBrief'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <NavBar />
      <main>
        <Hero />
        <Opportunity />
        <CourseBrief />
        <Modules />
        <Tools />
        <Faculty />
        <SocialProof />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
