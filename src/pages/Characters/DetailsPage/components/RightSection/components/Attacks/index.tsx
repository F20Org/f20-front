import { useState } from 'react'
import { FaAngleUp } from 'react-icons/fa'
import { Accordion, AccordionDetails } from '@mui/material'

import PenIcon from 'assets/images/buttons/pen.svg'

import type { AttacksProps } from './types'

import {
  AttacksAccordionDetails,
  AttacksInnerAccordionDetails,
  StyledAccordionSummary,
  StyledInnerAccordionSummary,
} from './styles'

export const Attacks = (props: AttacksProps) => {
  const { attacks } = props

  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <Accordion>
      <StyledAccordionSummary expandIcon={<FaAngleUp />}>
        Ataques
      </StyledAccordionSummary>
      <AccordionDetails>
        <AttacksAccordionDetails>
          <header>
            <p>Nome</p> <p>Ataque</p> <p>Dano</p> <p>Dano Extra</p>
            <p>Crítico</p>
          </header>
          {attacks.map((attack, index) => (
            <Accordion
              key={index}
              expanded={expandedId === index}
              onChange={() =>
                setExpandedId(expandedId === index ? null : index)
              }
            >
              <StyledInnerAccordionSummary expandIcon={<FaAngleUp />}>
                <p>
                  {expandedId === index && <span>Nome</span>}
                  {attack.name}
                </p>
                <p>
                  {expandedId === index && <span>Ataque</span>}
                  {attack.attack}
                </p>
                <p>
                  {expandedId === index && <span>Dano</span>}
                  {attack.damage}
                </p>
                <p>
                  {expandedId === index && <span>Dano extra</span>}
                  {attack.extraDamage}
                </p>
                <p>
                  {expandedId === index && <span>Critico</span>}
                  {attack.critical}
                </p>
              </StyledInnerAccordionSummary>
              <AccordionDetails>
                <AttacksInnerAccordionDetails>
                  <div>
                    <p>
                      <span>Tipo</span>
                      {attack.type}
                    </p>
                    <p>
                      <span>Alcance</span>
                      {attack.range}
                    </p>
                    <p>
                      <span>Pericia</span>
                      {attack.skill}
                    </p>
                    <p>
                      <span>Tipo</span>
                      {attack.type}
                    </p>
                    <p>
                      <span>Acoes</span>
                      <img src={PenIcon} alt='Editar' width='22' />
                    </p>
                  </div>
                </AttacksInnerAccordionDetails>
              </AccordionDetails>
            </Accordion>
          ))}
        </AttacksAccordionDetails>
      </AccordionDetails>
    </Accordion>
  )
}
