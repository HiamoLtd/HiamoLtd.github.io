import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import HiamoNav from "../components/hiamonav"
import Footer from "../components/sectioncomponents/footer"
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
  { link:'/future-plans/', content:'Future Plans' },
  { link:'#', content:'Blog' }
]

export default () => (
  <div style={{ backgroundColor:'var(--color-secondary)' }}>
    <HiamoNav brandLink="/" links={navbarLinks}/>
    <Section color="--color-primary">
      <Title color="--color-text-trim" alignType="centre">
        Blogs
      </Title>
      <p style={{ paddingTop:'3%' }} className="centre">
        Follow what we've been up to!
        <br/>
        <br/>
        Come to find out about work we have done, research we have undertaken, and techniques we use to bring historic
        sites to life.
      </p>
    </Section>
    {/*Blog Links*/}
    <HighlightSection bgColor="--color-secondary" color="--color-primary" id="#bridgingreality">
      <Header alignType="centre" padding={0} color="--color-trim">
        The Presence of War
      </Header>
      <SubHeader alignType="centre" padding={0} >
        Heritage Highlight
      </SubHeader>
      <Section>
        <p>

        </p>
      </Section>
    </HighlightSection>
    <Footer/>
  </div>
)