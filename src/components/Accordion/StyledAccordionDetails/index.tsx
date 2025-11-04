import { AccordionDetails } from '@mui/material'

import type { StyledAccordionDetailsProps } from './types'

import { AccordionDetailsContainer } from './styles'

export const StyledAccordionDetails = (props: StyledAccordionDetailsProps) => {
  return (
    <AccordionDetails>
      <AccordionDetailsContainer>{props.children}</AccordionDetailsContainer>
    </AccordionDetails>
  )
}
