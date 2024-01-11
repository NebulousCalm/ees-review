import Image from 'next/image'
import Link from 'next/link'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMeteor, faLayerGroup, faWater, faCloudShowersWater, faVolcano, faIcicles, faRecycle, faPlug, faTree} from '@fortawesome/free-solid-svg-icons'
export default function Astronomy() {
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
            <div className="image-container">
                <p className="src-text">Hewo :3</p>
            </div>
            <div className="whyunderstand">
                <h1 className="title">Why facts from the unit</h1>
                <p className="text">The sun is probably the single most crucial part of our solar system. Providing the gravity needed to both form the planets, it also keeps them within a proper orbit. Not to mention it both warms our planet and provides energy (via photosynthesis) that without it, life as we know it now would not exist. The sun is the figurative and literal center point in our galaxy. It powers and holds together life as we know it to be today. It's funny to think a ball of hydrogen is the reason we&apos;re standing here today!</p>
            </div>
            <br />
            <div className="img-explain">
                <p className="text">The sun, contains 4 main parts. The core of the sun, being 86,000 miles thick, is the center most part of the sun where Nuclear fusion occurs: It releases energy as high powered photons. The second layer of the sun is known as the photosphere. It is the only part of the sun visible to the naked eye. Convection occurs here. The first layer of the suns atmosphere and 3rd layer overall is the chromosphere. It is a thin and weak layer and applies a reddish tint to the sun. The final layer and second layer of the suns atmosphere is the Corona. It is made of photons and it produces weak, ionized gasses that can extend up to a million kilometers.</p>
            </div>
            <div className="whythismatters">
                <h1 className="title">How it affects me</h1>
                <p className="text">As someone who personally sees my future closer to the Earth, astronomy is still important to know. Whether it be understanding the scientific-political climate of a few hundred years ago or the (arguably more interesting) ways we came to be. As someone in tech, understanding how the sun can simply shut down entire continents power grids at simply a moments notice is truly remarkable to me - not to mention terrifying.</p>
            </div>
        </main>
    )
}
