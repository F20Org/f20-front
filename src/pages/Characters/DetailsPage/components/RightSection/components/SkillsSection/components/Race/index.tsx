import { FaAngleUp } from 'react-icons/fa'
import { Accordion, AccordionDetails } from '@mui/material'

import { StyledAccordionSummary } from 'components/Accordion/StyledAccordionSummary/styles'

export const Race = () => {
  return (
    <Accordion>
      <StyledAccordionSummary expandIcon={<FaAngleUp />}>
        Raca
      </StyledAccordionSummary>
      <AccordionDetails>dsadsadsa</AccordionDetails>
    </Accordion>
  )
}
