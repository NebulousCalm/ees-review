import Link from "next/link";

export default function astronomy() {
  return (
    <main className="bigboy-container">
      <div className="container">
        <div className="header-container">
          <div className="title-container">
            <h1 className="title">Freshwater</h1>
            <p className="title-desc"></p>
            <p className="author">
              By Zachary <span className="date">December 21, 2023</span>
            </p>
          </div>

          <Link href="https://ecology.wa.gov/water-shorelines/water-quality/groundwater/groundwater-resources/groundwater-diagram">
            <div className="header-image freshwater"></div>
          </Link>
        </div>

        <div className="article-container">
          <p className="paragraph">
            Freshwater (as depicted above) is heavily important to well, staying
            alive. It can originate from multiple sources. A river, lake,
            glaciers and groundwater to name a few. Water seeps into the ground,
            contributing to the water table. Which is the boundary between
            water-saturated ground and the unsaturated ground. We use wells (as
            seen far right) to go past the water table and take up water.
            However a less/non-permeable set of soil can sometimes interrupt the
            flow of water. This is called an aquitard (depicted on the left
            side).
          </p>
          <p className="paragraph">
            Freshwater can also be infeced. Here in North Carolina it&apos;s a
            prevalent problem. Hog waste being the most significant contributor
            causes Eutrophication. Eutrophication being the main cause of river
            ecosystems being in danger today. First, fertilizer runoff enters
            the water source. Algae within, grows rapidly. Causing a algae film
            to form. Preventing sunlight to enter and for the plant life
            underneath to create oxygen via photosynthesis. Because of the lack
            of oxygen in the water all life ceases to exist.
          </p>
          <p className="paragraph">
            Out of most units in Earth and Environmental Science, this is
            probably the most important to me. As I am currently designing a
            method of obtaining river/stream data (Dissolved oxygen, water
            levels, light levels, etc.) So understanding how water moves and is
            used throughout our lives is vital to me creating this product and
            it will be used to great use.
          </p>
        </div>
      </div>

      <div className="footer-container">
        <div className="footer">
          <div className="links-container">
            <Link href="https://ees-yearinreview.vercel.app/astronomy">
              Astronomy
            </Link>
            <Link href="https://ees-yearinreview.vercel.app/geology">
              Geology
            </Link>
            <Link href="https://ees-yearinreview.vercel.app/freshwater">
              Freshwater
            </Link>
            <Link href="https://ees-yearinreview.vercel.app/dynamicearth">
              Dynamic Earth
            </Link>
            <Link href="https://ees-yearinreview.vercel.app/freshwater">
              Freshwater
            </Link>
            <Link href="https://ees-yearinreview.vercel.app/oceanography">
              Oceanography
            </Link>
            <Link href="https://ees-yearinreview.vercel.app/climatechange">
              Climate Change
            </Link>
            <Link href="https://ees-yearinreview.vercel.app/energyresources">
              Energy Resources
            </Link>
            <Link href="https://ees-yearinreview.vercel.app/biodiversity">
              Biodiversity
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
