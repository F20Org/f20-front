import { FaAngleUp } from 'react-icons/fa'
import { Accordion, AccordionDetails } from '@mui/material'

import {
  AttacksAccordionDetails,
  StyledAccordionSummary,
  StyledInnerAccordionSummary,
} from './styles'

export const Attacks = () => {
  return (
    <Accordion>
      <StyledAccordionSummary expandIcon={<FaAngleUp />}>
        Ataques
      </StyledAccordionSummary>
      <AccordionDetails>
        <AttacksAccordionDetails>
          <header>
            <p>Nome</p> <p>Ataque</p> <p>Dano</p> <p>Crítico</p>
          </header>
          <Accordion>
            <StyledInnerAccordionSummary expandIcon={<FaAngleUp />}>
              <p>Lâmina Revólver</p> <p>1d20+12</p> <p>2d6+11</p> <p>-</p>
            </StyledInnerAccordionSummary>
            <AccordionDetails>teste</AccordionDetails>
          </Accordion>
        </AttacksAccordionDetails>
      </AccordionDetails>
    </Accordion>
  )
}
