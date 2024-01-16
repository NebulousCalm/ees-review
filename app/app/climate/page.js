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
            <Link href="https://kingcounty.gov/en/legacy/services/environment/climate/our-changing-climate/-/media/services/environment/climate/introduction/sun-infographic.ashx?la=en&hash=60E925FED3E9C2FACCBF90F28902C013" className="image-container climate"></Link>
            <div className="whyunderstand">
                <h1 className="title">Facts from the unit</h1>
                <p className="text">Greenhouse gasses trap heat and infared light from the sun close to the suns surface. However there are some natural greenhouse gasses: such as water vapor or carbon dioxide from a volcanic eruption. However some are enhanced, which means that human activities have contributed to the significant amount. These include Carbon Dioxide, Methane, and Ozone.</p>
            </div>
            <br />
            <div className="img-explain">
                <p className="text">Displayed above is the Greenhouse effect. When the suns infared light reaches our atmosphere, some is reflected away. Some is absorbed by the ground, and some is trapped close to the Earth because of Greenhouse gasses. Smothering the ground in toxic chemicals and intense heat.</p>
            </div>
            <div className="whythismatters">
                <h1 className="title">How it affects me</h1>
                <p className="text">I&apos;m born into a generation that will begin to feel the lasting and devestating impacts of Global Warming and destroying ecosystems across the planet. We&apos;ve destroyed the planet and it is up to my generation to fix it. I believe we can but we currently don&apos;t appear to truly care. Which could be a fatal error for humanity.</p>
            </div>
        </main>
    )
}
