import './App.css'
import { Routes, Route, Outlet } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import { Home } from './pages/Home'
import { Deweb } from './pages/Deweb'
import { Asc } from './pages/Asc'
import { Technology } from './pages/Technology'
import { Ecosystem } from './pages/Ecosystem'
import { GetMas } from './pages/GetMas'
import { GrantsBounty } from './pages/GrantsBounty'
import { Start } from './pages/Start'
import { Team } from './pages/Team'
import { Blog } from './pages/Blog'
import { BlogPost } from './pages/BlogPost'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { TermsOfService } from './pages/TermsOfService'
import { NotFound } from './pages/NotFound'
import AmbassadorComingSoon from './pages/Ambassador'

function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <LanguageProvider>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/deweb" element={<Deweb />} />
          <Route path="/asc" element={<Asc />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/get-mas" element={<GetMas />} />
          <Route path="/grants-bounty" element={<GrantsBounty />} />
          <Route path="/start" element={<Start />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} />
<Route path="/ambassador" element={<AmbassadorComingSoon />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </LanguageProvider>
  )
}

export default App
