import { Analytics } from "@vercel/analytics/react"
import Hero from './components/Hero'
import Narrative from './components/Narrative'
import EventDetails from './components/EventDetails'
import TheExperience from './components/TheExperience'
import InviteForm from './components/InviteForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-worship-900 w-full overflow-hidden font-sans">
      <Hero />
      <Narrative />
      <EventDetails />
      <TheExperience />
      <InviteForm />
      <Footer />
      <Analytics />
    </div>
  )
}

export default App
