import Link from 'next/link'

export default function astronomy() {
    return (
        <main className="bigboy-container">
        <div className="container">
            <div className="header-container">

                <div className="title-container">
                    <h1 className="title">Geology</h1>
                    <p className="title-desc"></p>
                    <p className="author">By Zachary <span className="date">December 21, 2023</span></p>
                </div>

                <div className="header-image geology">
                    <p className="header-img-text">Aldebaran S @ Unsplash</p>
                </div>
            </div>

            <div className="article-container">
              <p className="paragraph">Here in this image we can see a sedimentary rock that is being weathered and eroded from the inside. Presumably from either wind, water or both!</p>
              <p className="paragraph">Rocks. That&apos;s essentially Geology. It&apos;s all about how rocks form and how they change. The Rock Cycle however is probably the key piece to understanding however. It&apos;s a visually cluttered diagram but is quite simple once broken down. When a rock is heated to a certain point it can melt. Forming magma/lava. This can later form into igneous rock. When a rock is weathered and eroded it becomes sediment, upon wich being compacted and cemented forms Sedimentary rock. Lastly, metamorphic rock takes an already formed sedimentary or igneous rock and applys heat or pressure to it to alter it in some way.</p>
              <p className="paragraph"></p>
            </div>
        </div>



    <div className="footer-container">
        <div className="footer">
            <div className="links-container">
                <Link href="https://ees-yearinreview.vercel.app/astronomy">Astronomy</Link>
                <Link href="https://ees-yearinreview.vercel.app/geology">Geology</Link>
                <Link href="https://ees-yearinreview.vercel.app/freshwater">Freshwater</Link>
                <Link href="https://ees-yearinreview.vercel.app/dynamicearth">Dynamic Earth</Link>
                <Link href="https://ees-yearinreview.vercel.app/freshwater">Freshwater</Link>
                <Link href="https://ees-yearinreview.vercel.app/oceanography">Oceanography</Link>
                <Link href="https://ees-yearinreview.vercel.app/climatechange">Climate Change</Link>
                <Link href="https://ees-yearinreview.vercel.app/energyresources">Energy Resources</Link>
                <Link href="https://ees-yearinreview.vercel.app/biodiversity">Biodiversity</Link>
            </div>
        </div>
    </div>
        </main>
    )
}