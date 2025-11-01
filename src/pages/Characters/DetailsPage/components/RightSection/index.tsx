import { useState } from 'react'

import { NAV_BAR_OPTIONS } from './consts'

import { NavBarOption, RightNavBar, RightSectionContainer } from './styles'
import { RollsSection } from './components/RollsSection'

export const RightSection = () => {
  const [selectedOption, setSelectedOption] = useState<string>(
    NAV_BAR_OPTIONS[0].id,
  )

  return (
    <RightSectionContainer>
      <RightNavBar>
        <ul>
          {NAV_BAR_OPTIONS.map((option) => (
            <NavBarOption
              key={option.id}
              selectedColor={option.selectedColor}
              isSelected={selectedOption === option.id}
              onClick={() => setSelectedOption(option.id)}
            >
              <img src={option.icon} alt={`${option.label}-icon`} />
              <span>{option.label}</span>
            </NavBarOption>
          ))}
        </ul>
      </RightNavBar>
      <RollsSection />
    </RightSectionContainer>
  )
}
