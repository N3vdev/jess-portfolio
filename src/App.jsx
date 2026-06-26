import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HomePage from './pages/HomePage'
import BlogsPage from './pages/BlogsPage'
import BlogPostPage from './pages/BlogPostPage'
import AdminLoginPage from './pages/AdminLoginPage'
import AdminDashboardPage from './pages/AdminDashboardPage'
import AdminEditPage from './pages/AdminEditPage'

gsap.registerPlugin(ScrollTrigger)

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    if (pathname === '/' && sessionStorage.getItem('returnScrollY')) return
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/"            element={<HomePage />} />
      <Route path="/blogs"       element={<BlogsPage />} />
      <Route path="/blogs/:slug"        element={<BlogPostPage />} />
      <Route path="/admin"               element={<AdminLoginPage />} />
      <Route path="/admin/dashboard"     element={<AdminDashboardPage />} />
      <Route path="/admin/post/new"      element={<AdminEditPage />} />
      <Route path="/admin/post/edit/:slug" element={<AdminEditPage />} />
    </Routes>
    </>
  )
}
