import { FaAngleUp } from 'react-icons/fa'
import { Accordion } from '@mui/material'

import { StyledAccordionDetails } from 'components/Accordion/StyledAccordionDetails'
import { StyledAccordionSummary } from 'components/Accordion/StyledAccordionSummary/styles'

export const Class = () => {
  return (
    <Accordion>
      <StyledAccordionSummary expandIcon={<FaAngleUp />}>
        Classe
      </StyledAccordionSummary>
      <StyledAccordionDetails>teste</StyledAccordionDetails>
    </Accordion>
  )
}
