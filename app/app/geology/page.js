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
            <div className="image-container geology">
                <p className="src-text"></p>
            </div>
            <div className="whyunderstand">
                <h1 className="title">Facts from the unit</h1>
                <p className="text">Rocks. That&apos;s essentially Geology. It&apos;s all about how rocks form and how they change. The Rock Cycle however is probably the key piece to understanding however. It&apos;s a visually cluttered diagram but is quite simple once broken down. When a rock is heated to a certain point it can melt. Forming magma/lava. This can later form into igneous rock. When a rock is weathered and eroded it becomes sediment, upon which being compacted and cemented forms Sedimentary rock. Lastly, metamorphic rock takes an already formed sedimentary or igneous rock and applys heat or pressure to it to alter it in some way.</p>
            </div>
            <br />
            <div className="img-explain">
                <p className="text">Here in this image we can see a sedimentary rock that is being weathered and eroded from the inside. Presumably from either wind, water or both! This rock is being turned into sediment, where it will be deposited and then later turn back into a sedimentary rock.</p>
            </div>
            <div className="whythismatters">
                <h1 className="title">How it affects me</h1>
                <p className="text">Geology is seemingly a boring subject. I mean, it&apos;s literally rocks. However it can be useful to be able to be able to understand where rocks are formed, and how. As someone who wants to dabble into the world of scientific data collection with my business, this could prove to be valuable.</p>
            </div>
        </main>
    )
}
