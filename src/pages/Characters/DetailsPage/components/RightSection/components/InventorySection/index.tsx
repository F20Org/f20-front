import { useState } from 'react'
import { Accordion } from '@mui/material'
import { FaAngleUp } from 'react-icons/fa'

import BookIcon from 'assets/icons/magicBook.svg'
import PenIcon from 'assets/images/buttons/pen.svg'

import { SearchInput } from '../SearchInput'
import { StyledAccordionDetails } from 'components/Accordion/StyledAccordionDetails'

import { INVENTORY_ITEMS_LIST } from './consts'

import {
  ItemDescription,
  InventoryContainer,
  InventoryStyledAccordionSummary,
  InventoryHeader,
} from './styles'

export const InventorySection = () => {
  const [searchInput, setSearchInput] = useState('')
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <InventoryContainer>
      <InventoryHeader>
        <div>
          <span> Espaços: </span> 10/20
        </div>
        <div>
          <span> Tibares: </span> T$ 9,9999.00
        </div>
      </InventoryHeader>
      <SearchInput
        buttonText='Pesquisar'
        handleClick={() => {}}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        buttonColor='YELLOW_PRIMARY_COLOR'
        placeholder='Pesquisar Habilidades'
        icon={BookIcon}
      />
      {INVENTORY_ITEMS_LIST.map((item, index) => (
        <Accordion
          key={item.id}
          expanded={expandedId === index}
          onChange={() => setExpandedId(expandedId === index ? null : index)}
        >
          <InventoryStyledAccordionSummary expandIcon={<FaAngleUp />}>
            <div>
              <span>
                {expandedId === index && (
                  <img src={PenIcon} alt='Editar' width='22' />
                )}
                {item.name}
              </span>
              (x{item.quantity})
            </div>
          </InventoryStyledAccordionSummary>
          <StyledAccordionDetails>
            <ItemDescription>{item.description}</ItemDescription>
          </StyledAccordionDetails>
        </Accordion>
      ))}
    </InventoryContainer>
  )
}
