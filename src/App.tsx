import './App.css'
import { lazy, Suspense } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'

const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })))
const Deweb = lazy(() => import('./pages/Deweb').then(m => ({ default: m.Deweb })))
const Asc = lazy(() => import('./pages/Asc').then(m => ({ default: m.Asc })))
const Technology = lazy(() => import('./pages/Technology').then(m => ({ default: m.Technology })))
const Ecosystem = lazy(() => import('./pages/Ecosystem').then(m => ({ default: m.Ecosystem })))
const Gossip = lazy(() => import('./pages/Gossip').then(m => ({ default: m.Gossip })))
const GetMas = lazy(() => import('./pages/GetMas').then(m => ({ default: m.GetMas })))
const GrantsBounty = lazy(() => import('./pages/GrantsBounty').then(m => ({ default: m.GrantsBounty })))
const Start = lazy(() => import('./pages/Start').then(m => ({ default: m.Start })))
const Team = lazy(() => import('./pages/Team').then(m => ({ default: m.Team })))
const Blog = lazy(() => import('./pages/Blog').then(m => ({ default: m.Blog })))
const BlogPost = lazy(() => import('./pages/BlogPost').then(m => ({ default: m.BlogPost })))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })))
const TermsOfService = lazy(() => import('./pages/TermsOfService').then(m => ({ default: m.TermsOfService })))
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })))
const AmbassadorComingSoon = lazy(() => import('./pages/Ambassador'))

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
      <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/deweb" element={<Deweb />} />
            <Route path="/asc" element={<Asc />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/ecosystem" element={<Ecosystem />} />
            <Route path="/gossip" element={<Gossip />} />
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
      </Suspense>
    </LanguageProvider>
  )
}

export default App
