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
            <Link href="https://unsplash.com/photos/man-on-mountain-cliff-cPV4Eqs895w" className="image-container dynamearth"></Link>
            <div className="whyunderstand">
                <h1 className="title">Facts from the unit</h1>
                <p className="text">The Earth consists of 5 layers. Starting from the top: Crust, upper mantle, lower mantle, outer core, and the inner core. Tectonic plates reside in the lithosphere (upper mantle). These plates are responsible for the formation of many things: Including valleys, Mountians, Earthquakes, and even our oceans. These plates are in constant motion because of convection currents in the asthenosphere!</p>
            </div>
            <br />
            <div className="img-explain">
                <p className="text">In the image above we can see the Half Dome, in Yosemite Nat. Park in the US. Standing at over 8.8k feet above sea level, the towering half-dome is made of igneous rock. Via a process known as uplifting, the cooled magma made its way above the surface. Through weathering and erosion (highlighted in the geography section) half of the dome was defaced, hence the name Half Dome. It was not successfully climbed until 1875.</p>
            </div>
            <div className="whythismatters">
                <h1 className="title">How it affects me</h1>
                <p className="text">Technology oriented people (such as myself) often reside within Silicon Valley. Near Sillicon Valley, the San Andreas fault is located. Consisting of two tectonic plates, the area is subject to Earthquakes due to the transform boundrary formed by the two plates sliding past each other. I don&apos;t know if I will decide to live in San Francisco (seeing as I&apos;m not that rich), wherever I live, the Environmental landscape caused by a dynamic Earth will most certainly play a factor. </p>
            </div>
        </main>
    )
}
