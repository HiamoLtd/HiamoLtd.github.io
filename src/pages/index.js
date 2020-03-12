import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import HiamoNav from "../components/hiamonav"
import Footer from "../components/footer"
import Section from "../components/sectioncomponents/section"
import SubSection from "../components/sectioncomponents/subsection"
import HighlightSection from "../components/sectioncomponents/highlight-section"
import BannerSection from "../components/sectioncomponents/banner-section"
import Title from "../components/textcomponents/title"
import Header from "../components/textcomponents/header"
import SubHeader from "../components/textcomponents/subheader"
import DisplayCol from "../components/displaycol"
import Video from "../components/video"
import ContactForm from "../components/contactform"
import LargeButton from "../components/largebutton"
import TitledDropdown from "../components/titleddropdown"
import { Image } from "react-bootstrap"
import Collapsable from "../components/collapsable"

// These navbar links will populate the navbar itself. Using these as props lets us
// dictate if a link goes to a new page or simply a section, while reusing the nav
const navbarLinks = [
  { link:'/#home', content:'Home' },
  { link:'/#about', content:'About' },
  { link:'/#projects', content:'Projects' },
  { link:'/#team', content:'Team' },
  { link:'/future-plans/', content:'Future Plans' },
  { link:'/blog/', content:'Blog' }
]

export default () => (
  <div style={{ backgroundColor:'var(--color-secondary)' }}>
    <HiamoNav brandLink="#home" links={navbarLinks}/>
    {/*Introduction Section*/}
    <BannerSection largeText="Augmented reality for historic sites - and beyond." largeTextColor="--color-text-light"
                   innerTextColor="--color-text-light"
    >
      <LargeButton link="/#contact" text="Contact us"
                   color="--color-trim"
                   hoverColor="--color-secondary-light"
                   textColor="--color-text-light" />
    </BannerSection>
    {/*About Section*/}
    <Section color={'--color-primary'} id="about" width={10}>
      <Title color="--color-text-trim" alignType="centre">
        About Us
      </Title>
      <SubHeader color="--color-text-dark" alignType="centre">
        "Reconnecting explorers with historic landmarks through the lens of today's innovation."
      </SubHeader>
      {/*About section container*/}
      <SubSection color="--color-primary">
        {/*TODO make a reusable "About" sectiopn that is a title col on the left with the padding of a "p", and a dropdown on the right with no borders and a single input.*/}
        {/*Storytelling Description*/}
        <Collapsable
          header="Storytelling" headerColor="--color-text-dark"
          collapsedText="At Hiamo, we are storytellers, and we bring your content to life." collapsedTextColor="--color-text-dark"
          expandedTextColor="--color-text-dark">
          <p>
            History is created and connected by its stories, and the objects those before us have left behind.
            <br/>
            <br/>
            We bring these stories to life by visualising them exactly where the events occurred, and connect people
            with the tales by letting them be a part of the history through gamification.
          </p>
        </Collapsable>
        {/*Visualisation Description*/}
        {/*Experience Description*/}
        {/*Heritage Description*/}
        {/*Flexibility (Beyond? Other work? Commercial?) Description*/}
        {/*Why "Hiamo" Description*/}
      </SubSection>
      <SubSection color="--color-primary" alignType="centre">
        <DisplayCol
          color="--color-primary" headerColor="--color-text-dark" innerTextColor="--color-text-dark"
          width="4" headerAlign="centre" innerAlign="centre"
          header="Storytelling"
        >
          <p>
            At Hiamo, we are storytellers, and augmented reality is our paper. History is created and connected
            by its stories, and the objects those before us have left behind.
            <br/>
            We bring these stories to life by visualising
            them exactly where the events occurred, and connect people with the tales by letting them be a part of
            the history through gamification."
          </p>
        </DisplayCol>
        <DisplayCol
          color="--color-primary" headerColor="--color-text-dark" innerTextColor="--color-text-dark"
          width="4" headerAlign="centre" innerAlign="centre"
          header="Visualisation"
        >
          <p>
            Using augmented reality (AR), we can create things that never were, or recreate something which
            has since disappeared. We can visualise stories, people, environments, buildings, and more, the sky is the limit.
            <br/>
            By leveraging AR we are able to visualise whatever is necessary for the experience you require. This could mean
            using AR to digitally recreate an interactive, expandable, and environmentally friendly version of a heritage
            site or item, or to visualise a new product that hasn't been built yet.
          </p>
        </DisplayCol>
        <DisplayCol
          color="--color-primary" headerColor="--color-text-dark" innerTextColor="--color-text-dark"
          width="4" headerAlign="centre" innerAlign="centre"
          header="AR Experiences"
        >
          <p>
            Our expertise lends us to a variety of different jobs. We don't just create applications, we
            create experiences, and each experience is uniquely tied to its subject.
            <br/>
            We build experiences that visitors and users will remember, and ones that deeply connect them to the
            content they are seeing in front of them.
            content they are seeing in front of them.
          </p>
        </DisplayCol>
      </SubSection>
    </Section>
    {/*Supported by Section*/}
    <HighlightSection color="--color-primary" bgColor="--color-primary" id="support">
      <Header color="--color-text-dark" alignType="centre">Supported By</Header>
      <SubSection alignType="centre" removePadding>
        <DisplayCol width="6"
                    verticalCentre
                    image={
                      <a href="https://www.mahuki.org/" style={{ paddingTop:'25px'}}>
                        <Image src={require('../images/icons/support/mahuki_logo.png')} style={{ width:"80%" }}/>
                      </a>
                    }
        />
        <DisplayCol width="6"
                    verticalCentre
                    image={
                      <a href="http://myd.govt.nz/funding/current-funding.html" style={{ paddingTop:'25px'}}>
                        <Image src={require('../images/icons/support/MYD_Logo_Clear.png')} style={{ width:"80%" }}/>
                      </a>
                    }
        />
      </SubSection>
    </HighlightSection>
    {/*Projects Section*/}
    <Section color={'--color-tertiary'} id="projects" width={10}>
      <Title color="--color-text-trim" alignType="centre">
        Our Projects
      </Title>
      <p className="centre" style={{ paddingTop:'3%' }}>
        We like to keep ourselves busy at Hiamo, and usually that means engaging with areas of history, attending
        public events, and exploring ideas. Here are some examples of the work we have done.
      </p>

      {/*Coastal defence section*/}
      <SubSection color="--color-tertiary">
        <DisplayCol
          headerColor="--color-text-dark" innerTextColor="--color-text-dark"
          width="12"
          header="Coastal Defence" headerAlign="centre"
        />
        <DisplayCol
          headerColor="--color-text-dark" innerTextColor="--color-text-dark"
          width="6"
        >
          <p>
            New Zealand is covered in coastal defence sites, but many of them lack the naval guns that they were built for.
            <br/>
            <br/>
            We bring these objects back digitally, returning context to the site and enabling lifelong learning through
            interaction with the models, all without the need to construct or maintain replicas.
            <br/>
            <br/>
            To further engage with this history and the public, we bring these applications to the Wrights Hill Fortress open days in Wellington.
          </p>
          <DisplayCol
            headerColor="--color-text-dark" innerTextColor="--color-text-dark"
            width="12"
            image={
              <Image src={require('../images/projects/forts/WebImage_Wide.jpg')} className="display-image" rounded/>
            }
          />
        </DisplayCol>
        <DisplayCol
          headerColor="--color-text-dark" innerTextColor="--color-text-dark"
          width="6"
          verticalCentre
          image={
            <Video aspect="16by9" src="https://www.youtube.com/embed/aWRgNYwCXuw" title="Coastal Defence Demo"/>
          }
        />
      </SubSection>
      {/*Wahine Section*/}
      <SubSection color="--color-tertiary">
        <DisplayCol
          headerColor="--color-text-dark" innerTextColor="--color-text-dark"
          width="12"
          header="Wahine Disaster Storytelling" headerAlign="centre"
        />
        <DisplayCol
          headerColor="--color-text-dark" innerTextColor="--color-text-dark"
          width="4"
          verticalCentre
          image={
            <Video aspect="19by9" src="https://www.youtube.com/embed/uH-m34xP4nU" title="Wahine Disaster Demo"/>
          }
        />
        <DisplayCol
          headerColor="--color-text-dark" innerTextColor="--color-text-dark"
          width="8"
        >
          <p>
            For Wellington Heritage Week 2019, Hiamo gave a new insight into the tragic sinking of the T.E.V Wahine
            by using augmented reality to visualse the event by the Wahine memorial mast.
            <br/>
            <br/>
            We shared this story by displaying a map of the path the vessel took when entering Wellington harbour,
            stopping to explain each key event that impacted the Wahine and all of those on board.
            <br/>
            <br/>
            Our application used AR, alongside traditional narrative techniques, to explain the ordeal that the passengers
            went through and to help memorialise those lost in the disaster.
          </p>
          <DisplayCol
            headerColor="--color-text-dark" innerTextColor="--color-text-dark"
            width="12"
            image={
              <Image src={require('../images/projects/wahine/Wahine_Web_Image.jpg')} className="display-image" rounded/>
            }
          />
        </DisplayCol>
      </SubSection>
      {/*Glow / education section*/}
      <SubSection color="--color-tertiary">
        <DisplayCol
          headerColor="--color-text-dark" innerTextColor="--color-text-dark"
          width="12"
          header="Seeing Stars - Education" headerAlign="centre"
        />
        <DisplayCol
          headerColor="--color-text-dark" innerTextColor="--color-text-dark"
          width="8"
        >
          <p>
            As mentioned, our augmented reality skillset does not only apply to heritage. We have branched out to look at some other areas of interest,
            in this case it was tourism and education.
            <br/>
            <br/>
            Hiamo was asked to solve the problem of what a stargazing business could do if it was too cloudy to see the stars on a given night. Our answer? Bring
            the stars to earth.
            <br/>
            <br/>
            Using AR, we visualised space on specifically built image targets, which could be deployed wherever needed. These images could be the design we created,
            or they could be almost any pattern or image a client required.
            <br/>
            <br/>
            We took this interactive experience to a community event to increase youth engagement with the stars, allowing visitors to see all the planets in our
            solar system and interact with them. These visualisations were accompanied by information about the planets, providing users with a memorable experience and an
            avenue to lifelong learning about the final frontier.
          </p>
        </DisplayCol>
        <DisplayCol
          headerColor="--color-text-dark" innerTextColor="--color-text-dark"
          width="4"
          verticalCentre
          image={
            <Image src={require('../images/projects/space/earth.jpg')} className="display-image" rounded/>
          }
        />
      </SubSection>
    </Section>
    {/*Team Section*/}
    <Section color={'--color-primary'} width={8} id="team">
      <Title color="--color-text-trim" alignType="centre">
        Our Team
      </Title>
      <SubSection color="--color-primary" alignType="centre">
        <DisplayCol
          color="--color-primary" headerColor="--color-text-dark" innerTextColor="--color-text-dark"
          width="6" headerAlign="centre" innerAlign="centre"
          header="Alex Hockley"
          image={
            <Image src={require('../images/icons/logo.png')} roundedCircle className="team-image"/>
          }
        >
          <p>Chief Executive Officer</p>
        </DisplayCol>
        <DisplayCol
          color="--color-primary" headerColor="--color-text-dark" innerTextColor="--color-text-dark"
          width="6" headerAlign="centre" innerAlign="centre"
          header="Shaika Khan"
          image={
            <Image src={require('../images/icons/logo.png')} roundedCircle className="team-image"/>
          }
        >
          <p>Chief Technology Officer</p>
        </DisplayCol>
      </SubSection>
    </Section>
    {/*Contact Section*/}
    <HighlightSection color="--color-primary" id="contact" bgColor="--color-primary">
      <Title color="--color-trim" alignType="centre">
        Contact Us
      </Title>
      <SubSection alignType="centre" removePadding>
        <ContactForm/>
      </SubSection>
    </HighlightSection>
    {/* Add footer to the website */}
    <Footer/>
  </div>
)
