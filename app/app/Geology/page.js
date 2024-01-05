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
              <p className="paragraph">The main part of geology (as pictured above) is rocks. Consisting of Igneous (formed via cooled magma or lava). Sedimentary, forming from compacted and cemented sediment. And lastly, metamorphic, A sedimentary or igneous rock that has been altered under immense heat or pressure. </p>
              <p className="paragraph">Rocks. That's essentially Geology. It's all about how rocks form and how they change. The Rock Cycle however is probably the key piece to understanding however. It's a visually cluttered diagram but is quite simple once broken down. Geology is </p>
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