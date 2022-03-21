import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { NextSeo } from 'next-seo'; 
//SEO
//https://github.com/garmeeh/next-seo#readm 
//https://cheatcode.co/tutorials/how-to-handle-seo-metadata-in-next-js

export default function Home() {
  return (
    <div className="h-screen bg-[#eaeaea]">
       <NextSeo
      title="nextjs tailwind css templete"
      description="stater templete build by Karan Janthe"
      canonical="https://www.canonical.ie/"
      openGraph={{
        url: 'https://www.url.ie/a',
        title: 'Open Graph Title',
        description: 'Open Graph Description',
        images: [
          {
            url: 'https://www.example.ie/og-image-01.jpg',
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
            type: 'image/jpeg',
          },
          {
            url: 'https://www.example.ie/og-image-02.jpg',
            width: 900,
            height: 800,
            alt: 'Og Image Alt Second',
            type: 'image/jpeg',
          },
          { url: 'https://www.example.ie/og-image-03.jpg' },
          { url: 'https://www.example.ie/og-image-04.jpg' },
        ],
        site_name: 'SiteName',
      }}
      twitter={{
        handle: '@KaranJanthe',
        site: '@site',
        cardType: 'summary_large_image',
      }}
    />

      <h1 className=" text-center p-24 font-semibold text-2xl">Hello Karan✌️</h1>

    </div>
  )
}

