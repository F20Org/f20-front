import { FaAngleUp } from 'react-icons/fa'
import { Accordion } from '@mui/material'

import { SKILLS_LIST } from './consts'

import { StyledAccordionDetails } from 'components/Accordion/StyledAccordionDetails'
import { StyledAccordionSummary } from 'components/Accordion/StyledAccordionSummary/styles'

import {
  SkillItem,
  SkillTitle,
  SkillTypeContainer,
  SkillsListContainer,
} from './styles'

export const Class = () => {
  return (
    <Accordion>
      <StyledAccordionSummary expandIcon={<FaAngleUp />}>
        Classe
      </StyledAccordionSummary>
      <StyledAccordionDetails>
        <SkillTypeContainer>
          <SkillTitle>Habilidade Ativas</SkillTitle>
          <SkillsListContainer>
            {SKILLS_LIST.map((skill) => (
              <SkillItem key={skill.id}>
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
              </SkillItem>
            ))}
          </SkillsListContainer>
        </SkillTypeContainer>

        <SkillTypeContainer>
          <SkillTitle>Habilidade Passivas</SkillTitle>
          <SkillsListContainer>
            {SKILLS_LIST.map((skill) => (
              <SkillItem key={skill.id}>
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
              </SkillItem>
            ))}
          </SkillsListContainer>
        </SkillTypeContainer>
      </StyledAccordionDetails>
    </Accordion>
  )
}
