import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import WhatsAppCTA from './components/shared/WhatsAppCTA.jsx'
import Home from './sections/home/Home.jsx'
import SocialSeparator from './sections/home/SocialSeparator.jsx'
import About from './sections/about/About.jsx'
import Services from './sections/services/Services.jsx'
import Gallery from './sections/gallery/Gallery.jsx'
import Contact from './sections/contact/Contact.jsx'
import './styles/index.css'

// Full page component (all sections)
const FullPage = () => (
  <main>
    <Home />
    <SocialSeparator />
    <About />
    <Services />
    <Gallery />
    <Contact />
  </main>
)

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<FullPage />} />
      </Routes>
      <Footer />
      <WhatsAppCTA />
    </BrowserRouter>
  )
}

export default App
