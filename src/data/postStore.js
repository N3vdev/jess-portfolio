import { posts as defaultPosts } from './posts'

// ── In-memory store (no persistence) ──────────────────────────
// The 4 default posts come from posts.js and are the source of truth.
// Posts added/edited via the admin panel live only in memory and reset
// on page reload — a temporary preview until a real database is wired up.

let posts = [...defaultPosts]
let pins = []

export function getPosts() {
  return posts
}

export function getPost(slug) {
  return posts.find(p => p.slug === slug) || null
}

export function addPost(post) {
  posts = [...posts, { ...post, createdAt: Date.now() }]
  return { ok: true }
}

export function updatePost(slug, data) {
  posts = posts.map(p => p.slug === slug ? { ...p, ...data } : p)
  return { ok: true }
}

export function deletePost(slug) {
  posts = posts.filter(p => p.slug !== slug)
  unpinPost(slug)
  return { ok: true }
}

export function slugify(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

// ── Pins (in-memory) ──────────────────────────────────────────

export function getPinnedSlugs() {
  return pins
}

export function pinPost(slug) {
  if (pins.includes(slug)) return { ok: true }
  if (pins.length >= 4) return { ok: false }
  pins = [...pins, slug]
  return { ok: true }
}

export function unpinPost(slug) {
  pins = pins.filter(s => s !== slug)
}

function parsePostDate(p) {
  if (p.createdAt) return p.createdAt
  const months = { Jan:0, Feb:1, Mar:2, Apr:3, May:4, Jun:5, Jul:6, Aug:7, Sep:8, Oct:9, Nov:10, Dec:11 }
  const [mon, yr] = (p.date || '').split(' ')
  if (months[mon] !== undefined && yr) return new Date(parseInt(yr), months[mon]).getTime()
  return 0
}

// Pinned first (in pin order), then most-recently-added, capped at 4
export function getHomePosts() {
  const all = getPosts()
  const pinned = pins.map(slug => all.find(p => p.slug === slug)).filter(Boolean)
  const recent = all
    .filter(p => !pins.includes(p.slug))
    .sort((a, b) => parsePostDate(b) - parsePostDate(a))
  return [...pinned, ...recent].slice(0, 4)
}
