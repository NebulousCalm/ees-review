'use client'
import Link from 'next/link'
import Image from 'next/image'
import Typewriter from "typewriter-effect";

export default function Home() {
  return (

      <div className="main-container">
        <h3 id="tagline">A year in review</h3>

        <h1 id="headline">Earth and Environmental Science</h1>
        <h3 id="featurelist">Every class learns about <span className="typewrite">
             <Typewriter
                 className="typewrite"
                options={{
                    strings: ["Astronomy", "Geology", "Freshwater", "Dynamic Earth", "Freshwater", "Oceanography", "Meteorology", "Climate Change", "Energy Resources", "Biodiversity", "Biomes"],
                    autoStart: true,
                    loop: true,
                }}
            />
        </span></h3>

        <p id="explanation">This website, created as a High school Earth and Environmental final project to summarize all content during the semester. January, 2023</p>
        <Link href="https://ees-yearinreview.vercel.app/astronomy" className="getstarted-btn">Begin <i className="fa-solid fa-arrow-right right-arrow"></i></Link>
      </div>
  )
}
