import { writeFileSync } from 'fs'
import RSS from 'rss'

import { allBlogs } from '../.contentlayer/generated/Blog/_index.mjs'
import { allNotes } from '../.contentlayer/generated/Note/_index.mjs'

async function generate() {
  const feed = new RSS({
    title: 'haeya',
    site_url: 'https://haeya.github.io',
    feed_url: 'https://haeya.github.io/feed.xml',
  })

  allBlogs.map(post => {
    feed.item({
      title: post.title,
      url: `https://haeya.github.io/blog/${post.slug}`,
      date: post.date,
      description: post.description,
    })
  })

  allNotes.map(note => {
    feed.item({
      title: note.title,
      url: `https://haeya.github.io/${note.url_path}`,
      date: note.date,
    })
  })

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }))
}

generate()
