import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'
import image1 from '@/images/photosAbout/image-1.jpg'
import image2 from '@/images/photosAbout/image-2.jpg'
import image3 from '@/images/photosAbout/image-3.jpg'
import image4 from '@/images/photosAbout/image-4.jpg'
import image5 from '@/images/photosAbout/image-5.jpg'
import { Container } from '@/components/Container'
import {
  TwitterIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/img.png'
import { config } from "../../config";

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-yellow-500 dark:text-zinc-200 dark:hover:text-yellow-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-yellow-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-10 sm:mt-15">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-1 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-60 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                height={200}
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Rachel Morris
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400 border-t border-zinc-100 pt-8 dark:border-zinc-700/40">
              <p>
              My journey into coding began as a young child when I was introduced to Basic on the Spectrum, I remember being fascinated by the challenges 
              of instructing the computer. I rediscovered my passion for coding while working in secondary schools covering lessons, which included ICT, 
              where I enjoyed debugging students codes. From this I started by playing with coding kits such as Arduino, then went on to develop my Python 
              skills using books, undertaking a Python course with Code First Girls, then working through the Python Developer track on DataCamp. <br/><br/>
              
              The main developement of my coding skills, was during the intensive 16 week bootcamp through School of Code. As a bootcamper I have been introduced and 
              developed my knowledge in Javascript, as well as, other languages, libraries and frameworks, along with an ever deepening enjoyment and fascination for 
              coding. <br/><br/>

              When I'm not at the keyboard, I enjoy the great outdoors, particularly, white water kayaking, sea kayaking and hiking.  <br/><br/>
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href={config.githubUser} icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href={config.linkedinUser} icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink href={config.twitterUser} icon={TwitterIcon} className="mt-4">
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="mailto:rachelmorris262@outlook.com"
                icon={MailIcon}
                className="mt-4"
              >
                rachelmorris262@outlook.com
              </SocialLink>
              
            </ul>
            <div className="mt-8 border-t border-zinc-100 pt-8" >
              <p className="mb-4 text-xl font-normal dark:text-zinc-100">Links</p>
              <Link
                  href="https://www.schoolofcode.co.uk/"
                  className="text-sm font-normal text-zinc-800 transition hover:text-yellow-500 dark:text-zinc-200 dark:hover:text-yellow-500"
                >
                  School Of Code
              </Link> <br/>
              <Link
                  href="https://codefirstgirls.com/"
                  className="text-sm font-normal text-zinc-800 transition hover:text-yellow-500 dark:text-zinc-200 dark:hover:text-yellow-500"
                >
                  Code First Girls
              </Link><br/>
              <Link
                  href="https://www.datacamp.com/"
                  className="text-sm font-normal text-zinc-800 transition hover:text-yellow-500 dark:text-zinc-200 dark:hover:text-yellow-500"
                >
                  Datacamp
              </Link>
            </div>
          </div>  
        </div>  
      </Container>
      <div className="mt-20">
        <Photos/>
      </div>
    </>
  )
}
