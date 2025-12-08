import { useState } from 'react'

import ExpertiseIcon from 'assets/images/expertiseButton.svg'

import {
  ExpertiseImage,
  InnerContainer,
  ExpertiseSectionContainer,
} from './styles'

export const ExpertiseSection = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <ExpertiseSectionContainer expanded={expanded}>
      <InnerContainer>
        <h2>Pericias</h2>
      </InnerContainer>
      <ExpertiseImage
        onClick={() => setExpanded((prev) => !prev)}
        src={ExpertiseIcon}
      />
    </ExpertiseSectionContainer>
  )
}
