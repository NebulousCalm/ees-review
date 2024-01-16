import Image from 'next/image'
import Link from 'next/link'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMeteor, faLayerGroup, faWater, faCloudShowersWater, faVolcano, faIcicles, faRecycle, faPlug, faTree} from '@fortawesome/free-solid-svg-icons'
export default function dynamearth() {
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
            <Link href="https://images.unsplash.com/photo-1524252500348-1bb07b83f3be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="image-container biodiv"></Link>
            <div className="whyunderstand">
                <h1 className="title">Facts from the unit</h1>
                <p className="text">Ecology is the study of interactions between living (biotic) things and non-living (abiotic) things. Theres a tier in which things are classified. In the largest classification, there is the Biosphere. Where all life on Earth exists. Beneath that is the ecosystem, where all communities (I will mention that in a second) that live in tandem with the abiotic factors of the environment reside. The community is where all members of a paticular species interact in the same environment. A population is the all members in a specific species that live in the same area in the same relative period of time. For a species to be classified as, well, as species. It must be apart of a group of organisms that are similair enough to produce fertile offspring. This is the smallest category</p>
            </div>
            <br />
            <div className="img-explain">
                <p className="text">Above lies an Evergreen forest. Located within a Taiga. The weather here is cold and trees year round do NOT shed their leaves like their deciduous counterparts. Often found at high elevations, deer, moose, elk, as well as some seed eating squirrels are found here. </p>
            </div>
            <div className="whythismatters">
                <h1 className="title">How it affects me</h1>
                <p className="text">Biodiversity is critical to sustin life as we know it today. Species provide us with industrial products as well as food, which wouldn't exist without a large amount of variation. Not to mention to keep an ecosystem stable everything must be intact. Diversity ensures species survival to keep this ecological web intact. Albeit humans are disrupting it, but this is how it should be. Without biodiversity things would be a lot different, and for all we know we might not have existed nor evolved.</p>
            </div>
        </main>
    )
}
