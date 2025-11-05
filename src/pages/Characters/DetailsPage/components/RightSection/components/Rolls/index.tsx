import { FaAngleUp } from 'react-icons/fa'
import { Accordion, AccordionDetails } from '@mui/material'

import type { RollsProps } from './types'

import {
  RollItem,
  RollsAccordionDetails,
  StyledAccordionSummary,
} from './styles'

export const Rolls = (props: RollsProps) => {
  const { rollsHistory } = props

  return (
    <Accordion>
      <StyledAccordionSummary expandIcon={<FaAngleUp />}>
        Rolagens
      </StyledAccordionSummary>
      <AccordionDetails>
        <RollsAccordionDetails>
          {rollsHistory.map((roll, index) => (
            <RollItem key={index}>
              <h3> {roll.name} </h3>
              <div>
                <span> {roll.result} </span> <p> = {roll.formula} </p>
              </div>
            </RollItem>
          ))}
        </RollsAccordionDetails>
      </AccordionDetails>
    </Accordion>
  )
}
