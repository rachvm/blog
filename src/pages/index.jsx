import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  TwitterIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'
import { config } from "../../config";


function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={article.href}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-yellow-500" />
    </Link>
  )
}



export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>
          Blog
        </title>
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Rachel Morris
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Software developer at the beginning of my coding journey. This blog is to detail my learning and development as I 
            come to the end of the bootcamp with School of Code, and beyond.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href={config.githubUser}
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href={config.linkedinUser}
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href={config.twitterUser}
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
          </div>
        </div>
      </Container>
    

      <Container className="mt-20 md:mt-20">
        <div >
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
