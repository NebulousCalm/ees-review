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
                <p className="text"></p>
            </div>
            <br />
            <div className="img-explain">
                <p className="text">evergreen forest</p>
            </div>
            <div className="whythismatters">
                <h1 className="title">How it affects me</h1>
                <p className="text"></p>
            </div>
        </main>
    )
}
