import Link from 'next/link'

export default function astronomy() {
    return (
        <main className="bigboy-container">
        <div className="container">
            <div className="header-container">

                <div className="title-container">
                    <h1 className="title">Freshwater</h1>
                    <p className="title-desc"></p>
                    <p className="author">By Zachary <span className="date">December 21, 2023</span></p>
                </div>

                <Link href="www.google.com"><div className="header-image freshwater"></div></Link>
            </div>

            <div className="article-container">
                <p className="paragraph">Groundwater (as depicted above) is heavily important</p>
                <p className="paragraph"></p>
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