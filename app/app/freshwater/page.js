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
          <Link href="https://www.google.com" className="image-container freshwater"></Link>
            <div className="whyunderstand">
                <h1 className="title">Facts from the unit</h1>
                <p className="text">Freshwater can also be infected. Here in North Carolina it&apos;s a
                    prevalent problem. Hog waste being the most significant contributor
                    causes Eutrophication. Eutrophication being the main cause of river
                    ecosystems being in danger today. First, fertilizer runoff enters
                    the water source. Algae within, grows rapidly. Causing a algae film
                    to form. Preventing sunlight to enter and for the plant life
                    underneath to create oxygen via photosynthesis. Because of the lack
                    of oxygen in the water all life ceases to exist.</p>
            </div>
            <br />
            <div className="img-explain">
                <p className="text">Freshwater (as depicted above) is heavily important to well, staying
                    alive. It can originate from multiple sources. A river, lake,
                    glaciers and groundwater to name a few. Water seeps into the ground,
                    contributing to the water table. Which is the boundary between
                    water-saturated ground and the unsaturated ground. We use wells (as
                    seen far right) to go past the water table and take up water.
                    However a less/non-permeable set of soil can sometimes interrupt the
                    flow of water. This is called an aquitard (depicted on the left
                    side).</p>
            </div>
            <div className="whythismatters">
                <h1 className="title">How it affects me</h1>
                <p className="text">Out of most units in Earth and Environmental Science, this is
                    probably the most important to me. As I am currently designing a
                    method of obtaining river/stream data (Dissolved oxygen, water
                    levels, light levels, etc.) So understanding how water moves and is
                    used throughout our lives is vital to me creating this product and
                    it will be used to great use.</p>
            </div>
        </main>
    )
}
