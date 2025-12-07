import { useState } from 'react'
import { FaAngleUp } from 'react-icons/fa'
import { Accordion } from '@mui/material'

import { SearchInput } from '../SearchInput'
import { StyledAccordionDetails } from 'components/Accordion/StyledAccordionDetails'

import MagicBall from 'assets/icons/magicBall.svg'

import {
  InnerAdjust,
  SpellDescription,
  SpellInfoContainer,
  SpellsSectionContainer,
  SpellsStyledAccordionSummary,
} from './styles'

export const SpellsSection = () => {
  const [searchInput, setSearchInput] = useState('')

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

      <Accordion>
        <SpellsStyledAccordionSummary expandIcon={<FaAngleUp />}>
          <div>
            <span> Nome magia </span> <p> X circulo </p> <p> Arcanismo </p>
          </div>
        </SpellsStyledAccordionSummary>
        <StyledAccordionDetails>
          <InnerAdjust>
            <SpellInfoContainer>
              <div>
                Execucao: <span> Padrao </span>
              </div>
              <div>
                Alcance: <span> 2 metros </span>
              </div>
              <div>
                Alvo: <span> Adjacente </span>
              </div>
              <div>
                Duracao: <span> Instantanea </span>
              </div>
            </SpellInfoContainer>
            <SpellDescription>
              A magia cria uma explosão de energia arcana em um ponto que você
              possa ver dentro do alcance. Cada criatura na area da explosao
              deve fazer um teste de resistencia de Destreza. Uma criatura sofre
              6d6 de dano de forca se falhar no teste, ou metade do dano se
              obtiver sucesso. A magia causa dano adicional dependendo do nivel
              em que e conjurada: +1d6 para cada nivel acima do 3º.
            </SpellDescription>
          </InnerAdjust>
        </StyledAccordionDetails>
      </Accordion>
    </SpellsSectionContainer>
  )
}
