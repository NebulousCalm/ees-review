import Link from 'next/link'

export default function astronomy() {
    return (
        <main className="bigboy-container">
        <div className="container">
            <div className="header-container">

                <div className="title-container">
                    <h1 className="title">Astronomy</h1>
                    <p className="title-desc"></p>
                    <p className="author">By Zachary <span className="date">December 21, 2023</span></p>
                </div>

                <div className="header-image">
                    <p className="header-img-text">Aldebaran S @ Unsplash</p>
                </div>
            </div>

            <div className="article-container">
                <p className="paragraph">The sun, contains 4 main parts. The core of the sun, being 86,000 miles thick, is the center most part of the sun where Nuclear fusion occurs: It releases energy as high powered photons. The second layer of the sun is known as the photosphere. It is the only part of the sun visible to the naked eye. Convection occurs here. The first layer of the suns atmosphere and 3rd layer overall is the chromosphere. It is a thin and weak layer and applies a reddish tint to the sun. The final layer and second layer of the suns atmosphere is the Corona. It is made of photons and it produces weak, ionized gasses that can extend up to a million kilometers.</p>
                <p className="paragraph">A sphere of hydrogen is probably the single most crucial part of our solar system. Providing the gravity needed to both form the planets, it also keeps them within a proper orbit. Not to mention it both warms our planet and provides energy (via photosynthesis) that without it, life as we know it now would not exist. The sun is the figurative and literal center point in our galaxy. It powers and holds together life as we know it to be today. It&#39;s funny to think a ball of hydrogen is the reason we&#39;re standing here today!</p>
                <p className="paragraph">Astronomy, as someone who personally sees my future closer to the Earth, astronomy is still important to know. Whether it be understanding the scientific-political climate of a few hundred years ago or the (arguably more interesting) ways we came to be. As someone in tech, understanding how the sun can simply shut down entire continents power grids at simply a moments notice is truly remarkable to me - not to mention terrifying.</p>
            </div>
        </div>



    <div className="footer-container">
        <div className="footer">
            <div className="links-container">
                <Link href="http://localhost:3000/astronomy">Astronomy</Link>
                <Link href="#">Geology</Link>
                <Link href="#">Freshwater</Link>
                <Link href="#">Dynamic Earth</Link>
                <Link href="#">Freshwater</Link>
                <Link href="#">Oceanography</Link>
                <Link href="#">Climate Change</Link>
                <Link href="#">Energy Resources</Link>
                <Link href="#">Biodiversity</Link>
            </div>
        </div>
    </div>
        </main>
    )
}