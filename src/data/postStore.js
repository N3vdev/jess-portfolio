import { posts as defaultPosts } from './posts'

const KEY = 'jess_posts'
const PINS_KEY = 'jess_pins'

export function getPosts() {
  try {
    const s = localStorage.getItem(KEY)
    if (s) return JSON.parse(s)
  } catch {}
  return defaultPosts
}

export function getPost(slug) {
  return getPosts().find(p => p.slug === slug) || null
}

function save(posts) {
  try {
    localStorage.setItem(KEY, JSON.stringify(posts))
    return { ok: true }
  } catch (e) {
    if (e.name === 'QuotaExceededError' || e.code === 22) {
      return { ok: false, reason: 'quota' }
    }
    return { ok: false, reason: 'unknown' }
  }
}

export function addPost(post) {
  return save([...getPosts(), { ...post, createdAt: Date.now() }])
}

export function updatePost(slug, data) {
  return save(getPosts().map(p => p.slug === slug ? { ...p, ...data } : p))
}

export function deletePost(slug) {
  const result = save(getPosts().filter(p => p.slug !== slug))
  unpinPost(slug)
  return result
}

export function slugify(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

// --- Pins ---

export function getPinnedSlugs() {
  try {
    const s = localStorage.getItem(PINS_KEY)
    if (s) return JSON.parse(s)
  } catch {}
  return []
}

function savePins(pins) {
  localStorage.setItem(PINS_KEY, JSON.stringify(pins))
}

export function pinPost(slug) {
  const pins = getPinnedSlugs()
  if (pins.includes(slug)) return { ok: true }
  if (pins.length >= 4) return { ok: false }
  savePins([...pins, slug])
  return { ok: true }
}

export function unpinPost(slug) {
  savePins(getPinnedSlugs().filter(s => s !== slug))
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
  const pins = getPinnedSlugs()
  const pinned = pins.map(slug => all.find(p => p.slug === slug)).filter(Boolean)
  const recent = all
    .filter(p => !pins.includes(p.slug))
    .sort((a, b) => parsePostDate(b) - parsePostDate(a))
  return [...pinned, ...recent].slice(0, 4)
}
