import Image from 'next/image'
import Link from 'next/link'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMeteor, faLayerGroup, faWater, faCloudShowersWater, faVolcano, faIcicles, faRecycle, faPlug, faTree} from '@fortawesome/free-solid-svg-icons'
export default function meteorology() {
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
            <Link href="https://images.unsplash.com/photo-1500740516770-92bd004b996e?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="image-container weather"></Link>
            <div className="whyunderstand">
                <h1 className="title">Facts from the unit</h1>
                <p className="text">The Earth is contained within an atmosphere. It&apos;s atmosphere is seperated into layers. All weather is contained within the first layer, the troposphere. After that is the stratosphere which is where our ozone layer is located, protecting us from harmful UV rays. Then is the mesosphere known for being the coldest layer. Finally we have the thermosphere which suprisingly is quite hot, but this is because it is the first layer to absorb the suns radiation. </p>
            </div>
            <br />
            <div className="img-explain">
                <p className="text">Depicted above is a cumulonimbus could. A large, puffy, dark and menacing storm cloud. With it, it carries heavy precipitation and lightning. The rain will (most likely) not last as long as a stratus cloud but it will certainly be significantly more powerful. First water must evaporate so that it will rise and eventually condense to form clouds. After a while the cloud will begin to rain down (pun intended) it&apos;s precipitation.</p>
            </div>
            <div className="whythismatters">
                <h1 className="title">How it affects me</h1>
                <p className="text">Suprisingly tracking the effects from weather is suprisingly easy to do and with limited supplies. I've already built sensors for detecting temperature changes (thermometer), pressure changes (barometer), as well as a humidity sensor. All of these combined (along with publically available data) allow me to (try) to interpret weather and to gain a better understanding of what&apos;s going on and what is to come (looking it up is boring). </p>
            </div>
        </main>
    )
}
