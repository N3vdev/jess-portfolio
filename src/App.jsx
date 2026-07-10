import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Preloader from './components/Preloader'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import TreasuryPage from './pages/TreasuryPage'
import SpeakingPage from './pages/SpeakingPage'
import AdventuresPage from './pages/AdventuresPage'
import HealthPage from './pages/HealthPage'
import ContactPage from './pages/ContactPage'
import BlogsPage from './pages/BlogsPage'
import BlogPostPage from './pages/BlogPostPage'
import AdminLoginPage from './pages/AdminLoginPage'
import AdminDashboardPage from './pages/AdminDashboardPage'
import AdminEditPage from './pages/AdminEditPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    if (pathname === '/' && sessionStorage.getItem('returnScrollY')) return
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  const [ready, setReady] = useState(false)
  const location = useLocation()

  return (
    <>
      <Preloader onDone={() => setReady(true)} />
      <ScrollToTop />
      <div style={{
        opacity: ready ? 1 : 0,
        transition: 'opacity 0.5s cubic-bezier(.22,1,.36,1)',
      }}>
      {ready && (
      <div key={location.pathname} className="page-fade">
      <Routes location={location}>
        <Route path="/"                         element={<HomePage />} />
        <Route path="/about"                    element={<AboutPage />} />
        <Route path="/treasury"                 element={<TreasuryPage />} />
        <Route path="/speaking"                 element={<SpeakingPage />} />
        <Route path="/adventures"               element={<AdventuresPage />} />
        <Route path="/health"                   element={<HealthPage />} />
        <Route path="/contact"                  element={<ContactPage />} />
        <Route path="/blogs"                    element={<BlogsPage />} />
        <Route path="/blogs/:slug"              element={<BlogPostPage />} />
        <Route path="/admin"                    element={<AdminLoginPage />} />
        <Route path="/admin/dashboard"          element={<AdminDashboardPage />} />
        <Route path="/admin/post/new"           element={<AdminEditPage />} />
        <Route path="/admin/post/edit/:slug"    element={<AdminEditPage />} />
      </Routes>
      </div>
      )}
      </div>
    </>
  )
}
