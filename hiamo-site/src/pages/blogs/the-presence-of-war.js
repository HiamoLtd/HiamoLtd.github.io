import React from "react";

// Import bootstrap components
import { Row, Col } from "react-bootstrap";

// TODO we should be able to import these all from components
import { Screen, BlogBox, ModalImage } from '../../components';
import { SEO } from '../../components/shared';
import { Section } from "../../components/sections";

import styles from './blog.module.css';

const Blog = () => (
  <Screen>
    <SEO title="The Presence of War | Blog" />
    <Section title="The Presence of War" mainHeader>
      {/* Title section */}
      <Row>
        <Col md={12}>
          <h2 className={styles.type}>
            Heritage Highlight
          </h2>
          <p className={styles.date}>
            dd/mm/yy
          </p>
        </Col>
      </Row>
      {/* Main content section */}
      <Row>
        {/* Left side text */}
        <Col md={6} className={styles.mainCol}>
          <p>
            Research is a large part of the work we do at Hiamo, and the Heritage Highlights series exists to
            share a few of the stories we find. Some objects which we have researched extensively in our ongoing quest to
            accurately recreate historic objects in augmented reality are the 4-inch guns New Zealand used
            in its coastal defence.
            <br /><br />
            Built around 1910 Aotearoa’s 4-inch guns, named due to the width of the shells they fired<sup>[1]</sup>,
            had a rich history even before they reached our shores. The weapons were originally used on the
            battlecruiser HMS New Zealand, a warship which the New Zealand government paid for Britain to
            build to help defend our shores<sup>[2]</sup>.
          </p>
          <ModalImage
            image={require('../../images/blogs/the-presence-of-war/newzealand.jpg')}
            caption={
              <>
                <p id="caption">
                  The HMS New Zealand seen in Scotland, during World War I.
                  <br/>
                  <span>Image reference:</span>
                </p>
                <a href="https://www.deviantart.com/asarigoddess/art/HMS-New-Zealand-689465614"  id="ref">
                  https://www.deviantart.com/asarigoddess/art/HMS-New-Zealand-689465614
                </a>
              </>
            }
          />
          <p>
            Despite this initial plan, the HMS New Zealand only went to its namesake country twice. Almost
            half a million people went to see the ship when it first visited in 1913, just under half the
            country’s population at the time.
            <br /><br />
            During this visit, the captain was gifted a piupiu (flax skirt) and a greenstone hei-tiki (pendant) 
            by the Ngāti Raukawa iwi (tribe) to protect the ship and its crew<sup>[3]</sup>. “As to these garments,” one
            of their chiefs, Rere Nikitini, said, “let them be as sails for your ship, carrying you to distant 
            shores, and even to the presence of war if that should happen.” This proved to be true, a war did
            occur and the vessel would see it.
            <br /><br />
            HMS New Zealand fought in multiple major battles in World War One, including the last and largest
            battleship-focussed engagement in history. Despite these battles, the ship only got hit by fire once
            and suffered no major damage or injury<sup>[2]</sup>. The crew credited this incredible luck to the gifted piupiu
            and hei-tiki which the captain wore during battle.
          </p>
        </Col>
        {/* Right side text */}
        <Col md={6} className={styles.mainCol}>
          IMAGE GOES HERE. SORT.
          <p>
          The HMS New Zealand was scrapped in 1922, only 10 years after entering service and 23 years before the
          New Zealand government would finish paying back the purchase in 1945<sup>[4]</sup>. The 4-inch secondary guns were
          brought to Aotearoa for the final time, where they were used as saluting guns in Auckland and Wellington
          for over 10 years.
          <br /><br />
          Eventually, the 4-inch guns were placed in coastal defence roles around the country<sup>[5]</sup>. Four were used
          in Wellington, and these are the ones we have focussed on the most. They were first emplaced inside the
          Oruaiti reserve at Fort Dorset’s Gap Battery, where the original emplacements can still be seen<sup>[5][6]</sup>.
          These were intended to guard the harbour entrance but, luckily, they never had to.
          <br /><br />
          Over time the 4-inch guns were modified in numerous ways, receiving better sights to aim
          and shields to protect the crews operating them. Seatoun residents had to put up with
          multiple test firings of the guns for training during the Second World War, something
          which is surely not missed now. Two of the guns were moved to Fort Ballance above Scorching
          Bay<sup>[6]</sup>, but the threat of invasion had already decreased.
          <br /><br />
          After the war ended the 4-inch guns had lost their purpose, and most of them were scrapped
          during the 1950s-60s. Two examples remain outside the Auckland War Memorial Museum,
          although they have lost many pieces over time<sup>[7]</sup>.
          </p>
        </Col>
      </Row>
      {/* Exta info section, if needed. */}
      <Row>
        <Col md={6} className={styles.mainCol}>
          <h3>Recreating Objects</h3>
          <p>
            When we at Hiamo set about recreating these historic items we faced many problems sourcing
            the information, getting consistent reference photographs, and finding out exactly what the
            Oruaiti / Fort Dorset’s guns looked like. To learn more about how we are overcoming these
            issues and using exciting new technologies to accurately reconstruct these 100-year-old machines,
            keep an eye out for our next blog on our recreation process!
          </p>
        </Col>
      </Row>
      {/* References section, if needed. */}
      <Row>
        <Col md={12} className={styles.mainCol}>
          <p>
            [1] (2017) 4”/50 (10.2 cm) bl mark vii. NavWeaps. [Online].
                    Available: <a href="http://www.navweaps.com/Weapons/WNBR">http://www.navweaps.com/Weapons/WNBR</a> 4-50 mk7.ph
                    <br />
                    [2] (2006) A Nation's Gift - The HMS New Zealand Story. New Zealand Defence Force, Scoop. [Online].
                    Available: <a href="http://www.scoop.co.nz/stories/PO0612/S00017/a-nations-gift-the-hms-new-zealand-story.htm">http://www.scoop.co.nz/stories/PO0612/S00017/a-nations-gift-the-hms-new-zealand-story.htm</a>
            <br />
                    [3] (1913) Maori Chiefs Visit Warship. Evening Post. [Online].
                    Available: <a href="https://paperspast.natlib.govt.nz/newspapers/EP19130418.2.90">https://paperspast.natlib.govt.nz/newspapers/EP19130418.2.90</a>
            <br />
                    [4] HMS New Zealand: ‘A Grim and Formidable Fighting Machine’. Te Papa Tongarewa. [Online].
                    Available: <a href="htps://collections.tepapa.govt.nz/topic/1049">htps://collections.tepapa.govt.nz/topic/1049</a>
            <br />
                    [5] P. Cooke, Defending New Zealand: Ramparts on the Sea 1840-1950s. Defence of New Zealand Study Group, 2010.
                    <br />
                    [6] Fort dorset. NZ Coastal Defences. [Online].
                    Available: <a href="https://sites.google.com/site/nzcoastaldefences/wellington-s-coastal-defences/fort-dorset">https://sites.google.com/site/nzcoastaldefences/wellington-s-coastal-defences/fort-dorset</a>
            <br />
                    [7] V. Yakubov. British bl 4-inch mk vii naval gun, auckland war memorial museum, auckland, nz. [Online].
                    Available: <a href="">http://svsm.org/gallery/102mm_mk7</a>
          </p>
          <h5>Image Sources</h5>
          <p>
            4-inch gun recreation in augmented reality, Hiamo Ltd. 2019.
                    <br />
            <a href="https://www.deviantart.com/asarigoddess/art/HMS-New-Zealand-689465614">https://www.deviantart.com/asarigoddess/art/HMS-New-Zealand-689465614</a>
            <br />
                    Photograph of a crowd gathered by the British Battlecruiser HMS New Zealand, Lyttelton. Ref: 1/1-002307-G. Alexander Turnbull Library, Wellington, New Zealand. <a href="https://natlib.govt.nz/records/22525840">/records/22525840</a>
            <br />
            <a href="https://paperspast.natlib.govt.nz/newspapers/EP19390912.2.49.8">https://paperspast.natlib.govt.nz/newspapers/EP19390912.2.49.8</a>
          </p>
        </Col>
      </Row>
    </Section>
    <Section title="OTHER BLOGS">
      <Row className={styles.otherBlogsWrapper}>
        <BlogBox
          title="Continuing the Mission"
          content="A new year brings new challenges and oppourtunities; we reflect on the busy first month of 2019."
          date="dd/mm/yy"
          bgColor="color-tertiary"
          textColor="color-text-dark"
          slug="continuing-the-mission"
        />
        <BlogBox
          title="A Year of Firsts"
          date="dd/mm/yy"
          content="After an eventful year filled with great events and changes, we look back on all that has happened since our company first launched."
          bgColor="color-secondary"
          textColor="color-text-light"
          slug="a-year-of-first"
        />
      </Row>
    </Section>

  </Screen>
)

export default Blog;
