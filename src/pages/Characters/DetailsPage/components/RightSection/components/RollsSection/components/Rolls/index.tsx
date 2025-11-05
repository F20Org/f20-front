import { useContext } from 'react'
import { FaAngleUp } from 'react-icons/fa'
import { Accordion, AccordionDetails } from '@mui/material'

import { RollsContext } from 'contexts/Rolls'

import {
  RollItem,
  RollsAccordionDetails,
  StyledAccordionSummary,
} from './styles'

export const Rolls = () => {
  const { attackRollsHistory } = useContext(RollsContext)

  return (
    <Accordion>
      <StyledAccordionSummary expandIcon={<FaAngleUp />}>
        Rolagens
      </StyledAccordionSummary>
      <AccordionDetails>
        <RollsAccordionDetails>
          {attackRollsHistory.map((roll, index) => (
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
