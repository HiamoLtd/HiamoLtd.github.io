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
    <HighlightSection bgColor="--color-secondary" color="--color-primary" id="#presenceofwar">
      <Header alignType="centre" padding={0} color="--color-trim">
        The Presence of War
      </Header>
      <SubHeader padding={0} alignType="centre">
        Heritage Highlight
      </SubHeader>
        <p style={{ paddingTop:'3%' }} className="centre">
          The story of New Zealand's 4-inch coastal defence guns, from the battles of Europe to the shores of New Zealand.
        </p>
      <Section padding={0}>
        <SubSection alignType="centre">
          <LargeButton link="/blog/presence-of-war" text="Read More!"
                       color="--color-trim"
                       hoverColor="--color-secondary-light"
                       textColor="--color-text-light"/>
        </SubSection>
      </Section>
    </HighlightSection>
    <HighlightSection bgColor="--color-secondary" color="--color-primary" id="#continuingthemission">
      <Header alignType="centre" padding={0} color="--color-trim">
        Continuing the Mission
      </Header>
      <SubHeader padding={0} alignType="centre">
        January 2019
      </SubHeader>
      <p style={{ paddingTop:'3%' }} className="centre">
        A new year brings new challenges and opportunities; we reflect on a busy first month of 2019.
      </p>
      <Section padding={0}>
        <SubSection alignType="centre">
          <LargeButton link="/blog/continuing-the-mission" text="Read More!"
                       color="--color-trim"
                       hoverColor="--color-secondary-light"
                       textColor="--color-text-light"/>
        </SubSection>
      </Section>
    </HighlightSection>
    <HighlightSection bgColor="--color-secondary" color="--color-primary" id="#ayearoffirsts">
      <Header alignType="centre" padding={0} color="--color-trim">
        A Year of Firsts
      </Header>
      <SubHeader padding={0} alignType="centre">
        2018
      </SubHeader>
      <p style={{ paddingTop:'3%' }} className="centre">
        After an eventful year of many great events and changes, we look back on all that has happened
        in the short months since our company was first started.
      </p>
      <Section padding={0}>
        <SubSection alignType="centre">
          <LargeButton link="/blog/a-year-of-firsts" text="Read More!"
                       color="--color-trim"
                       hoverColor="--color-secondary-light"
                       textColor="--color-text-light"/>
        </SubSection>
      </Section>
    </HighlightSection>
    <Footer/>
  </div>
)