import { FaAngleUp } from 'react-icons/fa'
import { Accordion } from '@mui/material'

import { SKILLS_LIST } from '../Class/consts'

import { StyledAccordionSummary } from 'components/Accordion/StyledAccordionSummary/styles'
import { StyledAccordionDetails } from 'components/Accordion/StyledAccordionDetails'

import {
  RaceItem,
  RaceTitle,
  RaceListContainer,
  RaceTypeContainer,
} from './styles'

export const Race = () => {
  return (
    <Accordion>
      <StyledAccordionSummary expandIcon={<FaAngleUp />}>
        Raca
      </StyledAccordionSummary>
      <StyledAccordionDetails>
        <RaceTypeContainer>
          <RaceTitle>Habilidade Ativas</RaceTitle>
          <RaceListContainer>
            {SKILLS_LIST.map((race) => (
              <RaceItem key={race.id}>
                <h3>{race.name}</h3>
                <p>{race.description}</p>
              </RaceItem>
            ))}
          </RaceListContainer>
        </RaceTypeContainer>

        <RaceTypeContainer>
          <RaceTitle>Habilidade Passivas</RaceTitle>
          <RaceListContainer>
            {SKILLS_LIST.map((race) => (
              <RaceItem key={race.id}>
                <h3>{race.name}</h3>
                <p>{race.description}</p>
              </RaceItem>
            ))}
          </RaceListContainer>
        </RaceTypeContainer>
      </StyledAccordionDetails>
    </Accordion>
  )
}
