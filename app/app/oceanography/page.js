import Image from 'next/image'
import Link from 'next/link'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMeteor, faLayerGroup, faWater, faCloudShowersWater, faVolcano, faIcicles, faRecycle, faPlug, faTree} from '@fortawesome/free-solid-svg-icons'
export default function oceanography() {
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
            <Link href="https://images.unsplash.com/photo-1553570739-330b8db8a925?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="image-container ocean"></Link>
            <div className="whyunderstand">
                <h1 className="title">Facts from the unit</h1>
                <p className="text">The Earth is covered in 71% water, of which originally came from comets and metiorites containing the valued h20. Volcanoes also contributed to water, as their volcanic plumes contain water vapor. Once the Earth began to cool, this vapor condensed into water. Forming the oceans we know today. There is also a difference between an ocean and a sea. A sea is smaller than an ocean, as well as it must be partially or completely landlocked.</p>
            </div>
            <br />
            <div className="img-explain">
                <p className="text">Above is an example of a Sea Arch. Formed by erosion, an opening is made. This is done by an enlargement of a sea cave (of which is formed primarily from sea waves). This leaves a bridge like gap over the water, in an arch shape. Hence the name.</p>
            </div>
            <div className="whythismatters">
                <h1 className="title">How it affects me</h1>
                <p className="text">As I&apos;ve previously mentioned, the Earth is covered in 71% oceans. Meaning, no matter what I will come in contact with them. Sooner or later, whether it be rising sea levels from the melting ice caps or by going to a coastline. The ocean is a destructive and beautiful place that I want to understand more about in greater detail, and hopefully with my data collection I can do just that. </p>
            </div>
        </main>
    )
}
