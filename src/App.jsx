import { Routes, Route } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HomePage from './pages/HomePage'
import BlogsPage from './pages/BlogsPage'
import BlogPostPage from './pages/BlogPostPage'
import AdminLoginPage from './pages/AdminLoginPage'
import AdminDashboardPage from './pages/AdminDashboardPage'
import AdminEditPage from './pages/AdminEditPage'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  return (
    <Routes>
      <Route path="/"            element={<HomePage />} />
      <Route path="/blogs"       element={<BlogsPage />} />
      <Route path="/blogs/:slug"        element={<BlogPostPage />} />
      <Route path="/admin"               element={<AdminLoginPage />} />
      <Route path="/admin/dashboard"     element={<AdminDashboardPage />} />
      <Route path="/admin/post/new"      element={<AdminEditPage />} />
      <Route path="/admin/post/edit/:slug" element={<AdminEditPage />} />
    </Routes>
  )
}
