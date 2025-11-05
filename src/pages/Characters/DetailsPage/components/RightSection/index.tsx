import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { NAV_BAR_OPTIONS } from './consts'

import { NavBarOption, RightNavBar, RightSectionContainer } from './styles'

export const RightSection = () => {
  const navigate = useNavigate()

  const [selectedOption, setSelectedOption] = useState<string>('')

  const handleClick = (optionId: string) => {
    setSelectedOption(optionId)

    const currentPath = window.location.pathname
    const basePath = currentPath.split('/').slice(2, 4).join('/')

    navigate(`/${basePath}/${optionId}`)
  }

  return (
    <RightSectionContainer>
      <RightNavBar>
        <ul>
          {NAV_BAR_OPTIONS.map((option) => (
            <NavBarOption
              key={option.id}
              selectedColor={option.selectedColor}
              isSelected={selectedOption === option.id}
              onClick={() => handleClick(option.id)}
            >
              <img src={option.icon} alt={`${option.label}-icon`} />
              <span>{option.label}</span>
            </NavBarOption>
          ))}
        </ul>
      </RightNavBar>
      <Outlet />
    </RightSectionContainer>
  )
}
