import Image from 'next/image'
import Head from 'next/head'
import { Container } from '@/components/Container'
import foodmap from '@/images/foodmap.png'
import calc from '@/images/calc.png'
import {
    GitHubIcon,
    WebsiteIcon
  } from '@/components/SocialIcons'
import Link from 'next/link'
import clsx from 'clsx'


  function SocialLink({ className, href, children, icon: Icon }) {
    return (
      <li className={clsx(className, 'flex')}>
        <Link
          href={href}
          className="group flex text-sm font-medium text-white transition hover:text-yellow-500 dark:text-zinc-200 dark:hover:text-yellow-500"
        >
          <Icon className="h-6 w-6 flex-none fill-white transition group-hover:fill-yellow-500" />
          <span className="ml-4">{children}</span>
        </Link>
      </li>
    )
  }

export default function Portfolio() {
    return (
      <>
        <Head>
          <title>Portfolio</title>
        </Head>
        <Container className="mt-9">
        <div className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                    Portfolio
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                    List of course and personal projects. Please hover over the image for more information .
                </p>
             </div>
            
             <div className="flex justify-center flex-wrap gap-5 mt-5">
             
             <div>
                <div className="relative overflow-hidden w-64 lg:w-56">
                    <div >
                    <Image
                        src={foodmap}
                        alt="Foodmap project"/>
                        </div>
                    <div className="opacity-0 hover:opacity-100 duration-300 bg-zinc-600 bg-opacity-80 absolute inset-0 p-5 z-10 flex flex-col justify-center text-xs text-white font-semibold">
                        <div><p>Four Week Project <br/> 
                        Working as a team of six over four weeks we designed and coded a mobile application using ReactJs to scan barcodes and search foods from a PostgreSQL 
                        database connected with an express and nodeJS backend to determine if foods are safe to eat based on health conditions</p>
                        </div>
                        <div className="mt-2 lg:pl-20">
                        <SocialLink className="mt-1" href="https://foodmap-hozp.onrender.com/" icon={WebsiteIcon}>Website</SocialLink>
                        <SocialLink className="mt-1" href="https://github.com/rachvm/bc13_final-project_front-end" icon={GitHubIcon}>Front End Repository</SocialLink>
                        <SocialLink className="mt-1" href="https://github.com/rachvm/bc13_final-project_back-end/" icon={GitHubIcon}>Back End Repository</SocialLink>
                        </div>
                    </div>
                    </div>
                  
            </div>

             <div>
                <div className="relative overflow-hidden w-64 lg:w-56">
                    
                    <Image
                        className=''
                        src={calc}
                        alt="Mortgage Calc"/>
                        
                    <div className="opacity-0 hover:opacity-100 duration-300 bg-zinc-600 bg-opacity-80 absolute inset-0 p-5 z-10 flex flex-col justify-center text-xs text-white font-semibold">
                        <div><p>Mortgage Calculator <br/> 
                        Simple App created to allow me to explore using TypeScript, and using React Testing Library
                        </p>
                        </div>
                        <div className="mt-2 lg:pl-20">
                        <SocialLink className="mt-1" href="https://github.com/rachvm/mortgagecalc" icon={GitHubIcon}>GitHub Repository</SocialLink>
                        </div>
                    </div>
                    </div>
                  
            </div>
            </div>
        </Container>
        </>
    )
  }