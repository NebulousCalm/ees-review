import Image from 'next/image'
import Link from 'next/link'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMeteor, faLayerGroup, faWater, faCloudShowersWater, faVolcano, faIcicles, faRecycle, faPlug, faTree} from '@fortawesome/free-solid-svg-icons'
export default function Geology() {
    return (
        <main>
            <div className="sidenav">
                <Link href="/astronomy" ><FontAwesomeIcon className="icons" icon={faMeteor} /></Link>
                <Link href="/geology" ><FontAwesomeIcon className="icons" icon={faLayerGroup} /></Link>
                <Link href="/freshwater"><FontAwesomeIcon className="icons" icon={faIcicles} /></Link>
                <Link href="/oceanography"><FontAwesomeIcon className="icons" icon={faWater} /></Link>
                <Link href="/meteorology"><FontAwesomeIcon className="icons" icon={faCloudShowersWater} /></Link>
                <Link href="/dynamicearth" ><FontAwesomeIcon className="icons" icon={faVolcano} /></Link>
                <Link href="/climate"><FontAwesomeIcon className="icons" icon={faRecycle}/></Link>
                <Link href="/energy"><FontAwesomeIcon className="icons" icon={faPlug}/></Link>
                <Link href="/biodiversity"><FontAwesomeIcon icon={faTree} className="icons" /></Link>
            </div>
          <Link href="https://www.google.com" className="image-container energy"></Link>
            <div className="whyunderstand">
                <h1 className="title">Facts from the unit</h1>
                <p className="text">There are multiple ways to achieve electricity, some are renewable (sustainable), while others are not. They can also be environmentally friendly or in the opposite sense: dangerous to the environment (eg. Chernobyl in 1986). These energy sources include wind, solar, nuclear, geothermal, hydroelectric, energy via a dam, biomass, and burning fossil fuels.</p>
            </div>
            <br />
            <div className="img-explain">
                <p className="text">Lorem ipsum dolor sit amet</p>
            </div>
            <div className="whythismatters">
                <h1 className="title">How it affects me</h1>
                <p className="text">Seeing as for my environmental data sensors I want to use fully sustainable power. The easiest being solar energy. I forsee a future and am currently designing/prototyping a method of using solar panels instead of non-reusable batteries. As well, having a better knowledge of where my electricity comes from and what it means for the world will help me do better in terms of my ecological and environmental impact.</p>
            </div>
        </main>
    )
}
