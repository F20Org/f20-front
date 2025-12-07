import { useState } from 'react'
import { FaAngleUp } from 'react-icons/fa'
import { Accordion } from '@mui/material'

import { SearchInput } from '../SearchInput'
import { StyledAccordionDetails } from 'components/Accordion/StyledAccordionDetails'

import MagicBall from 'assets/icons/magicBall.svg'
import PenIcon from 'assets/images/buttons/pen.svg'

import {
  InnerAdjust,
  SpellDescription,
  SpellInfoContainer,
  SpellsSectionContainer,
  SpellsStyledAccordionSummary,
} from './styles'
import { SPELLS_LIST } from './consts'

export const SpellsSection = () => {
  const [searchInput, setSearchInput] = useState('')
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <SpellsSectionContainer>
      <SearchInput
        buttonText='Pesquisar'
        handleClick={() => {}}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        buttonColor='DARK_BLUE_PRIMARY_COLOR'
        placeholder='Pesquisar Magias'
        icon={MagicBall}
      />

      {SPELLS_LIST.map((spell, index) => (
        <Accordion
          key={spell.id}
          expanded={expandedId === index}
          onChange={() => setExpandedId(expandedId === index ? null : index)}
        >
          <SpellsStyledAccordionSummary expandIcon={<FaAngleUp />}>
            <div>
              <span>
                {expandedId === index && (
                  <img src={PenIcon} alt='Editar' width='22' />
                )}
                {spell.name}
              </span>
              <p> {spell.circle} </p> <p> Arcanismo </p>
            </div>
          </SpellsStyledAccordionSummary>
          <StyledAccordionDetails>
            <InnerAdjust>
              <SpellInfoContainer>
                <div>
                  Execucao: <span> {spell.attributes.execution} </span>
                </div>
                <div>
                  Alcance: <span> {spell.attributes.range} </span>
                </div>
                <div>
                  Alvo: <span> {spell.attributes.target} </span>
                </div>
                <div>
                  Duracao: <span> {spell.attributes.duration} </span>
                </div>
              </SpellInfoContainer>
              <SpellDescription>{spell.description}</SpellDescription>
            </InnerAdjust>
          </StyledAccordionDetails>
        </Accordion>
      ))}
    </SpellsSectionContainer>
  )
}
