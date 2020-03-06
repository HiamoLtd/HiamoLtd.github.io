import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import HiamoNav from "../components/hiamonav"
import Footer from "../components/footer"
import Section from "../components/sectioncomponents/section"
import SubSection from "../components/sectioncomponents/subsection"
import Title from "../components/textcomponents/title"
import Header from "../components/textcomponents/header"
import SubHeader from "../components/textcomponents/subheader"
import DisplayCol from "../components/displaycol"
import LargeButton from "../components/largebutton"
import HighlightSection from "../components/sectioncomponents/highlight-section"
import { Image } from "react-bootstrap"

// These navbar links will populate the navbar itself. Using these as props lets us
// dictate if a link goes to a new page or simply a section, while reusing the nav
const navbarLinks = [
  { link:'/', content:'Home' },
  { link:'/#about/', content:'About' },
  { link:'/#projects/', content:'Projects' },
  { link:'/#team/', content:'Team' },
  { link:'#future-plans', content:'Future Plans' },
  { link:'/blog/', content:'Blog' }
]

export default () => (
  <div style={{ backgroundColor:'var(--color-secondary)' }}>
    <HiamoNav brandLink="/" links={navbarLinks}/>
    <Section color="--color-primary">
      <Title color="--color-text-trim" alignType="centre">
        Future Plans
      </Title>
      <p style={{ paddingTop:'3%' }}>
        While we may primarily focus on heritage work, Hiamo is by no means trapped by it.
        Our team is open to working in a number of industries, so if you have project beyond the culture and heritage sector, do not hesitate to reach out.
        <br/>
        <br/>
        Augmented Reality offers a path to many new and exciting oppourtunities.
        We can use our skills of visualisation, storytelling, and building interactive experiences in numerous fashions to create applications that suit the needs of almost any project you are working on.
        Get in touch with us to find out how augmented reality can help you see objects without building them, engage your customers, assist your visualisation processes, and more.
        <br/>
        <br/>
        Below are some examples of the project ideas Hiamo is looking at for future potential work.
      </p>
      <SubSection alignType="centre">
        <LargeButton link="/#contact" text="Get in touch"
                     color="--color-trim"
                     hoverColor="--color-secondary-light"
                     textColor="--color-text-light" />
      </SubSection>
    </Section>
    {/*Bridging realities section*/}
    <HighlightSection bgColor="--color-secondary" color="--color-primary" id="#bridgingreality">
      <Header alignType="centre">
        Bridging Realities Outdoors
      </Header>
      {/* Subsection for upper part of bridging realities*/}
      <SubSection removePadding={true}>
        <DisplayCol
          color="--color-primary" headerColor="--color-text-dark" innerTextColor="--color-text-dark"
          width="6">
          <p>
            Hiamo’s plan is to begin by focusing on initial interactions and engagement with the historic objects at
            heritage sites. Heritage sites, in particular, harbour many lost or forgotten historical objects or
            structures and stories to be told. Hiamo aims to expand beyond the sites we have looked at so far as well.
            <br/>
            <br/>
            Looking specifically and New Zealand’s pre-European history, Māori defence works and villages, such as Pā,
            are also areas we would be excited to work with. Other heritage sites such as historic buildings, early
            European settlement sites, flora and fauna, and remnants of New Zealand’s industrial history, including
            logging and mining, are also strong candidates.
          </p>
        </DisplayCol>
        <DisplayCol
          color="--color-primary" headerColor="--color-text-dark" innerTextColor="--color-text-dark"
          width="6"
          verticalCentre
          image={
            <Image src={require('../images/future-plans/pa.jpg')} className="display-image" rounded/>
          }
        />
      </SubSection>
      {/* Subsection for lower part of bridging realities*/}
      <SubSection>
        <DisplayCol
          color="--color-primary" headerColor="--color-text-dark" innerTextColor="--color-text-dark"
          width="6"
          verticalCentre
          image={
            <Image src={require('../images/future-plans/flora and fauna.jpg')} className="display-image" rounded/>
          }
        />
        <DisplayCol
          color="--color-primary" headerColor="--color-text-dark" innerTextColor="--color-text-dark"
          verticalCentre
          width="6">
          <p>
            There are many other features and possibilities which could expand upon our current work. This could include:
          </p>
          <ul>
            <li style={{ paddingBottom:"1%" }} key="storypoint1">Storytelling and site touring using a virtual guide and audio narration.</li>
            <li style={{ paddingBottom:"1%" }} key="storypoint2">Using geo-location to provide users with an interactive and evolving storytelling experience as they walk around an area.</li>
            <li style={{ paddingBottom:"1%" }} key="storypoint3">Time-lapse features which allow users to view the change in a landscape over time.</li>
          </ul>
        </DisplayCol>
      </SubSection>
    </HighlightSection>
    {/*Indoor Virtual Worlds*/}
    <HighlightSection bgColor="--color-secondary" color="--color-primary" id="#indoorvirtual">
      <Header alignType="centre">
        Indoor Virtual Worlds
      </Header>
      <SubSection removePadding={true}>
        <DisplayCol
          color="--color-primary" headerColor="--color-text-dark" innerTextColor="--color-text-dark"
          width="6">
          <p>
            Hiamo are open to exploring the many ways to we can bring the life and energy of the outdoors into a smaller
            and more controlled indoor environment. Our technology can create animated sculptures, virtual museums,
            and interactive table top environments.
            <br/>
            <br/>
            These can be utilised in transit areas, such as waiting rooms and boarding areas, or used as interactive
            models of structures and objects including building and floor plans. This will allow users to learn and
            understand material in a more impactful and tactile manner.
          </p>
        </DisplayCol>
        <DisplayCol
          color="--color-primary" headerColor="--color-text-dark" innerTextColor="--color-text-dark"
          width="6"
          verticalCentre
          image={
            <Image src={require('../images/future-plans/tabletop.jpg')} className="display-image" rounded/>
          }
        />
      </SubSection>
    </HighlightSection>
    {/*Industry section*/}
    <HighlightSection bgColor="--color-secondary" color="--color-primary" id="#industry">
      <Header alignType="centre">
        Innovative Industry Solutions
      </Header>
      <SubSection removePadding={true}>
        <DisplayCol
          color="--color-primary" headerColor="--color-text-dark" innerTextColor="--color-text-dark"
          width="6">
          <p>
            Our augmented reality approach can lend itself to numerous industries, both on a small and a large scale.
            Hiamo's focus on creating outdoor and indoor experiences opens us up to exploring these industries even more
            going forward.
            <br/>
            <br/>
            This could include displaying architectural documents on site as 3D models, visualising infrastructure projects,
            or creating interactive product mock-ups before the physical object has been made.
            <br/>
            <br/>
            The possibilities are almost endless! We are excited about the oppourtunities the future presents, and to work
            with you to make the most of them.
          </p>
        </DisplayCol>
        <DisplayCol
          color="--color-primary" headerColor="--color-text-dark" innerTextColor="--color-text-dark"
          width="6"
          verticalCentre
          image={
            <Image src={require('../images/future-plans/architecture.jpg')} className="display-image" rounded/>
          }
        />
      </SubSection>
    </HighlightSection>
    <Footer/>
  </div>
)