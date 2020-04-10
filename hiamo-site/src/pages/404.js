import React from "react"

import { Screen } from "../components";
import { Section } from "../components/sections";
import { SEO } from "../components/shared";

const NotFoundPage = () => (
  <Screen>
    <SEO title="404: Not found" />
    <Section title="Page Not Found">
      <p>We commend your explorative nature, but it seems there is nothing here!</p>
    </Section>
  </Screen>
)

export default NotFoundPage
