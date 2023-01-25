import glob from 'fast-glob'
import * as path from 'path'

async function importArticle(articleFilename) {
  let { meta, default: component } = await import(
    `../pages/articles/${articleFilename}`
  )
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    href: `/articles/${articleFilename.replace(/(\/index)?\.mdx$/, '')}`,
    ...meta,
    component,
  }
}


async function importDraft(articleFilename) {
  let { meta, default: component } = await import(
      `../pages/drafts/${articleFilename}`
      )
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    href: `/drafts/${articleFilename.replace(/(\/index)?\.mdx$/, '')}`,
    ...meta,
    component,
  }
}

export async function getAllArticles() {
  let articleFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/articles'),
  })
  let draftFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/drafts'),
  })
  // if env.IS_PRODUCTION is false, then we load an extra folder called "drafts"


  let articles = await Promise.all(articleFilenames.map(importArticle))
  if (process.env.NODE_ENV !== 'production') {
    let drafts = await Promise.all(draftFilenames.map(importDraft))
    articles = [...articles, ...drafts]
  }
  return articles.sort((a, z) => new Date(z.date) - new Date(a.date))
}
 